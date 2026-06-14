// Fetch REAL posters & backdrops from TMDB for movies in the local DB and
// push them to the live site (preserving categories/genres/cast).
//
// Usage:
//   TMDB_KEY=<v3 api key> SYNC_TOKEN=<ADMIN_SESSION_SECRET> \
//     SITE_URL=https://tophdmovies.com node scripts/sync-tmdb.mjs [slug ...]
import mysql from 'mysql2/promise';
import { makePoster, makeBackdrop } from './poster-gen.mjs';

const SITE_URL = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const TOKEN = process.env.SYNC_TOKEN || '';
const TMDB = process.env.TMDB_KEY || '';
const onlySlugs = process.argv.slice(2);

if (!TOKEN || !TMDB) {
  console.error('Set SYNC_TOKEN (ADMIN_SESSION_SECRET) and TMDB_KEY.');
  process.exit(1);
}

const IMG = 'https://image.tmdb.org/t/p';
const POSTER_SIZE = 'w500';
const BACKDROP_SIZE = 'w1280';

// Download an image and return it as base64 + mime, so it can be stored in our
// own DB (mirrored). Returns null on failure (we then fall back to the URL).
async function downloadImage(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const mime = res.headers.get('content-type') || 'image/jpeg';
    return { data: buf.toString('base64'), mime };
  } catch {
    return null;
  }
}

async function searchType(type, clean, year) {
  const yp = type === 'tv' ? 'first_air_date_year' : 'year';
  const attempts = [
    `query=${encodeURIComponent(clean)}&${yp}=${year ?? ''}`,
    `query=${encodeURIComponent(clean)}`,
    `query=${encodeURIComponent(clean.split(':')[0])}`,
  ];
  for (const q of attempts) {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${TMDB}&include_adult=false&${q}`;
    const res = await fetch(url);
    if (!res.ok) continue;
    const data = await res.json();
    const hit = (data.results || []).find((r) => r.poster_path) || data.results?.[0];
    if (hit) return hit;
  }
  return null;
}

// Search movies and TV. For series (web-series/tv-shows) try TV first.
async function tmdbFind(title, year, isTv) {
  const clean = title.replace(/\*/g, '').trim();
  for (const t of isTv ? ['tv', 'movie'] : ['movie', 'tv']) {
    const hit = await searchType(t, clean, year);
    if (hit?.poster_path) return hit;
  }
  return null;
}

const conn = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'tophdmovies',
});

let sql = 'SELECT * FROM movies';
const params = [];
if (onlySlugs.length) {
  sql += ` WHERE slug IN (${onlySlugs.map(() => '?').join(',')})`;
  params.push(...onlySlugs);
}
sql += ' ORDER BY year, id';
const [movies] = await conn.query(sql, params);

const payload = [];
let generated = 0;
for (const m of movies) {
  const [cats] = await conn.query(
    'SELECT c.slug FROM categories c JOIN movie_categories mc ON mc.category_id=c.id WHERE mc.movie_id=?',
    [m.id]
  );
  const [gens] = await conn.query(
    'SELECT g.name, g.slug FROM genres g JOIN movie_genres mg ON mg.genre_id=g.id WHERE mg.movie_id=?',
    [m.id]
  );
  const [cast] = await conn.query(
    'SELECT actor_name, character_name FROM movie_cast WHERE movie_id=? ORDER BY sort_order',
    [m.id]
  );

  const catSlugs = cats.map((x) => x.slug);
  const isTv = catSlugs.includes('web-series') || catSlugs.includes('tv-shows');
  const hit = await tmdbFind(m.title, m.year, isTv);

  const art = {};
  if (hit?.poster_path) {
    const posterImg = await downloadImage(`${IMG}/${POSTER_SIZE}${hit.poster_path}`);
    const backdropImg = hit.backdrop_path
      ? await downloadImage(`${IMG}/${BACKDROP_SIZE}${hit.backdrop_path}`)
      : null;
    if (posterImg) art.poster_image = posterImg;
    if (backdropImg) art.backdrop_image = backdropImg;
    console.log(`  ✓ ${m.title} -> ${hit.title || hit.name} [${isTv ? 'tv' : 'movie'}]`);
  }
  // Fallback: generate a poster so every title has artwork.
  if (!art.poster_image) {
    const meta = { title: m.title, year: m.year, runtime: m.runtime, rating: m.rating, tags: gens.map((g) => g.name) };
    art.poster_svg = makePoster(meta);
    art.backdrop_svg = makeBackdrop(meta);
    generated++;
    console.log(`  ◆ ${m.title} -> generated poster (no TMDB match)`);
  }

  payload.push({
    title: m.title, slug: m.slug, year: m.year, runtime: m.runtime, language: m.language,
    country: m.country, rating: m.rating, status: m.status, youtube_id: m.youtube_id,
    overview: m.overview, short_description: m.short_description, director: m.director,
    producer: m.producer, writer: m.writer,
    download_480: m.download_480, download_720: m.download_720, download_1080: m.download_1080,
    size_480: m.size_480, size_720: m.size_720, size_1080: m.size_1080,
    embed_480: m.embed_480, embed_720: m.embed_720, embed_1080: m.embed_1080,
    is_featured: m.is_featured, is_trending: m.is_trending, is_top_rated: m.is_top_rated,
    categories: catSlugs, genres: gens.map((x) => x.slug),
    cast: cast.map((x) => ({ actor_name: x.actor_name, character_name: x.character_name })),
    ...art,
  });
}
await conn.end();

console.log(`\n${payload.length} movies (${generated} generated posters). Pushing to ${SITE_URL}...`);

const BATCH = 4; // image bytes make payloads large — keep batches small
let imported = 0, failed = 0;
for (let i = 0; i < payload.length; i += BATCH) {
  const res = await fetch(`${SITE_URL}/api/sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-import-token': TOKEN },
    body: JSON.stringify({ movies: payload.slice(i, i + BATCH) }),
  });
  const data = await res.json().catch(() => ({}));
  imported += data.imported || 0;
  failed += data.failed || 0;
  console.log(`  batch ${i / BATCH + 1}: HTTP ${res.status} imported=${data.imported} failed=${data.failed}`);
}
console.log(`Done. imported=${imported} failed=${failed}`);

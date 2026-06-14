// Find the official YouTube trailer for each movie/series via TMDB and store
// its video id in youtube_id (LOCAL DB). Then push with scripts/sync-text.mjs.
//
// Usage: TMDB_KEY=... node scripts/sync-trailers.mjs [slug ...]
import mysql from 'mysql2/promise';

const TMDB = process.env.TMDB_KEY || '';
const onlySlugs = process.argv.slice(2);
if (!TMDB) { console.error('Set TMDB_KEY.'); process.exit(1); }

async function search(type, clean, year) {
  const yp = type === 'tv' ? 'first_air_date_year' : 'year';
  for (const q of [`query=${encodeURIComponent(clean)}&${yp}=${year ?? ''}`, `query=${encodeURIComponent(clean)}`, `query=${encodeURIComponent(clean.split(':')[0])}`]) {
    const r = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${TMDB}&include_adult=false&${q}`);
    if (!r.ok) continue;
    const d = await r.json();
    const hit = (d.results || []).find((x) => x.poster_path) || d.results?.[0];
    if (hit) return hit;
  }
  return null;
}

async function findTmdb(title, year, isTv) {
  const clean = title.replace(/\*/g, '').trim();
  for (const t of isTv ? ['tv', 'movie'] : ['movie', 'tv']) {
    const hit = await search(t, clean, year);
    if (hit) return { id: hit.id, type: t };
  }
  return null;
}

async function trailerKey(type, id) {
  const r = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${TMDB}`);
  if (!r.ok) return null;
  const vids = ((await r.json()).results || []).filter((v) => v.site === 'YouTube');
  const pick =
    vids.find((v) => v.type === 'Trailer' && v.official) ||
    vids.find((v) => v.type === 'Trailer') ||
    vids.find((v) => v.type === 'Teaser') ||
    vids[0];
  return pick?.key || null;
}

const conn = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root', password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'tophdmovies', charset: 'utf8mb4',
});

let sql = 'SELECT id, title, slug, year FROM movies';
const params = [];
if (onlySlugs.length) { sql += ` WHERE slug IN (${onlySlugs.map(() => '?').join(',')})`; params.push(...onlySlugs); }
sql += ' ORDER BY year, id';
const [movies] = await conn.query(sql, params);

let found = 0, missing = [];
for (const m of movies) {
  const [cats] = await conn.query(
    "SELECT c.slug FROM categories c JOIN movie_categories mc ON mc.category_id=c.id WHERE mc.movie_id=?", [m.id]);
  const isTv = cats.some((x) => x.slug === 'web-series' || x.slug === 'tv-shows');
  const tm = await findTmdb(m.title, m.year, isTv);
  const key = tm ? await trailerKey(tm.type, tm.id) : null;
  if (key) {
    await conn.query(
      "UPDATE movies SET youtube_id=?, embed_480=?, embed_720=?, embed_1080=? WHERE id=?",
      [key, `https://www.youtube.com/embed/${key}`, `https://www.youtube.com/embed/${key}`, `https://www.youtube.com/embed/${key}`, m.id]
    );
    found++;
    console.log(`  ✓ ${m.title} -> ${key}`);
  } else {
    missing.push(m.title);
    console.log(`  x ${m.title} -> no trailer found`);
  }
}
await conn.end();
console.log(`\nTrailers found: ${found}/${movies.length}.`);
if (missing.length) console.log('Missing:', missing.join(', '));

// Push movie TEXT/metadata from the local DB to the live site WITHOUT touching
// artwork (the /api/sync endpoint preserves existing posters on update).
// Use for text-only edits (titles, overviews, cast, flags...).
//
// Usage:
//   SYNC_TOKEN=<ADMIN_SESSION_SECRET> SITE_URL=https://tophdmovies.com \
//     node scripts/sync-text.mjs [slug ...]
import mysql from 'mysql2/promise';

const SITE_URL = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
const TOKEN = process.env.SYNC_TOKEN || '';
const onlySlugs = process.argv.slice(2);
if (!TOKEN) {
  console.error('Set SYNC_TOKEN (your ADMIN_SESSION_SECRET).');
  process.exit(1);
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
for (const m of movies) {
  const [cats] = await conn.query(
    'SELECT c.slug FROM categories c JOIN movie_categories mc ON mc.category_id=c.id WHERE mc.movie_id=?',
    [m.id]
  );
  const [gens] = await conn.query(
    'SELECT g.slug FROM genres g JOIN movie_genres mg ON mg.genre_id=g.id WHERE mg.movie_id=?',
    [m.id]
  );
  const [cast] = await conn.query(
    'SELECT actor_name, character_name FROM movie_cast WHERE movie_id=? ORDER BY sort_order',
    [m.id]
  );
  // NOTE: intentionally NO poster_url / backdrop_url / images here.
  payload.push({
    title: m.title, title_hi: m.title_hi, slug: m.slug, year: m.year, runtime: m.runtime,
    language: m.language, country: m.country, rating: m.rating, status: m.status,
    youtube_id: m.youtube_id, overview: m.overview, short_description: m.short_description,
    director: m.director, producer: m.producer, writer: m.writer,
    download_480: m.download_480, download_720: m.download_720, download_1080: m.download_1080,
    size_480: m.size_480, size_720: m.size_720, size_1080: m.size_1080,
    embed_480: m.embed_480, embed_720: m.embed_720, embed_1080: m.embed_1080,
    is_featured: m.is_featured, is_trending: m.is_trending, is_top_rated: m.is_top_rated,
    categories: cats.map((x) => x.slug), genres: gens.map((x) => x.slug),
    cast: cast.map((x) => ({ actor_name: x.actor_name, character_name: x.character_name })),
  });
}
await conn.end();

console.log(`Syncing TEXT for ${payload.length} movies to ${SITE_URL} (artwork preserved)...`);
const BATCH = 15;
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
  if (data.errors?.length) console.log('   errors:', JSON.stringify(data.errors).slice(0, 300));
}
console.log(`Done. imported=${imported} failed=${failed}`);

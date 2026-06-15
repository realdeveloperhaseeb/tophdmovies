// Bulk-add Hollywood films from TMDB metadata. Inserts into LOCAL DB and pushes
// to live. Skips titles whose slug already exists. Resilient (retries).
// Usage: TMDB_KEY=... SYNC_TOKEN=... SITE_URL=https://tophdmovies.com node scripts/add-hollywood.mjs
import mysql from 'mysql2/promise';

const TMDB = process.env.TMDB_KEY || '';
const TOKEN = process.env.SYNC_TOKEN || '';
const SITE = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
if (!TMDB || !TOKEN) { console.error('Set TMDB_KEY and SYNC_TOKEN.'); process.exit(1); }

function slugify(s) {
  return String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

// [title, year, slugOverride?]
const LIST = [
  ['The Godfather',1972],['The Shawshank Redemption',1994],['The Dark Knight',2008],
  ['The Godfather Part II',1974],["Schindler's List",1993],['Pulp Fiction',1994],['Forrest Gump',1994],
  ['Fight Club',1999],['Inception',2010],['The Lord of the Rings: The Return of the King',2003],
  ['The Matrix',1999],['Goodfellas',1990],['Star Wars',1977,'star-wars'],['The Empire Strikes Back',1980],
  ['Interstellar',2014],['Gladiator',2000],['Saving Private Ryan',1998],['The Silence of the Lambs',1991],
  ['Se7en',1995],['The Green Mile',1999],['Titanic',1997],['The Departed',2006],['Back to the Future',1985],
  ['Jurassic Park',1993],['The Prestige',2006],['Whiplash',2014],['Django Unchained',2012],['The Lion King',1994],
  ['Casablanca',1942],['Citizen Kane',1941],['2001: A Space Odyssey',1968],['Apocalypse Now',1979],
  ['Taxi Driver',1976],['The Shining',1980],['Alien',1979],['Aliens',1986],['Jaws',1975],
  ['Terminator 2: Judgment Day',1991],['Rocky',1976],['Raging Bull',1980],['The Wolf of Wall Street',2013],
  ['Shutter Island',2010],['The Truman Show',1998],['A Beautiful Mind',2001],['Braveheart',1995],
  ['No Country for Old Men',2007],['There Will Be Blood',2007],['The Social Network',2010],['La La Land',2016],
  ['Parasite',2019],['The Usual Suspects',1995],['Memento',2000],['The Pianist',2002],['Good Will Hunting',1997],
  ['Dead Poets Society',1989],['The Sixth Sense',1999],['American Beauty',1999],['Blade Runner',1982],
  ['Blade Runner 2049',2017],['Heat',1995],['The Revenant',2015],['Mad Max: Fury Road',2015],
  ['The Grand Budapest Hotel',2014],['Oppenheimer',2023],['Top Gun: Maverick',2022],['The Avengers',2012],
  ['Avengers: Infinity War',2018],['Avengers: Endgame',2019],['Iron Man',2008],['Spider-Man: No Way Home',2021],
  ['Black Panther',2018],['Logan',2017],['The Batman',2022],['The Exorcist',1973],['Halloween',1978,'halloween-1978'],
  ['A Nightmare on Elm Street',1984],['The Thing',1982,'the-thing-1982'],['Her',2013],['Arrival',2016],
  ['The Martian',2015],['Gone Girl',2014],['Prisoners',2013],['Nightcrawler',2014],['Ford v Ferrari',2019],
  ['The Big Short',2015],['Catch Me If You Can',2002],['The Imitation Game',2014],
  ['The Curious Case of Benjamin Button',2008],['A Few Good Men',1992],['The Fugitive',1993],
  ['Die Hard',1988],['Mission: Impossible - Fallout',2018],['The Bourne Ultimatum',2007],["Ocean's Eleven",2001],
  ['Pirates of the Caribbean: The Curse of the Black Pearl',2003],['Toy Story',1995],['Toy Story 3',2010],
  ['Up',2009],['Finding Nemo',2003],['WALL-E',2008,'wall-e'],
];

const GENRE_TO_SLUG = { 28:'action',12:'adventure',16:'animation',35:'comedy',80:'crime',99:'documentary',
  18:'drama',10751:'family',14:'fantasy',36:'biography',27:'horror',10402:'drama',9648:'mystery',
  10749:'romance',878:'sci-fi',53:'thriller',10752:'action',37:'action' };
const CAT_SLUGS = new Set(['action','comedy','horror','thriller','romance','sci-fi','animation','crime','drama','biography','documentary']);

async function rfetch(url, opts) {
  let last;
  for (let i = 0; i < 4; i++) { try { return await fetch(url, opts); } catch (e) { last = e; await new Promise((r) => setTimeout(r, 900 * (i + 1))); } }
  throw last;
}
const yearOf = (x) => +((x.release_date || '').slice(0, 4)) || 0;
async function tmdbBest(title, year) {
  const r = await rfetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&query=${encodeURIComponent(title)}&year=${year}`);
  if (!r.ok) return null;
  const res = (await r.json()).results || [];
  if (!res.length) return null;
  const pool = (res.filter((x) => x.poster_path).length ? res.filter((x) => x.poster_path) : res);
  pool.sort((a, b) => Math.abs(yearOf(a) - year) - Math.abs(yearOf(b) - year));
  return pool[0];
}
async function details(id) { return (await rfetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB}`)).json(); }
async function credits(id) { return (await rfetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB}`)).json(); }
async function trailer(id) {
  const vids = ((await (await rfetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB}`)).json()).results || []).filter((v) => v.site === 'YouTube');
  return (vids.find((v) => v.type === 'Trailer' && v.official) || vids.find((v) => v.type === 'Trailer') || vids[0])?.key || 'dQw4w9WgXcQ';
}
async function imgB64(path, size) {
  if (!path) return null;
  try { const r = await rfetch(`https://image.tmdb.org/t/p/${size}${path}`); if (!r.ok) return null;
    return { data: Buffer.from(await r.arrayBuffer()).toString('base64'), mime: r.headers.get('content-type') || 'image/jpeg' };
  } catch { return null; }
}

const conn = await mysql.createConnection({ host:'localhost', user:'root', password:'', database:'tophdmovies', charset:'utf8mb4' });
const [existing] = await conn.query('SELECT slug FROM movies');
const have = new Set(existing.map((r) => r.slug));

const payload = [];
let skipped = [], missed = [];
for (const [title, year, slugOverride] of LIST) {
  const slug = slugOverride || slugify(title);
  if (have.has(slug)) { skipped.push(title); continue; }
  try {
    const hit = await tmdbBest(title, year);
    if (!hit) { missed.push(title); continue; }
    const d = await details(hit.id);
    const cr = await credits(hit.id);
    const director = (cr.crew || []).find((c) => c.job === 'Director')?.name || null;
    const cast = (cr.cast || []).slice(0, 4).map((c, i) => ({ actor_name: c.name, character_name: c.character || null, so: i }));
    const key = await trailer(hit.id);
    const poster = await imgB64(d.poster_path, 'w500');
    const backdrop = await imgB64(d.backdrop_path, 'w1280');
    const gslugs = [...new Set((d.genres || []).map((g) => GENRE_TO_SLUG[g.id]).filter(Boolean))];
    const cats = [...new Set(['hollywood', ...gslugs.filter((g) => CAT_SLUGS.has(g))])];
    const overview = (d.overview || '').trim() || `${title} (${year}).`;
    const ov = overview.length > 1500 ? overview.slice(0, 1500) : overview;
    const short = ov.length > 200 ? ov.slice(0, 197).trimEnd() + '...' : ov;
    const yr = yearOf(d) || year;
    const country = ((d.production_countries || [])[0]?.name || 'United States').replace('United States of America', 'United States');
    const enc = title.replace(/&/g, 'and').replace(/[*:]/g, '').replace(/\s+/g, '+');
    const rating = d.vote_average ? Math.round(d.vote_average * 10) / 10 : null;

    const [res] = await conn.query(
      `INSERT INTO movies (title,slug,year,runtime,language,country,rating,status,youtube_id,overview,short_description,director,
        download_480,download_720,download_1080,size_480,size_720,size_1080,embed_480,embed_720,embed_1080,is_featured,is_trending,is_top_rated)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [title, slug, yr, d.runtime || null, 'Hindi, English', country, rating, 'published', key, ov, short, director,
       `https://www.google.com/search?q=${enc}+${yr}+download+480p`,
       `https://www.google.com/search?q=${enc}+${yr}+download+720p`,
       `https://www.google.com/search?q=${enc}+${yr}+download+1080p`,
       '450 MB','1.1 GB','2.7 GB',
       `https://www.youtube.com/embed/${key}`,`https://www.youtube.com/embed/${key}`,`https://www.youtube.com/embed/${key}`,
       0,0, rating && rating >= 7.5 ? 1 : 0]
    );
    const mid = res.insertId;
    await conn.query('INSERT IGNORE INTO movie_categories (movie_id,category_id) SELECT ?,id FROM categories WHERE slug IN (?)', [mid, cats]);
    if (gslugs.length) await conn.query('INSERT IGNORE INTO movie_genres (movie_id,genre_id) SELECT ?,id FROM genres WHERE slug IN (?)', [mid, gslugs]);
    for (const c of cast) await conn.query('INSERT INTO movie_cast (movie_id,actor_name,character_name,sort_order) VALUES (?,?,?,?)', [mid, c.actor_name, c.character_name, c.so]);

    payload.push({
      title, slug, year: yr, runtime: d.runtime || null, language: 'Hindi, English', country, rating, status: 'published', youtube_id: key,
      overview: ov, short_description: short, director,
      download_480:`https://www.google.com/search?q=${enc}+${yr}+download+480p`,
      download_720:`https://www.google.com/search?q=${enc}+${yr}+download+720p`,
      download_1080:`https://www.google.com/search?q=${enc}+${yr}+download+1080p`,
      size_480:'450 MB', size_720:'1.1 GB', size_1080:'2.7 GB',
      embed_480:`https://www.youtube.com/embed/${key}`, embed_720:`https://www.youtube.com/embed/${key}`, embed_1080:`https://www.youtube.com/embed/${key}`,
      is_top_rated: rating && rating >= 7.5 ? 1 : 0,
      categories: cats, genres: gslugs, cast: cast.map(({actor_name,character_name})=>({actor_name,character_name})),
      poster_image: poster || undefined, backdrop_image: backdrop || undefined,
    });
    console.log(`  + ${title} (${yr}) -> ${hit.title} | ${cats.join(',')}`);
  } catch (e) { missed.push(`${title} (err)`); console.log(`  ! ${title} -> ${e.message}`); }
}
await conn.end();

console.log(`\nPrepared ${payload.length}. Skipped(existing): ${skipped.length} [${skipped.join(', ')}]. No TMDB/err: ${missed.join(', ')||'none'}`);
const BATCH = 4;
let imported = 0, failed = 0;
for (let i = 0; i < payload.length; i += BATCH) {
  const r = await rfetch(`${SITE}/api/sync`, { method:'POST', headers:{'Content-Type':'application/json','x-import-token':TOKEN}, body: JSON.stringify({ movies: payload.slice(i,i+BATCH) }) });
  const j = await r.json().catch(()=>({}));
  imported += j.imported||0; failed += j.failed||0;
  console.log(`  batch ${i/BATCH+1}: HTTP ${r.status} imported=${j.imported} failed=${j.failed}`);
}
console.log(`Done. imported=${imported} failed=${failed}`);

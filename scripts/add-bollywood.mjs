// Bulk-add Bollywood films using TMDB metadata (overview, cast, director,
// runtime, rating, poster, backdrop, trailer). Inserts into LOCAL DB and pushes
// to the live site. Skips titles whose slug already exists.
//
// Usage: TMDB_KEY=... SYNC_TOKEN=... SITE_URL=https://tophdmovies.com node scripts/add-bollywood.mjs
import mysql from 'mysql2/promise';

const TMDB = process.env.TMDB_KEY || '';
const TOKEN = process.env.SYNC_TOKEN || '';
const SITE = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
if (!TMDB || !TOKEN) { console.error('Set TMDB_KEY and SYNC_TOKEN.'); process.exit(1); }

function slugify(s) {
  return String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

// [title, year, sectionCategory, slugOverride?]
const LIST = [
  ['Sholay',1975,'action'],['Deewaar',1975,'crime'],['Mughal-e-Azam',1960,'drama'],
  ['Anand',1971,'drama'],['Guide',1965,'drama'],['Pyaasa',1957,'drama'],
  ['Mother India',1957,'drama'],['Amar Akbar Anthony',1977,'action'],['Don',1978,'action','don-1978'],
  ['Gol Maal',1979,'comedy','gol-maal-1979'],
  ['3 Idiots',2009,'drama'],['Taare Zameen Par',2007,'drama'],['Dangal',2016,'drama'],
  ['Rang De Basanti',2006,'drama'],['PK',2014,'comedy'],['Udaan',2010,'drama'],['Kapoor & Sons',2016,'drama'],
  ['Gangs of Wasseypur Part 1',2012,'crime','gangs-of-wasseypur-part-1'],
  ['Gangs of Wasseypur Part 2',2012,'crime','gangs-of-wasseypur-part-2'],
  ['Satya',1998,'crime'],['Company',2002,'crime'],['Black Friday',2007,'crime'],
  ['Shootout at Lokhandwala',2007,'crime'],['Once Upon a Time in Mumbaai',2010,'crime'],
  ['Sarkar',2005,'crime'],['Special 26',2013,'crime'],
  ['Drishyam',2015,'thriller','drishyam-2015'],['Drishyam 2',2022,'thriller'],['Andhadhun',2018,'thriller'],
  ['Kahaani',2012,'thriller'],['A Wednesday',2008,'thriller'],['Talaash',2012,'thriller'],
  ['Badla',2019,'thriller'],['Ittefaq',2017,'thriller','ittefaq-2017'],['Ugly',2014,'thriller'],
  ['Johnny Gaddaar',2007,'thriller'],
  ['War',2019,'action','war-2019'],['Animal',2023,'action'],['Ghajini',2008,'action'],
  ['Baby',2015,'action','baby-2015'],['Uri: The Surgical Strike',2019,'action'],
  ['Holiday',2014,'action','holiday-2014'],['Vikram Vedha',2022,'action','vikram-vedha-2022'],
  ['Shershaah',2021,'action'],
  ['Hera Pheri',2000,'comedy'],['Phir Hera Pheri',2006,'comedy'],['Bhool Bhulaiyaa',2007,'comedy'],
  ['Munna Bhai M.B.B.S.',2003,'comedy'],['Lage Raho Munna Bhai',2006,'comedy'],['Chup Chup Ke',2006,'comedy'],
  ['Welcome',2007,'comedy'],['Dhamaal',2007,'comedy'],['Bhagam Bhag',2006,'comedy'],['Garam Masala',2005,'comedy'],
  ['Jab We Met',2007,'romance'],['Rockstar',2011,'romance'],['Barfi!',2012,'romance'],
  ['Yeh Jawaani Hai Deewani',2013,'romance'],['Ae Dil Hai Mushkil',2016,'romance'],
  ['Rehnaa Hai Terre Dil Mein',2001,'romance'],['Hum Dil De Chuke Sanam',1999,'romance'],
  ['Bhaag Milkha Bhaag',2013,'biography'],['M.S. Dhoni: The Untold Story',2016,'biography'],
  ['Super 30',2019,'biography'],['Neerja',2016,'biography'],['Airlift',2016,'biography'],
  ['Paan Singh Tomar',2012,'biography'],['Sardar Udham',2021,'biography'],['The Kashmir Files',2022,'drama'],
  ['Pad Man',2018,'biography'],['Toilet: Ek Prem Katha',2017,'drama'],
  ['Raman Raghav 2.0',2016,'thriller'],['No Smoking',2007,'thriller'],['Manorama Six Feet Under',2007,'thriller'],
  ['Tumbbad',2018,'horror'],['13B',2009,'horror'],['Kaun?',1999,'thriller'],['Ek Hasina Thi',2004,'thriller'],
  ['Raat Akeli Hai',2020,'thriller'],['Freddy',2022,'thriller'],['Merry Christmas',2024,'thriller'],
  ['Stree',2018,'horror'],['Stree 2',2024,'horror'],['Article 15',2019,'crime'],
  ['Laapataa Ladies',2023,'comedy'],['OMG - Oh My God!',2012,'comedy','omg-oh-my-god'],
  ['OMG 2',2023,'comedy'],['Madgaon Express',2024,'comedy'],
  ['Rocky Aur Rani Kii Prem Kahaani',2023,'romance'],['Chandu Champion',2024,'biography'],['Kesari',2019,'action'],
];

const GENRE_TO_SLUG = { 28:'action',12:'adventure',16:'animation',35:'comedy',80:'crime',99:'documentary',
  18:'drama',10751:'family',14:'fantasy',36:'biography',27:'horror',10402:'drama',9648:'mystery',
  10749:'romance',878:'sci-fi',53:'thriller',10752:'action',37:'action' };
const CAT_SLUGS = new Set(['action','comedy','horror','thriller','romance','sci-fi','animation','crime','drama','biography','documentary']);

async function rfetch(url, opts) {
  let last;
  for (let i = 0; i < 4; i++) {
    try { return await fetch(url, opts); }
    catch (e) { last = e; await new Promise((r) => setTimeout(r, 900 * (i + 1))); }
  }
  throw last;
}

async function tmdbBest(title, year) {
  const r = await rfetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB}&query=${encodeURIComponent(title)}&year=${year}`);
  if (!r.ok) return null;
  const res = (await r.json()).results || [];
  if (!res.length) return null;
  const hi = res.filter((x) => x.original_language === 'hi');
  const pool = hi.length ? hi : res;
  // closest by year
  pool.sort((a, b) => Math.abs((+(a.release_date||'').slice(0,4) || 0) - year) - Math.abs((+(b.release_date||'').slice(0,4) || 0) - year));
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
  try {
    const r = await rfetch(`https://image.tmdb.org/t/p/${size}${path}`);
    if (!r.ok) return null;
    return { data: Buffer.from(await r.arrayBuffer()).toString('base64'), mime: r.headers.get('content-type') || 'image/jpeg' };
  } catch { return null; }
}

const conn = await mysql.createConnection({ host:'localhost', user:'root', password:'', database:'tophdmovies', charset:'utf8mb4' });
const [existing] = await conn.query('SELECT slug FROM movies');
const have = new Set(existing.map((r) => r.slug));

const payload = [];
let skipped = [], missed = [];
for (const [title, year, sectionCat, slugOverride] of LIST) {
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
  const cats = [...new Set(['bollywood', sectionCat, ...gslugs.filter((g) => CAT_SLUGS.has(g))])];
  const overview = (d.overview || '').trim() || `${title} (${year}) — a Bollywood ${sectionCat} film.`;
  const ov = overview.length > 1500 ? overview.slice(0, 1500) : overview;
  const short = ov.length > 200 ? ov.slice(0, 197).trimEnd() + '...' : ov;
  const yr = +(d.release_date || '').slice(0, 4) || year;
  const enc = title.replace(/&/g, 'and').replace(/\*/g, '').replace(/\s+/g, '+');

  // local insert
  const [res] = await conn.query(
    `INSERT INTO movies (title,slug,year,runtime,language,country,rating,status,youtube_id,overview,short_description,director,producer,writer,
      download_480,download_720,download_1080,size_480,size_720,size_1080,embed_480,embed_720,embed_1080,is_featured,is_trending,is_top_rated)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [title, slug, yr, d.runtime || null, 'Hindi', 'India', d.vote_average ? Math.round(d.vote_average*10)/10 : null, 'published', key,
     ov, short, director, null, null,
     `https://www.google.com/search?q=${enc}+${yr}+download+480p`,
     `https://www.google.com/search?q=${enc}+${yr}+download+720p`,
     `https://www.google.com/search?q=${enc}+${yr}+download+1080p`,
     '500 MB','1.2 GB','2.9 GB',
     `https://www.youtube.com/embed/${key}`,`https://www.youtube.com/embed/${key}`,`https://www.youtube.com/embed/${key}`,
     0,0, d.vote_average >= 7.5 ? 1 : 0]
  );
  const mid = res.insertId;
  await conn.query('INSERT IGNORE INTO movie_categories (movie_id,category_id) SELECT ?,id FROM categories WHERE slug IN (?)', [mid, cats]);
  if (gslugs.length) await conn.query('INSERT IGNORE INTO movie_genres (movie_id,genre_id) SELECT ?,id FROM genres WHERE slug IN (?)', [mid, gslugs]);
  for (const c of cast) await conn.query('INSERT INTO movie_cast (movie_id,actor_name,character_name,sort_order) VALUES (?,?,?,?)', [mid, c.actor_name, c.character_name, c.so]);

  payload.push({
    title, slug, year: yr, runtime: d.runtime || null, language: 'Hindi', country: 'India',
    rating: d.vote_average ? Math.round(d.vote_average*10)/10 : null, status: 'published', youtube_id: key,
    overview: ov, short_description: short, director,
    download_480:`https://www.google.com/search?q=${enc}+${yr}+download+480p`,
    download_720:`https://www.google.com/search?q=${enc}+${yr}+download+720p`,
    download_1080:`https://www.google.com/search?q=${enc}+${yr}+download+1080p`,
    size_480:'500 MB', size_720:'1.2 GB', size_1080:'2.9 GB',
    embed_480:`https://www.youtube.com/embed/${key}`, embed_720:`https://www.youtube.com/embed/${key}`, embed_1080:`https://www.youtube.com/embed/${key}`,
    is_top_rated: d.vote_average >= 7.5 ? 1 : 0,
    categories: cats, genres: gslugs, cast: cast.map(({actor_name,character_name})=>({actor_name,character_name})),
    poster_image: poster || undefined, backdrop_image: backdrop || undefined,
  });
  console.log(`  + ${title} (${yr}) -> ${hit.title}${hit.original_language!=='hi'?' ['+hit.original_language+'!]':''} | ${cats.join(',')}`);
  } catch (e) {
    missed.push(`${title} (err)`);
    console.log(`  ! ${title} -> ${e.message}`);
  }
}
await conn.end();

console.log(`\nPrepared ${payload.length}. Skipped(existing): ${skipped.length}. No TMDB: ${missed.join(', ')||'none'}`);
const BATCH = 4;
let imported = 0, failed = 0;
for (let i = 0; i < payload.length; i += BATCH) {
  const r = await fetch(`${SITE}/api/sync`, { method:'POST', headers:{'Content-Type':'application/json','x-import-token':TOKEN}, body: JSON.stringify({ movies: payload.slice(i,i+BATCH) }) });
  const j = await r.json().catch(()=>({}));
  imported += j.imported||0; failed += j.failed||0;
  console.log(`  batch ${i/BATCH+1}: HTTP ${r.status} imported=${j.imported} failed=${j.failed}`);
}
console.log(`Done. imported=${imported} failed=${failed}`);

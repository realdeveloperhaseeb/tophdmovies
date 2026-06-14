import { NextResponse } from 'next/server';
import { pool, transaction } from '@/lib/db';
import { saveMedia } from '@/lib/media';
import { slugify } from '@/lib/utils';
import type { ResultSetHeader, RowDataPacket } from 'mysql2';

// Secure bulk-import endpoint. Lets the site owner add/update movies over HTTPS
// without DB access. Auth: header `x-import-token` must match IMPORT_TOKEN
// (falls back to ADMIN_SESSION_SECRET so no extra env var is required).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface MoviePayload {
  title: string;
  title_hi?: string | null;
  slug?: string;
  year?: number | null;
  runtime?: number | null;
  language?: string | null;
  country?: string | null;
  rating?: number | null;
  status?: 'published' | 'draft';
  poster_url?: string | null;
  backdrop_url?: string | null;
  youtube_id?: string | null;
  overview?: string | null;
  short_description?: string | null;
  director?: string | null;
  producer?: string | null;
  writer?: string | null;
  download_480?: string | null;
  download_720?: string | null;
  download_1080?: string | null;
  size_480?: string | null;
  size_720?: string | null;
  size_1080?: string | null;
  embed_480?: string | null;
  embed_720?: string | null;
  embed_1080?: string | null;
  is_featured?: boolean | number;
  is_trending?: boolean | number;
  is_top_rated?: boolean | number;
  categories?: string[]; // category slugs
  genres?: string[]; // genre slugs
  cast?: { actor_name: string; character_name?: string | null }[];
  // Optional generated artwork (raw SVG markup). When present it is stored in
  // the media table and overrides poster_url / backdrop_url with /api/media/*.
  poster_svg?: string;
  backdrop_svg?: string;
  // Optional raw image bytes (base64) — used to mirror external images (e.g.
  // TMDB) into our own DB so the site never depends on a third-party CDN.
  poster_image?: { data: string; mime?: string };
  backdrop_image?: { data: string; mime?: string };
}

const COLS = [
  'title','title_hi','slug','year','runtime','language','country','rating','status',
  'poster_url','backdrop_url','youtube_id','overview','short_description',
  'director','producer','writer','download_480','download_720','download_1080',
  'size_480','size_720','size_1080','embed_480','embed_720','embed_1080',
  'is_featured','is_trending','is_top_rated',
] as const;

function requiredToken(): string {
  return process.env.IMPORT_TOKEN || process.env.ADMIN_SESSION_SECRET || '';
}

// Self-healing migration: add the title_hi column on older live DBs.
let schemaEnsured = false;
async function ensureSchema(): Promise<void> {
  if (schemaEnsured) return;
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT COLUMN_NAME FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'movies' AND COLUMN_NAME = 'title_hi'`
  );
  if (rows.length === 0) {
    await pool.query('ALTER TABLE movies ADD COLUMN title_hi VARCHAR(255) NULL AFTER title');
  }
  schemaEnsured = true;
}

export async function POST(req: Request) {
  const token = req.headers.get('x-import-token') || '';
  const expected = requiredToken();
  if (!expected || token !== expected) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    await ensureSchema();
  } catch (err) {
    return NextResponse.json(
      { error: `Schema check failed: ${err instanceof Error ? err.message : 'unknown'}` },
      { status: 500 }
    );
  }

  let body: { movies?: MoviePayload[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }
  const movies = body.movies;
  if (!Array.isArray(movies) || movies.length === 0) {
    return NextResponse.json({ error: 'Provide a non-empty "movies" array.' }, { status: 400 });
  }
  if (movies.length > 200) {
    return NextResponse.json({ error: 'Max 200 movies per request.' }, { status: 400 });
  }

  const results: { slug: string; action: 'inserted' | 'updated'; id: number }[] = [];
  const errors: { title: string; error: string }[] = [];

  for (const m of movies) {
    if (!m.title || !m.title.trim()) {
      errors.push({ title: m.title || '(missing)', error: 'Title is required.' });
      continue;
    }
    const slug = slugify(m.slug || m.title);
    try {
      const id = await upsertMovie(m, slug);
      results.push({ slug, action: id.action, id: id.id });
    } catch (err) {
      errors.push({ title: m.title, error: err instanceof Error ? err.message : 'Unknown error' });
    }
  }

  return NextResponse.json({
    ok: errors.length === 0,
    imported: results.length,
    failed: errors.length,
    results,
    errors,
  });
}

async function upsertMovie(
  m: MoviePayload,
  slug: string
): Promise<{ id: number; action: 'inserted' | 'updated' }> {
  const b = (v: unknown) => (v === true || v === 1 || v === '1' ? 1 : 0);

  // Store any supplied artwork in the media table, then point the URL fields
  // at our own copy. Precedence: raw image bytes > generated SVG > plain URL.
  let posterUrl = m.poster_url ?? null;
  let backdropUrl = m.backdrop_url ?? null;
  if (m.poster_image?.data) {
    const id = await saveMedia(
      Buffer.from(m.poster_image.data, 'base64'),
      m.poster_image.mime || 'image/jpeg'
    );
    posterUrl = `/api/media/${id}`;
  } else if (m.poster_svg) {
    const id = await saveMedia(Buffer.from(m.poster_svg, 'utf8'), 'image/svg+xml');
    posterUrl = `/api/media/${id}`;
  }
  if (m.backdrop_image?.data) {
    const id = await saveMedia(
      Buffer.from(m.backdrop_image.data, 'base64'),
      m.backdrop_image.mime || 'image/jpeg'
    );
    backdropUrl = `/api/media/${id}`;
  } else if (m.backdrop_svg) {
    const id = await saveMedia(Buffer.from(m.backdrop_svg, 'utf8'), 'image/svg+xml');
    backdropUrl = `/api/media/${id}`;
  }

  const values: Record<string, unknown> = {
    title: m.title.trim(),
    title_hi: m.title_hi ?? null,
    slug,
    year: m.year ?? null,
    runtime: m.runtime ?? null,
    language: m.language ?? null,
    country: m.country ?? null,
    rating: m.rating ?? null,
    status: m.status === 'draft' ? 'draft' : 'published',
    poster_url: posterUrl,
    backdrop_url: backdropUrl,
    youtube_id: m.youtube_id ?? null,
    overview: m.overview ?? null,
    short_description: m.short_description ?? null,
    director: m.director ?? null,
    producer: m.producer ?? null,
    writer: m.writer ?? null,
    download_480: m.download_480 ?? null,
    download_720: m.download_720 ?? null,
    download_1080: m.download_1080 ?? null,
    size_480: m.size_480 ?? null,
    size_720: m.size_720 ?? null,
    size_1080: m.size_1080 ?? null,
    embed_480: m.embed_480 ?? null,
    embed_720: m.embed_720 ?? null,
    embed_1080: m.embed_1080 ?? null,
    is_featured: b(m.is_featured),
    is_trending: b(m.is_trending),
    is_top_rated: b(m.is_top_rated),
  };

  return transaction(async (conn) => {
    // Does it already exist?
    const [existing] = await conn.query<RowDataPacket[]>(
      'SELECT id FROM movies WHERE slug = ? LIMIT 1',
      [slug]
    );
    let movieId: number;
    let action: 'inserted' | 'updated';

    if (existing.length) {
      movieId = existing[0].id;
      action = 'updated';
      // On update, don't overwrite existing artwork unless new art was supplied
      // (lets us push text-only edits without re-uploading images).
      const posterProvided = !!(m.poster_image?.data || m.poster_svg || m.poster_url);
      const backdropProvided = !!(m.backdrop_image?.data || m.backdrop_svg || m.backdrop_url);
      const updateCols = COLS.filter(
        (c) =>
          !(c === 'poster_url' && !posterProvided) &&
          !(c === 'backdrop_url' && !backdropProvided)
      );
      const setSql = updateCols.map((c) => `\`${c}\` = ?`).join(', ');
      await conn.query(`UPDATE movies SET ${setSql} WHERE id = ?`, [
        ...updateCols.map((c) => values[c]),
        movieId,
      ]);
    } else {
      action = 'inserted';
      const placeholders = COLS.map(() => '?').join(', ');
      const [res] = await conn.query<ResultSetHeader>(
        `INSERT INTO movies (${COLS.map((c) => `\`${c}\``).join(', ')}) VALUES (${placeholders})`,
        COLS.map((c) => values[c])
      );
      movieId = res.insertId;
    }

    // Sync relations (idempotent — safe to re-run).
    await conn.query('DELETE FROM movie_categories WHERE movie_id = ?', [movieId]);
    await conn.query('DELETE FROM movie_genres WHERE movie_id = ?', [movieId]);
    await conn.query('DELETE FROM movie_cast WHERE movie_id = ?', [movieId]);

    if (m.categories?.length) {
      await conn.query(
        `INSERT IGNORE INTO movie_categories (movie_id, category_id)
         SELECT ?, id FROM categories WHERE slug IN (?)`,
        [movieId, m.categories]
      );
    }
    if (m.genres?.length) {
      await conn.query(
        `INSERT IGNORE INTO movie_genres (movie_id, genre_id)
         SELECT ?, id FROM genres WHERE slug IN (?)`,
        [movieId, m.genres]
      );
    }
    if (m.cast?.length) {
      let i = 0;
      for (const c of m.cast) {
        if (!c.actor_name) continue;
        await conn.query(
          'INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES (?, ?, ?, ?)',
          [movieId, c.actor_name, c.character_name ?? null, i++]
        );
      }
    }

    return { id: movieId, action };
  });
}

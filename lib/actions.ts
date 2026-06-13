'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { transaction, execute } from './db';
import { requireSession } from './auth';
import { slugify } from './utils';
import {
  markMessageRead,
  deleteContactMessage,
  saveSetting,
} from './queries';
import type { ResultSetHeader } from 'mysql2';

export interface ActionState {
  error?: string;
  ok?: boolean;
}

function str(fd: FormData, key: string): string | null {
  const v = fd.get(key);
  if (v === null) return null;
  const s = String(v).trim();
  return s === '' ? null : s;
}
function num(fd: FormData, key: string): number | null {
  const s = str(fd, key);
  if (s === null) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}
function bool(fd: FormData, key: string): number {
  const v = fd.get(key);
  return v === 'on' || v === '1' || v === 'true' ? 1 : 0;
}

// ───────────────────────── Movies ─────────────────────────

export async function saveMovie(_prev: ActionState, fd: FormData): Promise<ActionState> {
  await requireSession();

  const idRaw = str(fd, 'id');
  const id = idRaw ? Number(idRaw) : null;
  const title = str(fd, 'title');
  if (!title) return { error: 'Title is required.' };

  let slug = str(fd, 'slug') || slugify(title);
  slug = slugify(slug);
  if (!slug) return { error: 'Could not generate a valid slug.' };

  const status = str(fd, 'status') === 'published' ? 'published' : 'draft';

  const fields = {
    title,
    slug,
    year: num(fd, 'year'),
    runtime: num(fd, 'runtime'),
    language: str(fd, 'language'),
    country: str(fd, 'country'),
    rating: num(fd, 'rating'),
    status,
    poster_url: str(fd, 'poster_url'),
    backdrop_url: str(fd, 'backdrop_url'),
    youtube_id: str(fd, 'youtube_id'),
    overview: str(fd, 'overview'),
    short_description: str(fd, 'short_description'),
    director: str(fd, 'director'),
    producer: str(fd, 'producer'),
    writer: str(fd, 'writer'),
    download_480: str(fd, 'download_480'),
    download_720: str(fd, 'download_720'),
    download_1080: str(fd, 'download_1080'),
    size_480: str(fd, 'size_480'),
    size_720: str(fd, 'size_720'),
    size_1080: str(fd, 'size_1080'),
    embed_480: str(fd, 'embed_480'),
    embed_720: str(fd, 'embed_720'),
    embed_1080: str(fd, 'embed_1080'),
    is_featured: bool(fd, 'is_featured'),
    is_trending: bool(fd, 'is_trending'),
    is_top_rated: bool(fd, 'is_top_rated'),
  };

  const categoryIds = fd.getAll('categories').map((v) => Number(v)).filter(Boolean);
  const genreIds = fd.getAll('genres').map((v) => Number(v)).filter(Boolean);
  const castActors = fd.getAll('cast_actor').map((v) => String(v).trim());
  const castChars = fd.getAll('cast_character').map((v) => String(v).trim());

  try {
    await transaction(async (conn) => {
      let movieId = id;
      const cols = Object.keys(fields);
      const vals = Object.values(fields);

      if (movieId) {
        const setSql = cols.map((c) => `\`${c}\` = ?`).join(', ');
        await conn.query(`UPDATE movies SET ${setSql} WHERE id = ?`, [...vals, movieId]);
      } else {
        const placeholders = cols.map(() => '?').join(', ');
        const [res] = await conn.query(
          `INSERT INTO movies (${cols.map((c) => `\`${c}\``).join(', ')}) VALUES (${placeholders})`,
          vals
        );
        movieId = (res as ResultSetHeader).insertId;
      }

      // Reset relations
      await conn.query('DELETE FROM movie_categories WHERE movie_id = ?', [movieId]);
      await conn.query('DELETE FROM movie_genres WHERE movie_id = ?', [movieId]);
      await conn.query('DELETE FROM movie_cast WHERE movie_id = ?', [movieId]);

      for (const cid of categoryIds) {
        await conn.query(
          'INSERT IGNORE INTO movie_categories (movie_id, category_id) VALUES (?, ?)',
          [movieId, cid]
        );
      }
      for (const gid of genreIds) {
        await conn.query('INSERT IGNORE INTO movie_genres (movie_id, genre_id) VALUES (?, ?)', [
          movieId,
          gid,
        ]);
      }
      for (let i = 0; i < castActors.length; i++) {
        const actor = castActors[i];
        if (!actor) continue;
        await conn.query(
          'INSERT INTO movie_cast (movie_id, actor_name, character_name, sort_order) VALUES (?, ?, ?, ?)',
          [movieId, actor, castChars[i] || null, i]
        );
      }
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    if (msg.includes('uniq_slug') || msg.includes('Duplicate')) {
      return { error: 'That slug is already in use. Please choose another.' };
    }
    return { error: `Failed to save movie: ${msg}` };
  }

  revalidatePath('/admin/movies');
  revalidatePath('/');
  redirect('/admin/movies?saved=1');
}

export async function deleteMovie(id: number): Promise<void> {
  await requireSession();
  await execute('DELETE FROM movies WHERE id = ?', [id]);
  revalidatePath('/admin/movies');
  revalidatePath('/');
}

// ───────────────────────── Categories ─────────────────────────

export async function saveCategory(_prev: ActionState, fd: FormData): Promise<ActionState> {
  await requireSession();
  const idRaw = str(fd, 'id');
  const id = idRaw ? Number(idRaw) : null;
  const name = str(fd, 'name');
  if (!name) return { error: 'Category name is required.' };
  const slug = slugify(str(fd, 'slug') || name);
  const description = str(fd, 'description');
  const displayOrder = num(fd, 'display_order') ?? 0;
  const status = str(fd, 'status') === 'hidden' ? 'hidden' : 'active';

  try {
    if (id) {
      await execute(
        'UPDATE categories SET name = ?, slug = ?, description = ?, display_order = ?, status = ? WHERE id = ?',
        [name, slug, description, displayOrder, status, id]
      );
    } else {
      await execute(
        'INSERT INTO categories (name, slug, description, display_order, status) VALUES (?, ?, ?, ?, ?)',
        [name, slug, description, displayOrder, status]
      );
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : '';
    if (msg.includes('Duplicate')) return { error: 'That slug is already in use.' };
    return { error: `Failed to save category: ${msg}` };
  }

  revalidatePath('/admin/categories');
  redirect('/admin/categories?saved=1');
}

export async function deleteCategory(id: number): Promise<void> {
  await requireSession();
  await execute('DELETE FROM categories WHERE id = ?', [id]);
  revalidatePath('/admin/categories');
}

// ───────────────────────── Messages ─────────────────────────

export async function toggleMessageRead(id: number, read: boolean): Promise<void> {
  await requireSession();
  await markMessageRead(id, read);
  revalidatePath('/admin/messages');
}

export async function removeMessage(id: number): Promise<void> {
  await requireSession();
  await deleteContactMessage(id);
  revalidatePath('/admin/messages');
}

// ───────────────────────── Settings ─────────────────────────

export async function saveSettings(_prev: ActionState, fd: FormData): Promise<ActionState> {
  await requireSession();
  const keys = [
    'site_name',
    'site_tagline',
    'default_meta_description',
    'footer_disclaimer',
    'featured_movie_id',
    'admin_email',
  ];
  for (const key of keys) {
    const value = fd.get(key);
    if (value !== null) await saveSetting(key, String(value));
  }
  revalidatePath('/');
  revalidatePath('/admin/settings');
  return { ok: true };
}

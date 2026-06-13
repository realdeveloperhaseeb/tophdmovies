import { query, queryOne, execute } from './db';
import type {
  Movie,
  MovieWithRelations,
  Category,
  Genre,
  CastMember,
  ContactMessage,
  Settings,
} from './types';

const PUBLISHED = "status = 'published'";

// ───────────────────────── Movies ─────────────────────────

export async function getMovieBySlug(slug: string): Promise<MovieWithRelations | null> {
  const movie = await queryOne<Movie>('SELECT * FROM movies WHERE slug = ? LIMIT 1', [slug]);
  if (!movie) return null;
  return attachRelations(movie);
}

export async function getMovieById(id: number): Promise<MovieWithRelations | null> {
  const movie = await queryOne<Movie>('SELECT * FROM movies WHERE id = ? LIMIT 1', [id]);
  if (!movie) return null;
  return attachRelations(movie);
}

async function attachRelations(movie: Movie): Promise<MovieWithRelations> {
  const [categories, genres, cast, views] = await Promise.all([
    query<Category>(
      `SELECT c.* FROM categories c
       JOIN movie_categories mc ON mc.category_id = c.id
       WHERE mc.movie_id = ? ORDER BY c.display_order`,
      [movie.id]
    ),
    query<Genre>(
      `SELECT g.* FROM genres g
       JOIN movie_genres mg ON mg.genre_id = g.id
       WHERE mg.movie_id = ? ORDER BY g.name`,
      [movie.id]
    ),
    query<CastMember>(
      'SELECT * FROM movie_cast WHERE movie_id = ? ORDER BY sort_order, id',
      [movie.id]
    ),
    queryOne<{ views: number }>('SELECT views FROM page_views WHERE movie_id = ?', [movie.id]),
  ]);
  return { ...movie, categories, genres, cast, views: views?.views ?? 0 };
}

export async function getPublishedMovies(limit = 12, offset = 0): Promise<Movie[]> {
  return query<Movie>(
    `SELECT * FROM movies WHERE ${PUBLISHED} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    [limit, offset]
  );
}

export async function getFeaturedMovies(limit = 5): Promise<Movie[]> {
  return query<Movie>(
    `SELECT * FROM movies WHERE ${PUBLISHED} AND is_featured = 1 ORDER BY created_at DESC LIMIT ?`,
    [limit]
  );
}

export async function getTrendingMovies(limit = 12): Promise<Movie[]> {
  return query<Movie>(
    `SELECT * FROM movies WHERE ${PUBLISHED} AND is_trending = 1 ORDER BY created_at DESC LIMIT ?`,
    [limit]
  );
}

export async function getLatestMovies(limit = 12): Promise<Movie[]> {
  return query<Movie>(
    `SELECT * FROM movies WHERE ${PUBLISHED} ORDER BY created_at DESC LIMIT ?`,
    [limit]
  );
}

export async function getTopRatedMovies(limit = 8): Promise<Movie[]> {
  return query<Movie>(
    `SELECT * FROM movies WHERE ${PUBLISHED} AND (is_top_rated = 1 OR rating >= 7)
     ORDER BY is_top_rated DESC, rating DESC LIMIT ?`,
    [limit]
  );
}

export async function getMoviesByCategorySlug(
  slug: string,
  limit = 12,
  offset = 0
): Promise<{ movies: Movie[]; total: number; category: Category | null }> {
  const category = await queryOne<Category>('SELECT * FROM categories WHERE slug = ?', [slug]);
  if (!category) return { movies: [], total: 0, category: null };

  const movies = await query<Movie>(
    `SELECT m.* FROM movies m
     JOIN movie_categories mc ON mc.movie_id = m.id
     WHERE mc.category_id = ? AND m.${PUBLISHED}
     ORDER BY m.created_at DESC LIMIT ? OFFSET ?`,
    [category.id, limit, offset]
  );
  const totalRow = await queryOne<{ total: number }>(
    `SELECT COUNT(*) AS total FROM movies m
     JOIN movie_categories mc ON mc.movie_id = m.id
     WHERE mc.category_id = ? AND m.${PUBLISHED}`,
    [category.id]
  );
  return { movies, total: totalRow?.total ?? 0, category };
}

export async function getRelatedMovies(
  movieId: number,
  categoryIds: number[],
  limit = 8
): Promise<Movie[]> {
  if (categoryIds.length === 0) {
    return query<Movie>(
      `SELECT * FROM movies WHERE ${PUBLISHED} AND id <> ? ORDER BY rating DESC LIMIT ?`,
      [movieId, limit]
    );
  }
  const placeholders = categoryIds.map(() => '?').join(',');
  return query<Movie>(
    `SELECT DISTINCT m.* FROM movies m
     JOIN movie_categories mc ON mc.movie_id = m.id
     WHERE mc.category_id IN (${placeholders}) AND m.id <> ? AND m.${PUBLISHED}
     ORDER BY m.rating DESC LIMIT ?`,
    [...categoryIds, movieId, limit]
  );
}

export async function searchMovies(q: string, limit = 40): Promise<Movie[]> {
  const like = `%${q}%`;
  return query<Movie>(
    `SELECT * FROM movies
     WHERE ${PUBLISHED} AND (title LIKE ? OR overview LIKE ? OR short_description LIKE ?)
     ORDER BY (title LIKE ?) DESC, rating DESC LIMIT ?`,
    [like, like, like, `${q}%`, limit]
  );
}

/** Lightweight suggestions for the navbar live search. */
export async function searchSuggestions(q: string, limit = 6): Promise<
  Pick<Movie, 'id' | 'title' | 'slug' | 'year' | 'poster_url'>[]
> {
  const like = `%${q}%`;
  return query(
    `SELECT id, title, slug, year, poster_url FROM movies
     WHERE ${PUBLISHED} AND title LIKE ? ORDER BY (title LIKE ?) DESC, rating DESC LIMIT ?`,
    [like, `${q}%`, limit]
  );
}

export interface BrowseFilters {
  q?: string;
  category?: string;
  year?: string;
  language?: string;
  quality?: string;
  minRating?: string;
  sort?: 'newest' | 'oldest' | 'top' | 'az';
  page?: number;
  perPage?: number;
}

export async function browseMovies(
  f: BrowseFilters
): Promise<{ movies: Movie[]; total: number; page: number; perPage: number }> {
  const where: string[] = [PUBLISHED];
  const params: unknown[] = [];
  let join = '';

  if (f.q) {
    where.push('(m.title LIKE ? OR m.overview LIKE ?)');
    params.push(`%${f.q}%`, `%${f.q}%`);
  }
  if (f.category) {
    join = `JOIN movie_categories mc ON mc.movie_id = m.id
            JOIN categories c ON c.id = mc.category_id`;
    where.push('c.slug = ?');
    params.push(f.category);
  }
  if (f.year) {
    where.push('m.year = ?');
    params.push(Number(f.year));
  }
  if (f.language) {
    where.push('m.language = ?');
    params.push(f.language);
  }
  if (f.quality === '480p') where.push('m.download_480 IS NOT NULL');
  if (f.quality === '720p') where.push('m.download_720 IS NOT NULL');
  if (f.quality === '1080p') where.push('m.download_1080 IS NOT NULL');
  if (f.minRating) {
    where.push('m.rating >= ?');
    params.push(Number(f.minRating));
  }

  const order =
    f.sort === 'oldest'
      ? 'm.created_at ASC'
      : f.sort === 'top'
        ? 'm.rating DESC'
        : f.sort === 'az'
          ? 'm.title ASC'
          : 'm.created_at DESC';

  const page = Math.max(1, f.page || 1);
  const perPage = f.perPage || 20;
  const offset = (page - 1) * perPage;
  const whereSql = where.map((w) => w.replace(/\bstatus\b/, 'm.status')).join(' AND ');

  const movies = await query<Movie>(
    `SELECT DISTINCT m.* FROM movies m ${join} WHERE ${whereSql}
     ORDER BY ${order} LIMIT ? OFFSET ?`,
    [...params, perPage, offset]
  );
  const totalRow = await queryOne<{ total: number }>(
    `SELECT COUNT(DISTINCT m.id) AS total FROM movies m ${join} WHERE ${whereSql}`,
    params
  );
  return { movies, total: totalRow?.total ?? 0, page, perPage };
}

/** Distinct years & languages for browse filter dropdowns. */
export async function getFilterOptions(): Promise<{ years: number[]; languages: string[] }> {
  const years = await query<{ year: number }>(
    `SELECT DISTINCT year FROM movies WHERE ${PUBLISHED} AND year IS NOT NULL ORDER BY year DESC`
  );
  const languages = await query<{ language: string }>(
    `SELECT DISTINCT language FROM movies WHERE ${PUBLISHED} AND language IS NOT NULL ORDER BY language`
  );
  return {
    years: years.map((r) => r.year),
    languages: languages.map((r) => r.language),
  };
}

// ───────────────────── Categories & Genres ─────────────────────

export async function getCategories(includeHidden = false): Promise<Category[]> {
  const where = includeHidden ? '' : "WHERE status = 'active'";
  return query<Category>(`SELECT * FROM categories ${where} ORDER BY display_order, name`);
}

export async function getCategoriesWithCounts(): Promise<Category[]> {
  return query<Category>(
    `SELECT c.*, COUNT(mc.movie_id) AS movie_count
     FROM categories c
     LEFT JOIN movie_categories mc ON mc.category_id = c.id
     GROUP BY c.id ORDER BY c.display_order, c.name`
  );
}

export async function getCategoryById(id: number): Promise<Category | null> {
  return queryOne<Category>('SELECT * FROM categories WHERE id = ?', [id]);
}

export async function getGenres(): Promise<Genre[]> {
  return query<Genre>('SELECT * FROM genres ORDER BY name');
}

// ───────────────────── Admin: movie listing ─────────────────────

export async function adminListMovies(opts: {
  q?: string;
  category?: string;
  status?: string;
  page?: number;
  perPage?: number;
}): Promise<{ movies: (Movie & { category_names: string | null })[]; total: number }> {
  const where: string[] = ['1=1'];
  const params: unknown[] = [];
  let join = '';

  if (opts.q) {
    where.push('m.title LIKE ?');
    params.push(`%${opts.q}%`);
  }
  if (opts.status === 'published' || opts.status === 'draft') {
    where.push('m.status = ?');
    params.push(opts.status);
  }
  if (opts.category) {
    join = `JOIN movie_categories mcf ON mcf.movie_id = m.id
            JOIN categories cf ON cf.id = mcf.category_id AND cf.slug = ?`;
    params.unshift(opts.category); // join param comes first
  }

  const page = Math.max(1, opts.page || 1);
  const perPage = opts.perPage || 15;
  const offset = (page - 1) * perPage;
  const whereSql = where.join(' AND ');

  const movies = await query<Movie & { category_names: string | null }>(
    `SELECT m.*,
       (SELECT GROUP_CONCAT(c.name SEPARATOR ', ')
        FROM movie_categories mc JOIN categories c ON c.id = mc.category_id
        WHERE mc.movie_id = m.id) AS category_names
     FROM movies m ${join}
     WHERE ${whereSql}
     GROUP BY m.id
     ORDER BY m.created_at DESC
     LIMIT ? OFFSET ?`,
    [...params, perPage, offset]
  );

  const totalRow = await queryOne<{ total: number }>(
    `SELECT COUNT(DISTINCT m.id) AS total FROM movies m ${join} WHERE ${whereSql}`,
    params
  );
  return { movies, total: totalRow?.total ?? 0 };
}

// ───────────────────────── Settings ─────────────────────────

export async function getSettings(): Promise<Settings> {
  const rows = await query<{ key: string; value: string }>(
    'SELECT `key`, `value` FROM settings'
  );
  const out: Settings = {};
  for (const r of rows) out[r.key] = r.value;
  return out;
}

export async function getSetting(key: string): Promise<string | null> {
  const row = await queryOne<{ value: string }>('SELECT `value` FROM settings WHERE `key` = ?', [
    key,
  ]);
  return row?.value ?? null;
}

export async function saveSetting(key: string, value: string): Promise<void> {
  await execute(
    'INSERT INTO settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)',
    [key, value]
  );
}

// ───────────────────── Page views ─────────────────────

export async function incrementViews(movieId: number): Promise<void> {
  await execute(
    `INSERT INTO page_views (movie_id, views) VALUES (?, 1)
     ON DUPLICATE KEY UPDATE views = views + 1`,
    [movieId]
  );
}

export async function getTotalViews(): Promise<number> {
  const row = await queryOne<{ total: number }>('SELECT SUM(views) AS total FROM page_views');
  return Number(row?.total ?? 0);
}

// ───────────────────── Contact messages ─────────────────────

export async function createContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<number> {
  const res = await execute(
    'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [data.name, data.email, data.subject, data.message]
  );
  return res.insertId;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return query<ContactMessage>('SELECT * FROM contact_messages ORDER BY created_at DESC');
}

export async function getContactMessage(id: number): Promise<ContactMessage | null> {
  return queryOne<ContactMessage>('SELECT * FROM contact_messages WHERE id = ?', [id]);
}

export async function markMessageRead(id: number, read = true): Promise<void> {
  await execute('UPDATE contact_messages SET is_read = ? WHERE id = ?', [read ? 1 : 0, id]);
}

export async function deleteContactMessage(id: number): Promise<void> {
  await execute('DELETE FROM contact_messages WHERE id = ?', [id]);
}

export async function getUnreadMessageCount(): Promise<number> {
  const row = await queryOne<{ c: number }>(
    'SELECT COUNT(*) AS c FROM contact_messages WHERE is_read = 0'
  );
  return Number(row?.c ?? 0);
}

// ───────────────────── Dashboard stats ─────────────────────

export async function getDashboardStats() {
  const [counts, categories, views, unread, latest, mostViewed] = await Promise.all([
    queryOne<{ total: number; published: number; drafts: number }>(
      `SELECT COUNT(*) AS total,
        SUM(status = 'published') AS published,
        SUM(status = 'draft') AS drafts
       FROM movies`
    ),
    queryOne<{ c: number }>('SELECT COUNT(*) AS c FROM categories'),
    getTotalViews(),
    getUnreadMessageCount(),
    query<Movie>('SELECT * FROM movies ORDER BY created_at DESC LIMIT 5'),
    query<Movie & { views: number }>(
      `SELECT m.*, COALESCE(pv.views, 0) AS views
       FROM movies m LEFT JOIN page_views pv ON pv.movie_id = m.id
       WHERE m.status = 'published'
       ORDER BY pv.views DESC LIMIT 5`
    ),
  ]);
  return {
    totalMovies: Number(counts?.total ?? 0),
    publishedMovies: Number(counts?.published ?? 0),
    draftMovies: Number(counts?.drafts ?? 0),
    totalCategories: Number(categories?.c ?? 0),
    totalViews: views,
    unreadMessages: unread,
    latestMovies: latest,
    mostViewed,
  };
}

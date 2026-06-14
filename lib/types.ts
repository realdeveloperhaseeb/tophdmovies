export type MovieStatus = 'published' | 'draft';

export interface Movie {
  id: number;
  title: string;
  slug: string;
  year: number | null;
  runtime: number | null;
  language: string | null;
  country: string | null;
  rating: number | null;
  status: MovieStatus;

  poster_url: string | null;
  backdrop_url: string | null;
  youtube_id: string | null;

  overview: string | null;
  short_description: string | null;

  director: string | null;
  producer: string | null;
  writer: string | null;

  download_480: string | null;
  download_720: string | null;
  download_1080: string | null;
  size_480: string | null;
  size_720: string | null;
  size_1080: string | null;

  embed_480: string | null;
  embed_720: string | null;
  embed_1080: string | null;

  is_featured: number;
  is_trending: number;
  is_top_rated: number;

  created_at: string;
  updated_at: string;
}

export interface MovieWithRelations extends Movie {
  categories: Category[];
  genres: Genre[];
  cast: CastMember[];
  views: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  status: 'active' | 'hidden';
  movie_count?: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface CastMember {
  id: number;
  movie_id: number;
  actor_name: string;
  character_name: string | null;
  sort_order: number;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: number;
  created_at: string;
}

export type Settings = Record<string, string>;

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMovieById, getCategories, getGenres } from '@/lib/queries';
import { MovieForm } from '@/components/admin/MovieForm';

export const dynamic = 'force-dynamic';

export default async function EditMoviePage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isFinite(id)) return notFound();

  const [movie, categories, genres] = await Promise.all([
    getMovieById(id),
    getCategories(true),
    getGenres(),
  ]);
  if (!movie) return notFound();

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin/movies" className="text-sm text-white/50 hover:text-accent">
            ← Back to movies
          </Link>
          <h1 className="mt-1 text-2xl font-extrabold">Edit: {movie.title}</h1>
        </div>
        <Link href={`/movie/${movie.slug}`} target="_blank" className="btn-outline py-2 text-sm">
          ↗ View on site
        </Link>
      </div>
      <MovieForm movie={movie} categories={categories} genres={genres} />
    </div>
  );
}

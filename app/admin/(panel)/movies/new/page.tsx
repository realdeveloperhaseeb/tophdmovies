import Link from 'next/link';
import { getCategories, getGenres } from '@/lib/queries';
import { MovieForm } from '@/components/admin/MovieForm';

export const dynamic = 'force-dynamic';

export default async function NewMoviePage() {
  const [categories, genres] = await Promise.all([getCategories(true), getGenres()]);

  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/movies" className="text-sm text-white/50 hover:text-accent">
          ← Back to movies
        </Link>
        <h1 className="mt-1 text-2xl font-extrabold">Add New Movie</h1>
      </div>
      <MovieForm categories={categories} genres={genres} />
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { searchMovies } from '@/lib/queries';
import { MovieGrid } from '@/components/MovieGrid';
import { SITE_NAME } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export function generateMetadata({
  searchParams,
}: {
  searchParams: { q?: string };
}): Metadata {
  const q = searchParams.q || '';
  return {
    title: q ? `Search results for “${q}”` : 'Search',
    description: `Search movies on ${SITE_NAME}.`,
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q || '').trim();
  let movies: Awaited<ReturnType<typeof searchMovies>> = [];
  if (q) {
    try {
      movies = await searchMovies(q);
    } catch {
      /* empty */
    }
  }

  return (
    <div className="mx-auto max-w-site px-4 py-8">
      <h1 className="text-2xl font-extrabold sm:text-3xl">Search</h1>

      {q ? (
        <p className="mb-8 mt-2 text-white/60">
          {movies.length} {movies.length === 1 ? 'result' : 'results'} found for:{' '}
          <span className="font-semibold text-accent">{q}</span>
        </p>
      ) : (
        <p className="mb-8 mt-2 text-white/60">Type a query in the search bar to find movies.</p>
      )}

      {q && movies.length === 0 ? (
        <div className="rounded-card border border-border bg-surface p-10 text-center">
          <p className="text-lg font-semibold">No movies found</p>
          <p className="mt-2 text-white/50">
            We couldn’t find anything matching “{q}”. Try a different keyword or browse the full
            library.
          </p>
          <Link href="/movies" className="btn-primary mt-5">
            Browse All Movies
          </Link>
        </div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}

import type { Movie } from '@/lib/types';
import { MovieCard } from './MovieCard';

export function MovieGrid({
  movies,
  cols = 'browse',
}: {
  movies: Movie[];
  cols?: 'browse' | 'four';
}) {
  const gridClass =
    cols === 'four'
      ? 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'
      : 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4';

  if (movies.length === 0) {
    return (
      <div className="rounded-card border border-border bg-surface p-10 text-center text-white/50">
        No movies found.
      </div>
    );
  }

  return (
    <div className={gridClass}>
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}

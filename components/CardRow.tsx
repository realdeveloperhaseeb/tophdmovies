'use client';

import { useRef } from 'react';
import type { Movie } from '@/lib/types';
import { MovieCard } from './MovieCard';

export function CardRow({ movies }: { movies: Movie[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' });
  };

  if (movies.length === 0) {
    return <p className="text-sm text-white/40">No movies to show yet.</p>;
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} className="w-[150px] shrink-0 sm:w-[180px]" />
        ))}
      </div>

      {/* Scroll buttons (desktop) */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="absolute -left-3 top-[38%] hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/90 text-white shadow-lg backdrop-blur hover:border-accent hover:text-accent md:flex"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="absolute -right-3 top-[38%] hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/90 text-white shadow-lg backdrop-blur hover:border-accent hover:text-accent md:flex"
      >
        ›
      </button>
    </div>
  );
}

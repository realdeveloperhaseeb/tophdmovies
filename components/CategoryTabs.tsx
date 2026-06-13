'use client';

import { useState, useTransition, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Movie } from '@/lib/types';
import { MovieCard } from './MovieCard';

interface TabCategory {
  name: string;
  slug: string;
}

export function CategoryTabs({ categories }: { categories: TabCategory[] }) {
  const [active, setActive] = useState(categories[0]?.slug ?? '');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loaded, setLoaded] = useState<Record<string, Movie[]>>({});
  const [isPending, startTransition] = useTransition();

  const load = useCallback(
    (slug: string) => {
      if (loaded[slug]) {
        setMovies(loaded[slug]);
        return;
      }
      startTransition(async () => {
        try {
          const res = await fetch(`/api/category-preview?slug=${encodeURIComponent(slug)}`);
          const data = await res.json();
          setLoaded((prev) => ({ ...prev, [slug]: data.movies || [] }));
          setMovies(data.movies || []);
        } catch {
          setMovies([]);
        }
      });
    },
    [loaded]
  );

  const select = (slug: string) => {
    setActive(slug);
    load(slug);
  };

  // Load the active tab whenever it changes (and on mount).
  useEffect(() => {
    if (active) load(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div>
      <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => select(c.slug)}
            className={`shrink-0 rounded-btn px-4 py-2 text-sm font-semibold transition-colors ${
              active === c.slug
                ? 'bg-accent text-black'
                : 'border border-border bg-surface text-white/70 hover:border-accent hover:text-accent'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div
        className={`grid grid-cols-2 gap-4 transition-opacity sm:grid-cols-3 lg:grid-cols-4 ${
          isPending ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {movies.slice(0, 8).map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
        {!isPending && movies.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-white/40">
            No movies in this category yet.
          </p>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href={`/category/${active}`} className="btn-primary">
          Browse All
        </Link>
      </div>
    </div>
  );
}

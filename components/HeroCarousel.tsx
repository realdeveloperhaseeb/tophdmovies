'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/lib/types';

const FALLBACK = 'https://placehold.co/1600x900/0a0a0a/22c55e?text=TopHDMovies';

export function HeroCarousel({ movies }: { movies: Movie[] }) {
  const [index, setIndex] = useState(0);
  const count = movies.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  if (count === 0) return null;

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden sm:h-[72vh]">
      {movies.map((m, i) => (
        <div
          key={m.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={m.backdrop_url || m.poster_url || FALLBACK}
            alt={m.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-site px-4">
              <div className="max-w-2xl animate-slideUp">
                <span className="badge bg-accent text-black">Featured</span>
                <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
                  {m.title}
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/70">
                  {m.year && <span>{m.year}</span>}
                  {m.language && <span>• {m.language}</span>}
                  {m.rating != null && <span className="text-accent">★ {Number(m.rating).toFixed(1)}</span>}
                </div>
                <p className="clamp-3 mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                  {m.short_description || m.overview}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/movie/${m.slug}`} className="btn-primary">
                    View Details
                  </Link>
                  {m.youtube_id && (
                    <Link href={`/movie/${m.slug}?tab=trailer`} className="btn-outline">
                      ▶ Watch Trailer
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      {count > 1 && (
        <>
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/50 text-xl backdrop-blur hover:border-accent hover:text-accent"
          >
            ‹
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/50 text-xl backdrop-blur hover:border-accent hover:text-accent"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {movies.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

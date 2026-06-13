import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/lib/types';
import { availableQualities, formatRating } from '@/lib/utils';

const FALLBACK = 'https://placehold.co/500x750/111111/22c55e?text=No+Poster';

export function MovieCard({ movie, className = '' }: { movie: Movie; className?: string }) {
  const qualities = availableQualities(movie);
  const topQuality = qualities.includes('1080p')
    ? 'HD'
    : qualities.length
      ? qualities[qualities.length - 1]
      : 'HD';

  return (
    <Link
      href={`/movie/${movie.slug}`}
      className={`group block overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-accent/50 ${className}`}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-black/40">
        <Image
          src={movie.poster_url || FALLBACK}
          alt={`${movie.title} poster`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="badge absolute left-2 top-2 bg-accent text-black">{topQuality}</span>
        {movie.rating != null && (
          <span className="badge absolute right-2 top-2 bg-black/80 text-accent backdrop-blur">
            ★ {formatRating(movie.rating)}
          </span>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-3.5">
        <h3 className="clamp-2 text-[15px] font-semibold leading-snug group-hover:text-accent">
          {movie.title}
        </h3>
        <div className="mt-1.5 flex items-center gap-2 text-[13px] text-white/50">
          <span>{movie.year || '—'}</span>
          {movie.language && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="truncate">{movie.language}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

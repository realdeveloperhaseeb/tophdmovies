import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/lib/types';
import { StarRating } from './StarRating';

const FALLBACK = 'https://placehold.co/1600x900/0a0a0a/22c55e?text=Featured';

export function FeaturedMovie({ movie }: { movie: Movie }) {
  return (
    <div className="relative overflow-hidden rounded-card border border-border">
      <Image
        src={movie.backdrop_url || movie.poster_url || FALLBACK}
        alt={movie.title}
        width={1600}
        height={640}
        className="h-64 w-full object-cover sm:h-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl p-6 sm:p-10">
          <span className="badge bg-accent text-black">Featured Movie of the Week</span>
          <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{movie.title}</h3>
          <div className="mt-2">
            <StarRating rating={movie.rating} />
          </div>
          <p className="clamp-3 mt-3 text-sm text-white/75 sm:text-base">
            {movie.short_description || movie.overview}
          </p>
          <Link href={`/movie/${movie.slug}`} className="btn-primary mt-5">
            ⬇ Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}

import { ratingToStars, formatRating } from '@/lib/utils';

function Star({ fill }: { fill: 'full' | 'half' | 'empty' }) {
  const id = `half-${Math.random().toString(36).slice(2)}`;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
      {fill === 'half' && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#3f3f3f" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
        fill={fill === 'full' ? '#22c55e' : fill === 'half' ? `url(#${id})` : '#3f3f3f'}
      />
    </svg>
  );
}

export function StarRating({
  rating,
  showNumber = true,
}: {
  rating: number | null | undefined;
  showNumber?: boolean;
}) {
  const { full, half, empty } = ratingToStars(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f${i}`} fill="full" />
        ))}
        {half && <Star fill="half" />}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`e${i}`} fill="empty" />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-semibold text-white/80">{formatRating(rating)}/10</span>
      )}
    </div>
  );
}

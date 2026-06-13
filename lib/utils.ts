/** Convert a title into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toString()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Format a runtime in minutes as "2h 22m". */
export function formatRuntime(minutes: number | null | undefined): string {
  if (!minutes || minutes <= 0) return '—';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/** Format a rating to one decimal (e.g. 8 -> "8.0"). */
export function formatRating(rating: number | null | undefined): string {
  if (rating === null || rating === undefined) return 'N/A';
  return Number(rating).toFixed(1);
}

/** Build the SEO title for a movie page. */
export function movieSeoTitle(title: string, siteName: string): string {
  return `${title} Movie Download in HD 480p 720p 1080p | ${siteName}`;
}

/** Build a 150-160 char meta description for a movie. */
export function movieMetaDescription(
  title: string,
  year: number | null | undefined
): string {
  const y = year ? ` (${year})` : '';
  const base = `Download ${title}${y} in HD 480p, 720p & 1080p. Read the full review, cast details and watch the trailer before you download. Get download links now.`;
  // Trim/pad toward 150-160 chars.
  if (base.length > 160) return base.slice(0, 157).trimEnd() + '...';
  return base;
}

/** SEO keywords for a movie page, targeting "download [movie]" style queries. */
export function movieKeywords(
  title: string,
  year: number | null | undefined,
  genres: string[] = []
): string[] {
  const y = year ? ` ${year}` : '';
  return [
    `download ${title}`,
    `${title} download`,
    `${title} movie download`,
    `${title}${y} download`,
    `${title} full movie`,
    `${title} 480p download`,
    `${title} 720p download`,
    `${title} 1080p download`,
    `${title} HD download`,
    `watch ${title} trailer`,
    `${title} free download`,
    ...genres.map((g) => `${g} movies`),
  ];
}

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'TopHDMovies';
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(
  /\/$/,
  ''
);

/** Render N full/half/empty stars out of 5 from a 0-10 rating. */
export function ratingToStars(rating: number | null | undefined): {
  full: number;
  half: boolean;
  empty: number;
} {
  const r = rating ? rating / 2 : 0; // 0-5 scale
  const full = Math.floor(r);
  const half = r - full >= 0.25 && r - full < 0.75;
  const roundedUp = r - full >= 0.75 ? full + 1 : full;
  const filled = half ? full : roundedUp;
  const empty = 5 - filled - (half ? 1 : 0);
  return { full: filled, half, empty: Math.max(0, empty) };
}

/** Quality badge label list for a movie based on available downloads. */
export function availableQualities(m: {
  download_480?: string | null;
  download_720?: string | null;
  download_1080?: string | null;
}): string[] {
  const q: string[] = [];
  if (m.download_480) q.push('480p');
  if (m.download_720) q.push('720p');
  if (m.download_1080) q.push('1080p');
  return q;
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return '—';
  const d = new Date(value.replace(' ', 'T'));
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

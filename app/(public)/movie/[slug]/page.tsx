import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getMovieBySlug,
  getRelatedMovies,
  getTopRatedMovies,
  incrementViews,
  getSetting,
} from '@/lib/queries';
import { MovieTabs } from '@/components/MovieTabs';
import { CardRow } from '@/components/CardRow';
import { StarRating } from '@/components/StarRating';
import {
  SITE_NAME,
  SITE_URL,
  movieSeoTitle,
  movieMetaDescription,
  movieKeywords,
  formatRuntime,
  availableQualities,
} from '@/lib/utils';

export const dynamic = 'force-dynamic';

const POSTER_FALLBACK = 'https://placehold.co/500x750/111111/22c55e?text=No+Poster';
const BACK_FALLBACK = 'https://placehold.co/1600x900/0a0a0a/22c55e?text=TopHDMovies';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let movie = null;
  try {
    movie = await getMovieBySlug(params.slug);
  } catch {
    /* ignore */
  }
  if (!movie) return { title: 'Movie not found' };

  const siteName = (await getSetting('site_name').catch(() => null)) || SITE_NAME;
  const title = movieSeoTitle(movie.title, siteName);
  const description = movieMetaDescription(movie.title, movie.year);
  const url = `${SITE_URL}/movie/${movie.slug}`;
  const image = movie.poster_url || movie.backdrop_url || `${SITE_URL}/logo.svg`;

  return {
    title: { absolute: title },
    description,
    keywords: movieKeywords(
      movie.title,
      movie.year,
      movie.genres.map((g) => g.name)
    ),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'video.movie',
      siteName,
      images: [{ url: image, width: 500, height: 750, alt: `${movie.title} poster` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function MoviePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { tab?: string };
}) {
  let movie = null;
  try {
    movie = await getMovieBySlug(params.slug);
  } catch {
    return notFound();
  }
  if (!movie || movie.status !== 'published') return notFound();

  // Server-side view counter (fire and forget).
  incrementViews(movie.id).catch(() => {});

  const categoryIds = movie.categories.map((c) => c.id);
  const [related, popular] = await Promise.all([
    getRelatedMovies(movie.id, categoryIds, 8).catch(() => []),
    getTopRatedMovies(4).catch(() => []),
  ]);

  const primaryCategory = movie.categories[0];
  const qualities = availableQualities(movie);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    description: movie.short_description || movie.overview || undefined,
    image: movie.poster_url || undefined,
    datePublished: movie.year ? `${movie.year}-01-01` : undefined,
    director: movie.director ? { '@type': 'Person', name: movie.director } : undefined,
    author: movie.writer ? { '@type': 'Person', name: movie.writer } : undefined,
    inLanguage: movie.language || undefined,
    genre: movie.genres.map((g) => g.name),
    aggregateRating: movie.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: Number(movie.rating),
          bestRating: 10,
          ratingCount: Math.max(50, movie.views),
        }
      : undefined,
    actor: movie.cast.map((c) => ({ '@type': 'Person', name: c.actor_name })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...(primaryCategory
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: primaryCategory.name,
              item: `${SITE_URL}/category/${primaryCategory.slug}`,
            },
          ]
        : []),
      {
        '@type': 'ListItem',
        position: primaryCategory ? 3 : 2,
        name: movie.title,
        item: `${SITE_URL}/movie/${movie.slug}`,
      },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How can I download ${movie.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Open the Download tab on this page and pick your preferred quality — ${
            qualities.join(', ') || 'HD'
          }. Each option links to an external source. We do not host any files.`,
        },
      },
      {
        '@type': 'Question',
        name: `What qualities is ${movie.title} available in?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${movie.title} is listed in ${
            qualities.join(', ') || 'HD'
          } (MP4). File sizes are shown on each download card.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is it free to download ${movie.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, browsing details and using the listed links on ${SITE_NAME} is completely free. You do not need an account.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Backdrop top section */}
      <div className="relative">
        <div className="relative h-[280px] w-full sm:h-[400px]">
          <Image
            src={movie.backdrop_url || BACK_FALLBACK}
            alt={movie.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />
        </div>

        <div className="mx-auto max-w-site px-4">
          {/* Breadcrumb */}
          <nav className="relative -mt-6 mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <span>›</span>
            {primaryCategory ? (
              <>
                <Link href={`/category/${primaryCategory.slug}`} className="hover:text-accent">
                  {primaryCategory.name}
                </Link>
                <span>›</span>
              </>
            ) : null}
            <span className="text-white/80">{movie.title}</span>
          </nav>

          {/* Floating info card */}
          <div className="relative -mt-2 flex flex-col gap-6 rounded-card border border-border bg-surface p-5 sm:flex-row sm:p-6">
            <div className="relative mx-auto aspect-[2/3] w-40 shrink-0 overflow-hidden rounded-card border border-border sm:mx-0 sm:w-48">
              <Image
                src={movie.poster_url || POSTER_FALLBACK}
                alt={`${movie.title} poster`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                {movie.title}{' '}
                {movie.year && <span className="font-bold text-white/50">({movie.year})</span>}
              </h1>
              <p className="mt-2 text-sm font-medium text-accent">
                Download in HD 480p • 720p • 1080p
              </p>
              <div className="mt-3">
                <StarRating rating={movie.rating} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/70">
                {movie.episode_info ? (
                  <Meta>{movie.episode_info}</Meta>
                ) : movie.runtime ? (
                  <Meta>{formatRuntime(movie.runtime)}</Meta>
                ) : null}
                {movie.language ? <Meta>{movie.language}</Meta> : null}
                {movie.country ? <Meta>{movie.country}</Meta> : null}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span key={g.id} className="badge border border-border text-white/70">
                    {g.name}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['480p', '720p', '1080p'].map((q) => (
                  <span
                    key={q}
                    className={`badge ${
                      qualities.includes(q) ? 'bg-accent text-black' : 'border border-border text-white/40'
                    }`}
                  >
                    {q}
                  </span>
                ))}
              </div>
              <p className="clamp-3 mt-4 text-sm text-white/60">{movie.short_description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main + sidebar */}
      <div className="mx-auto grid max-w-site gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <MovieTabs
            movie={movie}
            initialTab={(searchParams.tab as 'overview' | 'trailer' | 'download') || 'overview'}
          />
        </div>

        {/* Sidebar (desktop) */}
        <aside className="hidden space-y-8 lg:block">
          <SidebarList title="Related Movies" movies={related.slice(0, 6)} />
          <SidebarList title="Popular This Week" movies={popular.slice(0, 4)} />
        </aside>
      </div>

      {/* More from category */}
      {related.length > 0 && (
        <div className="mx-auto max-w-site px-4 pb-12">
          <h2 className="section-title mb-4 flex items-center gap-2">
            <span className="inline-block h-6 w-1 rounded-full bg-accent" />
            More {primaryCategory ? `in ${primaryCategory.name}` : 'Movies'}
          </h2>
          <CardRow movies={related} />
        </div>
      )}
    </>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-border px-2 py-0.5">{children}</span>;
}

function SidebarList({
  title,
  movies,
}: {
  title: string;
  movies: { id: number; title: string; slug: string; year: number | null; poster_url: string | null; rating: number | null }[];
}) {
  if (movies.length === 0) return null;
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">{title}</h3>
      <div className="space-y-3">
        {movies.map((m) => (
          <Link
            key={m.id}
            href={`/movie/${m.slug}`}
            className="flex gap-3 rounded-card border border-border bg-surface p-2 transition-colors hover:border-accent/50"
          >
            <div className="relative h-20 w-14 shrink-0 overflow-hidden rounded bg-black/40">
              <Image
                src={m.poster_url || POSTER_FALLBACK}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="clamp-2 text-sm font-semibold">{m.title}</p>
              <p className="mt-1 text-xs text-white/40">{m.year || ''}</p>
              {m.rating != null && (
                <p className="mt-1 text-xs text-accent">★ {Number(m.rating).toFixed(1)}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { browseMovies, getCategories, getFilterOptions } from '@/lib/queries';
import { BrowseFilters } from '@/components/BrowseFilters';
import { MovieGrid } from '@/components/MovieGrid';
import { Pagination } from '@/components/Pagination';
import { SITE_NAME } from '@/lib/utils';
import type { BrowseFilters as Filters } from '@/lib/queries';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Browse All Movies',
  description: `Browse the full ${SITE_NAME} library. Filter by category, year, language, quality and rating, and sort to find your next movie to download in HD.`,
  alternates: { canonical: '/movies' },
};

const PER_PAGE = 20;

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const filters: Filters = {
    q: searchParams.q,
    category: searchParams.category,
    year: searchParams.year,
    language: searchParams.language,
    quality: searchParams.quality,
    minRating: searchParams.minRating,
    sort: (searchParams.sort as Filters['sort']) || 'newest',
    page: Number(searchParams.page || 1),
    perPage: PER_PAGE,
  };

  let movies: Awaited<ReturnType<typeof browseMovies>> = {
    movies: [],
    total: 0,
    page: 1,
    perPage: PER_PAGE,
  };
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  let options = { years: [] as number[], languages: [] as string[] };

  try {
    [movies, categories, options] = await Promise.all([
      browseMovies(filters),
      getCategories(),
      getFilterOptions(),
    ]);
  } catch {
    /* show empty state */
  }

  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([k, v]) => {
      if (v && k !== 'page') params.set(k, v);
    });
    params.set('page', String(page));
    return `/movies?${params.toString()}`;
  };

  return (
    <div className="mx-auto max-w-site px-4 py-8">
      <h1 className="mb-1 text-3xl font-extrabold">Browse Movies</h1>
      <p className="mb-6 text-white/50">
        {movies.total} {movies.total === 1 ? 'movie' : 'movies'} in the library
      </p>

      <div className="mb-8 rounded-card border border-border bg-surface p-4">
        <BrowseFilters
          categories={categories.map((c) => ({ value: c.slug, label: c.name }))}
          years={options.years}
          languages={options.languages}
        />
      </div>

      <MovieGrid movies={movies.movies} />

      <Pagination
        page={movies.page}
        total={movies.total}
        perPage={movies.perPage}
        buildHref={buildHref}
      />
    </div>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMoviesByCategorySlug } from '@/lib/queries';
import { MovieGrid } from '@/components/MovieGrid';
import { Pagination } from '@/components/Pagination';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

export const dynamic = 'force-dynamic';

const PER_PAGE = 20;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let category = null;
  try {
    ({ category } = await getMoviesByCategorySlug(params.slug, 1, 0));
  } catch {
    /* ignore */
  }
  if (!category) return { title: 'Category not found' };
  return {
    title: `${category.name} Movies Download in HD 480p 720p 1080p`,
    description:
      category.description?.slice(0, 160) ||
      `Browse and download all ${category.name} movies on ${SITE_NAME} in HD 480p, 720p and 1080p. Reviews, trailers and download links.`,
    keywords: [
      `${category.name} movies`,
      `${category.name} movies download`,
      `download ${category.name} movies`,
      `${category.name} movies in HD`,
      `${category.name} 720p 1080p download`,
    ],
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: `${category.name} Movies Download in HD | ${SITE_NAME}`,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page?: string };
}) {
  const page = Math.max(1, Number(searchParams.page || 1));
  let data: Awaited<ReturnType<typeof getMoviesByCategorySlug>>;
  try {
    data = await getMoviesByCategorySlug(params.slug, PER_PAGE, (page - 1) * PER_PAGE);
  } catch {
    return notFound();
  }
  if (!data.category) return notFound();

  const { category, movies, total } = data;

  return (
    <div className="mx-auto max-w-site px-4 py-8">
      <nav className="mb-4 flex items-center gap-1.5 text-sm text-white/60">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span>›</span>
        <Link href="/categories" className="hover:text-accent">
          Categories
        </Link>
        <span>›</span>
        <span className="text-white/80">{category.name}</span>
      </nav>

      <h1 className="text-3xl font-extrabold sm:text-4xl">{category.name} Movies</h1>
      {category.description && (
        <p className="mt-3 max-w-3xl leading-relaxed text-white/60">{category.description}</p>
      )}
      <p className="mb-8 mt-2 text-sm text-white/40">{total} {total === 1 ? 'movie' : 'movies'}</p>

      <MovieGrid movies={movies} />

      <Pagination
        page={page}
        total={total}
        perPage={PER_PAGE}
        buildHref={(p) => `/category/${category.slug}?page=${p}`}
      />
    </div>
  );
}

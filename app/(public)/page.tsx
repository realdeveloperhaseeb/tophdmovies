import Link from 'next/link';
import {
  getFeaturedMovies,
  getTrendingMovies,
  getLatestMovies,
  getTopRatedMovies,
  getCategories,
  getMovieById,
  getSetting,
} from '@/lib/queries';
import type { Movie, Category } from '@/lib/types';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CardRow } from '@/components/CardRow';
import { CategoryTabs } from '@/components/CategoryTabs';
import { MovieGrid } from '@/components/MovieGrid';
import { FeaturedMovie } from '@/components/FeaturedMovie';
import { FaqAccordion } from '@/components/FaqAccordion';
import { SectionHeading } from '@/components/SectionHeading';
import { SetupNotice } from '@/components/SetupNotice';
import { HOME_FAQ } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  let featured: Movie[] = [];
  let trending: Movie[] = [];
  let latest: Movie[] = [];
  let topRated: Movie[] = [];
  let categories: Category[] = [];
  let featuredOfWeek: Movie | null = null;
  let dbError = false;

  try {
    [featured, trending, latest, topRated, categories] = await Promise.all([
      getFeaturedMovies(5),
      getTrendingMovies(12),
      getLatestMovies(12),
      getTopRatedMovies(8),
      getCategories(),
    ]);
    const featuredId = await getSetting('featured_movie_id');
    if (featuredId) featuredOfWeek = await getMovieById(Number(featuredId));
    if (!featuredOfWeek) featuredOfWeek = featured[0] || latest[0] || null;
  } catch (err) {
    dbError = true;
    console.error('[home] database error:', err);
  }

  if (dbError || (latest.length === 0 && featured.length === 0)) {
    return <SetupNotice />;
  }

  const heroMovies = featured.length ? featured : latest.slice(0, 5);

  return (
    <>
      <HeroCarousel movies={heroMovies} />

      <div className="mx-auto max-w-site space-y-14 px-4 py-12">
        {/* Trending */}
        <section>
          <SectionHeading title="Trending Now" href="/movies?sort=top" />
          <CardRow movies={trending.length ? trending : latest} />
        </section>

        {/* Latest */}
        <section>
          <SectionHeading title="Latest Releases" href="/movies?sort=newest" />
          <CardRow movies={latest} />
        </section>

        {/* Category tabs */}
        <section>
          <SectionHeading title="Browse by Category" />
          <CategoryTabs categories={categories.map((c) => ({ name: c.name, slug: c.slug }))} />
        </section>

        {/* Top rated */}
        <section>
          <SectionHeading title="Top Rated Movies" href="/movies?sort=top" />
          <MovieGrid movies={topRated} cols="four" />
        </section>

        {/* Featured of the week */}
        {featuredOfWeek && (
          <section>
            <SectionHeading title="Featured This Week" />
            <FeaturedMovie movie={featuredOfWeek} />
          </section>
        )}

        {/* FAQ */}
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-white/50">Everything you need to know about using TopHDMovies.</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={HOME_FAQ} />
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-card border border-border bg-surface p-8 text-center">
          <h2 className="text-xl font-bold sm:text-2xl">Can’t find what you’re looking for?</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/60">
            Explore our full library — browse by category, filter by quality and discover your next
            favourite film.
          </p>
          <Link href="/movies" className="btn-primary mt-5">
            Browse All Movies
          </Link>
        </section>
      </div>
    </>
  );
}

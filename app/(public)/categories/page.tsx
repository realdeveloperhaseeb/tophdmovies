import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoriesWithCounts } from '@/lib/queries';
import { SITE_NAME } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Categories',
  description: `Explore all movie categories on ${SITE_NAME} — from Hollywood and Bollywood to Action, Horror, Sci-Fi and more.`,
  alternates: { canonical: '/categories' },
};

export default async function CategoriesPage() {
  let categories: Awaited<ReturnType<typeof getCategoriesWithCounts>> = [];
  try {
    categories = (await getCategoriesWithCounts()).filter((c) => c.status === 'active');
  } catch {
    /* empty */
  }

  return (
    <div className="mx-auto max-w-site px-4 py-8">
      <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">Browse by Category</h1>
      <p className="mb-8 text-white/50">Find movies grouped by industry and genre.</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/category/${c.slug}`}
            className="group flex flex-col justify-between rounded-card border border-border bg-surface p-5 transition-colors hover:border-accent/60"
          >
            <h2 className="text-lg font-bold group-hover:text-accent">{c.name}</h2>
            <p className="mt-3 text-sm text-white/40">
              {c.movie_count || 0} {c.movie_count === 1 ? 'movie' : 'movies'}
            </p>
          </Link>
        ))}
        {categories.length === 0 && (
          <p className="col-span-full text-white/40">No categories yet.</p>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { adminListMovies, getCategories } from '@/lib/queries';
import { deleteMovie } from '@/lib/actions';
import { DeleteButton } from '@/components/admin/DeleteButton';
import { MovieTableSearch } from '@/components/admin/MovieTableSearch';
import { Pagination } from '@/components/Pagination';
import { availableQualities, formatDate } from '@/lib/utils';

export const dynamic = 'force-dynamic';

const PER_PAGE = 15;

export default async function AdminMoviesPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const page = Math.max(1, Number(searchParams.page || 1));
  let data: Awaited<ReturnType<typeof adminListMovies>> = { movies: [], total: 0 };
  let categories: Awaited<ReturnType<typeof getCategories>> = [];

  try {
    [data, categories] = await Promise.all([
      adminListMovies({
        q: searchParams.q,
        category: searchParams.category,
        status: searchParams.status,
        page,
        perPage: PER_PAGE,
      }),
      getCategories(true),
    ]);
  } catch {
    /* empty */
  }

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([k, v]) => {
      if (v && k !== 'page') params.set(k, v);
    });
    params.set('page', String(p));
    return `/admin/movies?${params.toString()}`;
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold">Movies</h1>
          <p className="text-sm text-white/50">{data.total} total</p>
        </div>
        <Link href="/admin/movies/new" className="btn-primary">
          + Add Movie
        </Link>
      </div>

      <MovieTableSearch categories={categories.map((c) => ({ slug: c.slug, name: c.name }))} />

      <div className="overflow-x-auto rounded-card border border-border bg-surface">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="border-b border-border text-left text-white/50">
            <tr>
              <th className="px-4 py-3 font-medium">Poster</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Quality</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Added</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.movies.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-white/40">
                  No movies found.
                </td>
              </tr>
            )}
            {data.movies.map((m) => (
              <tr key={m.id} className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <div className="relative h-14 w-10 overflow-hidden rounded bg-black/40">
                    {m.poster_url && (
                      <Image src={m.poster_url} alt="" fill sizes="40px" className="object-cover" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 font-medium">{m.title}</td>
                <td className="px-4 py-3 text-white/60">{m.year || '—'}</td>
                <td className="px-4 py-3 text-white/60">{m.category_names || '—'}</td>
                <td className="px-4 py-3 text-white/60">
                  {availableQualities(m).join(', ') || '—'}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`badge ${
                      m.status === 'published'
                        ? 'bg-accent text-black'
                        : 'border border-border text-white/50'
                    }`}
                  >
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-white/60">{formatDate(m.created_at)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/movies/${m.id}/edit`}
                      className="rounded-btn border border-border px-3 py-1.5 text-sm font-semibold hover:border-accent hover:text-accent"
                    >
                      Edit
                    </Link>
                    <DeleteButton action={deleteMovie} id={m.id} confirmText={`Delete “${m.title}”?`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={page} total={data.total} perPage={PER_PAGE} buildHref={buildHref} />
    </div>
  );
}

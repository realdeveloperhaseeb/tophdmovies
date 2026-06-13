import Link from 'next/link';
import { getCategoriesWithCounts, getCategoryById } from '@/lib/queries';
import { deleteCategory } from '@/lib/actions';
import { CategoryForm } from '@/components/admin/CategoryForm';
import { DeleteButton } from '@/components/admin/DeleteButton';

export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage({
  searchParams,
}: {
  searchParams: { edit?: string };
}) {
  let categories: Awaited<ReturnType<typeof getCategoriesWithCounts>> = [];
  let editing = null;
  try {
    categories = await getCategoriesWithCounts();
    if (searchParams.edit) editing = await getCategoryById(Number(searchParams.edit));
  } catch {
    /* empty */
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-extrabold">Categories</h1>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* List */}
        <div className="overflow-x-auto rounded-card border border-border bg-surface">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="border-b border-border text-left text-white/50">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Movies</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {categories.map((c) => (
                <tr key={c.id} className="hover:bg-white/5">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-white/50">{c.slug}</td>
                  <td className="px-4 py-3 text-white/60">{c.movie_count || 0}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`badge ${
                        c.status === 'active'
                          ? 'bg-accent text-black'
                          : 'border border-border text-white/50'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/categories?edit=${c.id}`}
                        className="rounded-btn border border-border px-3 py-1.5 text-sm font-semibold hover:border-accent hover:text-accent"
                      >
                        Edit
                      </Link>
                      <DeleteButton
                        action={deleteCategory}
                        id={c.id}
                        confirmText={`Delete category “${c.name}”? Movies will be unlinked from it.`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-white/40">
                    No categories yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Form */}
        <div className="rounded-card border border-border bg-surface p-5">
          {editing && (
            <Link href="/admin/categories" className="mb-3 inline-block text-sm text-accent hover:underline">
              + New category instead
            </Link>
          )}
          <CategoryForm category={editing} />
        </div>
      </div>
    </div>
  );
}

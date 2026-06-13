import Link from 'next/link';
import Image from 'next/image';
import { getDashboardStats } from '@/lib/queries';
import { formatDate } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let stats: Awaited<ReturnType<typeof getDashboardStats>> = {
    totalMovies: 0,
    publishedMovies: 0,
    draftMovies: 0,
    totalCategories: 0,
    unreadMessages: 0,
    latestMovies: [],
  };
  let dbError = false;
  try {
    stats = await getDashboardStats();
  } catch {
    dbError = true;
  }

  const cards = [
    {
      label: 'Total Movies',
      value: stats.totalMovies,
      sub: `${stats.publishedMovies} published · ${stats.draftMovies} draft`,
      href: '/admin/movies',
      accent: true,
    },
    {
      label: 'Published',
      value: stats.publishedMovies,
      sub: 'Live on the site',
      href: '/admin/movies?status=published',
    },
    {
      label: 'Drafts',
      value: stats.draftMovies,
      sub: 'Hidden from visitors',
      href: '/admin/movies?status=draft',
    },
    {
      label: 'Categories',
      value: stats.totalCategories,
      sub: 'Active & hidden',
      href: '/admin/categories',
    },
    {
      label: 'Unread Messages',
      value: stats.unreadMessages,
      sub: 'From the contact form',
      href: '/admin/messages',
      alert: stats.unreadMessages > 0,
    },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-white/50">Welcome back. Here’s an overview of your site.</p>
        </div>
        <Link href="/admin/movies/new" className="btn-primary">
          + Add Movie
        </Link>
      </div>

      {dbError && (
        <div className="mb-6 rounded-card border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          Could not connect to the database. Check your <code>.env.local</code> credentials and run{' '}
          <code>npm run db:setup</code>.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className={`rounded-card border bg-surface p-5 transition-colors hover:border-accent/60 ${
              c.alert ? 'border-accent/50' : 'border-border'
            }`}
          >
            <p className="text-sm font-medium text-white/50">{c.label}</p>
            <p className={`mt-2 text-4xl font-extrabold ${c.accent || c.alert ? 'text-accent' : 'text-white'}`}>
              {c.value}
            </p>
            <p className="mt-1 text-xs text-white/40">{c.sub}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-bold">Latest 5 Added Movies</h2>
          <Link href="/admin/movies" className="text-sm font-semibold text-accent hover:underline">
            View all
          </Link>
        </div>
        <div className="divide-y divide-border">
          {stats.latestMovies.length === 0 && (
            <p className="px-5 py-6 text-sm text-white/40">No movies yet. Add your first one!</p>
          )}
          {stats.latestMovies.map((m) => (
            <Link
              key={m.id}
              href={`/admin/movies/${m.id}/edit`}
              className="flex items-center gap-4 px-5 py-3 hover:bg-white/5"
            >
              <div className="relative h-14 w-10 shrink-0 overflow-hidden rounded bg-black/40">
                {m.poster_url && (
                  <Image src={m.poster_url} alt="" fill sizes="40px" className="object-cover" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{m.title}</p>
                <p className="text-xs text-white/40">
                  {m.year || '—'} • {formatDate(m.created_at)}
                </p>
              </div>
              <span
                className={`badge ${
                  m.status === 'published' ? 'bg-accent text-black' : 'border border-border text-white/50'
                }`}
              >
                {m.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

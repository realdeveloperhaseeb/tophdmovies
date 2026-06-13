import Link from 'next/link';

/** Server-friendly pagination. `buildHref(page)` returns the URL for a page. */
export function Pagination({
  page,
  total,
  perPage,
  buildHref,
}: {
  page: number;
  total: number;
  perPage: number;
  buildHref: (page: number) => string;
}) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (totalPages <= 1) return null;

  const pages: (number | '…')[] = [];
  const push = (n: number) => pages.push(n);
  push(1);
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);
  if (start > 2) pages.push('…');
  for (let i = start; i <= end; i++) push(i);
  if (end < totalPages - 1) pages.push('…');
  if (totalPages > 1) push(totalPages);

  const base =
    'inline-flex h-10 min-w-10 items-center justify-center rounded-btn border px-3 text-sm font-semibold transition-colors';

  return (
    <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
      {page > 1 && (
        <Link href={buildHref(page - 1)} className={`${base} border-border hover:border-accent`}>
          ← Prev
        </Link>
      )}
      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`d${i}`} className="px-2 text-white/40">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildHref(p)}
            className={
              p === page
                ? `${base} border-accent bg-accent text-black`
                : `${base} border-border hover:border-accent`
            }
          >
            {p}
          </Link>
        )
      )}
      {page < totalPages && (
        <Link href={buildHref(page + 1)} className={`${base} border-border hover:border-accent`}>
          Next →
        </Link>
      )}
    </nav>
  );
}

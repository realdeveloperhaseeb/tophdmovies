import Link from 'next/link';

export function SectionHeading({
  title,
  href,
  linkLabel = 'View All',
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="section-title flex items-center gap-2.5">
        <span className="inline-block h-7 w-1.5 rounded-full bg-accent" />
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-[15px] font-semibold text-accent hover:text-accent-hover"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

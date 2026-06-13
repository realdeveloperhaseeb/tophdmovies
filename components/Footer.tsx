import Link from 'next/link';
import { LogoMark } from './Logo';
import { SITE_NAME } from '@/lib/utils';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/dmca', label: 'DMCA' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/contact', label: 'Contact' },
];

export function Footer({ disclaimer }: { disclaimer?: string }) {
  const text =
    disclaimer ||
    'This site does not host any files. All content is provided for informational purposes only. We link to external sources and do not take responsibility for third-party content.';

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-site gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <LogoMark size={36} />
            <span className="text-lg font-extrabold">{SITE_NAME}</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
            {SITE_NAME} is a movie information and review platform. Discover films, read reviews,
            watch trailers and find download links to external sources — all in one cinematic place.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">Quick Links</h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/50 hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/70">Disclaimer</h3>
          <p className="text-xs leading-relaxed text-white/40">{text}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-site px-4 py-4 text-center text-xs text-white/40">
          © 2025 {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

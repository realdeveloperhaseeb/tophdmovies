import Link from 'next/link';
import { SITE_NAME } from '@/lib/utils';

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="#111111" stroke="#1f1f1f" strokeWidth="2" />
      <path d="M19 16.5L33 24L19 31.5V16.5Z" fill="#22c55e" />
      <rect x="8" y="36" width="32" height="3" rx="1.5" fill="#22c55e" opacity="0.35" />
    </svg>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  // Split site name so the middle (HD) can be highlighted when present.
  const name = SITE_NAME;
  const hdIndex = name.indexOf('HD');
  let before = name;
  let mid = '';
  let after = '';
  if (hdIndex >= 0) {
    before = name.slice(0, hdIndex);
    mid = 'HD';
    after = name.slice(hdIndex + 2);
  }

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label={`${name} home`}>
      <LogoMark size={34} />
      <span className="text-lg font-extrabold tracking-tight sm:text-xl">
        {before}
        {mid && <span className="text-accent">{mid}</span>}
        {after}
      </span>
    </Link>
  );
}

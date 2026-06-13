import Link from 'next/link';
import { LogoMark } from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-4 text-center">
      <LogoMark size={56} />
      <h1 className="text-5xl font-extrabold text-accent">404</h1>
      <p className="text-lg font-semibold">This page couldn’t be found.</p>
      <p className="max-w-md text-white/50">
        The movie or page you’re looking for may have been moved or no longer exists.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/movies" className="btn-outline">
          Browse Movies
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogoMark } from '@/components/Logo';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '▦' },
  { href: '/admin/movies', label: 'Movies', icon: '🎬' },
  { href: '/admin/categories', label: 'Categories', icon: '🗂' },
  { href: '/admin/messages', label: 'Messages', icon: '✉' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙' },
];

export function AdminShell({
  children,
  unreadCount = 0,
}: {
  children: React.ReactNode;
  unreadCount?: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  const navLinks = (
    <nav className="flex flex-col gap-1">
      {NAV.map((n) => (
        <Link
          key={n.href}
          href={n.href}
          onClick={() => setOpen(false)}
          className={`flex items-center justify-between rounded-btn px-3 py-2.5 text-sm font-medium transition-colors ${
            isActive(n.href)
              ? 'bg-accent text-black'
              : 'text-white/70 hover:bg-white/5 hover:text-white'
          }`}
        >
          <span className="flex items-center gap-3">
            <span className="text-base">{n.icon}</span>
            {n.label}
          </span>
          {n.href === '/admin/messages' && unreadCount > 0 && (
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
              {unreadCount}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar (desktop) */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface p-4 lg:flex">
        <div className="mb-6 flex items-center gap-2.5 px-2">
          <LogoMark size={32} />
          <span className="font-extrabold">Admin</span>
        </div>
        {navLinks}
        <div className="mt-auto space-y-1 pt-4">
          <Link href="/" target="_blank" className="block rounded-btn px-3 py-2 text-sm text-white/50 hover:text-accent">
            ↗ View Site
          </Link>
          <button
            onClick={logout}
            className="w-full rounded-btn px-3 py-2 text-left text-sm text-white/50 hover:text-red-400"
          >
            ⎋ Logout
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 lg:hidden">
          <div className="flex items-center gap-2">
            <LogoMark size={28} />
            <span className="font-bold">Admin</span>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-border"
          >
            ☰
          </button>
        </header>
        {open && (
          <div className="border-b border-border bg-surface p-4 lg:hidden">
            {navLinks}
            <div className="mt-3 flex gap-3 border-t border-border pt-3">
              <Link href="/" target="_blank" className="text-sm text-white/50 hover:text-accent">
                View Site
              </Link>
              <button onClick={logout} className="text-sm text-white/50 hover:text-red-400">
                Logout
              </button>
            </div>
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

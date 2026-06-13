'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Suggestion {
  id: number;
  title: string;
  slug: string;
  year: number | null;
  poster_url: string | null;
}

export function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);
  const debounce = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (q.trim().length < 2) {
      setResults([]);
      return;
    }
    clearTimeout(debounce.current);
    debounce.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
        const data = await res.json();
        setResults(data.results || []);
        setOpen(true);
      } catch {
        setResults([]);
      }
    }, 220);
    return () => clearTimeout(debounce.current);
  }, [q]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    setOpen(false);
    onNavigate?.();
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div ref={boxRef} className="relative w-full">
      <form onSubmit={submit} className="relative">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          placeholder="Search movies…"
          className="input pl-10"
          aria-label="Search movies"
        />
        <svg
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </form>

      {open && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-card border border-border bg-surface shadow-2xl">
          {results.map((r) => (
            <Link
              key={r.id}
              href={`/movie/${r.slug}`}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="flex items-center gap-3 border-b border-border/60 px-3 py-2 last:border-0 hover:bg-white/5"
            >
              <div className="relative h-14 w-10 shrink-0 overflow-hidden rounded bg-black/40">
                {r.poster_url && (
                  <Image src={r.poster_url} alt="" fill className="object-cover" sizes="40px" />
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{r.title}</p>
                <p className="text-xs text-white/40">{r.year || ''}</p>
              </div>
            </Link>
          ))}
          <button
            onClick={submit}
            className="block w-full bg-white/5 px-3 py-2 text-left text-sm font-semibold text-accent hover:bg-white/10"
          >
            See all results for “{q}” →
          </button>
        </div>
      )}
    </div>
  );
}

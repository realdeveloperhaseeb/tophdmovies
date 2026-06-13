'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

export function BrowseFilters({
  categories,
  years,
  languages,
}: {
  categories: Option[];
  years: number[];
  languages: string[];
}) {
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get('q') || '');

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(sp.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete('page'); // reset to first page on filter change
    router.push(`/movies?${params.toString()}`);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    update('q', q.trim());
  };

  const select =
    'rounded-btn border border-border bg-surface px-3 py-2 text-sm text-white focus:border-accent focus:outline-none';

  return (
    <div className="space-y-4">
      <form onSubmit={submitSearch}>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the library…"
          className="input"
          aria-label="Search movies"
        />
      </form>

      <div className="flex flex-wrap gap-2">
        <select
          className={select}
          value={sp.get('category') || ''}
          onChange={(e) => update('category', e.target.value)}
          aria-label="Category"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          className={select}
          value={sp.get('year') || ''}
          onChange={(e) => update('year', e.target.value)}
          aria-label="Year"
        >
          <option value="">Any Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select
          className={select}
          value={sp.get('language') || ''}
          onChange={(e) => update('language', e.target.value)}
          aria-label="Language"
        >
          <option value="">Any Language</option>
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <select
          className={select}
          value={sp.get('quality') || ''}
          onChange={(e) => update('quality', e.target.value)}
          aria-label="Quality"
        >
          <option value="">Any Quality</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>

        <select
          className={select}
          value={sp.get('minRating') || ''}
          onChange={(e) => update('minRating', e.target.value)}
          aria-label="Minimum rating"
        >
          <option value="">Any Rating</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
        </select>

        <select
          className={`${select} ml-auto`}
          value={sp.get('sort') || 'newest'}
          onChange={(e) => update('sort', e.target.value)}
          aria-label="Sort by"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="top">Top Rated</option>
          <option value="az">A–Z</option>
        </select>
      </div>
    </div>
  );
}

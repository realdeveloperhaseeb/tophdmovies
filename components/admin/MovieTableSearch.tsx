'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function MovieTableSearch({ categories }: { categories: { slug: string; name: string }[] }) {
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get('q') || '');

  const push = (params: URLSearchParams) => {
    params.delete('page');
    router.push(`/admin/movies?${params.toString()}`);
  };

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const params = new URLSearchParams(sp.toString());
          if (q.trim()) params.set('q', q.trim());
          else params.delete('q');
          push(params);
        }}
        className="flex-1"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search movies by title…"
          className="input"
        />
      </form>
      <select
        className="rounded-btn border border-border bg-surface px-3 py-2 text-sm"
        value={sp.get('category') || ''}
        onChange={(e) => {
          const params = new URLSearchParams(sp.toString());
          if (e.target.value) params.set('category', e.target.value);
          else params.delete('category');
          push(params);
        }}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
      <select
        className="rounded-btn border border-border bg-surface px-3 py-2 text-sm"
        value={sp.get('status') || ''}
        onChange={(e) => {
          const params = new URLSearchParams(sp.toString());
          if (e.target.value) params.set('status', e.target.value);
          else params.delete('status');
          push(params);
        }}
      >
        <option value="">All Status</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  );
}

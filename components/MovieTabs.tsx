'use client';

import { useState } from 'react';
import type { MovieWithRelations } from '@/lib/types';
import { formatRuntime, formatRating, formatDate } from '@/lib/utils';

const TABS = ['overview', 'trailer', 'download'] as const;
type Tab = (typeof TABS)[number];

const LABELS: Record<Tab, string> = {
  overview: 'Overview',
  trailer: 'Trailer',
  download: 'Download',
};

export function MovieTabs({
  movie,
  initialTab = 'overview',
}: {
  movie: MovieWithRelations;
  initialTab?: Tab;
}) {
  const [tab, setTab] = useState<Tab>(TABS.includes(initialTab) ? initialTab : 'overview');

  const downloads = [
    { q: '480p', url: movie.download_480, size: movie.size_480 },
    { q: '720p', url: movie.download_720, size: movie.size_720 },
    { q: '1080p', url: movie.download_1080, size: movie.size_1080 },
  ].filter((d) => d.url);

  // All panels are rendered into the HTML (good for SEO/crawlers) and
  // toggled with the `hidden` attribute. Only the trailer iframe is mounted
  // lazily when its tab is opened.
  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-border sm:gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            aria-selected={tab === t}
            className={`-mb-px border-b-2 px-3 py-3 text-base font-semibold transition-colors sm:px-5 ${
              tab === t
                ? 'border-accent text-accent'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            {LABELS[t]}
          </button>
        ))}
      </div>

      <div className="py-6">
        {/* Overview */}
        <section hidden={tab !== 'overview'} className="space-y-8">
          <div>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">
              {movie.title} ({movie.year}) — Full Story & Review
            </h2>
            <p className="whitespace-pre-line text-[15px] leading-relaxed text-white/75 sm:text-base">
              {movie.overview || 'No overview has been added for this movie yet.'}
            </p>
          </div>

          {movie.cast.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-bold sm:text-xl">Cast</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {movie.cast.map((c) => (
                  <div key={c.id} className="rounded-btn border border-border bg-surface px-3 py-2.5">
                    <p className="text-sm font-semibold">{c.actor_name}</p>
                    {c.character_name && <p className="text-xs text-white/50">as {c.character_name}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(movie.director || movie.producer || movie.writer) && (
            <div className="grid gap-3 sm:grid-cols-3">
              {movie.director && <Crew label="Director" value={movie.director} />}
              {movie.producer && <Crew label="Producer" value={movie.producer} />}
              {movie.writer && <Crew label="Writer" value={movie.writer} />}
            </div>
          )}

          <div>
            <h2 className="mb-3 text-lg font-bold sm:text-xl">Movie Details</h2>
            <table className="w-full overflow-hidden rounded-card border border-border text-[15px]">
              <tbody className="divide-y divide-border">
                <DetailRow label="Title" value={movie.title} />
                <DetailRow label="Release Year" value={movie.year ? String(movie.year) : '—'} />
                <DetailRow label="Runtime" value={formatRuntime(movie.runtime)} />
                <DetailRow label="Language" value={movie.language || '—'} />
                <DetailRow label="Genres" value={movie.genres.map((g) => g.name).join(', ') || '—'} />
                <DetailRow label="Country" value={movie.country || '—'} />
                <DetailRow label="Rating" value={`${formatRating(movie.rating)} / 10`} />
                <DetailRow label="Quality" value={downloads.map((d) => d.q).join(', ') || 'HD'} />
                <DetailRow label="Added" value={formatDate(movie.created_at)} />
              </tbody>
            </table>
          </div>
        </section>

        {/* Trailer */}
        <section hidden={tab !== 'trailer'}>
          {movie.youtube_id ? (
            <>
              <h2 className="mb-3 text-xl font-bold sm:text-2xl">Watch {movie.title} Trailer</h2>
              <div className="relative aspect-video w-full overflow-hidden rounded-card border border-border">
                {tab === 'trailer' && (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${movie.youtube_id}`}
                    title={`${movie.title} ${movie.year ?? ''} official trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <p className="mt-4 text-[15px] text-white/60">
                Watch the official trailer for <strong>{movie.title}</strong>
                {movie.year ? ` (${movie.year})` : ''} before you download. Use the Download tab to
                grab the film in your preferred quality — 480p, 720p or 1080p.
              </p>
            </>
          ) : (
            <p className="text-white/50">No trailer has been added for this movie yet.</p>
          )}
        </section>

        {/* Download */}
        <section hidden={tab !== 'download'}>
          <h2 className="mb-2 text-xl font-bold sm:text-2xl">
            Download {movie.title} ({movie.year}) in HD
          </h2>
          <p className="mb-5 text-[15px] text-white/60">
            Choose your preferred quality below to download {movie.title}
            {movie.language ? ` (${movie.language})` : ''} in 480p, 720p or 1080p.
          </p>
          {downloads.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {downloads.map((d) => (
                <div
                  key={d.q}
                  className="flex flex-col rounded-card border border-border bg-surface p-5 text-center"
                >
                  <span className="badge mx-auto bg-accent text-black">{d.q}</span>
                  <p className="mt-3 text-2xl font-extrabold">{d.q}</p>
                  <p className="mt-1 text-sm text-white/50">{d.size || 'Size N/A'} • MP4</p>
                  <a
                    href={d.url as string}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-primary mt-4"
                  >
                    ⬇ Download {d.q}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/50">Download links are not available for this movie yet.</p>
          )}
          <p className="mt-5 rounded-btn border border-border bg-surface px-4 py-3 text-xs text-white/50">
            ⚠ We do not host these files. Links point to external sources. Access third-party content
            at your own risk.
          </p>
        </section>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="w-40 bg-surface px-4 py-2.5 font-semibold text-white/70">{label}</td>
      <td className="px-4 py-2.5 text-white/80">{value}</td>
    </tr>
  );
}

function Crew({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-btn border border-border bg-surface px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
      <p className="mt-0.5 font-semibold">{value}</p>
    </div>
  );
}

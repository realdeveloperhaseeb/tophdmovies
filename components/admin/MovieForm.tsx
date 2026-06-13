'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { saveMovie, type ActionState } from '@/lib/actions';
import { slugify } from '@/lib/utils';
import type { MovieWithRelations, Category, Genre } from '@/lib/types';

const initial: ActionState = {};

export function MovieForm({
  movie,
  categories,
  genres,
}: {
  movie?: MovieWithRelations | null;
  categories: Category[];
  genres: Genre[];
}) {
  const [state, formAction] = useFormState(saveMovie, initial);

  const [title, setTitle] = useState(movie?.title ?? '');
  const [slug, setSlug] = useState(movie?.slug ?? '');
  const [slugTouched, setSlugTouched] = useState(Boolean(movie?.slug));

  const selectedCats = new Set(movie?.categories.map((c) => c.id) ?? []);
  const selectedGenres = new Set(movie?.genres.map((g) => g.id) ?? []);

  const [cast, setCast] = useState<{ actor: string; character: string }[]>(
    movie?.cast.length
      ? movie.cast.map((c) => ({ actor: c.actor_name, character: c.character_name ?? '' }))
      : [{ actor: '', character: '' }]
  );

  return (
    <form action={formAction} className="space-y-8 pb-24">
      {movie?.id && <input type="hidden" name="id" value={movie.id} />}

      {state.error && (
        <div className="rounded-card border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.error}
        </div>
      )}

      {/* General */}
      <Section title="General Info">
        <Grid>
          <Field label="Title" full>
            <input
              name="title"
              required
              className="input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!slugTouched) setSlug(slugify(e.target.value));
              }}
            />
          </Field>
          <Field label="Slug" full hint="Auto-generated from title. Editable.">
            <input
              name="slug"
              className="input"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugTouched(true);
              }}
            />
          </Field>
          <Field label="Year">
            <input name="year" type="number" className="input" defaultValue={movie?.year ?? ''} />
          </Field>
          <Field label="Runtime (minutes)">
            <input name="runtime" type="number" className="input" defaultValue={movie?.runtime ?? ''} />
          </Field>
          <Field label="Language">
            <input name="language" className="input" defaultValue={movie?.language ?? ''} />
          </Field>
          <Field label="Country">
            <input name="country" className="input" defaultValue={movie?.country ?? ''} />
          </Field>
          <Field label="Rating (out of 10)">
            <input
              name="rating"
              type="number"
              step="0.1"
              min="0"
              max="10"
              className="input"
              defaultValue={movie?.rating ?? ''}
            />
          </Field>
        </Grid>
      </Section>

      {/* Media */}
      <Section title="Media">
        <Grid>
          <Field label="Poster Image URL" full>
            <input name="poster_url" className="input" defaultValue={movie?.poster_url ?? ''} placeholder="https://…" />
          </Field>
          <Field label="Backdrop Image URL" full>
            <input name="backdrop_url" className="input" defaultValue={movie?.backdrop_url ?? ''} placeholder="https://…" />
          </Field>
          <Field label="YouTube Trailer Video ID" full hint="Just the ID, e.g. dQw4w9WgXcQ">
            <input name="youtube_id" className="input" defaultValue={movie?.youtube_id ?? ''} placeholder="dQw4w9WgXcQ" />
          </Field>
        </Grid>
      </Section>

      {/* Description */}
      <Section title="Description">
        <Field label="Full Overview / Review">
          <textarea
            name="overview"
            rows={12}
            className="input resize-y"
            defaultValue={movie?.overview ?? ''}
          />
        </Field>
        <Field label="Short Description (shown on cards, max 160 chars)">
          <input
            name="short_description"
            maxLength={160}
            className="input"
            defaultValue={movie?.short_description ?? ''}
          />
        </Field>
      </Section>

      {/* Cast & Crew */}
      <Section title="Cast & Crew">
        <Grid>
          <Field label="Director">
            <input name="director" className="input" defaultValue={movie?.director ?? ''} />
          </Field>
          <Field label="Producer">
            <input name="producer" className="input" defaultValue={movie?.producer ?? ''} />
          </Field>
          <Field label="Writer">
            <input name="writer" className="input" defaultValue={movie?.writer ?? ''} />
          </Field>
        </Grid>

        <div className="mt-4">
          <p className="label">Cast (up to 10)</p>
          <div className="space-y-2">
            {cast.map((c, i) => (
              <div key={i} className="flex gap-2">
                <input
                  name="cast_actor"
                  placeholder="Actor name"
                  className="input"
                  value={c.actor}
                  onChange={(e) =>
                    setCast((prev) => prev.map((x, j) => (j === i ? { ...x, actor: e.target.value } : x)))
                  }
                />
                <input
                  name="cast_character"
                  placeholder="Character name"
                  className="input"
                  value={c.character}
                  onChange={(e) =>
                    setCast((prev) =>
                      prev.map((x, j) => (j === i ? { ...x, character: e.target.value } : x))
                    )
                  }
                />
                <button
                  type="button"
                  onClick={() => setCast((prev) => prev.filter((_, j) => j !== i))}
                  className="shrink-0 rounded-btn border border-border px-3 text-white/50 hover:text-red-400"
                  aria-label="Remove cast member"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {cast.length < 10 && (
            <button
              type="button"
              onClick={() => setCast((prev) => [...prev, { actor: '', character: '' }])}
              className="btn-outline mt-2 py-2 text-sm"
            >
              + Add cast member
            </button>
          )}
        </div>
      </Section>

      {/* Genres & Categories */}
      <Section title="Genres & Categories">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="label">Genres</p>
            <CheckGrid name="genres" items={genres} selected={selectedGenres} />
          </div>
          <div>
            <p className="label">Categories (a movie can belong to several)</p>
            <CheckGrid name="categories" items={categories} selected={selectedCats} />
          </div>
        </div>
      </Section>

      {/* Download links */}
      <Section title="Download Links">
        {(['480', '720', '1080'] as const).map((q) => (
          <Grid key={q}>
            <Field label={`Download URL ${q}p`}>
              <input
                name={`download_${q}`}
                className="input"
                defaultValue={(movie?.[`download_${q}` as keyof MovieWithRelations] as string) ?? ''}
                placeholder="https://…"
              />
            </Field>
            <Field label={`File size ${q}p`}>
              <input
                name={`size_${q}`}
                className="input"
                defaultValue={(movie?.[`size_${q}` as keyof MovieWithRelations] as string) ?? ''}
                placeholder={q === '480' ? '400 MB' : q === '720' ? '900 MB' : '2.1 GB'}
              />
            </Field>
          </Grid>
        ))}
      </Section>

      {/* Embed players */}
      <Section title="Embed Player URLs">
        <Grid>
          {(['480', '720', '1080'] as const).map((q) => (
            <Field key={q} label={`Embed URL ${q}p`} full>
              <input
                name={`embed_${q}`}
                className="input"
                defaultValue={(movie?.[`embed_${q}` as keyof MovieWithRelations] as string) ?? ''}
                placeholder="iframe src URL"
              />
            </Field>
          ))}
        </Grid>
      </Section>

      {/* Featured flags */}
      <Section title="Visibility">
        <div className="flex flex-wrap gap-6">
          <Checkbox name="is_featured" label="Featured (hero carousel)" defaultChecked={!!movie?.is_featured} />
          <Checkbox name="is_trending" label="Trending" defaultChecked={!!movie?.is_trending} />
          <Checkbox name="is_top_rated" label="Top Rated" defaultChecked={!!movie?.is_top_rated} />
        </div>
      </Section>

      {/* Sticky save bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur lg:left-64">
        <div className="flex items-center justify-end gap-3 px-4 py-3 sm:px-6">
          <SubmitButton status="draft" label="Save as Draft" variant="outline" />
          <SubmitButton status="published" label="Publish" variant="primary" />
        </div>
      </div>
    </form>
  );
}

function SubmitButton({
  status,
  label,
  variant,
}: {
  status: 'draft' | 'published';
  label: string;
  variant: 'primary' | 'outline';
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      name="status"
      value={status}
      disabled={pending}
      className={variant === 'primary' ? 'btn-primary' : 'btn-outline'}
    >
      {pending ? 'Saving…' : label}
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-card border border-border bg-surface p-5">
      <h2 className="mb-4 text-lg font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  children,
  full,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
  hint?: string;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="label">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-white/40">{hint}</p>}
    </div>
  );
}

function Checkbox({
  name,
  label,
  defaultChecked,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} className="h-4 w-4 accent-accent" />
      {label}
    </label>
  );
}

function CheckGrid({
  name,
  items,
  selected,
}: {
  name: string;
  items: { id: number; name: string }[];
  selected: Set<number>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-card border border-border bg-bg p-3 sm:grid-cols-2">
      {items.map((it) => (
        <label key={it.id} className="flex cursor-pointer items-center gap-2 text-sm">
          <input
            type="checkbox"
            name={name}
            value={it.id}
            defaultChecked={selected.has(it.id)}
            className="h-4 w-4 accent-accent"
          />
          {it.name}
        </label>
      ))}
    </div>
  );
}

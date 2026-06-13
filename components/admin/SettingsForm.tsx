'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveSettings, type ActionState } from '@/lib/actions';
import type { Settings } from '@/lib/types';
import type { Movie } from '@/lib/types';

const initial: ActionState = {};

export function SettingsForm({
  settings,
  movies,
}: {
  settings: Settings;
  movies: Pick<Movie, 'id' | 'title'>[];
}) {
  const [state, action] = useFormState(saveSettings, initial);

  return (
    <form action={action} className="max-w-2xl space-y-5">
      {state.ok && (
        <div className="rounded-card border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
          Settings saved.
        </div>
      )}
      {state.error && (
        <div className="rounded-card border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.error}
        </div>
      )}

      <Field label="Site Name">
        <input name="site_name" className="input" defaultValue={settings.site_name ?? ''} />
      </Field>
      <Field label="Site Tagline">
        <input name="site_tagline" className="input" defaultValue={settings.site_tagline ?? ''} />
      </Field>
      <Field label="Default Meta Description">
        <textarea
          name="default_meta_description"
          rows={3}
          className="input resize-y"
          defaultValue={settings.default_meta_description ?? ''}
        />
      </Field>
      <Field label="Footer Disclaimer Text">
        <textarea
          name="footer_disclaimer"
          rows={3}
          className="input resize-y"
          defaultValue={settings.footer_disclaimer ?? ''}
        />
      </Field>
      <Field label="Featured Movie for Hero">
        <select name="featured_movie_id" className="input" defaultValue={settings.featured_movie_id ?? ''}>
          <option value="">— None —</option>
          {movies.map((m) => (
            <option key={m.id} value={m.id}>
              {m.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Admin Email (contact form notifications)">
        <input name="admin_email" type="email" className="input" defaultValue={settings.admin_email ?? ''} />
      </Field>

      <Submit />
    </form>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary">
      {pending ? 'Saving…' : 'Save Settings'}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  );
}

import { getSettings, getPublishedMovies } from '@/lib/queries';
import { SettingsForm } from '@/components/admin/SettingsForm';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  let settings = {};
  let movies: { id: number; title: string }[] = [];
  try {
    settings = await getSettings();
    movies = (await getPublishedMovies(200, 0)).map((m) => ({ id: m.id, title: m.title }));
  } catch {
    /* empty */
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-extrabold">Settings</h1>
      <p className="mb-6 text-sm text-white/50">Configure your site’s identity and defaults.</p>
      <SettingsForm settings={settings} movies={movies} />
    </div>
  );
}

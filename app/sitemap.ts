import type { MetadataRoute } from 'next';
import { query } from '@/lib/db';
import { getCategories } from '@/lib/queries';
import { SITE_URL } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1.0, changeFrequency: 'daily' },
    { url: `${SITE_URL}/movies`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${SITE_URL}/categories`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/about`, priority: 0.4, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/contact`, priority: 0.4, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/dmca`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/disclaimer`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  try {
    const movies = await query<{ slug: string; updated_at: string }>(
      "SELECT slug, updated_at FROM movies WHERE status = 'published' ORDER BY updated_at DESC LIMIT 5000"
    );
    const categories = await getCategories();

    const moviePages: MetadataRoute.Sitemap = movies.map((m) => {
      const d = m.updated_at ? new Date(m.updated_at.replace(' ', 'T')) : null;
      return {
        url: `${SITE_URL}/movie/${m.slug}`,
        lastModified: d && !Number.isNaN(d.getTime()) ? d : undefined,
        priority: 0.9,
        changeFrequency: 'weekly' as const,
      };
    });

    const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
      url: `${SITE_URL}/category/${c.slug}`,
      priority: 0.6,
      changeFrequency: 'weekly' as const,
    }));

    return [...staticPages, ...categoryPages, ...moviePages];
  } catch (err) {
    console.error('[sitemap] error:', err);
    return staticPages;
  }
}

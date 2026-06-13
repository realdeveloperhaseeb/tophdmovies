import { NextResponse } from 'next/server';
import { getMoviesByCategorySlug } from '@/lib/queries';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = (searchParams.get('slug') || '').trim();
  if (!slug) return NextResponse.json({ movies: [] });
  try {
    const { movies } = await getMoviesByCategorySlug(slug, 8, 0);
    return NextResponse.json({ movies });
  } catch {
    return NextResponse.json({ movies: [] });
  }
}

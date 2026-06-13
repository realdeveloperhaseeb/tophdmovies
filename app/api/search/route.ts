import { NextResponse } from 'next/server';
import { searchSuggestions } from '@/lib/queries';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  if (q.length < 2) return NextResponse.json({ results: [] });
  try {
    const results = await searchSuggestions(q, 6);
    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ results: [] });
  }
}

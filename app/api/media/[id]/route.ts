import { getMedia } from '@/lib/media';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  if (!/^[a-f0-9]{8,48}$/.test(params.id)) {
    return new Response('Not found', { status: 404 });
  }
  let media: Awaited<ReturnType<typeof getMedia>> = null;
  try {
    media = await getMedia(params.id);
  } catch {
    return new Response('Error', { status: 500 });
  }
  if (!media) return new Response('Not found', { status: 404 });

  return new Response(new Uint8Array(media.data), {
    status: 200,
    headers: {
      'Content-Type': media.mime,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

import { NextResponse } from 'next/server';
import { saveMedia } from '@/lib/media';

// Protected by middleware (matches /api/admin/:path*, requires session).
export const runtime = 'nodejs';

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

export async function POST(req: Request) {
  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid upload.' }, { status: 400 });
  }

  const file = fd.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file received.' }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: 'Only image files (JPG, PNG, WebP, GIF, AVIF) are allowed.' },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Image is too large (max 8 MB).' }, { status: 400 });
  }

  try {
    const buf = Buffer.from(await file.arrayBuffer());
    const id = await saveMedia(buf, file.type);
    return NextResponse.json({ url: `/api/media/${id}` });
  } catch (err) {
    console.error('[upload] failed:', err);
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}

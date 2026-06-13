import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Lightweight DB diagnostic. Visit /api/health to see whether the app can
// reach the database. Returns only an error CODE/message (never credentials).
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const env = {
    DB_HOST: process.env.DB_HOST || '(unset)',
    DB_NAME: process.env.DB_NAME || '(unset)',
    DB_USER: process.env.DB_USER || '(unset)',
    DB_PORT: process.env.DB_PORT || '(unset)',
    DB_PASS_set: Boolean(process.env.DB_PASS),
  };
  try {
    const rows = await query<{ c: number }>('SELECT COUNT(*) AS c FROM movies');
    return NextResponse.json({ db: 'ok', movies: rows[0]?.c ?? 0, env });
  } catch (err: unknown) {
    const e = err as { code?: string; errno?: number; message?: string };
    return NextResponse.json(
      { db: 'error', code: e.code, errno: e.errno, message: e.message, env },
      { status: 500 }
    );
  }
}

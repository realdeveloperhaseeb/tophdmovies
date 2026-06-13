import { NextResponse } from 'next/server';
import { checkCredentials, createSessionToken, SESSION_COOKIE, sessionCookieOptions } from '@/lib/auth';

export async function POST(req: Request) {
  let username = '';
  let password = '';
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await req.json().catch(() => ({}));
    username = String(body.username || '');
    password = String(body.password || '');
  } else {
    const fd = await req.formData();
    username = String(fd.get('username') || '');
    password = String(fd.get('password') || '');
  }

  if (!checkCredentials(username, password)) {
    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
  }

  const token = await createSessionToken(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return res;
}

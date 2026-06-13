import { NextResponse } from 'next/server';
import { createContactMessage } from '@/lib/queries';

const SUBJECTS = ['General', 'DMCA', 'Advertise', 'Bug Report'];

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const subject = String(body.subject || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!SUBJECTS.includes(subject)) {
    return NextResponse.json({ error: 'Invalid subject.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  try {
    await createContactMessage({ name, email, subject, message });
  } catch {
    return NextResponse.json({ error: 'Could not save your message. Try again.' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

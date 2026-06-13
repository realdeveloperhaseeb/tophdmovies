'use client';

import { useState } from 'react';

const SUBJECTS = ['General', 'DMCA', 'Advertise', 'Bug Report'];

export function ContactForm({ defaultSubject = 'General' }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      subject: fd.get('subject'),
      message: fd.get('message'),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }
      setStatus('sent');
      form.reset();
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-btn border border-accent/40 bg-accent/10 p-5 text-center">
        <p className="font-semibold text-accent">Thank you! Your message has been sent.</p>
        <p className="mt-1 text-sm text-white/60">We’ll get back to you as soon as possible.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="input" placeholder="Your name" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="subject">
          Subject
        </label>
        <select id="subject" name="subject" defaultValue={defaultSubject} className="input">
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="input resize-y"
          placeholder="How can we help?"
        />
      </div>

      {status === 'error' && <p className="text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={status === 'sending'} className="btn-primary">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

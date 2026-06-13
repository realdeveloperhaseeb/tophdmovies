'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export function ImageUpload({
  name,
  label,
  defaultValue,
  aspect = 'video',
  hint,
}: {
  name: string;
  label: string;
  defaultValue?: string | null;
  aspect?: 'poster' | 'video';
  hint?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Upload failed.');
      else setUrl(data.url);
    } catch {
      setError('Upload failed. Please try again.');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  const box = aspect === 'poster' ? 'h-48 w-32' : 'h-28 w-48';

  return (
    <div className="sm:col-span-2">
      <label className="label">{label}</label>
      {/* The actual value submitted with the form (internal /api/media path or URL). */}
      <input type="hidden" name={name} value={url} />

      <div className="flex flex-wrap items-start gap-4">
        <div
          className={`relative ${box} shrink-0 overflow-hidden rounded-card border border-border bg-bg`}
        >
          {url ? (
            <Image src={url} alt="" fill sizes="200px" className="object-cover" unoptimized />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-white/30">
              No image
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFile}
            className="hidden"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              className="btn-outline py-2 text-sm"
            >
              {busy ? 'Uploading…' : url ? 'Replace image' : 'Upload image'}
            </button>
            {url && !busy && (
              <button
                type="button"
                onClick={() => setUrl('')}
                className="rounded-btn border border-border px-3 py-2 text-sm text-white/50 hover:text-red-400"
              >
                Remove
              </button>
            )}
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <p className="text-xs text-white/40">{hint || 'JPG, PNG, WebP or GIF — up to 8 MB.'}</p>
        </div>
      </div>
    </div>
  );
}

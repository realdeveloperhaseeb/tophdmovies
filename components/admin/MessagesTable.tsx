'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toggleMessageRead, removeMessage } from '@/lib/actions';
import { formatDate } from '@/lib/utils';
import type { ContactMessage } from '@/lib/types';

export function MessagesTable({ messages }: { messages: ContactMessage[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [, start] = useTransition();
  const router = useRouter();

  const open = (m: ContactMessage) => {
    const next = openId === m.id ? null : m.id;
    setOpenId(next);
    if (next && !m.is_read) {
      start(async () => {
        await toggleMessageRead(m.id, true);
        router.refresh();
      });
    }
  };

  if (messages.length === 0) {
    return (
      <div className="rounded-card border border-border bg-surface p-10 text-center text-white/40">
        No messages yet.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {messages.map((m) => {
        const isOpen = openId === m.id;
        return (
          <div key={m.id} className="overflow-hidden rounded-card border border-border bg-surface">
            <button
              onClick={() => open(m)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left"
            >
              {!m.is_read && <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />}
              <div className="min-w-0 flex-1">
                <p className={`truncate ${m.is_read ? 'font-medium text-white/80' : 'font-bold'}`}>
                  {m.name} <span className="text-white/40">• {m.subject}</span>
                </p>
                <p className="truncate text-xs text-white/40">{m.email}</p>
              </div>
              <span className="shrink-0 text-xs text-white/40">{formatDate(m.created_at)}</span>
            </button>

            {isOpen && (
              <div className="border-t border-border px-4 py-4">
                <p className="whitespace-pre-line text-sm leading-relaxed text-white/75">
                  {m.message}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject)}`} className="btn-primary py-2 text-sm">
                    Reply by email
                  </a>
                  <button
                    onClick={() =>
                      start(async () => {
                        await toggleMessageRead(m.id, !m.is_read);
                        router.refresh();
                      })
                    }
                    className="btn-outline py-2 text-sm"
                  >
                    Mark as {m.is_read ? 'unread' : 'read'}
                  </button>
                  <button
                    onClick={() => {
                      if (!confirm('Delete this message?')) return;
                      start(async () => {
                        await removeMessage(m.id);
                        setOpenId(null);
                        router.refresh();
                      });
                    }}
                    className="rounded-btn border border-border px-3 py-2 text-sm font-semibold text-red-400 hover:border-red-400/60"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

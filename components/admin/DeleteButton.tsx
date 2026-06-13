'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export function DeleteButton({
  action,
  id,
  label = 'Delete',
  confirmText = 'Are you sure you want to delete this? This cannot be undone.',
  className = '',
}: {
  action: (id: number) => Promise<void>;
  id: number;
  label?: string;
  confirmText?: string;
  className?: string;
}) {
  const [pending, start] = useTransition();
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (!confirm(confirmText)) return;
        start(async () => {
          await action(id);
          router.refresh();
        });
      }}
      className={
        className ||
        'rounded-btn border border-border px-3 py-1.5 text-sm font-semibold text-red-400 transition-colors hover:border-red-400/60 disabled:opacity-50'
      }
    >
      {pending ? '…' : label}
    </button>
  );
}

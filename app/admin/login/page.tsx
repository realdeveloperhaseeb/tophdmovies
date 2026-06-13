import { Suspense } from 'react';
import { LoginForm } from '@/components/admin/LoginForm';

export const metadata = { title: 'Admin Login', robots: { index: false } };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <Suspense fallback={<div className="text-white/50">Loading…</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

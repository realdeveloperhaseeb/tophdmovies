import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { getUnreadMessageCount } from '@/lib/queries';
import { AdminShell } from '@/components/admin/AdminShell';

export const dynamic = 'force-dynamic';

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect('/admin/login');

  let unread = 0;
  try {
    unread = await getUnreadMessageCount();
  } catch {
    /* db may be unconfigured */
  }

  return <AdminShell unreadCount={unread}>{children}</AdminShell>;
}

import { getContactMessages } from '@/lib/queries';
import { MessagesTable } from '@/components/admin/MessagesTable';

export const dynamic = 'force-dynamic';

export default async function AdminMessagesPage() {
  let messages: Awaited<ReturnType<typeof getContactMessages>> = [];
  try {
    messages = await getContactMessages();
  } catch {
    /* empty */
  }

  const unread = messages.filter((m) => !m.is_read).length;

  return (
    <div>
      <h1 className="mb-1 text-2xl font-extrabold">Contact Messages</h1>
      <p className="mb-6 text-sm text-white/50">
        {messages.length} total • {unread} unread
      </p>
      <MessagesTable messages={messages} />
    </div>
  );
}

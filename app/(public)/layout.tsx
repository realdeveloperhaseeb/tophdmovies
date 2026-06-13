import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getSetting } from '@/lib/queries';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  let disclaimer: string | undefined;
  try {
    disclaimer = (await getSetting('footer_disclaimer')) || undefined;
  } catch {
    // DB not configured yet — fall back to default disclaimer in Footer.
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer disclaimer={disclaimer} />
    </div>
  );
}

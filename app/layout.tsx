import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Movie Information, Reviews, Trailers & HD Downloads`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Discover movies, read reviews, watch trailers and find HD download links in 480p, 720p and 1080p. Your home for movie discovery.',
  applicationName: SITE_NAME,
  keywords: [
    'movie download',
    'download movies in HD',
    '480p movies',
    '720p movies',
    '1080p movies',
    'full movie download',
    'watch movie trailers',
    'Hollywood movies download',
    'Bollywood movies download',
    SITE_NAME,
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — Movie Information, Reviews, Trailers & HD Downloads`,
    description:
      'Discover movies, read reviews, watch trailers and find HD download links in 480p, 720p and 1080p.',
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'B-NM9lvtaM0KLyePdvm_hkBg37gxTNaCmP1Ww_8A-Wo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-bg text-white antialiased">{children}</body>
    </html>
  );
}

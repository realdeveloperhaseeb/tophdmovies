/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow posters/backdrops from any external host (admin pastes URLs).
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
    // Serve images directly (no /_next/image optimizer). This lets our
    // generated SVG posters work, and avoids the CPU/memory-heavy optimizer
    // on shared Node hosting. SVGs are vector (tiny) so optimization is moot.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;

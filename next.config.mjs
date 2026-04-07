/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  transpilePackages: ['gsap', '@gsap/react'],

  // ─── Anti-iframe & suspension headers ────────────────────────────────────
  // Applied to EVERY response. Prevents embedding on any external site.
  // To lift suspension: set NEXT_PUBLIC_SUSPENDED=false and redeploy.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

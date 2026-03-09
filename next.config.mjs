/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  transpilePackages: ['gsap', '@gsap/react'],
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'flowbite.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'flowbite.s3.amazonaws.com',
      'localhost',
      'firebasestorage.googleapis.com',
      'www.traintap.ro',
      'kaapo-fit-angular.vercel.app',
    ],
  },
};

module.exports = nextConfig;

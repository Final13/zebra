/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.gravatar.com'],
    disableStaticImages: true,
  },
};

export default nextConfig;

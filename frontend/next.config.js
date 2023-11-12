/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ibb.co", "i.ibb.co", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;

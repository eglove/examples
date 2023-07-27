/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// eslint-disable-next-line functional/immutable-data,unicorn/prefer-module
module.exports = nextConfig;

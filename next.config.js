const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        port: '',
        pathname: '/weather/64x64/**',
      },
    ],
  },
};

module.exports =
  process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);

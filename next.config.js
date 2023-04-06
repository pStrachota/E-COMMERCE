/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig

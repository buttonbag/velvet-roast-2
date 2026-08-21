/** @type {import('next').NextConfig} */

const imagesUrl = process.env.WP_IMAGES_URL;

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: imagesUrl,
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

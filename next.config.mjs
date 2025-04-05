/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // domains: ["assets.co.dev"], // Keep if needed, or remove if only using remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.co.dev',
        // port: '', // Optional port
        // pathname: '/account123/**', // Optional path
      },
      {
        protocol: 'https',
        hostname: 'landing-page-images-seo.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
  webpack: (config, context) => {
    config.optimization.minimize = process.env.NEXT_PUBLIC_CO_DEV_ENV !== "preview";
    return config;
  }
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_PLAN: process.env.STRIPE_PLAN,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new Dotenv plugin to the plugins array
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  async redirects() {
    return [
      {
        source: "/Home/Articles/Should-I-Rest-During-Recovery",
        destination: "/Home/Articles/Rest-During-DPDR-Anxiety-Recovery",
        permanent: true,
      },
      {
        source: "/Home/Articles/New-Anxiety-Symptoms-Every-Week",
        destination: "/Home/Articles/New-Anxiety-Symptoms-Every-Week-Day-Month",
        permanent: true,
      },
      {
        source: "/Home/Home",
        destination: "/",
        permanent: true,
      },
      // You can add more redirect objects here if needed
    ];
  },
};

module.exports = nextConfig;

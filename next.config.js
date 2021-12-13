/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  optimizeFonts: false,
  staticPageGenerationTimeout: 60,
  swcMinify: true,
  experimental: {
    pageEnv: true,
    scrollRestoration: true,
    externalDir: true,
    reactRoot: "concurrent",
    concurrentFeatures: true,
  },
};

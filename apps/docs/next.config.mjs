// @ts-check
import withBundleAnalyzerImport from "@next/bundle-analyzer";
import withNextraImport from "nextra";

const withBundleAnalyzer = withBundleAnalyzerImport({
  enabled: process.env.ANALYZE === "true",
});

const withNextra = withNextraImport({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  flexsearch: true,
  staticImage: true,
  defaultShowCopyCode: true,
});

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@acme/ui": {
      transform: "@acme/ui/{{ kebabCase member }}",
    },
  },
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const plugins = [withBundleAnalyzer, withNextra];

const nextComposePlugins = plugins.reduce(
  (acc, plugin) => plugin(acc),
  nextConfig
);

export default nextComposePlugins;

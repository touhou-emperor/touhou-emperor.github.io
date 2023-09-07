const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  cleanDistDir: true,
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);

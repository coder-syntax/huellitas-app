import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, "") ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const manualBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const manualAssetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: manualBasePath || (isGithubActions ? `/${repo}` : ""),
  assetPrefix: manualAssetPrefix || (isGithubActions ? `/${repo}/` : undefined),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

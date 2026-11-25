import type { NextConfig } from "next";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "helix-tech-website";
const isGithubPages = process.env.GITHUB_PAGES === "true";
// Read the real environment variable. Turbopack (Next 16.1) does not inline
// next.config `env` into client bundles, so asset() never saw this prefix.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (isGithubPages ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub project pages: https://<user>.github.io/<repo>/
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;

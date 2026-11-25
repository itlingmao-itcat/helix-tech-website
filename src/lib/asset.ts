/**
 * Prefix public asset paths with the GitHub Pages project path.
 * Set NEXT_PUBLIC_BASE_PATH in the build environment (see deploy-pages.yml).
 * Do not pass this through next.config `env` — Turbopack does not inline it.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

// utils/getAssetURL.ts

function normalizePathSegment(segment: string): string {
  return segment.replace(/^\/+|\/+$/g, "");
}

export function getPublicAssetURL(...segments: string[]): string {
  const normalizedPath = segments
    .map(normalizePathSegment)
    .filter(Boolean)
    .join("/");

  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export function getPageAssetURL(page: string, ...segments: string[]): string {
  return getPublicAssetURL("assets", "pages", page, ...segments);
}

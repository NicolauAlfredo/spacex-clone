export function getPublicAssetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

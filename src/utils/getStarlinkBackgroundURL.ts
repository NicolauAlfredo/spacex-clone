import { getPublicAssetPath } from "./getPublicAssetPath";

export const getStarlinkBackgroundURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/starlink/backgrounds/${filename}`);
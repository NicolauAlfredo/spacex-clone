import { getPublicAssetPath } from "./getPublicAssetPath";

export const getStarlinkImageURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/starlink/images/${filename}`);
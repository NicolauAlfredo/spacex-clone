import { getPublicAssetPath } from "./getPublicAssetPath";

type MediaType = "images" | "videos";

export function getPageMediaURL(page: string, mediaType: MediaType, fileName: string): string {
  return getPublicAssetPath(`assets/pages/${page}/${mediaType}/${fileName}`)
}
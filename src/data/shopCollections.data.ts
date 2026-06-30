import { getPublicAssetPath } from "../utils/getPublicAssetPath";
import type { ShopCollection } from "../types/shopCollection.types";

export const shopCollections: ShopCollection[] = [
  {
    id: "x-collection",
    title: "[ X Collection ]",
    image: getPublicAssetPath(
      "assets/pages/shopx/x-collection/images/x-model-v4.webp",
    ),
    alt: "X Collection",
    href: "/shop?collection=x",
  },
  {
    id: "xai-collection",
    title: "[ xAI Collection ]",
    image: getPublicAssetPath(
      "assets/pages/shopx/xai-collection/images/xai-model.webp",
    ),
    alt: "xAI Collection",
    href: "/shop?collection=xai",
  },
];

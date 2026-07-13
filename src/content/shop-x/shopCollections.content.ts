import type { ShopCollection } from "../../types/shop-x/shopCollection.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const shopCollections: ShopCollection[] = [
  {
    id: "x-collection",
    title: "[ X Collection ]",
    image: getPageAssetURL(
      "shopx",
      "x-collection",
      "images",
      "x-model-v4.webp",
    ),
    alt: "X Collection",
    href: "/shop?collection=x",
  },
  {
    id: "xai-collection",
    title: "[ xAI Collection ]",
    image: getPageAssetURL(
      "shopx",
      "xai-collection",
      "images",
      "xai-model.webp",
    ),
    alt: "xAI Collection",
    href: "/shop?collection=xai",
  },
];

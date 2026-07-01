import type { AffordableInternetContent } from "../types/affordableInternet.types";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const getStarlinkImageURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/starlink/backgrounds/${filename}`);

export const content: AffordableInternetContent = {
  title: "Fast, affordable internet",
  description: "No upfront hardware cost in select areas.",
  priceLabel: "STARTING AT",
  price: 55,
  starlinkBackground: {
    desktop: getStarlinkImageURL("v4_night_sky_desktop.webp"),
    mobile: getStarlinkImageURL("v4_night_sky_mobile.webp"),
    alt: "Fast, affordable internet",
  },
};

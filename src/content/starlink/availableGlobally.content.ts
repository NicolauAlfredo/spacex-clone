import type { StarlinkContent } from "../../types/starlink/starlinkcontent.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const content: StarlinkContent = {
  title: "Available globally",
  description:
    "Delivering reliable connectivity in 160+ countries, territories, and other markets around the world.",
  background: {
    desktop: getPageAssetURL("starlink", "backgrounds", "green_roof.webp"),
    mobile: getPageAssetURL("starlink", "backgrounds", "green_roof.webp"),
    alt: "green_roof",
  },
};

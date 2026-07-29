import type { StarlinkContent } from "../../types/starlink/starlinkcontent.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const content: StarlinkContent = {
  title: "Plug it in. Point at sky.",
  description:
    "Starlink is built for self-installation and comes with everything you need to get online in minutes.",
  background: {
    desktop: getPageAssetURL(
      "starlink",
      "backgrounds",
      "residential_yard.webp",
    ),
    mobile: getPageAssetURL("starlink", "backgrounds", "roof_sunny.webp"),
    alt: "Car on ice",
  },
};

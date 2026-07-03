import type { StarlinkContent } from "../types/starlinkcontent.types";
import { getStarlinkBackgroundURL } from "../utils/getStarlinkBackgroundURL";

export const content: StarlinkContent = {
  title: "Plug it in. Point at sky.",
  description: "Starlink is built for self-installation and comes with everything you need to get online in minutes.",
  background: {
    desktop: getStarlinkBackgroundURL("residential_yard.webp"),
    mobile: getStarlinkBackgroundURL("roof_sunny.webp"),
    alt: "Car on ice",
  },
};
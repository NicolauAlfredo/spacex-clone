import type { StarlinkContent } from "../types/starlinkcontent.types";
import { getStarlinkBackgroundURL } from "../utils/getStarlinkBackgroundURL";


export const content: StarlinkContent = {
  title: "Available globally",
  description: "Delivering reliable connectivity in 160+ countries, territories, and other markets around the world.",
  background: {
    desktop: getStarlinkBackgroundURL("green_roof.webp"),
    mobile: getStarlinkBackgroundURL("green_roof.webp"),
    alt: "green_roof",
  },
};
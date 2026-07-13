import type { StarlinkContent } from "../../types/starlink/starlinkcontent.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const content: StarlinkContent = {
  title: "Internet for travel, road trips, and commutes",
  description:
    "High-speed internet that moves with you, even in dead zones. In-motion use available in select areas.",
  background: {
    desktop: getPageAssetURL("starlink", "backgrounds", "car_on_ice.webp"),
    mobile: getPageAssetURL("starlink", "backgrounds", "car_on_ice.webp"),
    alt: "Car on ice",
  },
};

import type { StarlinkContent } from "../types/starlinkcontent.types";
import { getStarlinkBackgroundURL } from "../utils/getStarlinkBackgroundURL";

export const content: StarlinkContent = {
  title: "Internet for travel, road trips, and commutes",
  description: "High-speed internet that moves with you, even in dead zones. In-motion use available in select areas.",
  background: {
    desktop: getStarlinkBackgroundURL("car_on_ice.webp"),
    mobile: getStarlinkBackgroundURL("car_on_ice.webp"),
    alt: "Car on ice",
  },
};
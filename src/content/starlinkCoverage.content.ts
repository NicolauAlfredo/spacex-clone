import type { StarlinkContent } from "../types/starlinkcontent.types";
import { getStarlinkImageURL } from "./affordableInternet.content";

export const content: StarlinkContent = {
  title: "Internet for travel, road trips, and commutes",
  description: "High-speed internet that moves with you, even in dead zones. In-motion use available in select areas.",
  background: {
    desktop: getStarlinkImageURL("car_on_ice.webp"),
    mobile: getStarlinkImageURL("car_on_ice.webp"),
    alt: "Car on ice",
  },
};
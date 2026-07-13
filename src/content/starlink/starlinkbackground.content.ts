import type { StarlinkBackground } from "../../types/starlink/starlinkbackground.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const starlinkBackgrounds: StarlinkBackground[] = [
  {
    id: "night-sky",
    mobile: getPageAssetURL(
      "starlink",
      "backgrounds",
      "v4_night_sky_mobile.webp",
    ),
    desktop: getPageAssetURL(
      "starlink",
      "backgrounds",
      "v4_night_sky_desktop.webp",
    ),
    alt: "Starlink night sky background",
  },
  {
    id: "lightning-sky",
    mobile: getPageAssetURL(
      "starlink",
      "backgrounds",
      "v4_lightning_mobile.webp",
    ),
    desktop: getPageAssetURL(
      "starlink",
      "backgrounds",
      "v4_lightning_desktop.webp",
    ),
    alt: "Starlink lightning sky background",
  },
];

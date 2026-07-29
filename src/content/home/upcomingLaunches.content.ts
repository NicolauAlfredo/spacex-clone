import type { UpcomingLaunch } from "../../types/home/upcomingLaunches.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const upcomingLaunches: UpcomingLaunch[] = [
  {
    id: "starlink-mission-1",
    missionTitle: "Starlink Mission",
    countdown: "June 7, 2026 04:00 - 08:00 Italy Time",
    imageSrc: getPageAssetURL("home", "images", "slc-4-e.jpg"),
    imageAlt: "SpaceX launch site",
  },
  {
    id: "starlink-mission-2",
    missionTitle: "Starlink Mission",
    countdown: "June 8, 2026 12:07 - 16:07 Italy Time",
    imageSrc: getPageAssetURL("home", "images", "crew-12-mobile.jpg"),
    imageAlt: "SpaceX crew mission",
  },
];

import { getPageAssetURL } from "../../utils/getAssetURL";
import type { HeroSectionProps } from "../../types/moon/moonHeroSection.types";

export const moonHero: HeroSectionProps = {
  variant: "moon",
  title: "the moon",
  subtitle: "Returning humans to lunar missions",
  mediaType: "video",
  mediaSrc: getPageAssetURL("moon", "videos", "moon-video.mp4"),
};

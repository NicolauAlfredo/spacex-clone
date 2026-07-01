import type { HeroSectionProps } from "../types/heroSection.types";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const getMoonVideoURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/moon/videos/${filename}`);

export const moonHero: HeroSectionProps = {
  variant: "moon",
  title: "the moon",
  subtitle: "Returning humans to lunar missions",
  mediaType: "video",
  mediaSrc: getMoonVideoURL("moon-video.mp4"),
};

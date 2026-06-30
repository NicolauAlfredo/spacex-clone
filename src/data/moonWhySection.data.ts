import type { MoonWhySection } from "../types/moonWhy.types";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const getMoonImageURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/moon/images/${filename}`);

export const moonWhySection: MoonWhySection = {
  title: "Why the moon?",
  paragraph:
    "The Moon is one of Earth's closest habitable neighbors and provides an opportunity to gain valuable experience for missions to Mars and beyond.",
  image: getMoonImageURL("moon_why.jpg"),
  imageAlt: "Moon surface",
  stats: [
    { label: "Diameter", value: "3,475 km / 2,159 mi" },
    { label: "Day Length", value: "29.5 Earth days" },
    { label: "Gravity", value: "16.6% of Earth" },
    { label: "Avg Distance from Earth", value: "384,400 km / 238,855 mi" },
    { label: "Age", value: "4.51 billion years" },
  ],
};

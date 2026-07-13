import type { MoonStatsData } from "./moonStats.types";

export type MoonWhySection = {
  title: string;
  paragraph: string;
  image: string;
  imageAlt: string;
  stats: MoonStatsData[];
};

export type HeroMediaType = "video" | "image";

export type HeroSectionProps = {
  variant: string;
  title: string;
  subtitle: string;
  mediaType: HeroMediaType;
  mediaSrc: string;
};

export type ImageBackgroundProps = {
  mediaType: "image";
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  alt?: string;
};

export type VideoBackgroundProps = {
  mediaType: "video";
  desktopVideoSrc?: string;
  mobileVideoSrc?: string;
  posterSrc?: string;
};

export type MediaBackgroundProps = | ImageBackgroundProps | VideoBackgroundProps;

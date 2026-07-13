import type { MediaBackgroundProps } from "../../../../types/home/mediaBackground.types";

export function MediaBackground(props: MediaBackgroundProps) {
  if (props.mediaType === "video") {
    return (
      <video
        className="hero-section__video"
        autoPlay
        muted
        loop
        playsInline
        poster={props.posterSrc}
      >
        <source
          src={props.mobileVideoSrc}
          media="(max-width: 767px)"
          type="video/mp4"
        />

        <source
          src={props.desktopVideoSrc}
          media="(min-width: 768px)"
          type="video/mp4"
        />
      </video>
    );
  }

  return (
    <picture>
      <source srcSet={props.desktopImageSrc} media="(min-width: 1024px)" />
      <img
        className="hero-section__image"
        src={props.mobileImageSrc}
        alt={props.alt}
      />
    </picture>
  );
}

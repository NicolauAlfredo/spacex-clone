export type MediaBackgroundProps = {
  mediaType: "video" | "image";
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  alt?: string;
  desktopVideoSrc?: string;
  mobileVideoSrc?: string;
};

export function MediaBackground({
  mediaType,
  desktopImageSrc,
  mobileImageSrc,
  alt,
  desktopVideoSrc,
  mobileVideoSrc,
}: MediaBackgroundProps) {
  return (
    <>
      {mediaType === "image" && (
        <picture className="hero-section__image">
          <source media="(min-width: 1440px)" srcSet={desktopImageSrc} />

          <img className="section-picture" srcSet={mobileImageSrc} alt={alt} />
        </picture>
      )}

      {mediaType === "video" && (
        <video className="hero-section__video" autoPlay muted loop playsInline>
          <source
            src={desktopVideoSrc}
            media="(max-width: 767px)"
            type="video/mp4"
          />

          <source
            src={mobileVideoSrc}
            media="(min-width: 768px)"
            type="video/mp4"
          />
        </video>
      )}
    </>
  );
}

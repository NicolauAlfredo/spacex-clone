type CarouselCardProps = {
  title: string;
  text: string;
  src: string;
  alt: string;
};

export const StarlinkCarouselCard = ({
  title,
  text,
  src,
  alt,
}: CarouselCardProps) => {
  return (
    <div className="starlink-section--high-speed__card">
      <div className="starlink-section--high-speed__card--container--image">
        <img
          src={src}
          alt={alt}
          className="starlink-section--high-speed__card--image"
        />
      </div>
      <div className="starlink-section--high-speed__card--container--text">
        <p className="starlink-section--high-speed__card--text">
          <strong>{title}</strong> {text}
        </p>
      </div>
    </div>
  );
};

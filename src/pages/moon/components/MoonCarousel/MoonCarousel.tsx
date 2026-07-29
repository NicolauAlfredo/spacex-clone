import { useState } from "react";
import type { CarouselCollection } from "../../../../types/moon/moonCarousel.types";
import { CarouselArrowLeft } from "./Icons/CarouselArrowLeft";
import { CarouselArrowRight } from "./Icons/CarouselArrowRight";
import "./MoonCarousel.css";

interface CarouselProps {
  collection: CarouselCollection;
}

export default function Carousel({ collection }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = collection.slides[activeIndex];
  const desktopImage = activeSlide.desktopImage || activeSlide.image;
  const mobileImage = activeSlide.mobileImage || activeSlide.image;
  const altText = activeSlide.alt || activeSlide.title;
  const modifierClass =
    activeSlide.modifierClass ||
    activeSlide.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  function handleNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === collection.slides.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function handlePrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? collection.slides.length - 1 : currentIndex - 1,
    );
  }

  function handleSelectSlide(index: number) {
    setActiveIndex(index);
  }

  return (
    <section
      className={`moon-carousel moon-carousel--${collection.id} moon-carousel__slide--${modifierClass}`}
    >
      <div className="moon-carousel__image-container">
        <picture className="moon-carousel__picture">
          <source media="(min-width: 768px)" srcSet={desktopImage} />
          <img
            className="moon-carousel__image"
            src={mobileImage}
            alt={altText}
          />
        </picture>
        <div className="moon-carousel__overlay" />
      </div>

      <article
        className={`moon-carousel__content moon-carousel__content--${activeSlide.contentPosition}`}
      >
        <h2 className="moon-carousel__title">{activeSlide.title}</h2>
        <p className="moon-carousel__description">{activeSlide.description}</p>
      </article>

      <button
        className="moon-carousel__button moon-carousel__button--previous"
        type="button"
        onClick={handlePrevious}
        aria-label="Previous slide"
      >
        <CarouselArrowLeft />
      </button>

      <button
        className="moon-carousel__button moon-carousel__button--next"
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <CarouselArrowRight />
      </button>

      <div className="moon-carousel__dots">
        {collection.slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`moon-carousel__dot ${
              index === activeIndex ? "moon-carousel__dot--active" : ""
            }`}
            type="button"
            onClick={() => handleSelectSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

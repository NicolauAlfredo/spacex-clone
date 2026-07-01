import { useState } from "react";
import type { CarouselCollection } from "../../../../types/moonCarousel.types";
import { CarouselArrowLeft } from "./Icons/CarouselArrowLeft";
import { CarouselArrowRight } from "./Icons/CarouselArrowRight";
interface CarouselProps {
  collection: CarouselCollection;
}

import "./MoonCarousel.css";

export default function Carousel({ collection }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = collection.slides[activeIndex];

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
    <section className="moon-carousel">
      <img
        className="moon-carousel__image"
        src={activeSlide.image}
        alt={activeSlide.title}
      />

      <div className="moon-carousel__overlay" />

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
      >
        <CarouselArrowLeft />
      </button>

      <button
        className="moon-carousel__button moon-carousel__button--next"
        type="button"
        onClick={handleNext}
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
          />
        ))}
      </div>
    </section>
  );
}

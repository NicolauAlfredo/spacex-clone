import { useState } from "react";
import { MoonCarouselSlides } from "../../../../data/MoonCarouselData";
import "./MoonCarousel.css"

export default function MoonCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    const activeSlide = MoonCarouselSlides[activeIndex];

    function handleNext() {
        setActiveIndex((currentIndex) => currentIndex === MoonCarouselSlides.length - 1 ? 0 : currentIndex + 1);
    }

    function handlePrevious() {
        setActiveIndex((currentIndex) => currentIndex === 0 ? MoonCarouselSlides.length - 1 : currentIndex - 1);
    }

    function handleSelectSlide(index: number) {
        setActiveIndex(index);
    }

    return (
        <section className="moon-carousel">
            <img className="moon-carousel__image" src={activeSlide.image} alt={activeSlide.title} />

            <div className="moon-carousel__overlay" />

            <article className={`moon-carousel__content moon-carousel__content--${activeSlide.contentPosition}`}>
                <h2 className="moon-carousel__title">{activeSlide.title}</h2>

                <p className="moon-carousel__description">{activeSlide.description}</p>

            </article>

            <button className="moon-carousel__button moon-carousel__button--previous" type="button" onClick={handlePrevious} > &lt; </button> 
            <button className="moon-carousel__button moon-carousel__button--next" type="button" onClick={handleNext} > &gt;  </button> 

            <div className="moon-carousel__dots">
                {MoonCarouselSlides.map((slide, index) =>
                (
                    <button className={`moon-carousel__dot ${index === activeIndex ? "moon-carousel__dot--active" : "" }`} key={slide.id} type="button" onClick={() => handleSelectSlide(index)}></button>
                )
            )}
            </div>
        </section>
    )
}
import "./HighSpeedInternet.css";
import { useRef } from 'react';
import { StarlinkCarouselCard } from '../../../../components/Buttons/buttons.carousel.card'

export const HighSpeedInternet = () => {    
  const scrollRef = useRef<HTMLDivElement>(null); // Crea un ref agganciato al div del carosello, inizialmente null

  const handleChevronClick = (direction: 'prev' | 'next') => { //Funzione che gestisce il click sulle frecce
    if (!scrollRef.current) return; // Qui sesce se  il ref non è agganciato al codice 
     
    const scrollAmount = 300; //Definisce di quanti pixel scorrere ad ogni click
    const isNext = direction === 'next'; //Se il click è sulla freccia sinistra o destra
    
    scrollRef.current.scrollBy({
      left: isNext ? scrollAmount : -scrollAmount, //+300px verso destra o -300px verso sinistra
      behavior: 'smooth',
    });
  };

  return (
    <section className="starlink-section--high-speed">
      <div className="starlink-section--high-speed--background"></div>
      <h2 className="starlink-section--high-speed__title">High-speed internet that works for you</h2>

      <div className="starlink-section--high-speed__carousel--scroll" ref={scrollRef}>
        <div className="starlink-section--high-speed__carousel">
          <StarlinkCarouselCard
            src="../assets/pages/starlink/images/montana_dusk_sky.webp"
            alt="Montana dusk Sky"
            title="Home internet in rural and remote areas."
            text="Starlink Residential provides high-speed, reliable connectivity even in the most remote areas beyond cell service reach."
          />
          <StarlinkCarouselCard
            src="../assets/pages/starlink/images/mini_backpacker_on_mountain.webp"
            alt="Backpacker on mountain"
            title="Connect on the go."
            text="Use Starlink Roam for traveling, RVing, camping, boating, and more. Easily navigate, stream, and stay connected without dead zones or slow speeds."
          />
          <StarlinkCarouselCard
            src="../assets/pages/starlink/images/residential_2.webp"
            alt="House"
            title="Speeds up to 400+ Mbps."
            text="Enjoy the freedom of seamless 4K streaming on multiple devices at once, working from home, online gaming, social media browsing, and more."
          />
          <StarlinkCarouselCard
            src="../assets/pages/starlink/images/winter.webp"
            alt="Winter"
            title="Reliable and resilient connectivity."
            text="Stay online through extreme weather, power outages, and natural disasters when traditional coverage fails."
          />
          <StarlinkCarouselCard
            src="../assets/pages/starlink/images/mini_stickerless_ground.webp"
            alt="Mini stickerless ground"
            title="Ultra portable."
            text="Starlink Mini's compact and lightweight design lets you connect on the go—deploying reliable connectivity in minutes when you need it."
          />
        </div>
      </div>

      <div className="starlink-section--high-speed__container--chevron">
        <button
          className="starlink-section--high-speed__btn--chevron starlink-section--high-speed__chevron--prev"
          onClick={() => handleChevronClick('prev')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 15L12 8L19 15" transform="rotate(270 12 12)" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          className="starlink-section--high-speed__btn--chevron starlink-section--high-speed__chevron--next"
          onClick={() => handleChevronClick('next')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 15L12 8L19 15" transform="rotate(90 12 12)" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

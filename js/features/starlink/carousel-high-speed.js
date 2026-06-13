
// Seleziona il contenitore scrollabile 
const scrollContainer = document.querySelector(".starlink-section--high-speed__carousel--scroll");

// Seleziona il carosello 
const carousel = document.querySelector(".starlink-section--high-speed__carousel");

// Seleziona gli elementi principali del carosello "Perfect Set"
const prevButton = document.querySelector(".starlink-section--high-speed__chevron--prev"); // freccia sinistra
const nextButton = document.querySelector(".starlink-section--high-speed__chevron--next"); // freccia destra

// Tolleranza per evitare problemi di arrotondamento nello scroll (pixel)
const SCROLL_TOLERANCE = 8;


/* -Calcola il massimo valore di scroll orizzontale possibile
 * (larghezza totale contenuto - larghezza visibile)
 */
const getMaxScrollLeft = () => {
  return scrollContainer.scrollWidth - scrollContainer.clientWidth;
};


/* - Determina quanto scrollare ad ogni click:
 * - larghezza di una card + gap del layout
 * - fallback a 300px se non trova card
 */
const getScrollAmount = () => {
  const card = carousel.querySelector(".starlink-section--high-speed__card");

  if (!card) return 200;

  const carouselStyles = window.getComputedStyle(carousel);
  const gap = parseFloat(carouselStyles.columnGap || carouselStyles.gap) || 0;

  return card.offsetWidth + gap;
};

/**
 * Resetta lo stato visivo delle frecce (rimuove classi temporanee)
 */
const resetVisualState = () => {
  prevButton.classList.remove(
    "starlink-section--high-speed__chevron--plain",
    "starlink-section--high-speed__chevron--clicked",
  );

  nextButton.classList.remove(
    "starlink-section--high-speed__chevron--plain",
    "starlink-section--high-speed__chevron--clicked",
  );
};

/**
 * Aggiorna lo stato delle frecce:
 * - disabilita se siamo all'inizio o alla fine
 * - gestisce classi CSS per stato attivo/disattivo
 */
const updateButtonsState = () => {
  const currentScroll = scrollContainer.scrollLeft;
  const maxScrollLeft = getMaxScrollLeft();

  const isAtStart = currentScroll <= SCROLL_TOLERANCE;
  const isAtEnd = currentScroll >= maxScrollLeft - SCROLL_TOLERANCE;

  prevButton.classList.remove("starlink-section--high-speed__chevron--disabled");
  nextButton.classList.remove("starlink-section--high-speed__chevron--disabled");

  if (isAtStart) {
    prevButton.classList.add("starlink-section--high-speed__chevron--disabled");
    prevButton.classList.remove("starlink-section--high-speed__chevron--plain");
    nextButton.classList.remove("starlink-section--high-speed__chevron--plain");
  }

  if (isAtEnd) {
    nextButton.classList.add("starlink-section--high-speed__chevron--disabled");
    nextButton.classList.remove("starlink-section--high-speed__chevron--plain");
    prevButton.classList.remove("starlink-section--high-speed__chevron--plain");
  }
};

/*
 * Gestisce il click sulle frecce del carosello
 *
 * Logica:
 * - Calcola la nuova posizione di scroll (prev/next)
 * - Applica animazione smooth
 * - Aggiorna stato visivo delle frecce
 */
const handleChevronClick = (direction) => {
  const isNext = direction === "next";
  const scrollAmount = getScrollAmount();
  const maxScrollLeft = getMaxScrollLeft();

  const targetScroll = isNext
    ? Math.min(scrollContainer.scrollLeft + scrollAmount, maxScrollLeft)
    : Math.max(scrollContainer.scrollLeft - scrollAmount, 0);

  resetVisualState();

  // Aggiorna lo stato visivo (feedback utente)
  if (isNext) {
    prevButton.classList.add("starlink-section--high-speed__chevron--plain");
    nextButton.classList.add("starlink-section--high-speed__chevron--clicked");
  } else {
    nextButton.classList.add("starlink-section--high-speed__chevron--plain");
    prevButton.classList.add("starlink-section--high-speed__chevron--clicked");
  }

  // Scroll fluido verso la nuova posizione
  scrollContainer.scrollTo({
    left: targetScroll,
    behavior: "smooth",
  });

  // Dopo l’animazione, resetta lo stato e aggiorna i bottoni
  setTimeout(() => {
    prevButton.classList.remove("starlink-section--high-speed__chevron--clicked");
    nextButton.classList.remove("starlink-section--high-speed__chevron--clicked");

    updateButtonsState();
  }, 500);
};

 // Event listener click freccia sinistra
  prevButton.addEventListener("click", (event) => {
    event.stopPropagation(); // evita effetti collaterali su click globali
    handleChevronClick("prev");
  });

  // Event listener click freccia destra
  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    handleChevronClick("next");
  });

  // Aggiorna stato bottoni durante lo scroll manuale (drag/trackpad)
  scrollContainer.addEventListener("scroll", updateButtonsState);
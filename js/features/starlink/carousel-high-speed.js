
// Seleziona il contenitore scrollabile del carosello
const scrollContainer = document.querySelector(".starlink-section--high-speed__carousel--scroll");

// Seleziona gli elementi principali del carosello "Perfect Set"
const prevButton = document.querySelector(".starlink-section--high-speed__chevron--prev"); // freccia sinistra
const nextButton = document.querySelector(".starlink-section--high-speed__chevron--next"); // freccia destra

// Tolleranza per evitare problemi di arrotondamento nello scroll (pixel)
const SCROLL_TOLERANCE = 8;
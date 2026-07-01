import type { CarouselCollection } from "../types/moonCarousel.types";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const getMoonImageURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/moon/images/${filename}`);

export const moonCarouselCollections: CarouselCollection[] = [
  {
    id: "landing-system",
    variant: "default",
    slides: [
      {
        id: 1,
        title: "Human Landing System",
        description:
          "Starship will land humans on the lunar surface for the first time in more than 50 years under NASA's Artemis missions. Designed to deliver the building blocks of a permanent lunar presence, Starship will land crew members at a region near the lunar South Pole to conduct moonwalks and survey the likely area of a future Moon base.",
        image: getMoonImageURL("hls-surface-elevator_down-desktop.jpg"),
        contentPosition: "top-left",
      },

      {
        id: 2,
        title: "Launch",
        description:
          "Starship landers are built upon the core Starship and Super Heavy vehicles, using technology that is fully and rapidly reusable, cost- effective, and capable of high frequency launches with more than 100 tons of cargo capacity.This foundation enables sustainable exploration of the Moon and Mars.",
        image: getMoonImageURL("hls-launch-desktop.png"),
        contentPosition: "top-left",
      },
      {
        id: 3,
        title: "In-Space Refilling",
        description:
          "Starship utilizes on-orbit propellant depots and tanker vehicles for missions to the Moon. On-orbit refilling enables Starship to deliver up to 100 tons directly to the lunar surface, providing the capability to carry rovers, habitats, and other payloads needed to establish a permanent, and sustainable, presence on the Moon.",
        image: getMoonImageURL("hls-in-space-refilling-desktop.jpg"),
        contentPosition: "top-left",
      },
      {
        id: 4,
        title: "Rendezvous",
        description:
          "Starship uses an androgynous SpaceX docking system capable of serving as the active system or passive system, giving it the capability to rendezvous and dock with a variety of different spacecraft. The system is based on the flight-proven Dragon active docking system.",
        image: getMoonImageURL("hls-rendezvous-desktop.jpg"),
        contentPosition: "bottom-left",
      },
      {
        id: 5,
        title: "Surface Exploration",
        description:
          "Starship provides unparalleled capability to explore the Moon, including the polar regions. Its pressurized cabin and dual airlocks have more than 600 cubic meters of habitable volume and can accommodate a team of explorers for an extended duration on the lunar surface.",
        image: getMoonImageURL("hls-cabin-desktop.jpg"),
        contentPosition: "top-left",
      },
    ],
  },

  {
    id: "lander",
    variant: "compact",
    slides: [
      {
        id: 1,
        title: "Lander",
        description:
          "Using the core Starship vehicle framework, the lander variant adds systems for lunar landing and astronaut surface operations while removing hardware needed for Earth recovery like a vehicle-wide heatshield and flaps. The vehicle is thermally optimized to limit propellant boiloff in transit and while on the lunar surface. The lander can also be configured to deliver large cargo payloads to the lunar surface.",
        image: getMoonImageURL("hls-lander-desktop.jpg"),
        contentPosition: "center-left",
      },
      {
        id: 2,
        title: "Depot",
        description:
          "Starship propellant depots are a subset of the lunar lander variant with many of the crew support systems removed. The propellant tanks have increased volume to maximize propellant capacity and the spacecraft's exterior optical properties are optimized for long duration propellant storage while in Earth orbit.",
        image: getMoonImageURL("hls-depot-desktop.jpg"),
        contentPosition: "center-left",
      },
      {
        id: 3,
        title: "Tanker",
        description:
          "Used to deliver propellant to storage depots or landers in orbit around Earth. The tanker variant shares the same design as the core Starship vehicle and adds docking probes used to link up with other Starships in space.",
        image: getMoonImageURL("hls-tanker-desktop.jpg"),
        contentPosition: "center-left",
      },
    ],
  },
];

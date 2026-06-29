import type { MoonCarouselSlide } from "../types/moonCarousel.type"
import { getPublicAssetPath } from "../utils/getPublicAssetPath"


export const getMoonImageURL = (
    filename: string,
): string =>
    getPublicAssetPath(`assets/pages/moon/images/${filename}`);



export const MoonCarouselSlides: MoonCarouselSlide[] = [
    {
        id: 1,
        title: "Human Landing System",
        description: "Starship will land humans on the lunar surface for the first time in more than 50 years under NASA's Artemis missions. Designed to deliver the building blocks of a permanent lunar presence, Starship will land crew members at a region near the lunar South Pole to conduct moonwalks and survey the likely area of a future Moon base.",
        image: getMoonImageURL("hls-surface-elevator_down-desktop.jpg"),
        contentPosition: "top-left",
    },

    {
        id: 2,
        title: "Launch",
        description: "Starship landers are built upon the core Starship and Super Heavy vehicles, using technology that is fully and rapidly reusable, cost- effective, and capable of high frequency launches with more than 100 tons of cargo capacity.This foundation enables sustainable exploration of the Moon and Mars.",
        image: getMoonImageURL("hls-launch-desktop.png"),
        contentPosition: "top-left",
    }, {
        id: 3,
        title: "In-Space Refilling",
        description: "Starship utilizes on-orbit propellant depots and tanker vehicles for missions to the Moon. On-orbit refilling enables Starship to deliver up to 100 tons directly to the lunar surface, providing the capability to carry rovers, habitats, and other payloads needed to establish a permanent, and sustainable, presence on the Moon.",
        image: getMoonImageURL("hls-in-space-refilling-desktop.jpg"),
        contentPosition: "top-left",
    }, {
        id: 4,
        title: "Rendezvous",
        description: "Starship uses an androgynous SpaceX docking system capable of serving as the active system or passive system, giving it the capability to rendezvous and dock with a variety of different spacecraft. The system is based on the flight-proven Dragon active docking system.",
        image: getMoonImageURL("hls-rendezvous-desktop.jpg"),
        contentPosition: "bottom-left",
    }, {
        id: 5,
        title: "Surface Exploration",
        description: "Starship provides unparalleled capability to explore the Moon, including the polar regions. Its pressurized cabin and dual airlocks have more than 600 cubic meters of habitable volume and can accommodate a team of explorers for an extended duration on the lunar surface.",
        image: getMoonImageURL("hls-cabin-desktop.jpg"),
        contentPosition: "top-left",
    },

]
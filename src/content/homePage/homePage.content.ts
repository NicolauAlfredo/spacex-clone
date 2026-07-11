import type { HomeSectionContent } from "../../types/homePage/home.types";
import { getPageMediaURL } from "../../utils/getPageMediaURL";

export const heroContent: HomeSectionContent[] = [
  {
    id: "starship",
    date: "MAY 22, 2026",
    title: "STARSHIP'S TWELFTH FLIGHT TEST",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "Starships-twelfth-flight-test.mp4",
      ),
      mobileVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "Starships-twelfth-flight-test-mobile.mp4",
      ),
      alt: "STARSHIP'S TWELFTH FLIGHT TEST",
    },
    button: {
      title: "WATCH",
      href: "/starlink",
    },
    position: "center-left",
  },

  {
    id: "multiplanetary",
    title: "MAKING LIFE MULTIPLANETARY",
    description:
      "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageMediaURL("home", "videos", "mars-rotation.mp4"),
      mobileVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "Starships-twelfth-flight-test-mobile.mp4",
      ),
      alt: "MAKING LIFE MULTIPLANETARY",
    },
    button: {
      title: "EXPLORE",
      href: "/starlink",
    },
    position: "center-left",
  },

  {
    id: "technology",
    title: "REVOLUTIONIZING SPACE TECHNOLOGY",
    description:
      "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
    background: {
      mediaType: "image",
      desktopImageSrc: getPageMediaURL(
        "home",
        "images",
        "revolutionizing-space-tech-desktop.jpg",
      ),
      mobileImageSrc: getPageMediaURL(
        "home",
        "images",
        "revolutionizing-space-tech-mobile.jpg",
      ),
      alt: "REVOLUTIONIZING SPACE TECHNOLOGY",
    },
    button: {
      title: "LEARN MORE",
      href: "/starlink",
    },
    position: "top-right",
  },

  {
    id: "launch-provider",
    title: "WORLD'S LEADING LAUNCH SERVICE PROVIDER",
    description:
      "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "leading-launch-service.mp4",
      ),
      mobileVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "leading-launch-service-mobile.mp4",
      ),
      alt: "REVOLUTIONIZING SPACE TECHNOLOGY",
    },
    button: {
      title: "RESERVE YOUR RIDE",
      href: "/starlink",
    },
    position: "top-left",
  },

  {
    id: "spaceflight",
    title: "Advancing human spaceflight",
    description:
      "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
    background: {
      mediaType: "image",
      desktopImageSrc: getPageMediaURL(
        "home",
        "images",
        "advancing-human-spaceflight-desktop.jpg",
      ),
      mobileImageSrc: getPageMediaURL(
        "home",
        "images",
        "advancing-human-spaceflight-mobile.jpg",
      ),
      alt: "Advancing human spaceflight",
    },
    button: {
      title: "JOIN A MISSION",
      href: "/starlink",
    },
    position: "top-right",
  },

  {
    id: "starlink",
    title: "Delivering high-speed internet from space",
    description:
      "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "delivering-high-speed.mp4",
      ),
      mobileVideoSrc: getPageMediaURL(
        "home",
        "videos",
        "delivering-high-speed-mobile.mp4",
      ),
      alt: "Delivering high-speed internet from space",
    },
    button: {
      title: "ORDER NOW",
      href: "/starlink",
    },
    position: "center-left",
  },
];

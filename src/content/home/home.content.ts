import type { HomeSectionContent } from "../../types/home/home.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const heroContent: HomeSectionContent[] = [
  {
    id: "starship",
    date: "MAY 22, 2026",
    title: "STARSHIP'S TWELFTH FLIGHT TEST",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "Starships-twelfth-flight-test.mp4",
      ),
      mobileVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "Starships-twelfth-flight-test-mobile.mp4",
      ),
      posterSrc: getPageAssetURL(
        "home",
        "images",
        "revolutionizing-space-tech-mobile.jpg",
      ),
    },
    button: {
      title: "WATCH",
      href: "/starlink",
    },
    position: "center-left",
    modifier: "starship",
  },

  {
    id: "multiplanetary",
    title: "MAKING LIFE MULTIPLANETARY",
    description:
      "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageAssetURL("home", "videos", "mars-rotation.mp4"),
      mobileVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "mars-rotation-mobile.mp4",
      ),
      posterSrc: getPageAssetURL("home", "images", "mars-mobile.jpg"),
    },
    button: {
      title: "EXPLORE",
      href: "/starlink",
    },
    position: "center-left",
    modifier: "multiplanetary",
  },

  {
    id: "technology",
    title: "REVOLUTIONIZING SPACE TECHNOLOGY",
    description:
      "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
    background: {
      mediaType: "image",
      desktopImageSrc: getPageAssetURL(
        "home",
        "images",
        "revolutionizing-space-tech-desktop.jpg",
      ),
      mobileImageSrc: getPageAssetURL(
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
    modifier: "technology",
  },

  {
    id: "launch-provider",
    title: "WORLD'S LEADING LAUNCH SERVICE PROVIDER",
    description:
      "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "leading-launch-service.mp4",
      ),
      mobileVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "leading-launch-service-mobile.mp4",
      ),
      posterSrc: getPageAssetURL(
        "home",
        "images",
        "leading-launch-service-mobile.jpg",
      ),
    },
    button: {
      title: "RESERVE YOUR RIDE",
      href: "/starlink",
    },
    position: "top-left",
    modifier: "launch-provider",
  },

  {
    id: "spaceflight",
    title: "Advancing human spaceflight",
    description:
      "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
    background: {
      mediaType: "image",
      desktopImageSrc: getPageAssetURL(
        "home",
        "images",
        "advancing-human-spaceflight-desktop.jpg",
      ),
      mobileImageSrc: getPageAssetURL(
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
    modifier: "spaceflight",
  },

  {
    id: "starlink",
    title: "Delivering high-speed internet from space",
    description:
      "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
    background: {
      mediaType: "video",
      desktopVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "delivering-high-speed.mp4",
      ),
      mobileVideoSrc: getPageAssetURL(
        "home",
        "videos",
        "delivering-high-speed-mobile.mp4",
      ),
      posterSrc: getPageAssetURL(
        "home",
        "images",
        "delivering-highspeed-mobile.jpg",
      ),
    },
    button: {
      title: "ORDER NOW",
      href: "/starlink",
    },
    position: "center-left",
    modifier: "starlink",
  },
];

import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const getMoonImageURL = (filename: string): string =>
  getPublicAssetPath(`assets/pages/moon/images/${filename}`);

export const moonMissions = {
  title: "Moon Missions",
  desktopImage: getMoonImageURL("starship-moon-desktop.jpg"),
  mobileImage: getMoonImageURL("starship-moon.jpg"),
  imageAlt: "Moon",
  paragraphs: [
    "Starship cargo flights to the lunar surface for research, development, and exploratory missions start no earlier than 2028, at a rate of $100 million per metric ton.",
    "Join a Starship human spaceflight mission now, flying around the Moon or landing on the lunar surface.",
    "For additional information on human spaceflight seat or full mission availability, payload masses, pricing details, and timeframes, please contact",
  ],
  email: "sales@spacex.com",
};

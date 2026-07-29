import { getPageAssetURL } from "../../utils/getAssetURL";

export const moonMissions = {
  title: "Moon Missions",
  desktopImage: getPageAssetURL("moon", "images", "starship-moon-desktop.jpg"),
  mobileImage: getPageAssetURL("moon", "images", "starship-moon.jpg"),
  imageAlt: "Moon",

  paragraphs: [
    {
      text: "Starship cargo flights to the lunar surface for research, development, and exploratory missions start no earlier than 2028, at a rate of $100 million per metric ton.",
    },
    {
      text: "Join a Starship human spaceflight mission now, flying around the Moon or landing on the lunar surface.",
    },
    {
      text: "For additional information on human spaceflight seat or full mission availability, payload masses, pricing details, and timeframes, please contact",
      highlight: "sales@spacex.com",
    },
  ],
};

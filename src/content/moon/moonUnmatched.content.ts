import type { MoonUnmatchedData } from "../../types/moon/moonUnmatched.types";
import { getPageAssetURL } from "../../utils/getAssetURL";

export const moonUnmatchedData: MoonUnmatchedData = {
  title: "Unmatched Capability",
  description: [
    "Designed for interplanetary transport, Starship is singularly capable of delivering the astronauts, supplies, equipment, and science payloads needed for establishing a permanent, sustainable presence on the Moon.",

    "Starship can carry more people and much larger payloads than the Apollo Lunar Module used when humans last explored the Moon. Just one of Starship's dual airlocks has more than double the interior volume of the entire Apollo lander.",
  ],
  image: getPageAssetURL("moon", "images", "hls-capability-desktop.png"),
};

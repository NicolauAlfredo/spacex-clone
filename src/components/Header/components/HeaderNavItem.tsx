export type DropdownKey =
  | "vehicles"
  | "human-spaceflight"
  | "xai"
  | "company"
  | "shop";

export type HeaderLinkItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

export type HeaderNavItemConfig = HeaderLinkItem & {
  dropdownKey?: DropdownKey;
  submenuItems?: HeaderLinkItem[];
};

export const headerNavItems: HeaderNavItemConfig[] = [
  {
    label: "VEHICLES",
    href: "#",
    dropdownKey: "vehicles",
    submenuItems: [
      { label: "STARSHIP", href: "https://www.spacex.com/vehicles/starship" },
      { label: "DRAGON", href: "https://www.spacex.com/vehicles/dragon" },
      { label: "FALCON 9", href: "https://www.spacex.com/vehicles/falcon-9" },
      { label: "FALCON HEAVY", href: "https://www.spacex.com/vehicles/falcon-heavy" },
    ],
  },
  {
    label: "HUMAN SPACEFLIGHT",
    href: "#",
    dropdownKey: "human-spaceflight",
    submenuItems: [
      { label: "OVERVIEW", href: "https://www.spacex.com/humanspaceflight/overview" },
      { label: "SPACE STATION", href: "https://www.spacex.com/humanspaceflight/iss" },
      { label: "EARTH ORBIT", href: "https://www.spacex.com/humanspaceflight/earth" },
      { label: "THE MOON", href: "/moon" },
      { label: "MARS & BEYOND", href: "https://www.spacex.com/humanspaceflight/mars" },
    ],
  },
  { label: "STARLINK", href: "/starlink", newTab: true },
  { label: "STARSHIELD", href: "https://www.spacex.com/starshield" },
  {
    label: "SPACEXAI",
    href: "#",
    dropdownKey: "xai",
    submenuItems: [
      { label: "STARMIND", href: "https://www.spacex.com/spacexai/starmind" },
      { label: "GROK", href: "https://x.ai", newTab: true },
      { label: "GROKIPEDIA", href: "https://grokipedia.com", newTab: true },
      { label: "X", href: "https://x.com", newTab: true },
    ],
  },
  { label: "TERAFAB", href: "https://terafab.ai" },
  {
    label: "COMPANY",
    href: "#",
    dropdownKey: "company",
    submenuItems: [
      { label: "MISSION", href: "https://www.spacex.com/mission" },
      { label: "CAREERS", href: "https://www.spacex.com/careers" },
      { label: "UPDATES", href: "https://www.spacex.com/updates" },
      { label: "CONTENT", href: "https://www.spacex.com/content" },
      { label: "INVESTORS", href: "https://ir.spacex.com", newTab: true },
    ],
  },
  {
    label: "SHOP",
    href: "#",
    dropdownKey: "shop",
    submenuItems: [
      { label: "SPACEX", href: "https://shop.spacex.com", newTab: true },
      { label: "SPACEXAI", href: "/shop-x", newTab: true },
    ],
  },
];

import type { StarlinkPlanGroup } from "../../types/starlink/starlinkplans.types";

export const starlinkPlansHome: StarlinkPlanGroup = {
  footer:
    "Speeds referenced are maximum available speeds, are not guaranteed, and will be slower during times of congestion.",
  plans: [
    {
      title: "Residential - 100 Mbps",
      description:
        "Reliable, affordable home internet service for seamless connectivity.",
      features: ["Unlimited Data", "Good Wi-Fi"],
      price: 55,
      priceLabel: "STARTING AT",
    },
    {
      title: "Residential - 200 Mbps",
      description: "Fast, reliable internet service for everyday home use.",
      features: ["Unlimited Data", "Good Wi-Fi"],
      price: 85,
      priceLabel: "STARTING AT",
    },
    {
      title: "Residential - Max",
      description:
        "Our best performing home internet service with maximum speeds available.",
      features: ["Up to 400+ Mbps", "Unlimited Data", "Good Wi-Fi"],
      price: 130,
      priceLabel: "STARTING AT",
    },
  ],
};

export const starlinkPlansGo: StarlinkPlanGroup = {
  footer:
    "Speeds referenced are maximum available speeds, are not guaranteed, and will be slower during times of congestion.",
  plans: [
    {
      title: "Roam - 100GB",
      description:
        "Up to 300+ Mbps for approximately 1 week of typical use. Reliable connectivity for occasional trips, camping, and getaways. Get unlimited low-speed data after using your Roam data.",
      price: 55,
      priceLabel: "STARTING AT",
    },
    {
      title: "Roam - 300GB",
      description:
        "Up to 300+ Mbps. Reliable connectivity for regular travelers with multiple trips a month. Get unlimited low-speed data after using your Roam data.",
      price: 80,
      priceLabel: "STARTING AT",
    },
    {
      title: "Roam - Unlimited",
      description:
        "Up to 300+ Mbps. Our best performing internet on the go with unlimited high-speed data.",
      price: 175,
      priceLabel: "STARTING AT",
    },
  ],
};

export type UpcomingLaunch = {
  id: string;
  missionTitle: string;
  countdown?: string;
  imageSrc: string;
  imageAlt: string;
};

export type UpcomingLaunchesVariant = "header" | "section";

export type UpcomingLaunchesProps = {
  variant?: UpcomingLaunchesVariant;
};

export type UpcomingLaunchCardProps = {
  launch: UpcomingLaunch;
  countdown?: string;
};

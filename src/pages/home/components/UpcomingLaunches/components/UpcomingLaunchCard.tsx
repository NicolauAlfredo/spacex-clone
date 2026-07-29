import type { UpcomingLaunchCardProps } from "../../../../../types/home/upcomingLaunches.types";
import { ArrowRightIcon } from "../../../../../components/Header/components/Icons/ArrowRightIcon";

export function UpcomingLaunchCard({ launch }: UpcomingLaunchCardProps) {
  return (
    <article className="upcoming-launch__card">
      <div className="upcoming-launch__image">
        <img src={launch.imageSrc} alt={launch.imageAlt} />
      </div>

      <div className="upcoming-launch__content">
        <span className="upcoming-launch__mission-title">
          {launch.missionTitle}
        </span>

        <span className="upcoming-launch__countdown">{launch.countdown}</span>
      </div>

      <span className="upcoming-launch__arrow upcoming-launch__arrow--right">
        <ArrowRightIcon />
      </span>
    </article>
  );
}

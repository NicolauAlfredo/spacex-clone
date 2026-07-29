import { Link } from "react-router-dom";

import { UpcomingLaunchCard } from "./components/UpcomingLaunchCard";
import { upcomingLaunches } from "../../../../content/home/upcomingLaunches.content";
import { GridIcon } from "../../../../components/Header/components/Icons/GridIcon";
import type { UpcomingLaunchesProps } from "../../../../types/home/upcomingLaunches.types";
import { useLaunchCountdown } from "./useLaunchCountdown";

import "./UpcomingLaunches.css";

export function UpcomingLaunches({
  variant = "section",
}: UpcomingLaunchesProps) {
  const countdown = useLaunchCountdown();

  return (
    <section className={`upcoming-launch upcoming-launch--${variant}`}>
      <div className="upcoming-launch__header">
        <span className="upcoming-launch__title">UPCOMING LAUNCHES</span>

        <span className="upcoming-launch__toggle">
          <span className="upcoming-launch__header-countdown">
            {countdown}
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="upcoming-launch__icon upcoming-launch__icon--down"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="upcoming-launch__cards">
        {upcomingLaunches.map((launch) => (
          <UpcomingLaunchCard
            key={launch.id}
            launch={launch}
            countdown={
              launch.id === "starlink-mission-1" ? countdown : undefined
            }
          />
        ))}

        <Link to="#" className="upcoming-launch__link">
          <GridIcon />

          <span className="upcoming-launch__link-text">
            ALL UPCOMING LAUNCHES
          </span>
        </Link>
      </div>
    </section>
  );
}

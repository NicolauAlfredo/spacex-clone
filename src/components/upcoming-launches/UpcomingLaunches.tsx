import { Link } from "react-router-dom";

import { UpcomingLaunchCard } from "./UpcomingLaunchCard";
import { upcomingLaunches } from "../../data/upcomingLaunches";
import { GridIcon } from "../header/components/icons/GridIcon";
import type { UpcomingLaunchesProps } from "../../types/upcomingLaunches.types";

import "./UpcomingLaunches.css";

export function UpcomingLaunches({
  variant = "section",
}: UpcomingLaunchesProps) {
  return (
    <section className={`upcoming-launch upcoming-launch--${variant}`}>
      <div className="upcoming-launch__header">
        <span className="upcoming-launch__title">UPCOMING LAUNCHES</span>

        <span className="upcoming-launch__toggle">
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
          <UpcomingLaunchCard key={launch.id} launch={launch} />
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

import { useEffect, useState } from "react";

const COUNTDOWN_DURATION_MS = 8 * 60 * 60 * 1000;
const countdownEndTime = Date.now() + COUNTDOWN_DURATION_MS;

function formatCountdown(remainingMilliseconds: number): string {
  const totalSeconds = Math.max(0, Math.ceil(remainingMilliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `T-${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function useLaunchCountdown(): string {
  const [countdown, setCountdown] = useState(() =>
    formatCountdown(COUNTDOWN_DURATION_MS),
  );

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(formatCountdown(countdownEndTime - Date.now()));
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return countdown;
}

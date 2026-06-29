"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import portrait from "@/public/portrait.png";
import headshot from "@/public/headshot.jpg";

const INTERVAL_MS = 3000;
const DESKTOP_QUERY = "(min-width: 1024px)";

const IMAGE_CLASSNAME = "object-cover transition-opacity duration-500";

const useIsDesktop = () =>
  useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(DESKTOP_QUERY);
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );

export const AlternatingPortrait = () => {
  const isDesktop = useIsDesktop();
  const [hovering, setHovering] = useState(false);
  const [mobileAlternate, setMobileAlternate] = useState(false);

  const showHeadshot = isDesktop ? hovering : mobileAlternate;

  useEffect(() => {
    if (isDesktop) return;

    const intervalId = setInterval(() => {
      setMobileAlternate((prev) => !prev);
    }, INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isDesktop]);

  return (
    <div
      className="shrink-0 rounded-full w-52 h-72 relative overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Image
        src={portrait}
        alt="Pixel art portrait of Indigo dressed in medieval armor and carrying a sword"
        fill
        priority
        sizes="208px"
        className={cn(
          IMAGE_CLASSNAME,
          "object-[center_17%]",
          showHeadshot ? "opacity-0" : "opacity-100",
        )}
      />
      <Image
        src={headshot}
        alt="Headshot of Indigo Rinearson"
        fill
        sizes="208px"
        className={cn(
          IMAGE_CLASSNAME,
          "object-[center_20%]]",
          showHeadshot ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
};

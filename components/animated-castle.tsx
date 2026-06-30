"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import castle0 from "@/public/castle0.png";
import castle1 from "@/public/castle1.png";
import castle2 from "@/public/castle2.png";
import castle3 from "@/public/castle3.png";
import castle4 from "@/public/castle4.png";
import castle5 from "@/public/castle5.png";
import castle6 from "@/public/castle6.png";
import castle7 from "@/public/castle7.png";
import { cn } from "@/lib/utils";

const CASTLE_FRAMES = [
  castle0,
  castle1,
  castle2,
  castle3,
  castle4,
  castle5,
  castle6,
  castle7,
];

const LAST_FRAME = CASTLE_FRAMES.length - 1;
const FRAME_INTERVAL_MS = 70;

export const AnimatedCastle = ({ onClick }: { onClick?: () => void }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const clearAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const animate = useCallback(
    (direction: "forward" | "reverse") => {
      clearAnimation();

      intervalRef.current = setInterval(() => {
        setFrameIndex((prev) => {
          if (direction === "forward") {
            if (prev >= LAST_FRAME) {
              clearAnimation();
              return LAST_FRAME;
            }
            return prev + 1;
          }

          if (prev <= 0) {
            clearAnimation();
            return 0;
          }
          return prev - 1;
        });
      }, FRAME_INTERVAL_MS);
    },
    [clearAnimation],
  );

  useEffect(() => clearAnimation, [clearAnimation]);

  return (
    <Image
      alt="Pixel art of a castle"
      src={CASTLE_FRAMES[frameIndex]}
      height={500}
      onMouseEnter={() => animate("forward")}
      onMouseLeave={() => animate("reverse")}
      onClick={onClick}
      className={cn("select-none", onClick && "cursor-pointer")}
      draggable={false}
    />
  );
};

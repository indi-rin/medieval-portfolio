"use client";

import { useSyncExternalStore } from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

export const useIsDesktop = () =>
  useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(DESKTOP_QUERY);
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );

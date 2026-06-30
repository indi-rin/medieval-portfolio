import { clsx, type ClassValue } from "clsx";
import { Metamorphous } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const medieval = Metamorphous({
  variable: "--font-medieval-sharp",
  weight: "400",
});

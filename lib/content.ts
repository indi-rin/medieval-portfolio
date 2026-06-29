import type { StaticImageData } from "next/image";
import setGame from "@/public/setgame.png";
import portfolioV1 from "@/public/portfoliov1.png";

export type Project = {
  name: string;
  description: string;
  github: string;
  link?: string;
  date: string;
  image: StaticImageData;
};

// INDI: Flesh out descriptions
export const projects: Project[] = [
  {
    name: "Set Game",
    description:
      "After the Set Daily Puzzle was retired in 2025, some former coworkers and I decided to create our own version since we were such fans of the original.",
    github: "https://github.com/cpoonolly/set-game",
    link: "https://cpoonolly.github.io/set-game/",
    date: "August 2025 – present",
    image: setGame,
  },
  {
    name: "Portfolio v1",
    description:
      "My original portfolio website, built after graduating from Fullstack Academy and including projects I made during the program.",
    github: "https://github.com/indi-rin/portfolio",
    link: "https://indigorinearson.netlify.app/",
    date: " January 2022 – February 2023",
    image: portfolioV1,
  },
];

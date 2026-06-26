import Image from "next/image";
import { ProjectCard, type Project } from "@/components/project-card";
import Anvil from "@/public/anvil.png";

const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full items-center p-6 pb-96">
      <div className="relative z-10 grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:px-16 lg:px-24 xl:px-32 overflow-x-auto justify-items-center">
        {PROJECTS.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>

      <div
        className="pointer-events-none fixed bottom-4 right-0 z-20 md:p-4"
        aria-hidden
      >
        <Image
          alt="Pixel of a medieval blacksmith's anvil"
          src={Anvil}
          height={320}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

// INDI: Draft data
const PROJECTS: Project[] = [
  {
    name: "Set Game",
    description: "Recreating the Set Daily Puzzle with some former coworkers",
    github: "https://github.com/cpoonolly/set-game",
    link: "https://cpoonolly.github.io/set-game/",
    date: "August 2025 – present",
  },
  {
    name: "Portfolio v1",
    description:
      "My original portfolio website, built after graduating from Fullstack Academy",
    github: "https://github.com/indi-rin/portfolio",
    link: "https://indigorinearson.netlify.app/",
    date: " January 2022 – February 2023",
  },
];

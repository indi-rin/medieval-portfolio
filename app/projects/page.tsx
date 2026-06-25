import { ProjectCard, type Project } from "@/components/project-card";

const ProjectsPage = () => {
  return (
    // INDI: Confirm this pb once the actual graphic is added
    <div className="relative flex flex-col flex-1 w-full items-center p-6 pb-56">
      <div className="relative grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:px-16 lg:px-24 xl:px-32 overflow-x-auto justify-items-center">
        {PROJECTS.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 flex h-44 items-center justify-center bg-olive-wood p-4">
        Placeholder for graphic
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

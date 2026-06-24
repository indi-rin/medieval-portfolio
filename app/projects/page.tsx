import { ProjectCard, type Project } from "@/components/project-card";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>

      <div className="bg-olive-wood h-44 flex justify-center items-center p-4 absolute bottom-8 right-8">
        Placeholder for graphic
      </div>
    </div>
  );
};

export default ProjectsPage;

// INDI: Dummy data
const PROJECTS: Project[] = [
  {
    name: "Set Game",
    description: "Recreating the Set Daily Puzzle with some former coworkers",
    github: "https://github.com/indi-rin/portfolio",
    link: "https://indigorinearson.netlify.app/",
    date: "August 2025 – present",
  },
  {
    name: "Portfolio v1",
    description:
      "My original portfolio website, built immediately graduating from my JavaScript bootcamp",
    github: "https://github.com/cpoonolly/set-game",
    link: "https://cpoonolly.github.io/set-game/",
    date: " January 2022 – February 2023",
  },
];

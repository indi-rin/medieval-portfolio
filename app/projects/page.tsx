import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import Anvil from "@/public/anvil.png";
import { projects } from "@/lib/content";

const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full items-center p-6 pb-96">
      <div className="relative z-10 grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:px-16 lg:px-24 xl:px-32 overflow-x-auto justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>

      <div
        className="pointer-events-none fixed bottom-4 right-0 z-20 md:p-4"
        aria-hidden
      >
        <Image
          alt="Pixel art of a medieval blacksmith's anvil"
          src={Anvil}
          height={320}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

"use client";

import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import Anvil from "@/public/anvil.png";
import { projects } from "@/lib/content";
import { useIsDesktop } from "@/lib/hooks";

const ProjectsPage = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="relative flex flex-col flex-1 w-full items-center pt-10 lg:pt-20 px-6 pb-40 lg:pb-64">
      <div className="relative z-10 grid w-full grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-20 md:px-16 lg:px-4 xl:px-32 overflow-x-auto justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>

      <div
        className="pointer-events-none fixed bottom-4 right-0 z-20"
        aria-hidden
      >
        <Image
          alt="Pixel art of a medieval blacksmith's anvil"
          src={Anvil}
          height={isDesktop ? 320 : 200}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

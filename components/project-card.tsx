"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import { GithubIcon, Globe02Icon } from "@hugeicons/core-free-icons";

export type Project = {
  name: string;
  description: string;
  github: string;
  link?: string;
  date: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Item variant="muted">
      <ItemContent className="p-2">
        <ItemTitle className="text-2xl text-dusty-grape font-semibold">
          {project.name}
        </ItemTitle>

        <ItemDescription className="text-base text-charcoal-blue mb-2 flex flex-col gap-1.5">
          <span className="mb-2 italic">{project.date}</span>
          <span>{project.description}</span>
        </ItemDescription>

        <div className="flex flex-row items-center justify-center gap-2.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to the GitHub repo for ${project.name}`}
          >
            <HugeiconsIcon
              icon={GithubIcon}
              className="text-dusty-grape hover:text-dusty-grape/70 transition-colors duration-500"
            />
          </a>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to the deployed website for ${project.name}`}
            >
              <HugeiconsIcon
                icon={Globe02Icon}
                className="text-dusty-grape hover:text-dusty-grape/70 transition-colors duration-500"
              />
            </a>
          )}
        </div>
      </ItemContent>
    </Item>
  );
};

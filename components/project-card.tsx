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
    <Item variant="muted" className="max-w-96">
      <ItemContent className="p-2">
        <ItemTitle className="text-2xl text-dusty-grape">
          {project.name}
        </ItemTitle>

        <ItemDescription className="text-base text-charcoal-blue my-2">
          <p className="mb-2">{project.date}</p>
          <p>{project.description}</p>
        </ItemDescription>

        {/* INDI: Make these links */}
        <div className="flex flex-row items-center justify-center gap-2.5">
          <HugeiconsIcon icon={GithubIcon} className="text-dusty-grape" />
          {project.link && (
            <HugeiconsIcon icon={Globe02Icon} className="text-dusty-grape" />
          )}
        </div>
      </ItemContent>
    </Item>
  );
};

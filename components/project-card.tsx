"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import { GithubIcon, Globe02Icon } from "@hugeicons/core-free-icons";
import { type Project } from "@/lib/content";
import { cn, medieval } from "@/lib/utils";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Item variant="muted" className="p-4">
      <ItemHeader>
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          className="rounded-lg"
        />
      </ItemHeader>
      <ItemContent className="p-2">
        <ItemTitle
          className={cn(
            "text-2xl text-dusty-grape font-semibold",
            medieval.className,
          )}
        >
          {project.name}
        </ItemTitle>

        <ItemDescription className="text-base text-charcoal-blue mb-2 flex flex-col gap-1.5">
          <span className="mb-2 italic">{project.date}</span>
          <span>{project.description}</span>
        </ItemDescription>

        <div className="flex flex-row items-center justify-center gap-2.5 mt-2">
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

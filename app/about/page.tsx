"use client";

import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { AlternatingPortrait } from "@/components/alternating-portrait";
import { useIsDesktop } from "@/lib/hooks";
import { medieval } from "@/lib/utils";

const LINK_CLASSNAME =
  "text-periwinkle hover:text-periwinkle/70 hover:underline underline-offset-3 transition-all duration-500";

const AboutPage = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="flex flex-col lg:flex-row flex-1 justify-center items-center lg:items-start font-sans gap-8 lg:gap-16 p-12 lg:p-20 lg:pt-28">
      <div className="flex flex-col items-center justify-center lg:gap-4">
        <AlternatingPortrait />
        {isDesktop && <Links />}
      </div>

      <div className="text-pale-slate text-lg flex flex-col gap-3 lg:max-w-2/3">
        <p className={cn("text-2xl", medieval.className)}>
          Hi there, I&apos;m Indigo Rinearson.
        </p>
        <p>
          <strong>
            I&apos;m a product-minded full-stack engineer based in Seattle, WA.
          </strong>{" "}
          I love working collaboratively to build software that solves problems
          and delights people, with a focus on UI/UX that is functional,
          beautiful, and accessible.
        </p>
        <p>
          My intro to programming began with courses in Lua and Java in high
          school (
          <a
            href="https://www.lakesideschool.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Lakeside School
          </a>{" "}
          in Seattle, WA) and continued with C++ in college (
          <a
            href="https://www.kenyon.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Kenyon College
          </a>{" "}
          in Gambier, OH), where I majored in Medieval History. In 2021, I
          graduated from the Grace Hopper Program (
          <a
            href="https://www.fullstackacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Fullstack Academy
          </a>{" "}
          in New York, NY).
        </p>
        <p>
          Most recently, I worked at{" "}
          <a
            href="https://www.axios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Axios News
          </a>{" "}
          before my team was spun off into a separate company,{" "}
          <a
            href="https://www.axioshq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Axios HQ
          </a>
          , as first a Solutions Engineer then as a Software Engineer. I shipped
          a variety of features, owning both planning and implementation, across
          our application, including a real-time collaborative editor, a RAG
          chatbot assistant, and an overhaul of the primary workspace.
        </p>
        <p>
          Outside of engineering, I enjoy art, logic puzzles, baking,
          storytelling, ballroom dance, and bouldering.
        </p>

        {!isDesktop && <Links />}
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-row gap-4 mt-4">
      <a
        href="https://github.com/indi-rin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to GitHub profile"
      >
        <HugeiconsIcon
          icon={GithubIcon}
          className="text-light-grey hover:text-periwinkle transition-colors duration-500"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/indigorinearson/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn profile"
      >
        <HugeiconsIcon
          icon={Linkedin02Icon}
          className="text-light-grey hover:text-periwinkle transition-colors duration-500"
        />
      </a>
    </div>
  );
};

export default AboutPage;

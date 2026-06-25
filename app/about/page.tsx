import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const LINK_CLASSNAME =
  "text-periwinkle hover:text-periwinkle/70 transition-colors duration-500";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-1 justify-center items-center font-sans gap-8 lg:gap-16 p-12 lg:p-20">
      <div className="shrink-0 bg-periwinkle rounded-full h-52 px-2 flex justify-center items-center">
        Placeholder for image
      </div>

      <div className="text-pale-slate text-lg flex flex-col gap-1 lg:max-w-2/3">
        <p className="text-xl">Hi there, I'm Indigo Rinearson.</p>
        <p>
          I'm a full-stack software engineer based in Seattle, WA. something
          something UI/UX that is functional, beautiful, and accessible.
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
          in Gambier, OH), where I majored in Medieval History and minored in
          English. In 2021, I graduated from the Grace Hopper Program (
          <a
            href="https://www.fullstackacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSNAME}
          >
            Fullstack Academy
          </a>{" "}
          in New York, NY), an immersive software engineering program centered
          on full-stack JavaScript web development where I took on the
          additional challenge of teaching myself TypeScript to build a mobile
          app for my capstone project.
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
          , as first a Solutions Engineer then as a Software Engineer. I
          planned, developed, and rolled out a variety of features across our
          application, including...
        </p>
        <p>Outside of engineering, I enjoy...</p>

        {/* INDI: Consider moving these to under the graphic depending on bio length */}
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
      </div>
    </div>
  );
};

export default AboutPage;

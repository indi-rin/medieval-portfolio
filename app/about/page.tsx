import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 items-center justify-center font-sans gap-8 md:gap-16">
      <div className="bg-periwinkle rounded-full h-52 px-2 flex justify-center items-center">
        Placeholder for image
      </div>

      <div className="text-pale-slate text-lg flex flex-col gap-1">
        <p className="text-xl">Hi there, I'm Indigo Rinearson.</p>
        <p>I'm a full-stack software engineer who</p>

        <div className="flex flex-row gap-4 mt-4">
          <a
            href="https://github.com/indi-rin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub profile"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              className="text-light-grey hover:text-periwinkle"
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
              className="text-light-grey hover:text-periwinkle"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

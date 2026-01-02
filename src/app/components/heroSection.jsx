import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHandshake } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-8 relative overflow-hidden">
      <div
        className="absolute -z-10 inset-0 mask-fade-y"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col items-center">
        <Image
          src="/memoji-computer.png"
          width={100}
          height={100}
          alt="person peeking from behind laptop"
        />
        <div className="flex flex-row items-center gap-4 border border-ctp-overlay-0 rounded-full bg-ctp-surface-0 px-3 py-1.5">
          <span
            className="size-2 rounded-full bg-ctp-green"
            aria-hidden="true"
          ></span>
          <span className="text-sm font-semibold">
            Available For New Jobs & Project
          </span>
        </div>
      </div>
      <div className="max-w-lg space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Rijal M Kamil <span className="block">Full Stack Developer</span>
        </h1>
        <p className="md:text-lg text-ctp-subtext-1 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          non illo recusandae beatae porro minima!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a
          href="#project"
          className="md:text-lg font-semibold text-ctp-crust inline-flex items-center gap-2 rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-teal to-ctp-green bg-top-left px-4 py-2 transition-all duration-150 ease-out hover:bg-top-right"
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            className="w-5 h-5"
            aria-hidden="true"
          />
          Explore My Work
        </a>
        <a
          href="#contact"
          className="md:text-lg font-semibold text-ctp-crust inline-flex items-center gap-2 rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-blue to-ctp-sky bg-top-left px-4 py-2 transition-all duration-150 ease-out hover:bg-top-right"
        >
          <FontAwesomeIcon
            icon={faHandshake}
            className="w-5 h-5"
            aria-hidden="true"
          />
          Let’s Connect
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

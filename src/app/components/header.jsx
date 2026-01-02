import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faCircleUser,
  faDiagramProject,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="w-full flex justify-center fixed top-0 z-30 py-4">
      <nav>
        <ul className="flex flex-wrap justify-center gap-2">
          <li className="rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-peach to-ctp-red bg-top-left transition-all duration-300 ease-out hover:bg-top-right">
            <a
              href="#home"
              className="sm:text-sm font-semibold text-ctp-crust flex items-center gap-1 px-3 py-1.5"
            >
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="size-4 md:size-3.5"
                aria-hidden="true"
              />
              Home
            </a>
          </li>
          <li className="rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-pink to-ctp-mauve bg-top-left transition-all duration-300 ease-out hover:bg-top-right">
            <a
              href="#about"
              className="sm:text-sm font-semibold text-ctp-crust flex items-center gap-1 px-3 py-1.5"
            >
              <FontAwesomeIcon
                icon={faCircleUser}
                className="size-4 md:size-3.5"
                aria-hidden="true"
              />
              About
            </a>
          </li>
          <li className="rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-teal to-ctp-green bg-top-left transition-all duration-300 ease-out hover:bg-top-right">
            <a
              href="#project"
              className="sm:text-sm font-semibold text-ctp-crust flex items-center gap-1 px-3 py-1.5"
            >
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="size-4 md:size-3.5"
                aria-hidden="true"
              />
              Project
            </a>
          </li>
          <li className="rounded-full bg-size-[150%_100%] bg-linear-to-r from-ctp-blue to-ctp-sky bg-top-left transition-all duration-300 ease-out hover:bg-top-right">
            <a
              href="#contact"
              className="sm:text-sm font-semibold text-ctp-crust flex items-center gap-1 px-3 py-1.5"
            >
              <FontAwesomeIcon
                icon={faAddressBook}
                className="size-4 md:size-3.5"
                aria-hidden="true"
              />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// src/components/Navbar.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-black text-size-xl font-bold m-2">
          <p className="tablet:text-3xl laptop:text-4xl desktop:text-5xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
            OMM
          </p>
        </div>
        <Button className="block laptop:hidden text-white" onClick={toggleMenu}>
          {/* Setting the Hamburger Icon */}
          {isOpen ? (
            <HamburgerIcon></HamburgerIcon>
          ) : (
            <HamburgerIcon></HamburgerIcon>
          )}
        </Button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } laptop:block laptop:flex laptop:items-center`}
        >
          <Link to="/" className="text-white hover:text-orange-500">
            <Button className="text-white mr-6 tablet:text-base laptop:text-xl desktop:text-2xl">
              <div className="m-2">
                <svg
                  className="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
              </div>
              Home
            </Button>
          </Link>
          <Link to="/about" className="text-white hover:text-orange-500">
            <Button className="text-white text-base mr-6 tablet:text-lg laptop:text-xl desktop:text-2xl">
              <div className="m-2">
                <svg
                  className="w-6 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </div>
              Services
            </Button>
          </Link>
          <Link to="/contact" className="text-white hover:text-orange-500">
            <Button className="text-white text-base mr-6 tablet:text-lg laptop:text-xl desktop:text-2xl">
              <div className="m-2">
                <svg
                  className="w-6 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>
              </div>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Logo</div>
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
            <Button className="text-white text-base mr-6">Home</Button>
          </Link>
          <Link to="/about" className="text-white hover:text-orange-500">
            <Button className="text-white text-base mr-6">About</Button>
          </Link>
          <Link to="/contact" className="text-white hover:text-orange-500">
            <Button className="text-white text-base">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className= "p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Logo</div>
        <Button className="block md:hidden text-white" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          {isOpen ? (
            <HamburgerIcon></HamburgerIcon>
          ) : (
            <HamburgerIcon></HamburgerIcon>
          )}
        </Button>
        <div
          className={`${
            isOpen ? "block" : "hidden"} md:block md:flex md:items-center`}
        >
          <Button className="text-white mr-4">Home</Button>
          <Button className="text-white mr-4">About</Button>
          <Button className="text-white">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

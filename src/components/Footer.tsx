// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <nav className="bg-primary text-white sticky top-0 right-0 box-border w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className=" text-lg tablet:text-xl laptop:text-2xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
            OMM
          </p>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <a href="/privacynote" className="hover:text-gray-400 text-xs mr-6 tablet:text-lg laptop:text-xl">
            {" "}
            Privacy Note
          </a>
        </div>

        <div className="flex">
          <a href="/" className="hover:text-gray-400 text-xs mr-6 tablet:text-lg laptop:text-xl">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400 text-xs mr-6 ml-6 tablet:text-lg laptop:text-xl">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400 text-xs mr-6 ml-6 tablet:text-lg laptop:text-xl">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;

// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-1 bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-size-xl font-bold m-1">
          <p className=" text-2xl tablet:text-3xl laptop:text-4xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
            OMM
          </p>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <a href="/privacynote" className="hover:text-gray-400 text-base mr-6 tablet:text-lg laptop:text-xl">
            {" "}
            Privacy Note
          </a>
        </div>

        <nav className="flex space-x-4 p-4">
          <a href="/" className="hover:text-gray-400 text-base mr-6 tablet:text-lg laptop:text-xl">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400 text-base mr-6 ml-6 tablet:text-lg laptop:text-xl">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400 text-base mr-6 ml-6 tablet:text-lg laptop:text-xl">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

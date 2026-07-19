// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <nav className=" bg-primary text-white sticky top-0 right-0 box-border p-5 w-full">
      {/* FULL Div*/}
      <div className="max-w-container w-full mx-auto">
        
        
        {/*Div that fits everything into one */}
        <div className="flex justify-between items-center">
          {/*Symbol of the company */}
          <div>
            <p className="container left-0 w-fit text-lg tablet:text-xl laptop:text-2xl font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent">
              OMM
            </p>
          </div>

          {/*Div to Privacy notes */}
          <div className="relative z-50 flex justify-center">
            <div className="flex items-center gap-2"></div>
            <a
              href="/privacynote"
              className="hover:text-gray-400 text-xs mr-6 tablet:text-lg laptop:text-xl"
            >
              {" "}
              Privacy Note
            </a>
          </div>

          {/*Links to other Pages */}
          <div className="flex space-x-3 items-center mr-5">
            <a
              href="/"
              className="hover:text-gray-400 text-xs mr-6 tablet:text-lg laptop:text-xl"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-400 text-xs mr-6 ml-6 tablet:text-lg laptop:text-xl"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-gray-400 text-xs mr-6 ml-6 tablet:text-lg laptop:text-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;

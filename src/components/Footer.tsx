// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 bottom-0 w-full fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div>SparkING</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

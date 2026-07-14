// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-4 bottom-0 w-full fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className= "text-size-xl font-bold">ALTRIX Quality Partners</div>
        <div className="container mx-auto flex justify-between items-center">
        <a href="/privacynote" className="hover:text-gray-400"> Privacy Note</a>
        </div>
        
        <nav className="flex space-x-4">
          
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

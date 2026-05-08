import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-8 mt-12 border-t border-[#00a85a]/12 bg-[#fbfdf9]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-[#2d332f] text-sm tracking-wide">
          Made with React & Tailwind &copy; {new Date().getFullYear()}
        </p>

        <div className="flex space-x-5">
          <a
            href="https://github.com/RogerPlaBallus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68716a] hover:text-[#00a85a] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rogerplaball%C3%BAs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68716a] hover:text-[#00a85a] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

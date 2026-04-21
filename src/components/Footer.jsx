import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-8 mt-12 border-t border-[#846644]/12 bg-[#efebe6]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-[#6f6a63] text-sm tracking-wide">
          Made with React & Tailwind © {new Date().getFullYear()}
        </p>

        <div className="flex space-x-5">
          <a
            href="https://github.com/RogerPlaBallus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9d9892] hover:text-[#846644] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rogerplaballus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9d9892] hover:text-[#846644] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="text-[#b1aba4] text-sm italic">
          Building real solutions for real problems.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

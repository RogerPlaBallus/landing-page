import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-10 mt-20 border-t border-cyan-500/20 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-5">

        {/* Open Source philosophy */}
        <p className="text-gray-400 text-sm tracking-wide">
          Made with React & Tailwind © {new Date().getFullYear()}
        </p>

        {/* Social icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/RogerPlaBallus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rogerplaballús"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm italic">
          Building real solutions for real problems.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-8 mt-12 border-t border-[#a0864d]/20 bg-[#ede6e1]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">

        {/* Open Source philosophy */}
        <p className="text-[#777] text-sm tracking-wide">
          Made with React & Tailwind © {new Date().getFullYear()}
        </p>

        {/* Social icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/RogerPlaBallus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#999] hover:text-[#8b6f47] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rogerplaballus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#999] hover:text-[#8b6f47] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-[#aaa] text-sm italic">
          Building real solutions for real problems.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

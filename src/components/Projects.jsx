import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsList = [
    {
      title: "Weather App",
      description: "A real-time weather application fetching current conditions and forecasts for any city.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rogerplaballus.github.io/weather-app/",
      githubLink: "https://github.com/RogerPlaBallus/weather-app"
    },
    {
      title: "Ball Game",
      description: "An interactive, browser-based physics game utilizing canvas rendering.",
      tech: ["JavaScript", "Phaser 3", "CSS3"],
      liveLink: "https://rogerplaballus.github.io/BALL-GAME/",
      githubLink: "https://github.com/RogerPlaBallus/BALL-GAME"
    },
    {
      title: "Clients & Sales",
      description: "A simple CRM system for managing customer data and sales transactions.",
      tech: ["Node.js", "Express", "SQLite"],
      liveLink: "https://clients-sales.vercel.app/",
      githubLink: "https://github.com/RogerPlaBallus/CLIENTS-VENDES"
    },
    {
      title: "Exercise Tracker",
      description: "A full-stack REST API built to log, manage, and retrieve users' daily physical activities.",
      tech: ["Node.js", "Express", "SQLite"],
      liveLink: "https://exercise-tracker-kappa-mocha.vercel.app/",
      githubLink: "https://github.com/RogerPlaBallus/Exercise-Tracker"
    },
    {
      title: "Morse Code Translator",
      description: "Translate English text inputs into accurate Morse code with audio output.",
      tech: ["Node.js", "React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://rogerplaballus.github.io/Morse_Code_Translator_TS-React-Tailwind/",
      githubLink: "https://github.com/RogerPlaBallus/Morse_Code_Translator_TS-React-Tailwind"
    },
    {
      title: "Password Generator",
      description: "A secure tool for generating random passwords in one click.",
      tech: ["JavaScript", "DOM Manipulation", "CSS"],
      liveLink: "https://rogerplaballus.github.io/Password-Generator-JS/",
      githubLink: "https://github.com/RogerPlaBallus/Password-Generator-JS"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-b border-[#a0864d]/15 scroll-mt-24">
      
      {/* Section Header - Editorial Style */}
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-xs font-bold text-[#8b6f47] uppercase tracking-widest">Featured Work</span>
          <div className="flex-1 h-px bg-linear-to-r from-[#a0864d]/30 to-transparent"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b6f47] to-[#c99f5a]">Projects</span>
        </h2>
        
        <p className="text-lg text-[#777] max-w-2xl">
          A selection of my latest work showcasing web development, problem-solving, and creative thinking.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            className="group flex flex-col bg-[#f5f1ed] rounded-xl border border-[#a0864d]/15 hover:border-[#a0864d]/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
          >
            {/* Accent Stripe */}
            <div className="h-1.5 bg-linear-to-r from-[#8b6f47] to-[#a0864d]"></div>

            {/* Content */}
            <div className="flex flex-col grow p-6">
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-3 group-hover:text-[#8b6f47] transition-colors">
                {project.title}
              </h3>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#a0864d]/10 text-[#704d24] text-xs font-medium px-3 py-1.5 rounded-full border border-[#a0864d]/25 hover:border-[#a0864d]/50 hover:bg-[#a0864d]/15 transition-all duration-200">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-[#777] text-sm leading-relaxed grow mb-6">
                {project.description}
              </p>

              {/* Divider */}
              <div className="border-t border-[#a0864d]/15 my-4"></div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3">
                {/* 1. Live Link */}
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-[#8b6f47] hover:text-[#9a7d52] text-sm font-semibold transition-colors hover:gap-2 gap-1 focus:outline-none focus:ring-2 focus:ring-[#8b6f47] rounded px-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-[#ccc] text-xs italic uppercase font-medium">Backend Only</span>
                )}

                {/* 2. GitHub Link */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-[#666] hover:text-white text-sm font-semibold transition-all duration-200 bg-[#a0864d]/15 hover:bg-[#8b6f47] px-4 py-1.5 rounded-lg border border-[#a0864d]/20 hover:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;


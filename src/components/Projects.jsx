import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

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
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#a0864d]/20 scroll-mt-24">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          Featured <span className="text-[#8b6f47]">Projects</span>
        </h2>
        <p className="text-lg text-[#777] max-w-2xl mx-auto">
          Here is a selection of my recent work.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-[#f5f1ed] rounded-2xl border border-[#a0864d]/20 hover:border-[#a0864d]/50 transition-all duration-300 shadow-sm overflow-hidden p-6"
          >
            {/* Content */}
            <div className="flex flex-col grow">
              
              {/* Title and Tech Badges */}
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2 group-hover:text-[#8b6f47] transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#a0864d]/10 text-[#704d24] text-xs font-medium px-2.5 py-1 rounded-full border border-[#a0864d]/30">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-[#777] text-sm leading-relaxed grow">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#a0864d]/20">
                {/* 1. Live Link */}
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-[#8b6f47] hover:text-[#9a7d52] text-sm font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-[#ccc] text-sm italic">Backend Only</span>
                )}

                {/* 2. GitHub Link */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-[#666] hover:text-[#2d2d2d] text-sm font-semibold transition-colors bg-[#a0864d]/10 px-3 py-1.5 rounded-lg border border-[#a0864d]/20 hover:border-[#a0864d]/50"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;


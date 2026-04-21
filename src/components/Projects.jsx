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
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-b border-[#846644]/12 scroll-mt-[5vh]"> 
      
      {/* Section Header - Editorial Style */}
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-xs font-bold text-[#846644] uppercase tracking-widest">Featured Work</span>
          <div className="flex-1 h-px bg-linear-to-r from-[#846644]/24 to-transparent"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-[-0.03em] mb-4">
          Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-[#846644] to-[#c3a166]">Projects</span>
        </h2>
        
        <p className="text-lg text-[#6f6a63] max-w-2xl">
          A selection of my latest work showcasing web development, problem-solving, and creative thinking.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <div 
            key={project.title}
            className="group flex flex-col bg-[#f7f3ee] rounded-xl border border-[#846644]/12 hover:border-[#846644]/24 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden"
          >
            {/* Accent Stripe */}
            <div className="h-1.5 bg-linear-to-r from-[#846644] to-[#9b7d52]"></div>

            {/* Content */}
            <div className="flex flex-col grow p-6">
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-3 group-hover:text-[#846644] transition-colors">
                {project.title}
              </h3>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#846644]/8 text-[#6c4c29] text-xs font-medium px-3 py-1.5 rounded-full border border-[#846644]/16 hover:border-[#846644]/28 hover:bg-[#846644]/12 transition-all duration-200">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-[#6f6a63] text-sm leading-relaxed grow mb-6">
                {project.description}
              </p>

              {/* Divider */}
              <div className="border-t border-[#846644]/12 my-4"></div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3">
                {/* 1. Live Link */}
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-[#846644] hover:text-[#9b7d52] text-sm font-semibold transition-colors gap-1 focus:outline-none focus:ring-2 focus:ring-[#846644] rounded px-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-[#b7b0a8] text-xs italic uppercase font-medium">Backend Only</span>
                )}

                {/* 2. GitHub Link */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-[#6f6a63] hover:text-white text-sm font-semibold transition-all duration-200 bg-[#846644]/10 hover:bg-[#846644] px-4 py-1.5 rounded-lg border border-[#846644]/14 hover:border-[#846644] focus:outline-none focus:ring-2 focus:ring-[#846644]"
                >
                  <FaGithub className="w-4 h-4" />
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


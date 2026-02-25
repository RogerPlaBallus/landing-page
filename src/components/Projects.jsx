import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectsList = [
    {
      title: "Weather App",
      description: "A real-time weather application fetching current conditions and forecasts for any city.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rogerplaballus.github.io/weather-app/",
      githubLink: "https://github.com/RogerPlaBallus/weather-app"
    },
    {
      title: "Ball Game",
      description: "An interactive, browser-based physics game utilizing canvas rendering and game loops.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      liveLink: "https://rogerplaballus.github.io/BALL-GAME/",
      githubLink: "https://github.com/RogerPlaBallus/BALL-GAME"
    },
    {
      title: "Password Generator",
      description: "A secure tool for generating random passwords in one click.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
      tech: ["JavaScript", "DOM Manipulation", "CSS"],
      liveLink: "https://rogerplaballus.github.io/Password-Generator-JS/",
      githubLink: "https://github.com/RogerPlaBallus/Password-Generator-JS"
    },
    {
      title: "Clients & Sales",
      description: "A simple CRM system for managing customer data and sales transactions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["Node.js", "Express", "Database"],
      liveLink: null, // Since this one has no .io link, the button visually hides!
      githubLink: "https://github.com/RogerPlaBallus/CLIENTS-VENDES"
    },
    {
      title: "Exercise Tracker",
      description: "A full-stack REST API built to log, manage, and retrieve users' daily physical activities.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      tech: ["Node.js", "Express", "SQLite"],
      liveLink: null,
      githubLink: "https://github.com/RogerPlaBallus/Exercise-Tracker"
    },
    {
      title: "Morse Code Translator",
      description: "A reliable utility script that translates English text inputs into accurate Morse code with audio output.",
      image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=80",
      tech: ["Java"],
      liveLink: null,
      githubLink: "https://github.com/RogerPlaBallus/MorseCodeTranslator"
    },
    {
      title: "To-Do List",
      description: "A simple To-Do List application built with Java.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      tech: ["Java"],
      liveLink: null,
      githubLink: "https://github.com/RogerPlaBallus/To-Do-List"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-gray-800">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Here is a selection of my recent work.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-[#111827] rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Image (Placeholder using Unsplash Images) */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111827] to-transparent opacity-80" />
            </div>

            {/* Content under the image */}
            <div className="flex flex-col grow p-6">
              
              {/* Title and Tech Badges */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-cyan-500/10 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed grow">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-800">
                {/* 1. Only show the Live Site link if it actually exists (has .io in your links) */}
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-600 text-sm italic">Backend Only</span>
                )}

                {/* 2. GitHub Link */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-gray-300 hover:text-white text-sm font-semibold transition-colors bg-[#1f2937] px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500"
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


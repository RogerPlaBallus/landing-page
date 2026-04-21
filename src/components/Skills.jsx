import React from 'react';
import { 
  Code2, 
  Layout, 
  FileJson, 
  Server,
  Database,
  Terminal,
  Settings,
  Wrench,
  Bot
} from 'lucide-react'; // These are our beautifully crisp icons!

const Skills = () => {
  // We organize your skills into arrays so the code is clean and easy to edit later
  const skillCategories = [
    {
      title: "Front-end",
      icon: <Layout className="w-6 h-6 text-[#846644]" />,
      skills: [
        { name: "React.js", logo: <Code2 className="w-5 h-5 text-[#c3a166]" /> },
        { name: "Tailwind CSS", logo: <Settings className="w-5 h-5 text-[#9b7d52]" /> },
        { name: "JavaScript (ES6+)", logo: <FileJson className="w-5 h-5 text-[#b66d3f]" /> },
        { name: "HTML5 & CSS3", logo: <Layout className="w-5 h-5 text-[#a15b37]" /> },
        { name: "Vite", logo: <Bot className="w-5 h-5 text-[#846644]" /> }
      ]
    },
    {
      title: "Back-end",
      icon: <Server className="w-6 h-6 text-[#a15b37]" />,
      skills: [
        { name: "Node.js", logo: <Server className="w-5 h-5 text-[#c3a166]" /> },
        { name: "Express", logo: <Terminal className="w-5 h-5 text-[#846644]" /> },
        { name: "SQLite", logo: <Database className="w-5 h-5 text-[#9b7d52]" /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-[#b66d3f]" />,
      skills: [
        { name: "VSCode", logo: <Settings className="w-5 h-5 text-[#846644]" /> },
        { name: "Antigravity", logo: <Bot className="w-5 h-5 text-[#a15b37]" /> },
        { name: "Git & GitHub", logo: <Terminal className="w-5 h-5 text-[#6c4c29]" /> },
        { name: "LLMs & Agents", logo: <Bot className="w-5 h-5 text-[#9b7d52]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#846644]/12 scroll-mt-[5vh]"> 
      
      {/* Section Header - Left Aligned with Accent Line */}
      <div className="mb-16 max-w-2xl">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-[#846644] uppercase tracking-widest">Technical Expertise</span>
          <div className="h-1 w-10 bg-linear-to-r from-[#846644] to-[#9b7d52]"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-[-0.03em] mb-4">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-[#846644] to-[#c3a166]">Toolkit</span>
        </h2>
        
        <p className="text-lg text-[#6f6a63]">
          Technologies and tools I use to build modern, scalable, and maintainable solutions.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group">
            
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#846644]/16">
              <div className="p-2 bg-[#846644]/8 rounded-lg group-hover:bg-[#846644]/14 transition-colors duration-200">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2d2d2d] group-hover:text-[#846644] transition-colors duration-200">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-2">
              {category.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx} 
                  className="flex items-center gap-2 p-3 bg-[#f7f3ee] rounded-lg border border-[#846644]/12 hover:border-[#846644]/24 hover:bg-[#fbfaf8] transition-all duration-200 group/skill cursor-default"
                >
                  <div className="p-2 bg-[#846644]/8 rounded-lg group-hover/skill:bg-[#846644]/14 transition-colors">
                    {skill.logo}
                  </div>
                  <span className="text-[#6f6a63] text-sm font-semibold group-hover/skill:text-[#846644] transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;

import React from 'react';
import { 
  Code2, 
  Layout, 
  FileJson, 
  Figma, 
  Smartphone,
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
      icon: <Layout className="w-6 h-6 text-[#8b6f47]" />,
      skills: [
        { name: "React.js", logo: <Code2 className="w-5 h-5 text-[#c99f5a]" /> },
        { name: "Tailwind CSS", logo: <Settings className="w-5 h-5 text-[#a0864d]" /> },
        { name: "JavaScript (ES6+)", logo: <FileJson className="w-5 h-5 text-[#d4702a]" /> },
        { name: "HTML5 & CSS3", logo: <Layout className="w-5 h-5 text-[#b85c38]" /> },
        { name: "Vite", logo: <Bot className="w-5 h-5 text-[#8b6f47]" /> }
      ]
    },
    {
      title: "Back-end",
      icon: <Server className="w-6 h-6 text-[#b85c38]" />,
      skills: [
        { name: "Node.js", logo: <Server className="w-5 h-5 text-[#c99f5a]" /> },
        { name: "Express", logo: <Terminal className="w-5 h-5 text-[#8b6f47]" /> },
        { name: "SQLite", logo: <Database className="w-5 h-5 text-[#a0864d]" /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-[#d4702a]" />,
      skills: [
        { name: "VSCode", logo: <Settings className="w-5 h-5 text-[#8b6f47]" /> },
        { name: "Antigravity", logo: <Bot className="w-5 h-5 text-[#b85c38]" /> },
        { name: "Git & GitHub", logo: <Terminal className="w-5 h-5 text-[#704d24]" /> },
        { name: "LLMs & Agents", logo: <Bot className="w-5 h-5 text-[#a0864d]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#a0864d]/15 scroll-mt-24">
      
      {/* Section Header - Left Aligned with Accent Line */}
      <div className="mb-16 max-w-2xl">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-[#8b6f47] uppercase tracking-widest">Technical Expertise</span>
          <div className="h-1 w-10 bg-linear-to-r from-[#8b6f47] to-[#a0864d]"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b6f47] to-[#c99f5a]">Toolkit</span>
        </h2>
        
        <p className="text-lg text-[#777]">
          Technologies and tools I use to build modern, scalable, and maintainable solutions.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group">
            
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#a0864d]/20">
              <div className="p-2 bg-[#a0864d]/10 rounded-lg group-hover:bg-[#a0864d]/20 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2d2d2d] group-hover:text-[#8b6f47] transition-colors duration-300">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-2">
              {category.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx} 
                  className="flex items-center gap-2 p-3 bg-[#f5f1ed] rounded-lg border border-[#a0864d]/15 hover:border-[#a0864d]/40 hover:bg-[#fafaf8] transition-all duration-300 group/skill cursor-default"
                >
                  <div className="p-2 bg-[#a0864d]/10 rounded-lg group-hover/skill:bg-[#a0864d]/25 transition-colors">
                    {skill.logo}
                  </div>
                  <span className="text-[#666] text-sm font-semibold group-hover/skill:text-[#8b6f47] transition-colors">
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

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
      icon: <Layout className="w-6 h-6 text-[#00a85a]" />,
      skills: [
        { name: "React.js", logo: <Code2 className="w-5 h-5 text-[#00a85a]" /> },
        { name: "Tailwind CSS", logo: <Settings className="w-5 h-5 text-[#078f4f]" /> },
        { name: "JavaScript (ES6+)", logo: <FileJson className="w-5 h-5 text-[#006f3b]" /> },
        { name: "TypeScript", logo: <Layout className="w-5 h-5 text-[#00a85a]" /> },
        { name: "Vite", logo: <Bot className="w-5 h-5 text-[#006f3b]" /> }
      ]
    },
    {
      title: "Back-end",
      icon: <Server className="w-6 h-6 text-[#006f3b]" />,
      skills: [
        { name: "Node.js", logo: <Server className="w-5 h-5 text-[#00a85a]" /> },
        { name: "Express", logo: <Terminal className="w-5 h-5 text-[#006f3b]" /> },
        { name: "SQLite", logo: <Database className="w-5 h-5 text-[#078f4f]" /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-[#078f4f]" />,
      skills: [
        { name: "VSCode", logo: <Settings className="w-5 h-5 text-[#00a85a]" /> },
        { name: "Antigravity", logo: <Bot className="w-5 h-5 text-[#006f3b]" /> },
        { name: "Git & GitHub", logo: <Terminal className="w-5 h-5 text-[#090d0a]" /> },
        { name: "LLMs & Agents", logo: <Bot className="w-5 h-5 text-[#078f4f]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#00a85a]/12 scroll-mt-[5vh]"> 
      
      {/* Section Header - Left Aligned with Accent Line */}
      <div className="mb-16 max-w-2xl">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-[#00a85a] uppercase tracking-widest">Technical Expertise</span>
          <div className="h-1 w-10 bg-linear-to-r from-[#00a85a] to-[#006f3b]"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#090d0a] tracking-[-0.03em] mb-4">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00a85a] to-[#006f3b]">Toolkit</span>
        </h2>
        
        <p className="text-lg text-[#2d332f]">
          Technologies and tools I use.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group">
            
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#00a85a]/16">
              <div className="p-2 bg-[#00a85a]/8 rounded-lg group-hover:bg-[#00a85a]/14 transition-colors duration-200">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-[#090d0a] group-hover:text-[#00a85a] transition-colors duration-200">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-2">
              {category.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx} 
                  className="flex items-center gap-2 p-3 bg-[#ffffff] rounded-lg border border-[#00a85a]/12 hover:border-[#00a85a]/24 hover:bg-[#f3fbf5] transition-all duration-200 group/skill cursor-default"
                >
                  <div className="p-2 bg-[#00a85a]/8 rounded-lg group-hover/skill:bg-[#00a85a]/14 transition-colors">
                    {skill.logo}
                  </div>
                  <span className="text-[#2d332f] text-sm font-semibold group-hover/skill:text-[#00a85a] transition-colors">
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

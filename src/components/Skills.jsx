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
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#a0864d]/20 scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          My <span className="text-[#8b6f47]">Skills</span>
        </h2>
        <p className="text-lg text-[#777] max-w-2xl mx-auto">
          Everything I use to bring ideas to life.
        </p>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-[#f5f1ed] rounded-2xl p-6 border border-[#a0864d]/20 hover:border-[#a0864d]/50 transition-colors duration-300 shadow-sm"
          >
            {/* Card Title & Main Icon */}
            <div className="flex items-center space-x-3 mb-6 border-b border-[#a0864d]/20 pb-4">
              {category.icon}
              <h3 className="text-2xl font-bold text-[#2d2d2d]">{category.title}</h3>
            </div>

            {/* List of Individual Skills */}
            <ul className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <li key={skillIdx} className="flex items-center space-x-3 group">
                  <div className="p-2 bg-[#a0864d]/10 rounded-lg group-hover:bg-[#a0864d]/20 transition-colors">
                    {skill.logo}
                  </div>
                  <span className="text-[#666] font-medium group-hover:text-[#8b6f47] transition-colors">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;

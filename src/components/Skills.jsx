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
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      skills: [
        { name: "React.js", logo: <Code2 className="w-5 h-5 text-blue-400" /> },
        { name: "Tailwind CSS", logo: <Settings className="w-5 h-5 text-cyan-400" /> },
        { name: "JavaScript (ES6+)", logo: <FileJson className="w-5 h-5 text-yellow-400" /> },
        { name: "HTML5 & CSS3", logo: <Layout className="w-5 h-5 text-orange-400" /> },
        { name: "Vite", logo: <Bot className="w-5 h-5 text-purple-400" /> }
      ]
    },
    {
      title: "Back-end",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: "Node.js", logo: <Server className="w-5 h-5 text-green-500" /> },
        { name: "Express", logo: <Terminal className="w-5 h-5 text-gray-400" /> },
        { name: "SQLite", logo: <Database className="w-5 h-5 text-blue-300" /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      skills: [
        { name: "VSCode", logo: <Settings className="w-5 h-5 text-blue-500" /> },
        { name: "Antigravity", logo: <Bot className="w-5 h-5 text-indigo-400" /> },
        { name: "Git & GitHub", logo: <Terminal className="w-5 h-5 text-white" /> },
        { name: "LLMs & Agents", logo: <Bot className="w-5 h-5 text-teal-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-gray-800">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Everything I use to bring ideas to life.
        </p>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-[#111827] rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300 shadow-xl"
          >
            {/* Card Title & Main Icon */}
            <div className="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-4">
              {category.icon}
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>

            {/* List of Individual Skills */}
            <ul className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <li key={skillIdx} className="flex items-center space-x-3 group">
                  <div className="p-2 bg-[#1f2937] rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    {skill.logo}
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-cyan-300 transition-colors">
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

import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Grab all the sections we want to observe
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        // "rootMargin" controls WHEN a section counts as "active":
        // top: ignore the top 20% of the viewport (navbar area)
        // bottom: ignore the bottom 40% so the section activates early
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1120]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0">
            <a href="#" className="text-xl font-bold tracking-tight text-white">
              My <span className="text-cyan-400">Portfolio</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    transition-all duration-300 font-medium
                    ${isActive
                      ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]'
                      : 'text-gray-300 hover:text-cyan-400'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

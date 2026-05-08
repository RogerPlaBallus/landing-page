import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for subtle navbar visual change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
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
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when link clicked
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#fbfdf9]/82 backdrop-blur-md shadow-sm border-b border-[#00a85a]/12'
        : 'bg-[#fbfdf9]/68 backdrop-blur-sm border-b border-[#00a85a]/8'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#00a85a] focus:ring-offset-2 focus:ring-offset-[#fbfdf9]
                    ${isActive
                      ? 'bg-[#00a85a] text-white shadow-sm'
                      : 'text-[#2d332f] hover:text-[#00a85a] hover:bg-[#00a85a]/8'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#00a85a]/8 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#090d0a]" />
            ) : (
              <Menu className="w-5 h-5 text-[#090d0a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#00a85a]/10 pt-4 space-y-2 animate-in fade-in duration-200">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`
                    block px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#00a85a]
                    ${isActive
                      ? 'bg-[#00a85a] text-white shadow-sm'
                      : 'text-[#2d332f] hover:text-[#00a85a] hover:bg-[#00a85a]/8'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

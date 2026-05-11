import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update scrolled state for navbar background
      setScrolled(window.scrollY > 20);

      // 2. Update active section
      const sections = navLinks.map((link) => 
        document.querySelector(link.href)
      ).filter(Boolean);

      if (sections.length === 0) return;

      // Find the current section
      // We look for the last section whose top is near or above the navbar
      let currentSectionId = '';
      const offset = 100; // Threshold in pixels from top

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId && currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

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

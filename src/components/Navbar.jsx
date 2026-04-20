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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#ede6e1]/85 backdrop-blur-md shadow-md border-b border-[#a0864d]/15'
        : 'bg-[#ede6e1]/70 backdrop-blur-sm border-b border-[#a0864d]/10'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="text-lg font-bold tracking-tight text-[#2d2d2d] hover:text-[#8b6f47] transition-colors">
              My <span className="text-[#8b6f47]">Portfolio</span>
            </a>
          </div>

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
                    px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:ring-offset-2 focus:ring-offset-[#ede6e1]
                    ${isActive
                      ? 'bg-[#8b6f47] text-white shadow-md'
                      : 'text-[#666] hover:text-[#8b6f47] hover:bg-[#a0864d]/10'
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
            className="md:hidden p-2 rounded-lg hover:bg-[#a0864d]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#2d2d2d]" />
            ) : (
              <Menu className="w-5 h-5 text-[#2d2d2d]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#a0864d]/10 pt-4 space-y-2 animate-in fade-in duration-200">
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
                    focus:outline-none focus:ring-2 focus:ring-[#8b6f47]
                    ${isActive
                      ? 'bg-[#8b6f47] text-white shadow-sm'
                      : 'text-[#666] hover:text-[#8b6f47] hover:bg-[#a0864d]/10'
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

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* ===== BACKGROUND LAYER 1: Gradient Base ===== */}
      <div className="fixed inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #fbfdf9 0%, #ffffff 52%, #f3fbf5 100%)',
      }}></div>

      {/* ===== BACKGROUND LAYER 2: Paper/Grain Texture ===== */}
      <div className="fixed inset-0 z-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="5"/></filter><rect width="200" height="200" fill="black" filter="url(%23grain)"/></svg>')`,
        backgroundSize: '200px 200px',
      }}></div>

      {/* ===== BACKGROUND LAYER 3: Subtle Radial Accent ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 75% 25%, rgba(0, 168, 90, 0.045) 0%, transparent 56%)',
      }}></div>

      {/* ===== CONTENT WRAPPER (relative positioning for proper layering) ===== */}
      <div className="relative z-10 text-[#090d0a] font-sans selection:bg-[#00a85a]/20">
        {/* 1. Our Navbar */}
        <Navbar />

        {/* 2. Main Content Area */}
        <main className="pt-16">
          {/* Section: About Me */}
          <About />
          {/* Section: Skills */}
          <Skills />
          {/* Section: Projects */}
          <Projects />
          {/* Section: Contact */}
          <Contact />
        </main>

        {/* 4. Footer */}
        <Footer />

        {/* 5. Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;

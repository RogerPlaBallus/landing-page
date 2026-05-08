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
      {/* ===== BACKGROUND LAYER: Solid Base ===== */}
      <div className="fixed inset-0 z-0" style={{
        backgroundColor: '#fbfdf9',
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

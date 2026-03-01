import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorEffect from './components/CursorEffect';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (  /*background color */
    <div className="bg-[#0b1120] text-white min-h-screen font-sans selection:bg-cyan-500/30">
    
      <CursorEffect />   
      {/* 1. Our new Header */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="pt-16 relative z-10"> {/* pt-16 adds padding to push content below the fixed Navbar */}
        
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
  );
}

export default App;

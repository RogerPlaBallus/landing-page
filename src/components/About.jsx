import React, { useEffect, useState } from 'react';


 import profileImg from '../assets/profile.png';

const About = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const openCvModal = () => setIsCvModalOpen(true);
  const closeCvModal = () => setIsCvModalOpen(false);

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}CV/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeCvModal();
  };

  useEffect(() => {
    if (!isCvModalOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCvModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isCvModalOpen]);

  return (
    <>
    <section id="about" className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative scroll-mt-24">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#2d2d2d] tracking-tighter leading-tight mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b6f47] to-[#c99f5a]">Roger!</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-[#666] mt-4">
              Full-Stack Developer & Problem Solver
            </h2>
            
            <p className="text-base md:text-lg text-[#777] max-w-xl leading-relaxed mt-4">
              I create elegant solutions to complex problems. Let's build something remarkable together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Primary CTA */}
            <a 
              href="#contact" 
              className="group flex items-center justify-center px-8 py-3.5 bg-linear-to-r from-[#8b6f47] to-[#9a7d52] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:ring-offset-2"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            
            {/* Secondary CTA */}
            <button
              type="button"
              onClick={openCvModal}
              className="group flex items-center justify-center px-8 py-3.5 border-2 border-[#8b6f47] text-[#8b6f47] font-semibold rounded-lg hover:bg-[#8b6f47]/5 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:ring-offset-2 focus:ring-offset-[#ede6e1]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download CV
            </button>
          </div>

          {/* Stats Micro Cards */}
          <div className="grid grid-cols-2 gap-4 pt-8">
            {/* Stat 1: Projects */}
            <div className="bg-[#f5f1ed] border border-[#a0864d]/20 rounded-lg p-4 hover:border-[#a0864d]/40 hover:shadow-sm transition-all duration-300">
              <p className="text-2xl md:text-3xl font-bold text-[#8b6f47]">20+</p>
              <p className="text-xs md:text-sm text-[#777] mt-2 font-medium">Projects Completed</p>
            </div>
            
            {/* Stat 2: Experience */}
            <div className="bg-[#f5f1ed] border border-[#a0864d]/20 rounded-lg p-4 hover:border-[#a0864d]/40 hover:shadow-sm transition-all duration-300">
              <p className="text-2xl md:text-3xl font-bold text-[#8b6f47]">2+</p>
              <p className="text-xs md:text-sm text-[#777] mt-2 font-medium">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Premium Profile Image */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          
          {/* Halo effect (background glow) */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#8b6f47]/20 to-[#a0864d]/10 blur-3xl scale-105"></div>
          
          {/* Inner shadow ring for depth */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-[#a0864d] shadow-2xl" style={{
            boxShadow: '0 0 40px rgba(139, 111, 71, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          }}>
            {/* Image container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#ede6e1] shadow-inner">
              <img 
                src={profileImg}
                alt="Roger" 
                className="w-full h-full object-cover object-[center_100%] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {isCvModalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        <button
          type="button"
          aria-label="Close CV language selection"
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeCvModal}
        />

        <div className="relative w-full max-w-md rounded-2xl border border-[#a0864d]/30 bg-[#f5f1ed]/95 p-6 shadow-lg">
          <h3 id="cv-modal-title" className="text-2xl font-bold text-[#2d2d2d]">
            Choose CV language
          </h3>
          <p className="mt-2 text-sm text-[#777]">
            Select one option to download your preferred version.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              type="button"
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b6f47]"
              onClick={() => handleDownload('CV-EN.pdf')}
            >
              English
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b6f47]"
              onClick={() => handleDownload('CV-ES.pdf')}
            >
              Spanish
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b6f47]"
              onClick={() => handleDownload('CV-CAT.pdf')}
            >
              Catalan
            </button>
          </div>

          <button
            type="button"
            className="mt-5 text-sm text-[#999] transition hover:text-[#2d2d2d] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8b6f47] rounded px-2 py-1"
            onClick={closeCvModal}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default About;

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
    <section id="about" className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative scroll-mt-[20vh]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#2d2d2d] tracking-[-0.04em] leading-tight mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-[#846644] to-[#c3a166]">Roger!</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-[#6f6a63] mt-4">
              Full-Stack Developer & Problem Solver
            </h2>
            
            <p className="text-base md:text-lg text-[#6f6a63] max-w-xl leading-relaxed mt-4">
              I find solutions to real problems. Let's work together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Primary CTA */}
            <a 
              href="#contact" 
              className="group flex items-center justify-center px-8 py-3.5 bg-linear-to-r from-[#846644] to-[#9b7d52] text-white font-semibold rounded-lg hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#846644] focus:ring-offset-2"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            
            {/* Secondary CTA */}
            <button
              type="button"
              onClick={openCvModal}
              className="group flex items-center justify-center px-8 py-3.5 border-2 border-[#846644] text-[#846644] font-semibold rounded-lg hover:bg-[#846644]/6 hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#846644] focus:ring-offset-2 focus:ring-offset-[#efebe6]"
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
            <div className="bg-[#f7f3ee] border border-[#846644]/14 rounded-lg p-4 hover:border-[#846644]/24 hover:shadow-sm transition-all duration-200">
              <p className="text-2xl md:text-3xl font-bold text-[#846644]">20+</p>
              <p className="text-xs md:text-sm text-[#6f6a63] mt-2 font-medium">Projects Completed</p>
            </div>
            
            {/* Stat 2: Experience */}
            <div className="bg-[#f7f3ee] border border-[#846644]/14 rounded-lg p-4 hover:border-[#846644]/24 hover:shadow-sm transition-all duration-200">
              <p className="text-2xl md:text-3xl font-bold text-[#846644]">2+</p>
              <p className="text-xs md:text-sm text-[#6f6a63] mt-2 font-medium">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Premium Profile Image */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          
          {/* Halo effect (background glow) */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#846644]/14 to-[#9b7d52]/8 blur-3xl scale-105"></div>
          
          {/* Inner shadow ring for depth */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-[#9b7d52] shadow-xl" style={{
            boxShadow: '0 0 32px rgba(132, 102, 68, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.28)',
          }}>
            {/* Image container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#efebe6] shadow-inner">
              <img 
                src={profileImg}
                alt="Roger" 
                className="w-full h-full object-cover object-[center_100%]"
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

        <div className="relative w-full max-w-md rounded-2xl border border-[#846644]/18 bg-[#f7f3ee]/96 p-6 shadow-md">
          <h3 id="cv-modal-title" className="text-2xl font-bold text-[#2d2d2d] tracking-[-0.03em]">
            Choose CV language
          </h3>
          <p className="mt-2 text-sm text-[#6f6a63]">
            Select one option to download your preferred version.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              type="button"
              className="rounded-lg bg-[#846644]/8 px-4 py-3 text-sm font-semibold text-[#846644] transition hover:bg-[#846644]/14 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#846644]"
              onClick={() => handleDownload('CV-EN.pdf')}
            >
              English
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#846644]/8 px-4 py-3 text-sm font-semibold text-[#846644] transition hover:bg-[#846644]/14 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#846644]"
              onClick={() => handleDownload('CV-ES.pdf')}
            >
              Spanish
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#846644]/8 px-4 py-3 text-sm font-semibold text-[#846644] transition hover:bg-[#846644]/14 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#846644]"
              onClick={() => handleDownload('CV-CAT.pdf')}
            >
              Catalan
            </button>
          </div>

          <button
            type="button"
            className="mt-5 text-sm text-[#9d9892] transition hover:text-[#2d2d2d] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#846644] rounded px-2 py-1"
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

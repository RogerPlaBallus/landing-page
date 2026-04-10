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
    <section id="about" className="min-h-screen flex items-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative scroll-mt-24">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2d2d2d] tracking-tight">
            Hi, I'm <span className="text-[#8b6f47]">Roger!</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-[#666]">
            Full-Stack Developer 
          </h2>
          
          <p className="text-base md:text-lg text-[#777] max-w-xl leading-relaxed">
            I create solutions and solve problems. I will add value to your company.
            Let's work together! 
          </p>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="flex items-center justify-center px-6 py-3 bg-[#8b6f47] text-white font-medium rounded-lg hover:bg-[#9a7d52] transition transform hover:-translate-y-0.5 shadow-md">
              Contact Me 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <button
              type="button"
              onClick={openCvModal}
              className="flex items-center justify-center px-6 py-3 border border-[#a0864d] text-[#666] font-medium rounded-lg hover:bg-[#a0864d]/5 transition cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 pt-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#8b6f47]">20+</p>
              <p className="text-sm md:text-base text-[#777] mt-1">Projects</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#8b6f47]">2+</p>
              <p className="text-sm md:text-base text-[#777] mt-1">Years</p>
            </div>           
          </div>
        </div>

           {/* Right Side: Profile Image */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          {/* Subtle border ring */}
          <div className="relative w-65 h-65 md:w-82.5 md:h-82.5 rounded-full p-0.75 bg-[#a0864d]">
            {/* Inner circle that holds the image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#ede6e1]">
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
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer"
              onClick={() => handleDownload('CV-EN.pdf')}
            >
              English
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer"
              onClick={() => handleDownload('CV-ES.pdf')}
            >
              Spanish
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#a0864d]/10 px-4 py-3 text-sm font-semibold text-[#8b6f47] transition hover:bg-[#a0864d]/20 cursor-pointer"
              onClick={() => handleDownload('CV-CAT.pdf')}
            >
              Catalan
            </button>
          </div>

          <button
            type="button"
            className="mt-5 text-sm text-[#999] transition hover:text-[#2d2d2d] cursor-pointer"
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

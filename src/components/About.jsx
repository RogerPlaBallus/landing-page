import React from 'react';


 import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Hi, I'm <span className="text-cyan-400">Roger!</span> <span className="inline-block origin-bottom-right hover:rotate-12 transition-transform cursor-pointer">👋</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-300">
            Full-Stack Developer 
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            I create solutions and solve problems. I will add value to your company.
            Let's work together! 
          </p>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30">
              Contact Me 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="Roger-CV.pdf" className="flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 pt-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">20+</p>
              <p className="text-sm md:text-base text-gray-400 mt-1">Projects</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">2+</p>
              <p className="text-sm md:text-base text-gray-400 mt-1">Years</p>
            </div>           
          </div>
        </div>

           {/* Right Side: Profile Image */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          {/* Outer glow ring */}
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-linear-to-br from-blue-600/30 to-cyan-500/30 blur-xl"></div>
          
          {/* Gradient border ring */}
          <div className="relative w-[260px] h-[260px] md:w-[330px] md:h-[330px] rounded-full p-[3px] bg-linear-to-br from-blue-500 to-cyan-400">
            {/* Dark inner circle that holds the image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0b1120]">
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
  );
};

export default About;

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const EMAIL = 'rogerplaballus@gmail.com';

const Contact = () => {
  const [emailVisible, setEmailVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">

      {/* Section Header - Premium CTA Style */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xs font-bold text-[#8b6f47] uppercase tracking-widest">Let's Connect</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          Ready to Work <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b6f47] to-[#c99f5a]">Together?</span>
        </h2>
        
        <p className="text-lg text-[#777] leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
        </p>
      </div>

      {/* Availability Badge - Prominent */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2.5 bg-green-50 border border-green-300/50 text-green-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span>Available for opportunities</span>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* GitHub Card */}
        <motion.a
          href="https://github.com/RogerPlaBallus"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col items-start p-6 bg-[#f5f1ed] rounded-xl border border-[#a0864d]/15 hover:border-[#a0864d]/40 transition-all duration-300 hover:shadow-md hover:bg-[#fafaf8]"
        >
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#a0864d]/5 group-hover:bg-[#a0864d]/10 transition-colors flex items-center justify-center">
            <FaGithub className="w-6 h-6 text-[#8b6f47] group-hover:scale-110 transition-transform" />
          </div>
          
          <p className="text-xs text-[#999] uppercase tracking-widest font-bold mb-2">GitHub</p>
          <p className="text-[#2d2d2d] font-bold text-sm group-hover:text-[#8b6f47] transition-colors">
            View My Code
          </p>
          <p className="text-[#777] text-xs mt-2">
            github.com/RogerPlaBallus
          </p>
          
          <div className="mt-4 pt-4 border-t border-[#a0864d]/15 w-full group-hover:border-[#a0864d]/40 transition-colors">
            <span className="text-[#8b6f47] text-xs font-semibold flex items-center gap-1">
              Visit →
            </span>
          </div>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/rogerplaballus/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col items-start p-6 bg-[#f5f1ed] rounded-xl border border-[#a0864d]/15 hover:border-[#a0864d]/40 transition-all duration-300 hover:shadow-md hover:bg-[#fafaf8]"
        >
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#4a6fa5]/10 group-hover:bg-[#4a6fa5]/15 transition-colors flex items-center justify-center">
            <FaLinkedin className="w-6 h-6 text-[#4a6fa5] group-hover:scale-110 transition-transform" />
          </div>
          
          <p className="text-xs text-[#999] uppercase tracking-widest font-bold mb-2">LinkedIn</p>
          <p className="text-[#2d2d2d] font-bold text-sm group-hover:text-[#4a6fa5] transition-colors">
            Connect with Me
          </p>
          <p className="text-[#777] text-xs mt-2">
            linkedin.com/in/rogerplaballús
          </p>
          
          <div className="mt-4 pt-4 border-t border-[#a0864d]/15 w-full group-hover:border-[#4a6fa5]/40 transition-colors">
            <span className="text-[#4a6fa5] text-xs font-semibold flex items-center gap-1">
              Visit →
            </span>
          </div>
        </motion.a>

        {/* Email Card - Interactive */}
        <motion.div 
          className="group relative flex flex-col items-start p-6 bg-[#f5f1ed] rounded-xl border border-[#a0864d]/15 hover:border-[#a0864d]/40 transition-all duration-300 hover:shadow-md hover:bg-[#fafaf8] cursor-pointer"
          onClick={() => setEmailVisible(!emailVisible)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#a0864d]/10 group-hover:bg-[#a0864d]/20 transition-colors flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#8b6f47] group-hover:scale-110 transition-transform" />
          </div>
          
          <p className="text-xs text-[#999] uppercase tracking-widest font-bold mb-2">Email</p>
          <button
            onClick={() => setEmailVisible(!emailVisible)}
            className="text-[#2d2d2d] font-bold text-sm hover:text-[#8b6f47] transition-colors text-left max-w-xs focus:outline-none focus:ring-2 focus:ring-[#8b6f47] rounded px-1"
          >
            {emailVisible ? EMAIL : 'Reveal Email Address'}
          </button>
          <p className="text-[#777] text-xs mt-2">
            {emailVisible ? 'Click copy to clipboard' : 'Direct email contact'}
          </p>
          
          <div className="mt-4 pt-4 border-t border-[#a0864d]/15 w-full group-hover:border-[#a0864d]/40 transition-colors">
            <span className="text-[#8b6f47] text-xs font-semibold">
              {emailVisible ? 'Copy' : 'Reveal'} →
            </span>
          </div>
          
          {emailVisible && (
            <div className="mt-4 w-full">
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-[#8b6f47] hover:bg-[#9a7d52] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8b6f47]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Final CTA Footer */}
      <div className="text-center pt-8 border-t border-[#a0864d]/15">
        <p className="text-[#777] text-sm max-w-md mx-auto">
          I typically respond within 24 hours. Looking forward to connecting!
        </p>
      </div>
    </section>
  );
};

export default Contact;


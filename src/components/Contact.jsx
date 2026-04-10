import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Copy, Check } from 'lucide-react';

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
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-tight mb-4">
          Get in <span className="text-[#8b6f47]">Touch</span>
        </h2>
        <p className="text-lg text-[#777] max-w-2xl mx-auto">
          I'm currently available for new opportunities. Feel free to reach out!
        </p>
      </div>

      {/* Availability Badge */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-700 px-5 py-2.5 rounded-full text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Immediate availability · Full-time
        </div>
      </div>

      {/* Contact Links Card */}
      <div className="max-w-lg mx-auto bg-[#f5f1ed] rounded-2xl border border-[#a0864d]/20 p-6 shadow-sm space-y-4">

        {/* GitHub */}
        <a
          href="https://github.com/RogerPlaBallus"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[#a0864d]/20 hover:border-[#a0864d]/50 hover:bg-[#a0864d]/5 transition-all duration-200 group"
        >
          <div className="p-3 bg-[#a0864d]/10 rounded-lg group-hover:bg-[#a0864d]/20 transition-colors">
            <FaGithub className="w-6 h-6 text-[#8b6f47]" />
          </div>
          <div>
            <p className="text-xs text-[#999] uppercase tracking-widest font-semibold">GitHub</p>
            <p className="text-[#666] font-medium group-hover:text-[#8b6f47] transition-colors">
              github.com/RogerPlaBallus
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rogerplaball%C3%BAs/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-[#a0864d]/20 hover:border-[#a0864d]/50 hover:bg-[#a0864d]/5 transition-all duration-200 group"
        >
          <div className="p-3 bg-[#a0864d]/10 rounded-lg group-hover:bg-[#a0864d]/20 transition-colors">
            <FaLinkedin className="w-6 h-6 text-[#4a6fa5]" />
          </div>
          <div>
            <p className="text-xs text-[#999] uppercase tracking-widest font-semibold">LinkedIn</p>
            <p className="text-[#666] font-medium group-hover:text-[#8b6f47] transition-colors">
              linkedin.com/in/rogerplaballús
            </p>
          </div>
        </a>

        {/* Email with reveal + copy */}
        <div className="flex flex-col gap-3 p-4 rounded-xl border border-[#a0864d]/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#a0864d]/10 rounded-lg">
              <Mail className="w-6 h-6 text-[#8b6f47]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#999] uppercase tracking-widest font-semibold">Email</p>
              <button
                onClick={() => setEmailVisible(!emailVisible)}
                className="text-[#666] font-medium hover:text-[#8b6f47] transition-colors cursor-pointer"
              >
                {emailVisible ? EMAIL : 'Click to reveal email →'}
              </button>
            </div>
          </div>

          {emailVisible && (
            <div className="flex items-center justify-between bg-[#ede6e1] rounded-lg px-4 py-2.5 border border-[#a0864d]/20 gap-3">
              <span className="text-[#8b6f47] text-sm font-mono select-all">{EMAIL}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-[#a0864d]/10 hover:bg-[#a0864d]/20 border border-[#a0864d]/30 text-[#8b6f47] rounded-lg transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;


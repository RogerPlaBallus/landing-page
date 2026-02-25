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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          I'm currently available for new opportunities. Feel free to reach out!
        </p>
      </div>

      {/* Availability Badge */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-2.5 rounded-full text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Immediate availability · Full-time
        </div>
      </div>

      {/* Contact Links Card */}
      <div className="max-w-lg mx-auto bg-[#111827] rounded-2xl border border-gray-800 p-8 shadow-xl space-y-5">

        {/* GitHub */}
        <a
          href="https://github.com/RogerPlaBallus"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-200 group"
        >
          <div className="p-3 bg-[#1f2937] rounded-lg group-hover:bg-cyan-500/10 transition-colors">
            <FaGithub className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">GitHub</p>
            <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors">
              github.com/RogerPlaBallus
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rogerplaball%C3%BAs/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-200 group"
        >
          <div className="p-3 bg-[#1f2937] rounded-lg group-hover:bg-cyan-500/10 transition-colors">
            <FaLinkedin className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">LinkedIn</p>
            <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors">
              linkedin.com/in/rogerplaballús
            </p>
          </div>
        </a>

        {/* Email with reveal + copy */}
        <div className="flex flex-col gap-3 p-4 rounded-xl border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1f2937] rounded-lg">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email</p>
              <button
                onClick={() => setEmailVisible(!emailVisible)}
                className="text-gray-300 font-medium hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {emailVisible ? EMAIL : 'Click to reveal email →'}
              </button>
            </div>
          </div>

          {emailVisible && (
            <div className="flex items-center justify-between bg-[#0b1120] rounded-lg px-4 py-2.5 border border-gray-700 gap-3">
              <span className="text-cyan-300 text-sm font-mono select-all">{EMAIL}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg transition-colors shrink-0"
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


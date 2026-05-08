import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Copy, Check } from 'lucide-react';
import CatKicker from './CatKicker';
import whiteCat from '../assets/PixelCats/cat 3 (64х64).png';

const EMAIL = 'rogerplaballus@gmail.com';

const Contact = () => {
  const [emailVisible, setEmailVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async (event) => {
    event.stopPropagation();

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-[5vh]">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <CatKicker
          sprite={whiteCat}
          catLabel="White pixel cat"
          cycleOffset={44}
          className="flex items-center justify-center gap-2 mb-4"
        >
          Let's Connect
        </CatKicker>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#090d0a] tracking-[-0.03em] mb-4">
          Let's work <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00a85a] to-[#006f3b]">Together</span>
        </h2>

        <p className="text-lg text-[#2d332f] leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Let's talk.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2.5 bg-[#f3fbf5] border border-[#00a85a]/45 text-[#006f3b] px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-sm transition-shadow duration-200">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a85a] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00a85a]"></span>
          </span>
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <a
          href="https://github.com/RogerPlaBallus"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full flex-col items-start rounded-xl border border-[#00a85a]/12 bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#00a85a]/24 hover:bg-[#f3fbf5] hover:shadow-sm"
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a85a]/6 transition-colors group-hover:bg-[#00a85a]/10">
            <FaGithub className="h-6 w-6 text-[#00a85a]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#68716a]">GitHub</p>
          <p className="text-sm font-bold text-[#090d0a] transition-colors group-hover:text-[#00a85a]">
            View My Code
          </p>
          <p className="mt-2 text-xs text-[#2d332f]">github.com/RogerPlaBallus</p>

          <div className="mt-4 w-full border-t border-[#00a85a]/12 pt-4 transition-colors group-hover:border-[#00a85a]/24">
            <span className="flex min-h-10 items-center gap-1 text-xs font-semibold text-[#00a85a]">
              Visit {"->"}
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/rogerplaballus/"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full flex-col items-start rounded-xl border border-[#00a85a]/12 bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#00a85a]/24 hover:bg-[#f3fbf5] hover:shadow-sm"
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a85a]/10 transition-colors group-hover:bg-[#00a85a]/15">
            <FaLinkedin className="h-6 w-6 text-[#00a85a]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#68716a]">LinkedIn</p>
          <p className="text-sm font-bold text-[#090d0a] transition-colors group-hover:text-[#00a85a]">
            Connect with Me
          </p>
          <p className="mt-2 text-xs text-[#2d332f]">linkedin.com/in/rogerplaballus</p>

          <div className="mt-4 w-full border-t border-[#00a85a]/12 pt-4 transition-colors group-hover:border-[#00a85a]/26">
            <span className="flex min-h-10 items-center gap-1 text-xs font-semibold text-[#00a85a]">
              Visit {"->"}
            </span>
          </div>
        </a>

        <div
          className="group relative flex h-full cursor-pointer flex-col items-start rounded-xl border border-[#00a85a]/12 bg-[#ffffff] p-6 transition-all duration-200 hover:border-[#00a85a]/24 hover:bg-[#f3fbf5] hover:shadow-sm"
          onClick={() => setEmailVisible((current) => !current)}
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a85a]/8 transition-colors group-hover:bg-[#00a85a]/14">
            <Mail className="h-6 w-6 text-[#00a85a]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#68716a]">Email</p>
          <p
            aria-expanded={emailVisible}
            aria-controls="contact-email-actions"
            className="max-w-56 break-all text-left text-sm font-bold leading-tight text-[#090d0a] transition-colors hover:text-[#00a85a]"
          >
            {emailVisible ? EMAIL : 'Reveal Email Address'}
          </p>
          <p className="mt-2 text-xs leading-snug text-[#2d332f]">
            {emailVisible ? 'Click copy to clipboard' : 'Click anywhere to reveal the email'}
          </p>

          <div className="mt-4 w-full border-t border-[#00a85a]/12 pt-4 transition-colors group-hover:border-[#00a85a]/24">
            <div
              id="contact-email-actions"
              className="flex min-h-10 items-center gap-2"
              onClick={(event) => event.stopPropagation()}
            >
              {emailVisible ? (
                <>
                  <span className="shrink-0 text-xs font-semibold text-[#00a85a]">
                    Copy {"->"}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-[#00a85a] px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#006f3b] focus:outline-none focus:ring-2 focus:ring-[#00a85a]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 shrink-0" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 shrink-0" />
                        Copy Email
                      </>
                    )}
                  </button>
                </>
              ) : (
                <span className="flex min-h-10 items-center text-xs font-semibold text-[#00a85a]">
                  Reveal {"->"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00a85a]/12 pt-8 text-center">
        <p className="mx-auto max-w-md text-sm text-[#2d332f]">
          I respond within 24 hours. Looking forward to connecting!
        </p>
      </div>
    </section>
  );
};

export default Contact;

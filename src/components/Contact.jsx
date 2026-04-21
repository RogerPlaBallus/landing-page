import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Copy, Check } from 'lucide-react';

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
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xs font-bold text-[#846644] uppercase tracking-widest">Let's Connect</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d2d2d] tracking-[-0.03em] mb-4">
          Let's work <span className="text-transparent bg-clip-text bg-linear-to-r from-[#846644] to-[#c3a166]">Together</span>
        </h2>

        <p className="text-lg text-[#6f6a63] leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2.5 bg-[#edf3eb] border border-[#8fb18f]/45 text-[#4f7250] px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-sm transition-shadow duration-200">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6f8f6f] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6f8f6f]"></span>
          </span>
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <a
          href="https://github.com/RogerPlaBallus"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full flex-col items-start rounded-xl border border-[#846644]/12 bg-[#f7f3ee] p-6 transition-all duration-200 hover:border-[#846644]/24 hover:bg-[#fbfaf8] hover:shadow-sm"
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#846644]/6 transition-colors group-hover:bg-[#846644]/10">
            <FaGithub className="h-6 w-6 text-[#846644]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9d9892]">GitHub</p>
          <p className="text-sm font-bold text-[#2d2d2d] transition-colors group-hover:text-[#846644]">
            View My Code
          </p>
          <p className="mt-2 text-xs text-[#6f6a63]">github.com/RogerPlaBallus</p>

          <div className="mt-4 w-full border-t border-[#846644]/12 pt-4 transition-colors group-hover:border-[#846644]/24">
            <span className="flex min-h-10 items-center gap-1 text-xs font-semibold text-[#846644]">
              Visit {"->"}
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/rogerplaballus/"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-full flex-col items-start rounded-xl border border-[#846644]/12 bg-[#f7f3ee] p-6 transition-all duration-200 hover:border-[#846644]/24 hover:bg-[#fbfaf8] hover:shadow-sm"
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4a6fa5]/10 transition-colors group-hover:bg-[#4a6fa5]/15">
            <FaLinkedin className="h-6 w-6 text-[#4a6fa5]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9d9892]">LinkedIn</p>
          <p className="text-sm font-bold text-[#2d2d2d] transition-colors group-hover:text-[#4a6fa5]">
            Connect with Me
          </p>
          <p className="mt-2 text-xs text-[#6f6a63]">linkedin.com/in/rogerplaballus</p>

          <div className="mt-4 w-full border-t border-[#846644]/12 pt-4 transition-colors group-hover:border-[#4a6fa5]/26">
            <span className="flex min-h-10 items-center gap-1 text-xs font-semibold text-[#4a6fa5]">
              Visit {"->"}
            </span>
          </div>
        </a>

        <div
          className="group relative flex h-full cursor-pointer flex-col items-start rounded-xl border border-[#846644]/12 bg-[#f7f3ee] p-6 transition-all duration-200 hover:border-[#846644]/24 hover:bg-[#fbfaf8] hover:shadow-sm"
          onClick={() => setEmailVisible((current) => !current)}
        >
          <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#846644]/8 transition-colors group-hover:bg-[#846644]/14">
            <Mail className="h-6 w-6 text-[#846644]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#9d9892]">Email</p>
          <p
            aria-expanded={emailVisible}
            aria-controls="contact-email-actions"
            className="max-w-56 break-all text-left text-sm font-bold leading-tight text-[#2d2d2d] transition-colors hover:text-[#846644]"
          >
            {emailVisible ? EMAIL : 'Reveal Email Address'}
          </p>
          <p className="mt-2 text-xs leading-snug text-[#6f6a63]">
            {emailVisible ? 'Click copy to clipboard' : 'Click anywhere to reveal the email'}
          </p>

          <div className="mt-4 w-full border-t border-[#846644]/12 pt-4 transition-colors group-hover:border-[#846644]/24">
            <div
              id="contact-email-actions"
              className="flex min-h-10 items-center gap-2"
              onClick={(event) => event.stopPropagation()}
            >
              {emailVisible ? (
                <>
                  <span className="shrink-0 text-xs font-semibold text-[#846644]">
                    Copy {"->"}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-[#846644] px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#9b7d52] focus:outline-none focus:ring-2 focus:ring-[#846644]"
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
                <span className="flex min-h-10 items-center text-xs font-semibold text-[#846644]">
                  Reveal {"->"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#846644]/12 pt-8 text-center">
        <p className="mx-auto max-w-md text-sm text-[#6f6a63]">
          I respond within 24 hours. Looking forward to connecting!
        </p>
      </div>
    </section>
  );
};

export default Contact;

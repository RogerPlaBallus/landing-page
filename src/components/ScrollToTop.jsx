import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once we scroll past ~400px (roughly past the About section)
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-[#f5f1ed] border border-[#a0864d]/30
        flex items-center justify-center
        shadow-md shadow-black/10
        transition-all duration-300 ease-in-out
        hover:border-[#8b6f47] hover:bg-[#a0864d]/10 hover:-translate-y-1
        cursor-pointer
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
      `}
    >
      <svg
        className="w-5 h-5 text-[#8b6f47]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;

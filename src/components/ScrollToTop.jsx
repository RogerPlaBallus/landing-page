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
        bg-[#ffffff] border border-[#00a85a]/18
        flex items-center justify-center
        shadow-sm shadow-black/10
        transition-all duration-200 ease-in-out
        hover:border-[#00a85a] hover:bg-[#00a85a]/8
        cursor-pointer
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
      `}
    >
      <svg
        className="w-5 h-5 text-[#00a85a]"
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

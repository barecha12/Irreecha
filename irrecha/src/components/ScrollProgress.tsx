import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #166534, #22c55e);
          transition: width 0.1s ease-out;
          z-index: 10000;
          box-shadow: 0 2px 10px rgba(34, 197, 94, 0.3);
        }

        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: linear-gradient(135deg, #166534, #22c55e);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          box-shadow: 0 4px 20px rgba(22, 101, 52, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(100px);
          z-index: 9999;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 30px rgba(22, 101, 52, 0.4);
        }

        .scroll-to-top:active {
          transform: translateY(-2px) scale(1.05);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <button
        className={`scroll-to-top ${scrollProgress > 20 ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}

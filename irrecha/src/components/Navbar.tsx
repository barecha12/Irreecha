import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <style>{`
        .enhanced-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #166534 0%, #22c55e 100%);
          padding: 1rem 0;
        }

        .enhanced-navbar.scrolled {
          background: rgba(22, 101, 52, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover {
          transform: scale(1.05);
          color: white;
        }

        .nav-logo-icon {
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: white;
          font-weight: 600;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }

        .mobile-menu-btn:hover {
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background: linear-gradient(135deg, #166534 0%, #22c55e 100%);
            flex-direction: column;
            padding: 5rem 2rem;
            gap: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-link {
            font-size: 1.25rem;
          }
        }

        .mobile-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-overlay.open {
          display: block;
          opacity: 1;
        }
      `}</style>

      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <nav className={`enhanced-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
        <Link to="/" className="nav-logo">
  <img 
    src="https://img.freepik.com/premium-vector/irreecha-2021_622388-2.jpg"  // external hosted photo
    alt="Irrecha Festival Logo" 
    className="nav-logo-icon"
    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
  />
  <span className="ml-2">Irrecha Festival</span>
</Link>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/history"
              className={`nav-link ${isActive('/history') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              History
            </Link>
            <Link
              to="/updates"
              className={`nav-link ${isActive('/updates') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Updates
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div style={{ height: scrolled ? '60px' : '80px' }} />
    </>
  );
}

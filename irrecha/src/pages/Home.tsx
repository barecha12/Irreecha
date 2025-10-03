import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* Custom animations and effects */
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-gradient {
          background: linear-gradient(135deg, #166534 0%, #22c55e 50%, #16a34a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(22, 101, 52, 0.15);
          border-color: #22c55e;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #166534, #22c55e);
          border: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary-custom:hover::before {
          left: 100%;
        }

        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(22, 101, 52, 0.3);
        }

        .btn-outline-custom {
          border: 2px solid #166534;
          color: #166534;
          background: transparent;
          transition: all 0.3s ease;
        }

        .btn-outline-custom:hover {
          background: #166534;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(22, 101, 52, 0.2);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #166534, #22c55e);
          border-radius: 2px;
        }

        .feature-icon {
          font-size: 3rem;
          background: linear-gradient(135deg, #166534, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .text-gradient {
          background: linear-gradient(135deg, #166534, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .count-up {
          font-size: 3rem;
          font-weight: 700;
          color: #166534;
          display: block;
        }

        .stagger-animation > * {
          opacity: 0;
          transform: translateY(20px);
          animation: staggerIn 0.6s ease forwards;
        }

        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }

        @keyframes staggerIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .parallax-layer {
          transition: transform 0.1s ease-out;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          to {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1.2rem !important; }
          .count-up { font-size: 2rem; }
        }
      `}</style>

      <ScrollProgress />

      <div className="home">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-5 mb-0">
          <div className="container py-5">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-8 mx-auto text-center">
                <div className="floating-animation">
                  <h1 className="hero-title display-1 fw-bold mb-4" style={{ fontSize: '4rem' }}>
                    Irrecha Festival
                  </h1>
                  <p className="hero-subtitle lead mb-4" style={{ fontSize: '1.5rem', opacity: 0.95 }}>
                    The Sacred Thanksgiving Celebration of the Oromo People
                  </p>
                  <p className="fs-5 mb-5" style={{ maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                    Join millions in celebrating Irrecha, the most significant cultural and spiritual festival 
                    of the Oromo nation, marking gratitude to Waaqa (God) for the blessings of the past year.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/history" className="btn btn-light btn-lg px-4 py-3 pulse-animation text-decoration-none">
                      🌿 Explore History
                    </Link>
                    <Link to="/updates" className="btn btn-outline-light btn-lg px-4 py-3 text-decoration-none">
                      📅 Latest Updates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid px-0">
          {/* What is Irrecha */}
          <section className="py-5 fade-in-section" style={{ background: '#f8fffe' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    What is Irrecha?
                  </h2>
                </div>
              </div>
              <div className="row g-4 stagger-animation">
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover shine-effect">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🙏</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Sacred Thanksgiving</h3>
                      <p className="text-muted">
                        Irrecha is the holiest festival of the Oromo people, celebrated as a thanksgiving ceremony
                        to Waaqa (God) for the blessings, peace, and abundance received throughout the year.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover shine-effect">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🤝</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Cultural Unity</h3>
                      <p className="text-muted">
                        The festival brings together millions of Oromo people from across Ethiopia and the diaspora,
                        strengthening cultural bonds and preserving ancient traditions for future generations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover shine-effect">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">✨</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Spiritual Renewal</h3>
                      <p className="text-muted">
                        Participants gather at sacred lakes and rivers to offer prayers, perform rituals,
                        and seek blessings for peace, prosperity, and harmony in the coming year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When and Where */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    When & Where
                  </h2>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <div className="card h-100 border-0 shadow-lg card-hover glass-effect">
                    <div className="card-body text-center p-5">
                      <div className="feature-icon">📅</div>
                      <h3 className="h4 fw-bold mb-4" style={{ color: '#166534' }}>When</h3>
                      <div className="mb-3">
                        <strong className="text-success">Birraa (Spring):</strong>
                        <p className="mb-2">Late September/Early October</p>
                      </div>
                      <div className="mb-3">
                        <strong className="text-success">Arfaasaa (Autumn):</strong>
                        <p className="mb-2">Late April/Early May</p>
                      </div>
                      <p className="text-muted small">
                        Dates follow the traditional Oromo calendar and lunar cycles
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="card h-100 border-0 shadow-lg card-hover glass-effect">
                    <div className="card-body text-center p-5">
                      <div className="feature-icon">📍</div>
                      <h3 className="h4 fw-bold mb-4" style={{ color: '#166534' }}>Main Locations</h3>
                      <div className="mb-3">
                        <strong className="text-success">Hora Arsadi</strong>
                        <p className="mb-2">Bishoftu (Debre Zeit)</p>
                      </div>
                      <div className="mb-3">
                        <strong className="text-success">Hora Harsadi</strong>
                        <p className="mb-2">Various sacred lakes</p>
                      </div>
                      <div>
                        <strong className="text-success">Global Celebrations</strong>
                        <p className="mb-0">Diaspora communities worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Traditions and Rituals */}
          <section className="py-5 fade-in-section">
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Sacred Traditions
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body p-4">
                      <div className="feature-icon">🌿</div>
                      <h3 className="h5 fw-bold mb-3" style={{ color: '#166534' }}>Ateetee Ceremony</h3>
                      <p className="text-muted">
                        Women perform the sacred Ateetee ritual, carrying fresh grass and flowers 
                        as symbols of renewal, fertility, and connection to nature.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body p-4">
                      <div className="feature-icon">💧</div>
                      <h3 className="h5 fw-bold mb-3" style={{ color: '#166534' }}>Water Blessings</h3>
                      <p className="text-muted">
                        Participants gather at sacred lakes and rivers, offering prayers and 
                        receiving blessings from the holy waters that symbolize life and purity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body p-4">
                      <div className="feature-icon">🎵</div>
                      <h3 className="h5 fw-bold mb-3" style={{ color: '#166534' }}>Traditional Songs</h3>
                      <p className="text-muted">
                        Ancient Oromo songs and chants fill the air, passed down through generations 
                        to honor ancestors and celebrate cultural heritage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body p-4">
                      <div className="feature-icon">🤝</div>
                      <h3 className="h5 fw-bold mb-3" style={{ color: '#166534' }}>Community Unity</h3>
                      <p className="text-muted">
                        People from all walks of life come together, sharing food, stories, 
                        and prayers in a spirit of peace, reconciliation, and mutual respect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center text-white">
                  <h2 className="display-4 fw-bold mb-4">
                    Cultural Significance
                  </h2>
                  <p className="fs-5 mb-4" style={{ lineHeight: 1.8 }}>
                    Irrecha represents the essence of Oromo spirituality, democracy, and social values. 
                    It embodies the principles of <strong>Safuu</strong> (moral order), <strong>Nagaa</strong> (peace), 
                    and <strong>Araaraa</strong> (reconciliation) that have guided Oromo society for millennia.
                  </p>
                  <div className="card border-0 shadow-lg glass-effect" style={{ background: 'rgba(255,255,255,0.95)' }}>
                    <div className="card-body p-5">
                      <div className="feature-icon" style={{ color: '#166534' }}>🏛️</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>UNESCO Recognition</h3>
                      <p className="text-muted mb-0">
                        In 2016, UNESCO inscribed Irrecha on the Representative List of the 
                        Intangible Cultural Heritage of Humanity, recognizing its global significance 
                        and the need for its preservation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-5 fade-in-section" style={{ background: '#f8fffe' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="display-5 fw-bold mb-4 text-gradient">
                    Experience Irrecha
                  </h2>
                  <p className="fs-5 mb-4 text-muted">
                    Whether you're Oromo or simply interested in experiencing one of Africa's most 
                    beautiful cultural celebrations, Irrecha welcomes all who come with respect and open hearts.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/history" className="btn btn-primary-custom btn-lg px-4 py-3 text-decoration-none">
                      Learn More About History
                    </Link>
                    <Link to="/gallery" className="btn btn-outline-custom btn-lg px-4 py-3 text-decoration-none">
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";

export default function History() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section, .timeline-item').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0;
          background: linear-gradient(135deg, #166534, #22c55e);
          border-radius: 2px;
          transition: height 0.8s ease 0.3s;
        }

        .timeline-item.animate-in::before {
          height: 100%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: -6px;
          top: 0;
          width: 15px;
          height: 15px;
          background: #22c55e;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #22c55e;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .timeline-item.animate-in::after {
          transform: scale(1);
        }

        .timeline-item:hover::after {
          transform: scale(1.3);
          box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.3);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(22, 101, 52, 0.15);
          border-color: #22c55e;
        }

        .text-gradient {
          background: linear-gradient(135deg, #166534, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
      `}</style>

      <ScrollProgress />

      <div className="history-page">
        {/* Hero Section */}
        <section className="py-5 mb-0" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 50%, #16a34a 100%)' }}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <h1 className="display-3 fw-bold mb-4">History of Irrecha</h1>
                <p className="fs-4 mb-4" style={{ opacity: 0.95 }}>
                  Discover the ancient roots and rich heritage of the Oromo people's most sacred celebration
                </p>
                <Link to="/" className="btn btn-light btn-lg px-4 py-2">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid px-0">
          {/* Ancient Origins */}
          <section className="py-5 fade-in-section" style={{ background: '#f8fffe' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Ancient Origins
                  </h2>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-8">
                  <div className="card border-0 shadow-lg card-hover">
                    <div className="card-body p-5">
                      <div className="feature-icon text-center">🏛️</div>
                      <p className="fs-5 text-muted mb-4" style={{ lineHeight: 1.8 }}>
                        Irrecha has been celebrated for over <strong>6,000 years</strong>, making it one of the oldest 
                        continuous religious and cultural practices in Africa. The festival predates many world religions 
                        and represents the ancient Oromo connection to Waaqa (God) and the natural world.
                      </p>
                      <p className="fs-5 text-muted" style={{ lineHeight: 1.8 }}>
                        Archaeological evidence and oral traditions suggest that the Oromo people have been gathering 
                        at sacred lakes and rivers for millennia, offering thanksgiving prayers and seeking blessings 
                        for their communities, livestock, and crops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Historical Timeline */}
          <section className="py-5 fade-in-section">
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Historical Timeline
                  </h2>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="timeline-item">
                    <div className="card border-0 shadow-sm card-hover">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Ancient Times (4000+ BCE)</h3>
                        <p className="text-muted mb-0">
                          Early Oromo communities establish the tradition of seasonal thanksgiving ceremonies 
                          at sacred water bodies, forming the foundation of modern Irrecha celebrations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="card border-0 shadow-sm card-hover">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>16th Century</h3>
                        <p className="text-muted mb-0">
                          The Gada system, Oromo's democratic governance structure, becomes formally integrated 
                          with Irrecha celebrations, strengthening the festival's role in social cohesion.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="card border-0 shadow-sm card-hover">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>19th-20th Century</h3>
                        <p className="text-muted mb-0">
                          Despite periods of suppression and cultural challenges, Oromo communities 
                          preserve Irrecha traditions through underground practices and diaspora celebrations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="card border-0 shadow-sm card-hover">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>1991-Present</h3>
                        <p className="text-muted mb-0">
                          Irrecha experiences a renaissance with public celebrations returning to Ethiopia. 
                          The festival grows to attract millions of participants annually.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="card border-0 shadow-sm card-hover">
                      <div className="card-body p-4">
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>2016</h3>
                        <p className="text-muted mb-0">
                          UNESCO inscribes Irrecha on the Representative List of the Intangible Cultural 
                          Heritage of Humanity, recognizing its global significance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Cultural Significance
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">⚖️</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Gada Democracy</h3>
                      <p className="text-muted">
                        Irrecha reinforces the Gada system, one of the world's oldest democratic 
                        institutions, promoting equality, justice, and peaceful governance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🌍</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Environmental Harmony</h3>
                      <p className="text-muted">
                        The festival emphasizes the sacred relationship between humans and nature, 
                        promoting environmental conservation and sustainable living practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🕊️</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Peace & Reconciliation</h3>
                      <p className="text-muted">
                        Irrecha serves as a platform for conflict resolution, community healing, 
                        and the restoration of social harmony through forgiveness and unity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modern Revival */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center text-white">
                  <h2 className="display-4 fw-bold mb-4">Modern Revival</h2>
                  <p className="fs-5 mb-4" style={{ lineHeight: 1.8 }}>
                    Today, Irrecha has evolved into one of Africa's largest peaceful gatherings, 
                    attracting over <strong>4 million participants</strong> annually. The festival has become 
                    a symbol of Oromo identity, cultural pride, and peaceful resistance.
                  </p>
                  <p className="fs-5 mb-4" style={{ lineHeight: 1.8 }}>
                    Global Oromo diaspora communities now celebrate Irrecha in cities worldwide, 
                    from Minneapolis to Melbourne, ensuring this ancient tradition continues 
                    to thrive in the modern era.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
                    <Link to="/updates" className="btn btn-light btn-lg px-4 py-3">
                      Latest Updates
                    </Link>
                    <Link to="/gallery" className="btn btn-outline-light btn-lg px-4 py-3">
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
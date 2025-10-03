import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";

type Update = { title: string; date: string; content: string };

export default function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [filteredUpdates, setFilteredUpdates] = useState<Update[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    fetch("/updates.json")
      .then((r) => r.json())
      .then((data) => {
        setUpdates(data);
        setFilteredUpdates(data);
      })
      .catch((e) => console.error("Failed to load updates:", e));

    // Add scroll animation
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

    setTimeout(() => {
      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let filtered = updates.filter(
      (update) =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredUpdates(filtered);
  }, [searchTerm, sortOrder, updates]);

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

        .update-date {
          background: linear-gradient(135deg, #166534, #22c55e);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .news-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .search-filter-section {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .search-input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 10px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #6b7280;
        }

        .filter-btn:hover {
          border-color: #22c55e;
          color: #166534;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #166534, #22c55e);
          color: white;
          border-color: transparent;
        }

        .update-count {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 500;
        }
      `}</style>

      <ScrollProgress />

      <div className="updates-page">
        {/* Hero Section */}
        <section className="py-5 mb-0" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 50%, #16a34a 100%)' }}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <h1 className="display-3 fw-bold mb-4">Latest Updates</h1>
                <p className="fs-4 mb-4" style={{ opacity: 0.95 }}>
                  Stay informed about upcoming Irrecha celebrations, events, and community news
                </p>
                <Link to="/" className="btn btn-light btn-lg px-4 py-2">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid px-0">
          {/* Updates Section */}
          <section className="py-5 fade-in-section" style={{ background: '#f8fffe' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Festival News & Announcements
                  </h2>
                </div>
              </div>

              {updates.length > 0 && (
                <div className="search-filter-section fade-in-section">
                  <div className="row g-3 align-items-center">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search updates..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex gap-2">
                        <button
                          className={`filter-btn ${sortOrder === "newest" ? "active" : ""}`}
                          onClick={() => setSortOrder("newest")}
                        >
                          Newest First
                        </button>
                        <button
                          className={`filter-btn ${sortOrder === "oldest" ? "active" : ""}`}
                          onClick={() => setSortOrder("oldest")}
                        >
                          Oldest First
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 text-end">
                      <span className="update-count">
                        {filteredUpdates.length} {filteredUpdates.length === 1 ? 'update' : 'updates'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {filteredUpdates.length === 0 && updates.length > 0 ? (
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="card border-0 shadow-lg text-center p-5">
                      <div className="news-icon">🔍</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>No Results Found</h3>
                      <p className="text-muted">Try adjusting your search terms to find what you're looking for.</p>
                    </div>
                  </div>
                </div>
              ) : updates.length === 0 ? (
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="card border-0 shadow-lg text-center p-5">
                      <div className="news-icon">📰</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Loading Updates...</h3>
                      <p className="text-muted">Please wait while we fetch the latest news about Irrecha celebrations.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredUpdates.map((update, index) => (
                    <div key={index} className="col-lg-6 col-md-6 fade-in-section">
                      <div className="card h-100 border-0 shadow-lg card-hover">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <span className="update-date">{new Date(update.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                            <div className="news-icon">🎉</div>
                          </div>
                          <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>
                            {update.title}
                          </h3>
                          <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                            {update.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="py-5 fade-in-section">
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Upcoming Events
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="news-icon">🌸</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Irrecha Birraa 2025</h3>
                      <p className="text-muted mb-3">
                        The main spring celebration at Hora Arsadi, Bishoftu. Expected to draw millions of participants.
                      </p>
                      <span className="update-date">September 29, 2025</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="news-icon">🎵</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Cultural Performances</h3>
                      <p className="text-muted mb-3">
                        Traditional Oromo music and dance performances featuring renowned artists and cultural groups.
                      </p>
                      <span className="update-date">Throughout Festival</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="news-icon">🌍</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Diaspora Celebrations</h3>
                      <p className="text-muted mb-3">
                        Global Oromo communities organizing local Irrecha celebrations in major cities worldwide.
                      </p>
                      <span className="update-date">October 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center text-white">
                  <h2 className="display-4 fw-bold mb-4">Stay Connected</h2>
                  <p className="fs-5 mb-4" style={{ lineHeight: 1.8 }}>
                    Don't miss any updates about Irrecha celebrations. Follow our community 
                    for the latest news, event announcements, and cultural insights.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/history" className="btn btn-light btn-lg px-4 py-3">
                      Learn History
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import ScrollProgress from "../components/ScrollProgress";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  useEffect(() => {
    // Add scroll animations
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

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Sample gallery images from Pexels (cultural/festival themed)
  const galleryImages = [
    {
      url: "https://www.ena.et/documents/42142/0/2021_10_bb_png.png/07c26223-d7a7-4bc7-a9e9-f33de90e7486?version=1.0&t=1674395333545&download=true",
      title: "Traditional Ceremony",
      description: "Community gathering for thanksgiving prayers"
    },
    {
      url: "https://gishabayethiopiatour.com/wp-content/uploads/2023/01/irrecha-1-1280x836.jpg",
      title: "Sacred Waters",
      description: "Blessing ceremony at the holy lake"
    },
    {
      url: "https://www.aljazeera.com/wp-content/uploads/2020/10/000_8RB7Z8.jpg?fit=1170%2C781&quality=80",
      title: "Cultural Dance",
      description: "Traditional Oromo dance performance"
    },
    {
      url: "https://www.journals.uchicago.edu/cms/10.1086/699259/asset/images/medium/fg6_online.gif",
      title: "Ateetee Ceremony",
      description: "Women performing the sacred Ateetee ritual"
    },
    {
      url: "https://i0.wp.com/www.ethiostarlocalization.com/wp-content/uploads/2023/10/ETLC-Blog-Images-irrecha.png?fit=1980%2C1080&ssl=1",
      title: "Community Unity",
      description: "Families coming together in celebration"
    },
    {
      url: "https://advocacy4oromia.org/wp-content/uploads/2022/07/oromo-1.jpg?w=1024",
      title: "Traditional Attire",
      description: "Beautiful traditional Oromo clothing"
    }
  ];

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

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(22, 101, 52, 0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem 1.5rem 1.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
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

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(22, 101, 52, 0.15);
          border-color: #22c55e;
        }

        .masonry-grid {
          column-count: 3;
          column-gap: 1.5rem;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 992px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .masonry-grid {
            column-count: 1;
          }
        }
      `}</style>

      <ScrollProgress />

      <div className="gallery-page">
        {/* Hero Section */}
        <section className="py-5 mb-0" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 50%, #16a34a 100%)' }}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                <h1 className="display-3 fw-bold mb-4">Irrecha Gallery</h1>
                <p className="fs-4 mb-4" style={{ opacity: 0.95 }}>
                  Experience the beauty and spirituality of Irrecha through stunning visuals
                </p>
                <Link to="/" className="btn btn-light btn-lg px-4 py-2">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid px-0">
          {/* Gallery Introduction */}
          <section className="py-5 fade-in-section" style={{ background: '#f8fffe' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Visual Journey
                  </h2>
                  <p className="fs-5 text-muted mb-4" style={{ lineHeight: 1.8 }}>
                    Immerse yourself in the sacred beauty of Irrecha through these carefully curated images 
                    that capture the essence of this ancient celebration. From the serene waters of Hora Arsadi 
                    to the joyful faces of millions of participants, each image tells a story of faith, 
                    unity, and cultural pride.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Gallery */}
          <section className="py-5 fade-in-section">
            <div className="container py-4">
              <div className="row g-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="col-lg-4 col-md-6 fade-in-section">
                    <div
                      className="gallery-item"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="img-fluid"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/800x600/166534/ffffff?text=${encodeURIComponent(image.title)}`;
                        }}
                      />
                      <div className="gallery-overlay">
                        <h3 className="h4 fw-bold mb-2">{image.title}</h3>
                        <p className="mb-0" style={{ opacity: 0.9 }}>{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedImage !== null && (
                <ImageLightbox
                  imageUrl={galleryImages[selectedImage].url}
                  title={galleryImages[selectedImage].title}
                  description={galleryImages[selectedImage].description}
                  onClose={() => setSelectedImage(null)}
                  onNext={
                    selectedImage < galleryImages.length - 1
                      ? () => setSelectedImage(selectedImage + 1)
                      : undefined
                  }
                  onPrev={
                    selectedImage > 0
                      ? () => setSelectedImage(selectedImage - 1)
                      : undefined
                  }
                />
              )}
            </div>
          </section>

          {/* Gallery Categories */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="display-4 fw-bold text-gradient section-title mb-4">
                    Explore Categories
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🙏</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Sacred Rituals</h3>
                      <p className="text-muted">
                        Witness the spiritual ceremonies and traditional prayers performed at sacred waters.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🎭</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Cultural Performances</h3>
                      <p className="text-muted">
                        Experience the vibrant traditional dances, music, and artistic expressions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">👥</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Community Gathering</h3>
                      <p className="text-muted">
                        See millions of people coming together in peace, unity, and celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body text-center p-4">
                      <div className="feature-icon">🌿</div>
                      <h3 className="h4 fw-bold mb-3" style={{ color: '#166534' }}>Natural Beauty</h3>
                      <p className="text-muted">
                        Explore the stunning landscapes and sacred sites where Irrecha takes place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Photo Submission */}
          <section className="py-5 fade-in-section" style={{ background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)' }}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center text-white">
                  <h2 className="display-4 fw-bold mb-4">Share Your Memories</h2>
                  <p className="fs-5 mb-4" style={{ lineHeight: 1.8 }}>
                    Have beautiful photos from Irrecha celebrations? We'd love to feature them in our gallery. 
                    Help us preserve and share the beauty of this sacred festival with the world.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button className="btn btn-light btn-lg px-4 py-3">
                      📸 Submit Photos
                    </button>
                    <Link to="/history" className="btn btn-outline-light btn-lg px-4 py-3">
                      Learn History
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
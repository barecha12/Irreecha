import { useEffect } from 'react';

interface ImageLightboxProps {
  imageUrl: string;
  title: string;
  description: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ImageLightbox({
  imageUrl,
  title,
  description,
  onClose,
  onNext,
  onPrev
}: ImageLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <>
      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .lightbox-info {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 10px 10px;
          text-align: center;
        }

        .lightbox-info h3 {
          margin: 0 0 0.5rem 0;
          color: #166534;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .lightbox-info p {
          margin: 0;
          color: #6b7280;
          font-size: 1rem;
        }

        .lightbox-close {
          position: absolute;
          top: -3rem;
          right: 0;
          background: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          color: #166534;
          transition: all 0.3s ease;
          z-index: 10000;
        }

        .lightbox-close:hover {
          transform: rotate(90deg) scale(1.1);
          background: #166534;
          color: white;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          color: #166534;
          transition: all 0.3s ease;
        }

        .lightbox-nav:hover {
          background: #166534;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-nav.prev {
          left: -4rem;
        }

        .lightbox-nav.next {
          right: -4rem;
        }

        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 1rem;
          }

          .lightbox-close {
            top: -2.5rem;
            width: 35px;
            height: 35px;
            font-size: 1.25rem;
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }

          .lightbox-nav.prev {
            left: -2.5rem;
          }

          .lightbox-nav.next {
            right: -2.5rem;
          }

          .lightbox-info h3 {
            font-size: 1.25rem;
          }

          .lightbox-info p {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="lightbox-overlay" onClick={onClose}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            ✕
          </button>

          {onPrev && (
            <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous">
              ←
            </button>
          )}

          {onNext && (
            <button className="lightbox-nav next" onClick={onNext} aria-label="Next">
              →
            </button>
          )}

          <img
            src={imageUrl}
            alt={title}
            className="lightbox-image"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/800x600/166534/ffffff?text=${encodeURIComponent(title)}`;
            }}
          />
          <div className="lightbox-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

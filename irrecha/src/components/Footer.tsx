import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#013220',
    color: '#ccc',
    padding: '20px 40px',
    marginTop: '40px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  };

  const socialStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
  };

  const iconWrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '70px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const baseItemStyle: React.CSSProperties = {
    position: 'absolute',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
  };

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(20px)',
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0)',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Copyright */}
        <p style={{ fontSize: '14px' }}>
          © {new Date().getFullYear()} Irrecha Festival. All rights reserved.
        </p>

        {/* Social Icons that change to brand name on hover */}
        <div style={socialStyle}>
          {[
            { icon: <FaFacebook size={22} color="#3b5998" />, name: 'Facebook', link: 'https://facebook.com', color: '#3b5998' },
            { icon: <FaTwitter size={22} color="#1DA1F2" />, name: 'Twitter', link: 'https://twitter.com', color: '#1DA1F2' },
            { icon: <FaInstagram size={22} color="#E1306C" />, name: 'Instagram', link: 'https://instagram.com', color: '#E1306C' },
            { icon: <FaYoutube size={22} color="#FF0000" />, name: 'YouTube', link: 'https://youtube.com', color: '#FF0000' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: '#ccc' }}
            >
              <div
                style={iconWrapperStyle}
                onMouseEnter={(e) => {
                  const icon = e.currentTarget.querySelector('.icon') as HTMLElement;
                  const text = e.currentTarget.querySelector('.text') as HTMLElement;
                  if (icon && text) {
                    icon.style.opacity = '0';
                    icon.style.transform = 'translateY(-20px)';
                    text.style.opacity = '1';
                    text.style.transform = 'translateY(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  const icon = e.currentTarget.querySelector('.icon') as HTMLElement;
                  const text = e.currentTarget.querySelector('.text') as HTMLElement;
                  if (icon && text) {
                    icon.style.opacity = '1';
                    icon.style.transform = 'translateY(0)';
                    text.style.opacity = '0';
                    text.style.transform = 'translateY(20px)';
                  }
                }}
              >
                <span className="icon" style={{ ...baseItemStyle, ...visibleStyle, fontSize: '22px' }}>
                  {social.icon}
                </span>
                <span
                  className="text"
                  style={{
                    ...baseItemStyle,
                    ...hiddenStyle,
                    fontSize: '13px',
                    fontWeight: 600,
                    color: social.color, // ✅ brand color for each name
                  }}
                >
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

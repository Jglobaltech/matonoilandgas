import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/maton/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Operations', href: '/operations' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const shouldShowDarkText = isScrolled || !isHomePage;
  const linkColor = shouldShowDarkText ? 'var(--color-dark)' : 'var(--color-white)';
  
  /* On mobile navbar is always white, so bars are always dark */
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const barColor = isMobile ? 'var(--color-dark)' : linkColor;

  return (
    <>
      <nav className={`navbar ${shouldShowDarkText ? 'scrolled' : ''}`} style={{ padding: isScrolled ? '8px 0' : '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link 
            to="/"
            onClick={() => {
              if (location.pathname === '/') window.location.reload();
            }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              zIndex: 1001, 
              gap: '10px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <img 
              src={logo} 
              alt="Maton Oil and Gas" 
              style={{ 
                height: isScrolled ? '40px' : '56px', 
                width: 'auto',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))'
              }} 
            />
          </Link>
          
          <div className="nav-desktop">
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  style={{ 
                    color: linkColor, 
                    fontSize: '13px', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em' 
                  }}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <button className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '12px', width: 'auto' }}>Get A Quote</button>
              </Link>
            </div>
          </div>

          {/* Fancy Animated Hamburger */}
          <button 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-box ${isMenuOpen ? 'open' : ''}`}>
              <span className="hamburger-bar" style={{ background: barColor }} />
              <span className="hamburger-bar" style={{ background: barColor }} />
              <span className="hamburger-bar" style={{ background: barColor }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Close X button */}
        <button 
          className="mobile-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <div className="close-icon">
            <span />
            <span />
          </div>
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          <button 
            className="btn btn-primary" 
            style={{ marginTop: '32px', width: '220px' }}
          >
            Get Started
          </button>
        </Link>
        <p style={{ 
          marginTop: 'auto', 
          paddingBottom: '32px',
          color: 'var(--color-text-muted)', 
          fontSize: '12px', 
          textAlign: 'center' 
        }}>
          info@matonoilandgas.com<br />
          +234 806 756 1091
        </p>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Send, MapPin, Clock, ArrowUp, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Operations', href: '/operations' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'Oil & Gas Services',
  'Welding & Fabrication',
  'Engineering Construction',
  'Agriculture & Farming',
  'Equipment Leasing',
  'Waste Management',
];

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setStatus('submitting');

    try {
      const response = await fetch('http://localhost/maton-oil-gas/backend/newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer style={{ 
      position: 'relative',
      background: 'linear-gradient(rgba(5, 10, 5, 0.92), rgba(5, 10, 5, 0.98)), url(/images/industry.png)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'var(--color-white)' 
    }}>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              zIndex: 1000,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0, 170, 95, 0.4)',
              transition: 'transform 0.3s'
            }}
            whileHover={{ scale: 1.1, backgroundColor: '#00cc72' }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CTA Banner */}
      <div style={{
        padding: '48px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(135deg, rgba(0,170,95,0.15) 0%, transparent 60%)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              textTransform: 'uppercase',
              color: 'var(--color-white)',
              marginBottom: '8px'
            }}>
              Ready to start a project?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
              Let's discuss how we can help with your next venture.
            </p>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ width: 'auto', padding: '14px 32px' }}>
            Get A Quote
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}>

            {/* Column 1 — Brand */}
            <div style={{ maxWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <img
                  src="/src/assets/maton/logo.png"
                  alt="Maton Oil and Gas"
                  style={{ height: '64px', width: 'auto', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
                />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7, marginBottom: '24px' }}>
                Innovative engineering and project management solutions for the oil, gas, and agricultural sectors.
              </p>
              
              {/* Newsletter */}
              <div style={{ position: 'relative' }}>
                <h5 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px', letterSpacing: '1px' }}>Newsletter</h5>
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    disabled={status === 'submitting'}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'var(--color-white)',
                      outline: 'none'
                    }}
                  />
                  <button 
                    className="btn btn-primary" 
                    type="submit"
                    disabled={status === 'submitting' || !newsletterEmail}
                    style={{ padding: '10px 14px', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {status === 'submitting' ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                  </button>
                </form>
                
                {/* Feedback Overlay/Message */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{ color: 'var(--color-primary)', fontSize: '11px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <CheckCircle2 size={12} /> Successfully subscribed!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{ color: '#ff6b6b', fontSize: '11px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <AlertCircle size={12} /> Something went wrong.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 style={{
                color: 'var(--color-white)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '12px',
                fontWeight: 800
              }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '13px',
                        fontWeight: 500,
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h4 style={{
                color: 'var(--color-white)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '12px',
                fontWeight: 800
              }}>Our Services</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {services.map((service) => (
                  <li key={service}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 style={{
                color: 'var(--color-white)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '12px',
                fontWeight: 800
              }}>Contact</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  <MapPin size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  Benikrukru Community, Delta State
                </li>
                <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  <Phone size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  +234 703 581 8163
                </li>
                <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  <Mail size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  info@matonoilandgas.com
                </li>
                <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  <Clock size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  Mon – Fri: 8:00 AM – 5:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px'
          }}>
            &copy; {new Date().getFullYear()} Maton Oil & Gas Services Limited.
          </span>
          <span style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: '11px',
            letterSpacing: '1px'
          }}>
            Test with the Best
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../sections/About';
import VisionMission from '../sections/VisionMission';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(5, 10, 5, 0.9), rgba(5, 10, 5, 0.95)), url(./images/oilandgas.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'rgba(0, 170, 95, 0.05)',
          transform: 'translateX(20%) skewX(-20deg)'
        }} />
        
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag"
          >
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase' }}
          >
            About <span style={{ color: 'var(--color-primary)' }}>Maton.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', marginTop: '24px' }}
          >
            A multidisciplinary engineering and services firm dedicated to excellence in the oil, gas, and agricultural sectors.
          </motion.p>
        </div>
      </section>

      {/* Main Content Sections */}
      <About />
      
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '40px', background: 'white', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-premium)' }}>
              <h3 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>Our History</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Maton Oil & Gas Services Limited has established itself as a reliable partner in the Nigerian energy sector, providing innovative engineering and project management solutions.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'white', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-premium)' }}>
              <h3 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>Our Values</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Integrity, safety, and excellence are the pillars of our operations. We are committed to local content development and community empowerment across all our project locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VisionMission />

    </div>
  );
};

export default AboutPage;

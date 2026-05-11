import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        padding: '120px 0', 
        overflow: 'hidden',
        background: '#050a05'
      }}
    >
      {/* Background with deep industrial overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0, 170, 95, 0.92), rgba(15, 26, 15, 0.95)), url(/images/pipeline-welding.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)' }}>Work with us</span>
          <h2 style={{ 
            fontSize: 'clamp(22px, 3.5vw, 36px)', 
            color: 'var(--color-white)', 
            marginBottom: '20px',
            textTransform: 'uppercase',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            lineHeight: 1.1
          }}>
            Ready to <span style={{ color: 'var(--color-primary-light)' }}>Elevate</span> Your Energy Infrastructure?
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '16px', 
            marginBottom: '40px',
            lineHeight: 1.7 
          }}>
            Leverage our global expertise and innovative engineering solutions to drive efficiency and sustainability in your next project.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', width: 'auto' }}>
              Start a Project
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ 
              display: 'inline-block',
              padding: '20px 48px', 
              width: 'auto', 
              color: 'white', 
              borderColor: 'rgba(255,255,255,0.3)',
              textDecoration: 'none'
            }}>
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

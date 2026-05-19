import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '60px',
        alignItems: 'stretch'
      }}>
        {/* Image with green accent bar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: 'relative', height: '100%' }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '-12px',
            width: '6px',
            height: '100%',
            background: 'var(--color-primary)',
            borderRadius: '0px',
            zIndex: 2
          }} />
          <img 
            src="./images/oilandgas.jpg" 
            alt="Maton Oil & Gas Operations" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              boxShadow: 'var(--shadow-soft)'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="section-tag">More information</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '24px', textTransform: 'uppercase' }}>
            About <span style={{ color: 'var(--color-primary)' }}>Us.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginBottom: '24px', lineHeight: 1.7 }}>
            Maton Oil & Gas Services provides innovative engineering and project management solutions for the oil and gas sector. We focus on sustainable development and local content improvement.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginBottom: '40px', lineHeight: 1.7 }}>
            Our commitment includes protecting vital infrastructure and driving efficiency through cutting-edge technologies, ensuring safe and effective operations.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ paddingLeft: '24px', borderLeft: '4px solid var(--color-primary)' }}
            >
              <h4 style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '8px' }}>Our Vision</h4>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)' }}>
                To be Nigeria's leading provider of innovative, sustainable engineering and services in the oil and gas industry, advancing technology and community impact.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ paddingLeft: '24px', borderLeft: '4px solid var(--color-primary)' }}
            >
              <h4 style={{ fontSize: '20px', textTransform: 'uppercase', marginBottom: '8px' }}>Our Mission</h4>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)' }}>
                Forge partnerships with stakeholders to promote industry growth and sustainability, ensuring safety and efficiency through advanced technology.
              </p>
            </motion.div>
          </div>

          {/* New Commitment Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.05)' }}
          >
            <h4 style={{ 
              fontSize: '14px', 
              color: 'var(--color-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              Our commitment
            </h4>
            <p style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: 'var(--color-dark)', 
              lineHeight: 1.6,
              marginBottom: '16px' 
            }}>
              Delivering innovative and sustainable engineering solutions for the oil and gas industry / Agricultural industry
            </p>
            <p style={{ 
              fontSize: '15px', 
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              Prioritizing local content development and community empowerment.
            </p>
            <Link 
              to="/about"
              className="btn btn-primary"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                width: 'auto',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '12px',
                borderRadius: '0px'
              }}
            >
              Learn More About Maton
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

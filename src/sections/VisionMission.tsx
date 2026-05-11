import React from 'react';
import { Eye, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}
        >
          <span className="section-tag">Our Commitment</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase' }}>
            Our Vision <span style={{ color: 'var(--color-primary)' }}>&</span> Mission
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '48px 40px',
              background: 'var(--color-dark)',
              borderRadius: 'var(--radius-premium)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: 'rgba(0, 170, 95, 0.1)',
              borderRadius: '50%'
            }} />
            <Eye size={32} style={{ color: 'var(--color-primary)', marginBottom: '24px' }} />
            <h3 style={{ color: 'var(--color-white)', fontSize: '18px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Vision</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7 }}>
              To be Nigeria's leading provider of innovative, sustainable engineering and services in the oil and gas industry. Advancing technology, growth, and community impact in the oil and gas / agro industry.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '48px 40px',
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-premium)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }} />
            <Target size={32} style={{ color: 'var(--color-white)', marginBottom: '24px' }} />
            <h3 style={{ color: 'var(--color-white)', fontSize: '18px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Mission</h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.7 }}>
              Forge partnerships with stakeholders to promote industry growth and sustainability. Ensure safety and efficiency in all operations through advanced technology in the oil and gas / agro industry.
            </p>
          </motion.div>
        </div>

        {/* Commitment Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '48px',
            padding: '32px 40px',
            background: 'var(--color-bg-light)',
            borderRadius: 'var(--radius-premium)',
            borderLeft: '4px solid var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-dark)', flex: 1, minWidth: '250px' }}>
            Delivering innovative and sustainable engineering solutions for the oil and gas industry & agricultural industry.
          </p>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
            Prioritizing local content development and community empowerment.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;

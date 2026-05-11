import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <Shield size={28} />,
    title: "Safety First",
    desc: "Uncompromising commitment to HSE standards across every project and operation."
  },
  {
    icon: <Clock size={28} />,
    title: "On-Time Delivery",
    desc: "Proven track record of completing projects within schedule and budget constraints."
  },
  {
    icon: <Users size={28} />,
    title: "Local Expertise",
    desc: "Indigenous knowledge combined with international best practices and skilled manpower."
  },
  {
    icon: <Award size={28} />,
    title: "Quality Assured",
    desc: "ISO-aligned quality management systems ensuring consistent, world-class output."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}
        >
          <span className="section-tag">Why Maton</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase' }}>
            Why Choose <span style={{ color: 'var(--color-primary)' }}>Us.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{
                padding: '40px 32px',
                textAlign: 'center',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-premium)',
                border: '1px solid var(--color-gray)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: 'rgba(0, 170, 95, 0.08)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                margin: '0 auto 24px'
              }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '14px', textTransform: 'uppercase', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

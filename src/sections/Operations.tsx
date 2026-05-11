import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter: React.FC<{ value: string }> = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { 
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const Operations: React.FC = () => {
  const stats = [
    { label: "Completed Projects", value: "150+" },
    { label: "Active Experts", value: "200+" },
    { label: "Regional Partners", value: "50+" },
    { label: "Year Founded", value: "2023" }
  ];

  return (
    <section 
      id="operations" 
      style={{ 
        position: 'relative',
        padding: '80px 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(15, 26, 15, 0.85), rgba(15, 26, 15, 0.92))',
          zIndex: 1
        }} />
        <img 
          src="/images/pipeline-welding.jpg"
          alt="Maton Oil & Gas Pipeline Operations"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
          <span className="section-tag" style={{ color: 'var(--color-primary-light)' }}>Global Metrics</span>
          <h2 style={{ 
            fontSize: 'clamp(32px, 5vw, 64px)', 
            marginBottom: '24px', 
            color: 'var(--color-white)', 
            textTransform: 'uppercase' 
          }}>
            Precision at Scale.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1.7 }}>
            Delivering measurable impact across the energy value chain with operational excellence and a commitment to safety.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '24px' 
        }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 170, 95, 0.2)',
                borderRadius: 'var(--radius-premium)'
              }}
            >
              <div style={{ 
                fontSize: '32px', 
                fontWeight: 800, 
                color: 'var(--color-primary-light)',
                marginBottom: '8px'
              }}>
                <Counter value={stat.value} />
              </div>
              <div style={{ 
                fontSize: '12px', 
                textTransform: 'uppercase', 
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '1px',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;

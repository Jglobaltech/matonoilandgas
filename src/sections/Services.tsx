import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const portfolios = [
    { 
      title: "Oil And Gas Services", 
      desc: "Upstream and downstream energy solutions, including filling station operations.",
      image: "/images/oilandgas.jpg",
      icon: "/icons/oilandgas.png"
    },
    { 
      title: "Welding & Fabrication", 
      desc: "Precision scaffolding, sandblasting, and heavy-duty structural welding.",
      image: "/images/pipeline-welding.jpg",
      icon: "/icons/welding.png"
    },
    { 
      title: "Engineering Construction", 
      desc: "Infrastructure development including roads, bridges, and industrial maintenance.",
      image: "/images/engineering-construction.jpg",
      icon: "/icons/engineeering.png"
    },
    { 
      title: "Agriculture & Farming", 
      desc: "Mechanized farming and sustainable food crop production for regional growth.",
      image: "/images/industrial-farming.jpg",
      icon: "/icons/agriculture.png"
    },
    { 
      title: "Equipment Leasing", 
      desc: "Rental and maintenance of heavy-duty plant machinery and construction gear.",
      image: "/images/equipment-leasing.jpg",
      icon: "/icons/equipments.png"
    },
    { 
      title: "Waste Management", 
      desc: "Site remediation, industrial waste logistics, and professional sanitation.",
      image: "/images/waste-management.jpg",
      icon: "/icons/waste.png"
    }
  ];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="services" className="section" style={{ 
      position: 'relative',
      background: `linear-gradient(rgba(5, 10, 5, 0.95), rgba(5, 10, 5, 0.92)), url(/slider/1778115458205.jpg)`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '120px 0' 
    }}>
      <div className="container">
        <div style={{ marginBottom: '80px', textAlign: 'left' }}>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-tag" 
            style={{ color: 'var(--color-primary)', border: '1px solid rgba(0, 170, 95, 0.3)' }}
          >
            Core Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: 'clamp(32px, 5vw, 64px)', 
              color: 'white', 
              textTransform: 'uppercase',
              fontWeight: 900,
              letterSpacing: '-2px',
              marginTop: '20px'
            }}
          >
            Our Strategic <span style={{ color: 'var(--color-primary)' }}>Services.</span>
          </motion.h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(3, 1fr)', 
          gap: '2px', // Thin grid lines look
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          {portfolios.map((item, idx) => (
            <Link to="/services" key={idx} style={{ textDecoration: 'none', display: 'block' }}>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover="hover"
                style={{
                  position: 'relative',
                  height: '500px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#111',
                  borderRadius: 'var(--radius-premium)'
                }}
              >
              {/* Background Image Layer */}
              <motion.div
                variants={{
                  hover: { scale: 1.1, filter: 'grayscale(0%)' }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(20%) brightness(0.7)',
                  zIndex: 1
                }}
              />

              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                zIndex: 2
              }} />

              {/* Content Layer */}
              <div style={{
                position: 'absolute',
                inset: 0,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                zIndex: 3
              }}>
                <motion.div
                  variants={{
                    hover: { y: -10 }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2px'
                  }}>
                    <img src={item.icon} alt="" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    color: 'white', 
                    fontWeight: 800, 
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {item.title}
                  </h3>
                </motion.div>

                <motion.p 
                  variants={{
                    hover: { opacity: 1, y: 0 }
                  }}
                  initial={{ opacity: 0.7, y: 0 }}
                  style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '14px', 
                    lineHeight: 1.6,
                    maxWidth: '300px',
                    marginBottom: '24px'
                  }}
                >
                  {item.desc}
                </motion.p>

                <motion.div
                  variants={{
                    hover: { x: 10, opacity: 1 }
                  }}
                  initial={{ x: 0, opacity: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--color-primary)',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  Explore Details <span>→</span>
                </motion.div>
              </div>

              {/* Decorative Corner Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                borderTop: '2px solid rgba(255,255,255,0.1)',
                borderRight: '2px solid rgba(255,255,255,0.1)',
                zIndex: 4
              }} />
            </motion.div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

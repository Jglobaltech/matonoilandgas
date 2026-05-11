import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import consultationIcon from '../assets/icons/consultation.png';
import buildingIcon from '../assets/icons/building.png';
import fabricationIcon from '../assets/icons/fabrication.png';
import logisticsIcon from '../assets/icons/logistics.png';

const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Consultation",
      desc: "Expert technical advice and project feasibility studies for energy sectors.",
      icon: consultationIcon,
      active: false
    },
    {
      title: "Building",
      desc: "World-class engineering construction and industrial facility development.",
      icon: buildingIcon,
      active: true
    },
    {
      title: "Fabrication",
      desc: "High-precision welding and structural fabrication for complex projects.",
      icon: fabricationIcon,
      active: false
    },
    {
      title: "Logistics",
      desc: "Integrated supply chain and waste management logistics solutions.",
      icon: logisticsIcon,
      active: false
    }
  ];

  return (
    <section style={{ position: 'relative', zIndex: 20, marginTop: '-100px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '0px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
        }}>
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: item.active ? 'var(--color-primary)' : 'white',
                padding: '50px 40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                color: item.active ? 'white' : 'var(--color-dark)',
                borderRight: idx !== highlights.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
              }}
            >
              <div style={{ 
                marginBottom: '10px',
                background: item.active ? 'white' : 'transparent',
                padding: item.active ? '12px' : '0',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: item.active ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
              }}>
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  style={{ 
                    width: item.active ? '48px' : '64px', 
                    height: item.active ? '48px' : '64px', 
                    objectFit: 'contain'
                  }} 
                />
              </div>
              
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                fontFamily: 'var(--font-heading)'
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                fontSize: '14px', 
                lineHeight: 1.6, 
                opacity: item.active ? 0.9 : 0.6,
                marginBottom: '20px'
              }}>
                {item.desc}
              </p>
              
              <Link 
                to="/services"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  border: `1px solid ${item.active ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.1)'}`,
                  color: item.active ? 'white' : 'var(--color-dark)',
                  padding: '12px 24px',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;


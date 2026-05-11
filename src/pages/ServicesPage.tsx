import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Droplet, Hammer, Truck, Shield } from 'lucide-react';
import TrustBar from '../sections/TrustBar';
import WhyChooseUs from '../sections/WhyChooseUs';
import Operations from '../sections/Operations';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      title: "Oil And Gas Services",
      icon: <Droplet size={32} />,
      desc: "Upstream and downstream energy solutions, including filling station operations and logistics.",
      features: ["Filling Station Management", "Petroleum Logistics", "Site Support"]
    },
    {
      title: "Welding & Fabrication",
      icon: <Hammer size={32} />,
      desc: "Precision scaffolding, sandblasting, and heavy-duty structural welding for industrial applications.",
      features: ["Structural Welding", "Scaffolding Solutions", "Sandblasting Services"]
    },
    {
      title: "Engineering Construction",
      icon: <Settings size={32} />,
      desc: "Infrastructure development including roads, bridges, and industrial maintenance.",
      features: ["Civil Engineering", "Bridge Construction", "Industrial Maintenance"]
    },
    {
      title: "Agriculture & Farming",
      icon: <Zap size={32} />,
      desc: "Mechanized farming and sustainable food crop production for regional growth.",
      features: ["Mechanized Farming", "Food Crop Production", "Marketing & Supply"]
    },
    {
      title: "Equipment Leasing",
      icon: <Truck size={32} />,
      desc: "Rental and maintenance of heavy-duty plant machinery and construction gear.",
      features: ["Heavy Plant Rental", "Equipment Maintenance", "Logistics Support"]
    },
    {
      title: "Waste Management",
      icon: <Shield size={32} />,
      desc: "Site remediation, industrial waste logistics, and professional sanitation.",
      features: ["Site Remediation", "Industrial Logistics", "Professional Sanitation"]
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(15, 26, 15, 0.9), rgba(15, 26, 15, 0.95)), url(/slider/1778115458205.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag"
            style={{ color: 'var(--color-primary-light)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase' }}
          >
            Engineering <span style={{ color: 'var(--color-primary)' }}>Solutions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', marginTop: '24px' }}
          >
            Comprehensive services tailored for the energy, construction, and agricultural industries.
          </motion.p>
        </div>
      </section>

      {/* Trustbar - Proof of credibility */}
      <TrustBar />

      {/* Detailed Service Breakdown */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {detailedServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  padding: '48px', 
                  background: 'white', 
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--color-gray)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ color: 'var(--color-primary)', marginBottom: '24px' }}>{service.icon}</div>
                <h3 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: 1.7 }}>{service.desc}</p>
                <ul style={{ padding: 0, margin: 'auto 0 0' }}>
                  {service.features.map((f, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      marginBottom: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-dark)'
                    }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <WhyChooseUs />

      {/* Operational Proof */}
      <Operations />

      {/* Industrial Process Callout */}
      <section className="section" style={{ background: 'var(--color-dark)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', textTransform: 'uppercase', marginBottom: '24px' }}>Operational Excellence</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto 40px', fontSize: '18px' }}>
            Our commitment to quality ensures that every project is executed with precision, safety, and a focus on sustainable impact.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ padding: '20px 40px', border: '1px solid rgba(255,255,255,0.1)' }}>ISO Standards</div>
            <div style={{ padding: '20px 40px', border: '1px solid rgba(255,255,255,0.1)' }}>HSE Commitment</div>
            <div style={{ padding: '20px 40px', border: '1px solid rgba(255,255,255,0.1)' }}>Local Content</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

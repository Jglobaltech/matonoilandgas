import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Operations from '../sections/Operations';
import TrustBar from '../sections/TrustBar';
import WhyChooseUs from '../sections/WhyChooseUs';
import { 
  Layout, 
  ClipboardCheck, 
  Leaf, 
  ShieldAlert, 
  HardHat, 
  ShoppingBag, 
  Flower2, 
  Truck, 
  Recycle 
} from 'lucide-react';

const OperationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: "Engineering Design",
      desc: "Innovative and sustainable designs customized to meet industry requirements and client objectives.",
      icon: <Layout size={32} />
    },
    {
      title: "Project Management",
      desc: "Expert oversight from project inception to completion, ensuring timelines, budgets, and safety standards are met.",
      icon: <ClipboardCheck size={32} />
    },
    {
      title: "Sustainable Energy Solutions",
      desc: "Deployment of renewable and alternative energy technologies to support Nigeria’s energy transition.",
      icon: <Leaf size={32} />
    },
    {
      title: "Infrastructure Protection",
      desc: "Advanced solutions to safeguard vital oil and gas assets, preventing losses due to vandalism or operational failures.",
      icon: <ShieldAlert size={32} />
    },
    {
      title: "Installation and Construction",
      desc: "Reliable construction and installation services, delivering projects on time and within scope.",
      icon: <HardHat size={32} />
    },
    {
      title: "Procurement Solutions",
      desc: "Efficient sourcing of high-quality materials and equipment, ensuring smooth project execution.",
      icon: <ShoppingBag size={32} />
    },
    {
      title: "Fumigation & Landscaping",
      desc: "Professional fumigation, horticulture, and landscaping services to enhance site aesthetics and maintain environmental safety.",
      icon: <Flower2 size={32} />
    },
    {
      title: "Transportation & Oil Field",
      desc: "Providing reliable road transportation services and specialized oil field tools and labor supply.",
      icon: <Truck size={32} />
    },
    {
      title: "Waste Management",
      desc: "Comprehensive waste management, site clean-up, and environmental remediation services.",
      icon: <Recycle size={32} />
    }
  ];

  return (
    <div className="operations-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(5, 10, 5, 0.9), rgba(5, 10, 5, 0.95)), url(/images/pipeline-welding.jpg)', 
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
            Strategic Operations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase' }}
          >
            Operational <span style={{ color: 'var(--color-primary)' }}>Excellence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', marginTop: '24px', marginBottom: '40px' }}
          >
            Maton Oil & Gas Services Limited provides expert oversight and innovative designs across Nigeria's industrial landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary" style={{ width: 'auto', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
              Get A Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trustbar - Social Proof */}
      <TrustBar />

      {/* Operational Capabilities Grid */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <span className="section-tag">Core Capabilities</span>
            <h2 style={{ textTransform: 'uppercase' }}>Our <span style={{ color: 'var(--color-primary)' }}>Expertise</span> in Action.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                style={{ 
                  padding: '40px',
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-gray)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  borderRadius: 'var(--radius-premium)'
                }}
              >
                <div style={{ color: 'var(--color-primary)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', textTransform: 'uppercase', color: 'var(--color-dark)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <WhyChooseUs />

      {/* Stats and Impact */}
      <Operations />

      {/* Map/Location Section */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Locations</span>
              <h2 style={{ textTransform: 'uppercase', marginBottom: '24px' }}>Regional <span style={{ color: 'var(--color-primary)' }}>Presence.</span></h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
                Headquartered in Warri, Delta State, our operations span across the Gbaramatu Kingdom and the broader Escravos area, serving regional and national energy needs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-soft)' }}>📍</div>
                  <div>
                    <h5 style={{ textTransform: 'uppercase' }}>Main Office</h5>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Matthew Tonlagha Villa Benikrukru Community, Gbaramatu Kingdom, Delta State</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ aspectRatio: '16/9', background: 'var(--color-gray)', borderRadius: '0px', boxShadow: 'var(--shadow-soft)', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.766101150493!2d5.2826307!3d5.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104063d67899d983%3A0x4a5363818de1926f!2sBenikrukru+Community!5e0!3m2!1sen!2sng!4v1715285000000"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Maton Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperationsPage;

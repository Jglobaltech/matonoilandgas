import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Contact from '../sections/Contact';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+234 913 444 9881",
      sub: "Have a question? Call now"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "admin@matonoilandgas.com",
      sub: "info@matonoilandgas.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      value: "Matthew Tonlagha Villa Benikrukru Community,",
      sub: "Gbaramatu Kingdom, Warri South West- Escravous Area, Delta State"
    }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(5, 10, 5, 0.9), rgba(5, 10, 5, 0.95)), url(/slider/1778115458205.jpg)', 
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
            style={{ color: 'var(--color-primary-light)' }}
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white', fontSize: 'clamp(40px, 8vw, 72px)', textTransform: 'uppercase' }}
          >
            Get In <span style={{ color: 'var(--color-primary)' }}>Touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '600px', marginTop: '24px', marginBottom: '40px' }}
          >
            Whether you're looking for a partnership or have a specific project inquiry, our team is ready to assist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#contact" className="btn btn-primary" style={{ width: 'auto', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
              Get A Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {contactMethods.map((method, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  padding: '40px', 
                  background: 'white', 
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: 'var(--color-primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  {method.icon}
                </div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '16px' }}>{method.title}</h4>
                <p style={{ fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>{method.value}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>{method.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Map Section */}
      <section style={{ height: '500px', background: 'var(--color-gray)', position: 'relative' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.766101150493!2d5.2826307!3d5.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104063d67899d983%3A0x4a5363818de1926f!2sBenikrukru+Community!5e0!3m2!1sen!2sng!4v1715285000000"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;

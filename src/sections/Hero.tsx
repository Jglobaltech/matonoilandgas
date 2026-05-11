import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import slide1 from '../assets/maton/sliders/slide1.jpg';
import slide2 from '../assets/maton/sliders/slide2.jpg';
import slide3 from '../assets/maton/sliders/slide3.jpg';

const slides = [
  {
    image: slide1,
    tag: "Energy Excellence",
    title: "MATON OIL & GAS – WORLD-CLASS PROJECT MANAGEMENT & ENGINEERING",
    desc: "Leading sustainable energy solutions across Nigeria's oil, gas, and infrastructure sectors."
  },
  {
    image: slide2,
    tag: "Future Industry",
    title: "CUTTING-EDGE WELDING & STRATEGIC FABRICATION FOR INDUSTRIAL DOMINANCE",
    desc: "Precision engineering delivering unrivaled structural integrity for massive assets."
  },
  {
    image: slide3,
    tag: "Global Innovation",
    title: "SUSTAINABLE AGRICULTURE & MODERN FARMING – POWERING FOOD SECURITY",
    desc: "Innovative farming technologies that empower communities and ensure a resilient future."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds for better read time
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ 
      height: isMobile ? '75vh' : '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden',
      background: '#050a05'
    }}>
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1, x: isMobile ? '20%' : '50%' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0,
            translateX: isMobile ? 0 : -mousePos.x * 0.4,
            translateY: isMobile ? 0 : -mousePos.y * 0.4
          }}
          exit={{ opacity: 0, scale: 1.1, x: isMobile ? '-20%' : '-50%' }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            inset: isMobile ? 0 : -20,
            zIndex: 1
          }}
        >
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: 2
          }} />
          <img 
            src={slides[current].image} 
            alt="" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'brightness(0.6) contrast(1.1)'
            }} 
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Slant - Full Height/Width behind text */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`slant-${current}`}
          initial={{ x: '100%', skewX: -45, opacity: 0 }}
          animate={{ x: isMobile ? '60%' : '40%', skewX: -45, opacity: 0.15 }}
          exit={{ x: '100%', skewX: -45, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: '-25%',
            right: '-25%',
            width: '150%',
            height: '150%',
            background: 'var(--color-primary)',
            zIndex: 2,
            pointerEvents: 'none',
            transformOrigin: 'center'
          }}
        />
      </AnimatePresence>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'left'
      }}>
        {/* Slide Indicators - Right Side */}
        <div style={{
          position: 'absolute',
          right: isMobile ? '20px' : '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          zIndex: 20
        }}>
          {slides.map((_, idx) => (
            <motion.div
              key={idx}
              onClick={() => setCurrent(idx)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: current === idx ? 1.2 : 1
              }}
              transition={{ delay: 0.8 + (idx * 0.1) }}
              style={{
                width: current === idx ? '10px' : '6px',
                height: current === idx ? '10px' : '6px',
                borderRadius: '50%',
                background: 'white',
                opacity: current === idx ? 1 : 0.3,
                cursor: 'pointer',
                transition: '0.3s all ease',
                border: current === idx ? '1px solid white' : 'none',
                boxShadow: current === idx ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
              }}
            />
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isMobile ? 20 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '850px', position: 'relative', width: '100%', zIndex: 10 }}
          >
              {/* Accent Bracket - Animated */}
              <motion.div 
                initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
                animate={{ scaleX: 1, scaleY: 1, opacity: 0.5 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: isMobile ? '-10px' : '-20px',
                  left: isMobile ? '-15px' : '-40px',
                  transformOrigin: 'top left',
                  width: isMobile ? '90%' : '100%',
                  height: isMobile ? '160px' : '320px',
                  borderLeft: '4px solid var(--color-primary)',
                  borderTop: '4px solid var(--color-primary)',
                  zIndex: -1
                }} 
              />

              <div style={{ padding: isMobile ? '10px' : '0px' }}>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{ 
                    color: 'var(--color-primary)', 
                    fontSize: isMobile ? '16px' : '20px', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '4px',
                    display: 'block',
                    marginBottom: '20px',
                    textShadow: '0 0 8px rgba(0,0,0,0.6)'
                  }}
                >
                  {slides[current].tag}
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  style={{ 
                    fontSize: isMobile ? '28px' : '32px', 
                    color: 'white', 
                    marginBottom: '24px',
                    lineHeight: 1.2,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {slides[current].title}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ 
                    fontSize: isMobile ? '16px' : '20px', 
                    color: 'rgba(255,255,255,0.7)', 
                    maxWidth: '650px',
                    lineHeight: 1.6,
                    marginBottom: '40px'
                  }}
                >
                  {slides[current].desc}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Link 
                    to="/contact"
                    className="btn btn-primary" 
                    style={{ 
                      display: 'inline-block',
                      padding: '20px 60px', 
                      width: 'auto',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontSize: '14px',
                      borderRadius: 'var(--radius-premium)',
                      textAlign: 'center'
                    }}
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
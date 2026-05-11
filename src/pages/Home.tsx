import React from 'react';
import Hero from '../sections/Hero';
import ServiceHighlights from '../sections/ServiceHighlights';
import TrustBar from '../sections/TrustBar';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import VisionMission from '../sections/VisionMission';
import Services from '../sections/Services';
import Operations from '../sections/Operations';
import CTA from '../sections/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <TrustBar />
      <About />
      <WhyChooseUs />
      <VisionMission />
      <Services />
      <Operations />
      <CTA />
    </>
  );
};

export default Home;

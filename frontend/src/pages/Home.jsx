import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ForWhomSection from '../components/ForWhomSection';
import ServicesSection from '../components/ServicesSection';
import VisitProcessSection from '../components/VisitProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ForWhomSection />
        <ServicesSection />
        <VisitProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

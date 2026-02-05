import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="hero-announcement">
              <span className="announcement-dot"></span>
              <span>Gabinet w Puławach</span>
            </div>
            
            <h1 className="heading-hero">Pani Fizjoterapeuta Kobiet – wsparcie Twojego ciała na każdym etapie życia

            </h1>
            
            <p className="hero-subtitle body-large">
              Pomagam kobietom z dolegliwościami dna miednicy, bólem, problemami intymnymi 
              oraz w okresie ciąży, po porodzie i w menopauzie.
            </p>
            
            <div className="hero-cta">
              <button onClick={scrollToContact} className="btn-primary btn-lg">
                Umów wizytę
                <ArrowDown className="icon-sm" />
              </button>
              <button onClick={() => {
                const element = document.getElementById('o-mnie');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} className="btn-secondary btn-lg">
                Poznaj mnie
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img
                src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/rclcargt_0X2A3236-2.jpg"
                alt="Klaudia Duda - Fizjoterapeuta Kobiet"
                className="hero-img" />

            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
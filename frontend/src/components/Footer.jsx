import React from 'react';
import { Heart, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="heading-3">Pani Fizjoterapeuta Kobiet Klaudia Duda</h3>
            <p className="body-small footer-description">
              Profesjonalna fizjoterapia uroginekologiczna w Puławach. 
              Wsparcie dla kobiet na każdym etapie życia.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/pani_fizjoterapeuta_kobiet"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram">

                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/panifizjoterapeutakobiet"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook">

                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="heading-3">Menu</h4>
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('o-mnie')} className="footer-link">O mnie</button>
              <button onClick={() => scrollToSection('dla-kogo')} className="footer-link">Dla kogo</button>
              <button onClick={() => scrollToSection('oferta')} className="footer-link">Oferta</button>
              <button onClick={() => scrollToSection('opinie')} className="footer-link">Opinie</button>
              <button onClick={() => scrollToSection('faq')} className="footer-link">FAQ</button>
              <button onClick={() => scrollToSection('kontakt')} className="footer-link">Kontakt</button>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="heading-3">Kontakt</h4>
            <div className="footer-contact">
              <a href="tel:+48720776138" className="footer-contact-item">
                <Phone size={16} />
                <span>+48 720 776 138</span>
              </a>
              <a href="mailto:panifizjoterapeutakobiet@gmail.com" className="footer-contact-item">
                <Mail size={16} />
                <span>panifizjoterapeutakobiet@gmail.com</span>
              </a>
            </div>
            <p className="body-small footer-address">
              ul. Gościńczyk 7<br />
              24-100 Puławy, Polska
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="body-small">© 2026 Pani Fizjoterapeuta Kobiet - Klaudia Duda. Wszystkie prawa zastrzeżone.

          </p>
          <p className="body-small footer-heart">
            Stworzone z <Heart size={14} fill="var(--color-gold-dark)" color="var(--color-gold-dark)" style={{ display: 'inline', margin: '0 4px' }} /> dla kobiet
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;
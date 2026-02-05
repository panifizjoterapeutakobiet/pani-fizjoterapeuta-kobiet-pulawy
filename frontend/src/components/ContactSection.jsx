import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="kontakt" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Kontakt</span>
          <h2 className="heading-1">Umów się na wizytę</h2>
          <p className="body-large section-description">
            Skontaktuj się ze mną, aby umówić wizytę lub zadać pytania
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="heading-2">Pani Fizjoterapeuta Kobiet</h3>
              <h4 className="heading-3" style={{ color: 'var(--color-gold-dark)', marginBottom: '1.5rem' }}>
                Klaudia Duda
              </h4>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} color="var(--color-blue)" />
                  </div>
                  <div className="contact-text">
                    <p className="body-medium"><strong>Adres gabinetu:</strong></p>
                    <p className="body-medium">ul. Gościńczyk 7</p>
                    <p className="body-medium">24-100 Puławy, Polska</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} color="var(--color-blue)" />
                  </div>
                  <div className="contact-text">
                    <p className="body-medium"><strong>Telefon:</strong></p>
                    <a href="tel:+48720776138" className="contact-link">
                      +48 720 776 138
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} color="var(--color-blue)" />
                  </div>
                  <div className="contact-text">
                    <p className="body-medium"><strong>Email:</strong></p>
                    <a href="mailto:panifizjoterapeutakobiet@gmail.com" className="contact-link">
                      panifizjoterapeutakobiet@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a 
                  href="https://www.instagram.com/pani_fizjoterapeuta_kobiet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/panifizjoterapeutakobiet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Facebook size={24} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} color="var(--color-blue)" />
              <p className="body-medium">
                Mapa Google zostanie wyświetlona tutaj po dodaniu klucza Google Maps API
              </p>
              <p className="body-small" style={{ marginTop: '1rem' }}>
                ul. Gościńczyk 7, 24-100 Puławy
              </p>
            </div>
            {/* Tutaj będzie mapa Google po dodaniu API key */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

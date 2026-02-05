import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo-section">
          <h2 className="logo-text">Pani Fizjoterapeuta Kobiet</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <button onClick={() => scrollToSection('o-mnie')} className="nav-link">O mnie</button>
          <button onClick={() => scrollToSection('oferta')} className="nav-link">Oferta</button>
          <button onClick={() => scrollToSection('opinie')} className="nav-link">Opinie</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
          <button onClick={() => scrollToSection('kontakt')} className="btn-primary btn-sm">
            <Phone className="icon-sm" />
            Kontakt
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <button onClick={() => scrollToSection('o-mnie')} className="mobile-nav-link">O mnie</button>
          <button onClick={() => scrollToSection('oferta')} className="mobile-nav-link">Oferta</button>
          <button onClick={() => scrollToSection('opinie')} className="mobile-nav-link">Opinie</button>
          <button onClick={() => scrollToSection('faq')} className="mobile-nav-link">FAQ</button>
          <button onClick={() => scrollToSection('kontakt')} className="mobile-nav-link">Kontakt</button>
        </div>
      )}
    </header>
  );
};

export default Header;

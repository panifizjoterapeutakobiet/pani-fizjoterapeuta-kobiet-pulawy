import React from 'react';
import { Star } from 'lucide-react';
import GoogleReviews from './GoogleReviews';

const TestimonialsSection = () => {
  // Mockup testimonials - będą zastąpione przez Google Reviews API
  const testimonials = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Pani Klaudia to wspaniała specjalistka z ogromną wiedzą i empatią. Pomogła mi po porodzie wrócić do formy. Gorąco polecam!",
      date: "2 miesiące temu"
    },
    {
      name: "Magdalena W.",
      rating: 5,
      text: "Profesjonalizm i ciepłe podejście. Po latach problemów z nietrzymaniem moczu wreszcie czuję się lepiej. Dziękuję!",
      date: "3 miesiące temu"
    },
    {
      name: "Joanna S.",
      rating: 5,
      text: "Bardzo polecam! Pani Klaudia jest niezwykle delikatna i profesjonalna. Wreszcie znalazłam specjalistkę, która naprawdę rozumie moje problemy.",
      date: "1 miesiąc temu"
    },
    {
      name: "Katarzyna M.",
      rating: 5,
      text: "Wspaniała fizjoterapeutka! Dzięki terapii po cesarskim cięciu moja blizna już nie boli i wygląda o wiele lepiej.",
      date: "4 miesiące temu"
    },
    {
      name: "Monika P.",
      rating: 5,
      text: "Serdecznie polecam! Pani Klaudia pomogła mi w ciąży z bólami kręgosłupa. Czuję się teraz o wiele lepiej.",
      date: "2 tygodnie temu"
    },
    {
      name: "Ewa L.",
      rating: 5,
      text: "Profesjonalna opieka w przyjaznej atmosferze. Po wielu latach wstydliwych problemów wreszcie znalazłam pomoc. Dziękuję z całego serca!",
      date: "5 miesięcy temu"
    }
  ];

  return (
    <section id="opinie" className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Opinie pacjentek</span>
          <h2 className="heading-1">Co mówią moje pacjentki?</h2>
          <p className="body-large section-description">
            Twoje zaufanie i satysfakcja są dla mnie najważniejsze
          </p>
        </div>

        <GoogleReviews />

        <div className="testimonials-cta">
          <a 
            href={`https://search.google.com/local/writereview?placeid=${process.env.REACT_APP_GOOGLE_PLACE_ID}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Dodaj swoją opinię w Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

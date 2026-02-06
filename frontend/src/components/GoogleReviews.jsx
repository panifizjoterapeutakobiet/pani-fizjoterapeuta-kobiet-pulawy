import React, { useState, useEffect } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const placeId = process.env.REACT_APP_GOOGLE_PLACE_ID;
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

      if (!placeId || !apiKey) {
        setError('Brak konfiguracji API');
        setLoading(false);
        return;
      }

      try {
        // Używamy Places API (New) do pobrania szczegółów miejsca wraz z opiniami
        const url = `https://places.googleapis.com/v1/places/${placeId}`;
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews'
          }
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          const formattedReviews = data.reviews.map((review, index) => ({
            id: `review_${index}`,
            author: review.authorAttribution?.displayName || 'Anonimowy',
            rating: review.rating || 0,
            text: review.text?.text || review.originalText?.text || '',
            date: review.relativePublishTimeDescription || new Date(review.publishTime).toLocaleDateString('pl-PL'),
            authorUri: review.authorAttribution?.uri || null,
            profilePhoto: review.authorAttribution?.photoUri || null
          }));
          
          setReviews(formattedReviews);
        } else {
          setReviews([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '0.125rem' }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < Math.floor(rating) ? 'var(--color-gold-dark)' : 'transparent'}
            color={i < Math.floor(rating) ? 'var(--color-gold-dark)' : '#D1D5DB'}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="testimonials-note">
        <p className="body-small">Ładowanie opinii z Google...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="testimonials-note">
        <p className="body-small">
          <Star size={16} fill="var(--color-gold-dark)" color="var(--color-gold-dark)" style={{ display: 'inline', marginRight: '4px' }} />
          Opinie z Google • Tymczasowo niedostępne
        </p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="testimonials-note">
        <p className="body-small">Brak opinii do wyświetlenia</p>
      </div>
    );
  }

  return (
    <>
      <div className="testimonials-note">
        <p className="body-small">
          <Star size={16} fill="var(--color-gold-dark)" color="var(--color-gold-dark)" style={{ display: 'inline', marginRight: '4px' }} />
          Opinie pobrane automatycznie z Google
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                {testimonial.profilePhoto ? (
                  <img 
                    src={testimonial.profilePhoto} 
                    alt={testimonial.author}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                ) : (
                  testimonial.author.charAt(0)
                )}
              </div>
              <div className="testimonial-info">
                <h4 className="heading-3">{testimonial.author}</h4>
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
            
            <div className="testimonial-content">
              <Quote size={24} color="var(--color-blue-light)" className="quote-icon" />
              <p className="body-medium">{testimonial.text}</p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span className="testimonial-date caption">{testimonial.date}</span>
              <a
                href="https://maps.app.goo.gl/y5NJxhCzZRKfWUQx5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  color: 'var(--color-blue)',
                  textDecoration: 'none',
                  fontSize: '0.75rem'
                }}
              >
                <span>Zobacz w Google</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GoogleReviews;

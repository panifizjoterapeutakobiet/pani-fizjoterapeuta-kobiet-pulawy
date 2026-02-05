import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { MapPin, Phone, Mail } from 'lucide-react';

const GoogleMap = () => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const position = { lat: 51.41664, lng: 21.96933 }; // Puławy coordinates
  
  if (!apiKey) {
    return (
      <div className="map-placeholder">
        <MapPin size={48} color="var(--color-blue)" />
        <p className="body-medium">Mapa Google nie może być załadowana</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: '100%', height: '100%', minHeight: '450px', borderRadius: '1.5rem', overflow: 'hidden' }}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          gestureHandling="greedy"
          disableDefaultUI={false}
          mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker
            position={position}
            onClick={() => setInfoWindowOpen(!infoWindowOpen)}
          >
            <Pin
              background="var(--color-blue)"
              glyphColor="#ffffff"
              borderColor="var(--color-gold)"
            />
          </AdvancedMarker>

          {infoWindowOpen && (
            <InfoWindow
              position={position}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div style={{ padding: '1rem', maxWidth: '280px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Pani Fizjoterapeuta Kobiet
                </h3>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} color="var(--color-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    ul. Gościńczyk 7<br />
                    24-100 Puławy
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Phone size={16} color="var(--color-blue)" style={{ flexShrink: 0 }} />
                  <a 
                    href="tel:+48720776138" 
                    style={{ fontSize: '0.875rem', color: 'var(--color-blue)', textDecoration: 'none' }}
                  >
                    +48 720 776 138
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="var(--color-blue)" style={{ flexShrink: 0 }} />
                  <a 
                    href="mailto:panifizjoterapeutakobiet@gmail.com" 
                    style={{ fontSize: '0.875rem', color: 'var(--color-blue)', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMap;

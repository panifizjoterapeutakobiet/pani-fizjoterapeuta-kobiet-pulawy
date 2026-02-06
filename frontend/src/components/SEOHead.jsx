import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#medicalbusiness",
        "name": "Pani Fizjoterapeuta Kobiet",
        "alternateName": "Fizjoterapia Uroginekologiczna Klaudia Duda",
        "description": "Specjalistyczna fizjoterapia uroginekologiczna dla kobiet w Puławach. Terapia dna miednicy, przygotowanie do porodu, rehabilitacja poporodowa.",
        "url": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/",
        "telephone": "+48720776138",
        "email": "panifizjoterapeutakobiet@gmail.com",
        "priceRange": "$$",
        "image": "https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/evtn0lwx_0X2A3431-2.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Gościńczyk 7",
          "addressLocality": "Puławy",
          "postalCode": "24-100",
          "addressCountry": "PL",
          "addressRegion": "Lubelskie"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.413372499999994",
          "longitude": "21.9773405"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.instagram.com/pani_fizjoterapeuta_kobiet",
          "https://www.facebook.com/panifizjoterapeutakobiet"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "7",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Physician",
        "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#physician",
        "name": "Klaudia Duda",
        "honorificPrefix": "mgr",
        "jobTitle": "Fizjoterapeuta Uroginekologiczny",
        "medicalSpecialty": "Fizjoterapia Uroginekologiczna",
        "worksFor": {
          "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#medicalbusiness"
        },
        "alumniOf": "Rzeszowski Uniwersytet Medyczny",
        "knowsAbout": [
          "Fizjoterapia uroginekologiczna",
          "Terapia dna miednicy",
          "Fizjoterapia w ciąży i połogu",
          "Terapia blizn",
          "Biofeedback",
          "Elektrostymulacja"
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Fizjoterapia Uroginekologiczna",
        "provider": {
          "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#medicalbusiness"
        },
        "areaServed": {
          "@type": "City",
          "name": "Puławy"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Usługi Fizjoterapeutyczne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia dna miednicy",
                "description": "Wzmacnianie i regeneracja mięśni dna miednicy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Przygotowanie do porodu",
                "description": "Świadome przygotowanie ciała do ciąży i porodu"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia po porodzie",
                "description": "Regeneracja ciała po narodzinach dziecka"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Terapia blizn",
                "description": "Terapia blizn po cesarskim cięciu i episiotomii"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#website",
        "url": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/",
        "name": "Pani Fizjoterapeuta Kobiet",
        "description": "Fizjoterapia uroginekologiczna dla kobiet w Puławach",
        "publisher": {
          "@id": "https://panifizjoterapeutakobiet.github.io/pani-fizjoterapeuta-kobiet-pulawy/#medicalbusiness"
        },
        "inLanguage": "pl-PL"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

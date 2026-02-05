import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Fizjoterapia uroginekologiczna",
      short: "Kompleksowa terapia układu moczowo-płciowego",
      description: "Specjalistyczna terapia skierowana do kobiet z problemami układu moczowo-płciowego. Obejmuje diagnostykę, terapię manualną, treningi świadomości ciała oraz techniki relaksacyjne."
    },
    {
      title: "Terapia dna miednicy",
      short: "Wzmacnianie i regeneracja mięśni dna miednicy",
      description: "Indywidualnie dobrana terapia mięśni dna miednicy. Pomaga przy nietrzymaniu moczu, obniżeniu narządów, bólu miednicy. Obejmuje trening mięśni, biofeedback i elektrostymulację."
    },
    {
      title: "Terapia blizn po cesarskim cięciu",
      short: "Leczenie blizn i przywracanie mobilności tkanek",
      description: "Specjalistyczne techniki manualne rozluźniające blizny po cesarskim cięciu. Pomaga zmniejszyć ból, poprawić wygląd blizny i przywrócić prawidłową funkcję tkanek."
    },
    {
      title: "Rozejście mięśnia prostego brzucha",
      short: "Terapia diastazy po ciąży",
      description: "Program terapeutyczny dla kobiet z rozstępem mięśni brzucha po ciąży. Obejmuje ćwiczenia stabilizacyjne, treningi oddechowe i techniki manualne wspierające zbliżenie mięśni."
    },
    {
      title: "Bolesne miesiączki i endometrioza",
      short: "Łagodzenie bólu menstruacyjnego",
      description: "Holistyczne podejście do bólu miesiączkowego. Techniki manualne, relaksacyjne i edukacja pomagające złagodzić dolegliwości związane z menstruacją i endometriozą."
    },
    {
      title: "Bolesne współżycie",
      short: "Terapia dyspareunia i waginizmu",
      description: "Delikatna, empatyczna terapia problemów intymnych. Praca z napięciem mięśni, terapia manualna i techniki relaksacyjne pomagające przywrócić komfort podczas współżycia."
    },
    {
      title: "Przygotowanie do ciąży i porodu",
      short: "Kompleksowe wsparcie przed i w czasie ciąży",
      description: "Program przygotowujący ciało do ciąży i porodu. Ćwiczenia wzmacniające, techniki oddechowe, nauka pozycji porodowych i praca z dnem miednicy."
    },
    {
      title: "Opieka fizjoterapeutyczna w ciąży",
      short: "Wsparcie w okresie ciąży",
      description: "Łagodzenie dolegliwości ciążowych: bóle kręgosłupa, obrzęki, przepukliny. Przygotowanie do porodu i nauka technik pomocnych podczas rodzenia."
    },
    {
      title: "Terapia po porodzie",
      short: "Regeneracja ciała po narodzinach dziecka",
      description: "Kompleksowa rehabilitacja po porodzie naturalnym lub cesarskim cięciu. Wzmacnianie dna miednicy, brzucha, praca z bliznami i powrót do aktywności."
    },
    {
      title: "Nietrzymanie moczu",
      short: "Skuteczna terapia inkontynencji",
      description: "Specjalistyczna terapia nietrzymania moczu wysiłkowego, naglącego lub mieszanego. Treningi mięśni, biofeedback, elektrostymulacja i zmiana nawyków."
    },
    {
      title: "Obniżenie narządu rodnego",
      short: "Terapia prolapsu",
      description: "Fizjoterapia wspierająca przy obniżeniu macicy, pęcherza lub odbytnicy. Ćwiczenia wzmacniające, pessaroterapia i edukacja dotycząca profilaktyki."
    },
    {
      title: "Fizjoterapia przed i po operacjach",
      short: "Przygotowanie i rehabilitacja pooperacyjna",
      description: "Wsparcie przed zabiegami uroginekologicznymi i rehabilitacja po operacjach. Przygotowanie ciała, nauka prawidłowych wzorców ruchu i regeneracja po zabiegu."
    },
    {
      title: "Dolegliwości bólowe w obrębie miednicy",
      short: "Terapia przewlekłego bólu miednicy",
      description: "Holistyczna terapia przewlekłego bólu w obszarze miednicy. Techniki manualne, terapia punktów spustowych, relaksacja i edukacja."
    },
    {
      title: "Pessaroterapia",
      short: "Dobór i nauka użytkowania pessar",
      description: "Profesjonalny dobór pessariów przy obniżeniu narządów. Nauka zakładania, zdejmowania i pielęgnacji. Regularne kontrole i dostosowanie terapii."
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="oferta" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Oferta</span>
          <h2 className="heading-1">Jak mogę Ci pomóc?</h2>
          <p className="body-large section-description">
            Oferuję kompleksową opiekę fizjoterapeutyczną dopasowaną do Twoich indywidualnych potrzeb
          </p>
        </div>

        <div className="services-images">
          <img 
            src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/25ygvdvf_0X2A3356-2-2.jpg"
            alt="Fizjoterapia uroginekologiczna"
            className="service-img"
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/diyidtv8_0X2A3320-2.jpg"
            alt="Terapia specjalistyczna"
            className="service-img"
          />
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <button 
                className="service-header"
                onClick={() => toggleService(index)}
              >
                <div className="service-title-section">
                  <h3 className="heading-3">{service.title}</h3>
                  <p className="body-small service-short">{service.short}</p>
                </div>
                <div className="service-toggle">
                  {expandedService === index ? (
                    <ChevronUp size={24} color="var(--color-blue)" />
                  ) : (
                    <ChevronDown size={24} color="var(--color-blue)" />
                  )}
                </div>
              </button>
              
              {expandedService === index && (
                <div className="service-content">
                  <p className="body-medium">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

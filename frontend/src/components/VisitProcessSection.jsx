import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const VisitProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Rozmowa i wywiad",
      description: "Na początku wizyty poświęcam czas na szczegółową rozmowę. Wysłucham Twoich dolegliwości, historii zdrowia i oczekiwań. To moment, w którym możesz swobodnie opowiedzieć o swoich problemach w pełni dyskretnej atmosferze."
    },
    {
      number: "02",
      title: "Badanie diagnostyczne",
      description: "Po rozmowie, za Twoją pełną zgodą, przeprowadzam badanie. Zawsze dbam o Twój komfort i intymność. Badanie jest delikatne i profesjonalne. W każdej chwili możesz poprosić o przerwę lub zadać pytania."
    },
    {
      number: "03",
      title: "Terapia indywidualna",
      description: "Na podstawie wywiadu i badania dobieram techniki terapeutyczne idealnie dopasowane do Twoich potrzeb. Może to być terapia manualna, ćwiczenia, biofeedback lub elektrostymulacja – zawsze w sposób komfortowy dla Ciebie."
    },
    {
      number: "04",
      title: "Zalecenia do domu",
      description: "Każda wizyta kończy się omówieniem planu terapeutycznego i zaleceniami do samodzielnego wykonywania w domu. Otrzymasz konkretne wskazówki, które pomogą Ci w procesie zdrowienia między wizytami."
    }
  ];

  return (
    <section id="wizyta" className="section visit-process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Przebieg wizyty</span>
          <h2 className="heading-1">Jak wygląda wizyta?</h2>
          <p className="body-large section-description">
            Każda wizyta to bezpieczna przestrzeń, w której czujesz się komfortowo i zrozumiana
          </p>
        </div>

        <div className="visit-process-grid">
          <div className="visit-steps">
            {steps.map((step, index) => (
              <div key={index} className="visit-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="heading-3">{step.title}</h3>
                  <p className="body-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="visit-image-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/qyn5lc4a_0X2A3502-2.jpg"
              alt="Konsultacja fizjoterapeutyczna"
              className="visit-img"
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/ioevccjs_0X2A2801-2.jpg"
              alt="Terapia fizjoterapeutyczna"
              className="visit-img"
            />
          </div>
        </div>

        <div className="visit-reassurance">
          <h3 className="heading-2">Twój komfort jest priorytetem</h3>
          <div className="reassurance-points">
            <div className="reassurance-point">
              <CheckCircle2 size={24} color="var(--color-blue)" />
              <span>Pełna dyskrekcja i szacunek dla Twojej prywatności</span>
            </div>
            <div className="reassurance-point">
              <CheckCircle2 size={24} color="var(--color-blue)" />
              <span>Badanie tylko za Twoją pełną zgodą</span>
            </div>
            <div className="reassurance-point">
              <CheckCircle2 size={24} color="var(--color-blue)" />
              <span>W każdej chwili możesz zadać pytania lub poprosić o przerwę</span>
            </div>
            <div className="reassurance-point">
              <CheckCircle2 size={24} color="var(--color-blue)" />
              <span>Bezpieczna przestrzeń do rozmowy o intymnych problemach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitProcessSection;

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const VisitProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Rozmowa (wywiad)",
      description: "Wizyta rozpoczyna się szczegółowym wywiadem bez oceniania, w bezpiecznej atmosferze. To moment, w którym możesz swobodnie opowiedzieć o swoich dolegliwościach, historii zdrowia i oczekiwaniach w pełni dyskretnej atmosferze."
    },
    {
      number: "02",
      title: "Omówienie przebiegu wizyty",
      description: "Każdy etap jest dokładnie wyjaśniony. Badania odbywają się zawsze za Twoją zgodą – możesz odmówić lub przerwać w każdej chwili. Dbam o Twój komfort i intymność na każdym kroku."
    },
    {
      number: "03",
      title: "Ocena postawy i oddechu",
      description: "Mięśnie dna miednicy współpracują z całym ciałem. Oceniam Twoją postawę, sposób oddychania i pracę przepony, co pozwala lepiej zrozumieć funkcjonowanie Twojego ciała."
    },
    {
      number: "04",
      title: "Badanie USG",
      description: "Pozwala zobaczyć pracę mięśni dna miednicy na ekranie – w spoczynku i podczas napięcia. To bezbolesne badanie, które pomaga wizualizować działanie mięśni."
    },
    {
      number: "05",
      title: "Badanie per vaginam, per rectum",
      description: "Delikatne badanie manualne, które pozwala ocenić siłę, napięcie, elastyczność, czucie i ewentualną bolesność mięśni. Zawsze przeprowadzane za Twoją pełną zgodą, z zachowaniem maksymalnego komfortu."
    },
    {
      number: "06",
      title: "Badanie EMG + biofeedback",
      description: "Ocena aktywności mięśni dna miednicy oraz nauka prawidłowego napinania i rozluźniania mięśni dzięki informacji zwrotnej na ekranie. Widzisz na własne oczy, jak pracują Twoje mięśnie."
    },
    {
      number: "07",
      title: "Plan terapii i zalecenia",
      description: "Na zakończenie omawiane są wyniki, przekazywane są pierwsze zalecenia oraz ustalany jest indywidualny plan terapii. Otrzymasz konkretne wskazówki, które pomogą Ci w procesie zdrowienia."
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
              className="visit-img visit-img-landscape"
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/ioevccjs_0X2A2801-2.jpg"
              alt="Terapia fizjoterapeutyczna"
              className="visit-img visit-img-portrait"
            />
          </div>
        </div>

        <div className="visit-reassurance">
          <h3 className="heading-2">Pierwsza wizyta to diagnostyka, edukacja i nauka świadomej pracy z ciałem</h3>
          <p className="body-medium" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Wizyta przebiega w komfortowych warunkach, z poszanowaniem intymności pacjentki.
          </p>
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

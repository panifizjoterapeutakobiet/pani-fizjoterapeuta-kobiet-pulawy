import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="o-mnie" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-section">
            <div className="about-image-main">
              <img 
                src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/evtn0lwx_0X2A3431-2.jpg"
                alt="Klaudia Duda"
                className="about-img"
              />
            </div>
            <div className="about-image-secondary">
              <img 
                src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/o9z54iuo_0X2A3244-2.jpg"
                alt="Gabinet Fizjoterapii"
                className="about-img-small"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="section-subtitle">O mnie</span>
            <h2 className="heading-1">Klaudia Duda</h2>
            <h3 className="heading-3" style={{ color: 'var(--color-gold-dark)', marginBottom: '1.5rem' }}>
              Fizjoterapeuta Uroginekologiczny
            </h3>
            
            <div className="about-text">
              <p className="body-medium">
                Jestem fizjoterapeutką uroginekologiczną, która z pasją wspiera kobiety 
                na różnych etapach ich życia. Wierzę, że każda kobieta zasługuje na 
                profesjonalną opiekę w atmosferze pełnej zrozumienia i szacunku.
              </p>
              
              <p className="body-medium">
                W swojej pracy łączę wiedzę medyczną z indywidualnym, delikatnym podejściem 
                do każdej pacjentki. Rozumiem, że problemy zdrowia intymnego mogą być 
                trudnym tematem, dlatego tworzę bezpieczną przestrzeń, w której możesz 
                czuć się komfortowo i swobodnie rozmawiać o swoich dolegliwościach.
              </p>

              <p className="body-medium">
                Moja misja to nie tylko skuteczna terapia, ale także edukacja i oswajanie 
                tematów, które często są traktowane jako tabu. Chcę, abyś czuła się 
                zrozumiana i wspierana na drodze do zdrowia.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon" style={{ background: 'var(--color-blue-light)' }}>
                  <Heart size={24} color="var(--color-blue)" />
                </div>
                <div>
                  <h4 className="heading-3">Empatyczne podejście</h4>
                  <p className="body-small">Pełen szacunek i zrozumienie dla Twoich potrzeb</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon" style={{ background: 'var(--color-gold-light)' }}>
                  <Award size={24} color="var(--color-gold-dark)" />
                </div>
                <div>
                  <h4 className="heading-3">Specjalistyczna wiedza</h4>
                  <p className="body-small">Certyfikowana fizjoterapia uroginekologiczna</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon" style={{ background: 'var(--color-blue-light)' }}>
                  <Users size={24} color="var(--color-blue)" />
                </div>
                <div>
                  <h4 className="heading-3">Indywidualna terapia</h4>
                  <p className="body-small">Każda terapia dostosowana do Twoich potrzeb</p>
                </div>
              </div>
            </div>

            <div className="about-education">
              <h4 className="heading-2">Wykształcenie i certyfikaty</h4>
              <ul className="education-list">
                <li>Fizjoterapia uroginekologiczna</li>
                <li>Terapia dna miednicy</li>
                <li>Fizjoterapia w ciąży i połogu</li>
                <li>Terapia manualna</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

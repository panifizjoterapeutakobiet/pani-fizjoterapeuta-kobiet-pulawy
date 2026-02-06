import React from 'react';
import { Baby, Heart, Flower2, Activity, HeartPulse, User, Sparkles, TrendingDown, Target, Layers } from 'lucide-react';

const ForWhomSection = () => {
  const targetGroups = [
  {
    icon: Baby,
    title: "Kobiety w ciąży",
    description: "Wsparcie w przygotowaniu do porodu i łagodzenie dolegliwości ciążowych",
    color: "blue"
  },
  {
    icon: Heart,
    title: "Kobiety po porodzie",
    description: "Regeneracja dna miednicy i powrót do formy po narodzinach dziecka",
    color: "gold"
  },
  {
    icon: Flower2,
    title: "Kobiety z bolesnymi miesiączkami",
    description: "Terapia endometriozy i bolesnych menstruacji",
    color: "blue"
  },
  {
    icon: Activity,
    title: "Kobiety z bolesnym współżyciem",
    description: "Delikatna terapia problematycznych miejsc intymnych",
    color: "gold"
  },
  {
    icon: HeartPulse,
    title: "Kobiety z nietrzymaniem moczu",
    description: "Skuteczna terapia wzmacniająca mięśnie dna miednicy",
    color: "blue"
  },
  {
    icon: User,
    title: "Kobiety w menopauzie",
    description: "Wsparcie w okresie zmian hormonalnych i łagodzenie objawów",
    color: "gold"
  },
  {
    icon: Sparkles,
    title: "Kobiety zmagające się z niepłodnością",
    description: "Holistyczne wsparcie funkcji układu rozrodczego poprzez terapię dna miednicy, poprawę ukrwienia i rozluźnienie napięć",
    color: "blue"
  },
  {
    icon: TrendingDown,
    title: "Kobiety z obniżeniem narządu rodnego",
    description: "Specjalistyczna terapia wzmacniająca struktury dna miednicy i zapobiegająca pogłębianiu się problemu",
    color: "gold"
  },
  {
    icon: Target,
    title: "Kobiety przygotowujące się do ciąży i porodu",
    description: "Świadome przygotowanie ciała - nauka pracy z dnem miednicy, ćwiczenia oddechowe i optymalizacja funkcji mięśni",
    color: "blue"
  },
  {
    icon: Layers,
    title: "Kobiety z rozejściem mięśnia prostego brzucha",
    description: "Terapia i ćwiczenia wspierające prawidłowe funkcjonowanie mięśni brzucha oraz przywracanie ich stabilności",
    color: "gold"
  }];


  return (
    <section id="dla-kogo" className="section for-whom-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Dla kogo</span>
          <h2 className="heading-1">Komu mogę pomóc?</h2>
          <p className="body-large section-description">
            Jeśli doświadczasz któregoś z tych problemów, nie jesteś sama. 
            Każda kobieta zasługuje na profesjonalną pomoc i wsparcie.
          </p>
        </div>

        <div className="for-whom-grid">
          {targetGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="for-whom-card">
                <div className={`for-whom-icon ${group.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="heading-3">{group.title}</h3>
                <p className="body-small">{group.description}</p>
              </div>);

          })}
        </div>

        <div className="for-whom-image-section">
          <img
            src="https://customer-assets.emergentagent.com/job_fizjo-dla-kobiet/artifacts/6yb6h5az_0X2A2862-2.jpg"
            alt="Fizjoterapia dla kobiet w ciąży"
            className="for-whom-img" />

        </div>

        <div className="reassurance-box">
          <h3 className="heading-2">Nie musisz cierpieć w milczeniu</h3>
          <p className="body-medium">Problemy z dnem miednicy, ból podczas współżycia, czy nietrzymanie moczu to częste dolegliwości, o których wiele kobiet wstydzi się mówić. Pamiętaj – nie jesteś sama, a te problemy można skutecznie leczyć. Jestem tu, aby Ci pomóc.



          </p>
        </div>
      </div>
    </section>);

};

export default ForWhomSection;
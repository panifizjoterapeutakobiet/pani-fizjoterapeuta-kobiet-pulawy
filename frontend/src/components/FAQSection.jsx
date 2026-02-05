import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "Czy potrzebuję skierowania na wizytę?",
      answer: "Nie, skierowanie nie jest wymagane. Możesz umówić się na wizytę bezpośrednio. Jeśli jednak posiadasz skierowanie od lekarza, zabierz je ze sobą – pomoże mi lepiej zrozumieć Twój stan zdrowia."
    },
    {
      question: "Czy terapia jest bolesna?",
      answer: "Nie. Terapia jest prowadzona w sposób delikatny i dostosowany do Twojej wrażliwości. Mogą pojawić się niewielkie dyskomforty podczas rozluźniania napiętych mięśni, ale zawsze pracujemy w granicach Twojego komfortu. W każdej chwili możesz poprosić o przerwę."
    },
    {
      question: "Czy wizyta obejmuje badanie wewnętrzne?",
      answer: "Badanie wewnętrzne może być częścią diagnozy, ale odbywa się wyłącznie za Twoją pełną zgodą. Najpierw zawsze przeprowadzam szczegółowy wywiad i badanie zewnętrzne. Badanie wewnętrzne jest proponowane tylko wtedy, gdy jest konieczne dla terapii, i zawsze w atmosferze pełnego szacunku dla Twojej intymności."
    },
    {
      question: "Jak się przygotować do pierwszej wizyty?",
      answer: "Nie musisz się specjalnie przygotowywać. Zalecam przyjście w wygodnym ubraniu, które łatwo zdjąć. Jeśli posiadasz wyniki badań lub dokumentację medyczną dotyczącą Twoich dolegliwości, weź je ze sobą. Najważniejsze – przygotuj listę pytań i rzeczy, o których chcesz porozmawiać."
    },
    {
      question: "Czy mogę przyjść w trakcie miesiączki?",
      answer: "Tak, możesz przyjść na wizytę podczas miesiączki. W zależności od rodzaju terapii możemy dostosować plan wizyty. Jeśli czujesz się komfortowo i dolegliwości nie są zbyt duże, przeprowadzimy normalną sesję. W przypadku dużego dyskomfortu możemy przełożyć wizytę."
    },
    {
      question: "Ile trwa wizyta i ile sesji będę potrzebować?",
      answer: "Pierwsza wizyta trwa około 60 minut i obejmuje szczegółowy wywiad, badanie i pierwszą terapię. Kolejne wizyty trwają 45-60 minut. Liczba potrzebnych sesji zależy od rodzaju i nasilenia dolegliwości – może to być od kilku do kilkunastu wizyt. Po pierwszej konsultacji przedstawię Ci indywidualny plan terapii."
    },
    {
      question: "Czy terapia jest refundowana przez NFZ?",
      answer: "Fizjoterapia uroginekologiczna w moim gabinecie jest usługą prywatną i nie jest refundowana przez NFZ. Oferuję profesjonalną, indywidualną opiekę w pełni komfortowych warunkach."
    },
    {
      question: "Czy mogę przyjść z partnerem/osobą towarzyszącą?",
      answer: "Tak, jeśli obecność bliskiej osoby doda Ci pewności siebie i komfortu, osoba towarzysząca jest mile widziana na części konsultacyjnej wizyty. W przypadku badania i terapii zazwyczaj proponuję wizytę sam na sam, ale możemy to indywidualnie ustalić."
    },
    {
      question: "Czy terapia pomoże, jeśli problem trwa już długo?",
      answer: "Tak! Nawet jeśli dolegliwości trwają od wielu lat, fizjoterapia może przynieść znaczną poprawę. Nigdy nie jest za późno, aby zacząć dbać o swoje zdrowie. Wiele moich pacjentek z długoletnią historią problemów odczuwa wyraźną poprawę po terapii."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FAQ</span>
          <h2 className="heading-1">Najczęściej zadawane pytania</h2>
          <p className="body-large section-description">
            Znajdź odpowiedzi na pytania, które mogą Cię nurtować
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="heading-3">{faq.question}</h3>
                <div className="faq-toggle">
                  {expandedFAQ === index ? (
                    <ChevronUp size={24} color="var(--color-blue)" />
                  ) : (
                    <ChevronDown size={24} color="var(--color-blue)" />
                  )}
                </div>
              </button>
              
              {expandedFAQ === index && (
                <div className="faq-answer">
                  <p className="body-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

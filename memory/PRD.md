# PRD - Strona Internetowa: Pani Fizjoterapeuta Kobiet

## Informacje Podstawowe
**Projekt:** Strona internetowa dla fizjoterapeutki uroginekologicznej  
**Klient:** Klaudia Duda - Pani Fizjoterapeuta Kobiet  
**Lokalizacja:** ul. Gościńczyk 7, 24-100 Puławy, Polska  
**Data rozpoczęcia:** 5 lutego 2025

## Problem Statement
Zbudowanie profesjonalnej, nowoczesnej i budzjącej zaufanie strony internetowej dla specjalistki fizjoterapii kobiet. Strona ma:
- Budować zaufanie i poczucie bezpieczeństwa
- Oswajać intymne problemy zdrowotne kobiet
- Zachęcać do umówienia wizyty
- Pokazywać specjalistyczną wiedzę prostym językiem

## User Personas
**Główna persona:** Kobiety w wieku 25-55 lat z problemami:
- Dolegliwości dna miednicy
- Bolesne miesiączki/endometrioza
- Nietrzymanie moczu
- Problemy po porodzie
- Bolesne współżycie
- Dolegliwości w ciąży lub menopauzie

**Potrzeby użytkownika:**
- Profesjonalna, ale ciepła komunikacja
- Dyskrecja i empatia
- Jasne informacje o ofercie
- Łatwy kontakt i możliwość umówienia wizyty

## Architektura Techniczna

### Frontend (React)
- **Framework:** React 19 + React Router
- **Styling:** Tailwind CSS + Custom CSS
- **Komponenty:** Shadcn UI
- **Zdjęcia:** 10 profesjonalnych zdjęć gabinetu i specjalistki
- **Paleta kolorów:** 
  - Niebieski (główny): #4A90E2
  - Złoty (akcent): #D4AF37
  - Tła: kremowe (#FFF9F2)

### Backend
- **Nie wymagany na początkowym etapie**
- **Baza danych:** Nie wymagana (strona statyczna)

### Integracje (Do dodania później)
1. **Google Maps API** - Interaktywna mapa lokalizacji gabinetu
2. **Google Places API** - Automatyczne pobieranie opinii z Google

## Core Requirements (Statyczne)

### Struktura Strony
1. **Header** - Stała nawigacja z logo i menu
2. **Hero Section** - Główny komunikat i zdjęcie specjalistki
3. **O Mnie** - Przedstawienie Klaudii Dudy, wykształcenie
4. **Dla Kogo** - Grupy docelowe (6 kategorii kobiet)
5. **Oferta** - 14 usług z rozwijalnymi opisami
6. **Jak Wygląda Wizyta** - 4-etapowy proces
7. **Opinie** - Mockup opinii (później API Google)
8. **FAQ** - 9 często zadawanych pytań
9. **Kontakt** - Dane kontaktowe (telefon, email, social media)
10. **Footer** - Podsumowanie i dodatkowe linki

### Funkcjonalności
- ✅ Responsywny design (desktop, tablet, mobile)
- ✅ Smooth scrolling między sekcjami
- ✅ Sticky header z efektem blur
- ✅ Animacje hover na kartach
- ✅ Rozwijane sekcje (accordion) dla usług i FAQ
- ✅ Linki do social media (Instagram, Facebook)
- ⏳ Mapa Google (mockup - wymaga API key)
- ⏳ Opinie z Google (mockup - wymaga API key)

## Co Zostało Zaimplementowane (5 lutego 2025)

### ✅ Ukończone
1. **Struktura Frontend**
   - Home page z wszystkimi sekcjami
   - Header z nawigacją (desktop + mobile)
   - Footer z linkami i kontaktem

2. **Sekcje Strony**
   - Hero - z głównym komunikatem i zdjęciem
   - O Mnie - biografia, wykształcenie, cechy
   - Dla Kogo - 6 grup docelowych
   - Oferta - 14 usług z opisami
   - Jak Wygląda Wizyta - 4 etapy
   - Opinie - **DZIAŁAJĄCE pobieranie z Google API (5 lutego 2025)**
   - FAQ - 9 pytań i odpowiedzi
   - Kontakt - dane kontaktowe, social media, **DZIAŁAJĄCA mapa Google Maps (5 lutego 2025)**

3. **Design & Styling**
   - Niebiesko-złota paleta kolorów
   - Responsywny layout
   - Ciepły, profesjonalny wygląd
   - Wszystkie 10 zdjęć zintegrowane

4. **Interaktywność**
   - Smooth scrolling
   - Rozwijane sekcje (usługi, FAQ)
   - Hover effects
   - Mobile menu

5. **Integracje API (5 lutego 2025)**
   - ✅ Google Maps JavaScript API - interaktywna mapa z markerem
   - ✅ Google Places API - automatyczne pobieranie opinii (5 opinii, ocena 5.0⭐)
   - Klucze API zabezpieczone przez ograniczenia domeny i API

### ⏳ Do Zrobienia (Backlog)
**P1 - Wysoki priorytet:**
- [x] Dodanie Google Maps API key i implementacja mapy ✅ **Gotowe 5.02.2025**
- [x] Dodanie Google Places API key i automatyczne pobieranie opinii ✅ **Gotowe 5.02.2025**

**P2 - Średni priorytet:**
- [ ] Optymalizacja SEO (meta tags, OpenGraph)
- [ ] Dodanie strukturalnych danych (schema.org)
- [ ] Optymalizacja obrazów (lazy loading, WebP)

**P3 - Niski priorytet:**
- [ ] Dodanie polityki prywatności i RODO
- [ ] Google Analytics
- [ ] Blog (opcjonalnie)

## Dane Kontaktowe
- **Telefon:** +48 720 776 138
- **Email:** panifizjoterapeutakobiet@gmail.com
- **Instagram:** https://www.instagram.com/pani_fizjoterapeuta_kobiet
- **Facebook:** https://www.facebook.com/panifizjoterapeutakobiet
- **Adres:** ul. Gościńczyk 7, 24-100 Puławy, Polska

## Następne Kroki (Next Actions)
1. Dostarczenie przez klienta:
   - Google Maps API key
   - Google Places API key + Place ID profilu Google Business
2. Implementacja API integracji
3. Weryfikacja i testy finalne
4. Wdrożenie produkcyjne

## Notatki
- Strona nie wymaga backendu ani bazy danych
- Wszystkie zdjęcia dostarczone przez klienta
- Design oparty na ciepłej, profesjonalnej komunikacji
- Fokus na budowaniu zaufania i komfortu pacjentek

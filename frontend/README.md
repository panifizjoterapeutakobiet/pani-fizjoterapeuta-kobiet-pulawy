# Strona Internetowa - Pani Fizjoterapeuta Kobiet

Profesjonalna strona internetowa dla gabinetu fizjoterapii uroginekologicznej w Puławach.

**🌐 Adres strony:** https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy

## 🌟 Funkcje

- ✅ Responsywny design (desktop, tablet, mobile)
- ✅ Interaktywna mapa Google Maps z lokalizacją gabinetu
- ✅ Automatyczne pobieranie opinii z Google (5.0⭐ - 7 opinii)
- ✅ 8 sekcji: Hero, O mnie, Dla kogo, Oferta, Wizyta, Opinie, FAQ, Kontakt
- ✅ 14 usług z rozwijalnymi opisami
- ✅ Niebiesko-złota kolorystyka

## 🚀 Szybki start

**Zacznij tutaj:** [QUICK_START.md](QUICK_START.md) - wszystkie polecenia gotowe do skopiowania!

**Szczegółowa instrukcja:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - krok po kroku z wyjaśnieniami

## 📋 Co musisz zrobić?

1. Kliknij **"Save to GitHub"** w Emergent (nazwa repo: `panifizjoterapeutakobietpulawy`)
2. Skopiuj polecenia z [QUICK_START.md](QUICK_START.md)
3. Zaktualizuj ograniczenia Google API dla domeny: `panifizjoterapeutakobiet.github.io/*`
4. Włącz GitHub Pages w ustawieniach repo
5. Gotowe! Strona online za 3-5 minut

## 📁 Struktura projektu

```
frontend/
├── src/
│   ├── components/      # Komponenty React
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ForWhomSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── VisitProcessSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── GoogleMap.jsx          # 🗺️ Mapa z dokładną lokalizacją
│   │   ├── GoogleReviews.jsx      # ⭐ Auto-pobieranie opinii
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
├── .env                           # Klucze API (NIE commituj!)
├── README.md                      # Ten plik
├── QUICK_START.md                 # ⚡ Szybkie polecenia
└── DEPLOYMENT_GUIDE.md            # 📖 Szczegółowa instrukcja
```

## 🎨 Kolory

- **Niebieski główny:** `#4A90E2`
- **Złoty akcent:** `#D4AF37`
- **Tło:** `#FFF9F2` (kremowy)

## 🔑 Klucze API

Plik `.env` (utworzony automatycznie):
```env
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6WEGfjvdd2gbDJPyJIEay9_hqBBFUXPE
REACT_APP_GOOGLE_PLACE_ID=ChIJJ5juV5t5IkcR2UaCBYO7ROc
```

**⚠️ Pamiętaj:** Zaktualizuj ograniczenia w Google Cloud Console!

## 🔄 Aktualizacje strony

```bash
git add .
git commit -m "Opis zmian"
git push origin main
npm run deploy
```

## 📞 Kontakt

**Pani Fizjoterapeuta Kobiet**  
Klaudia Duda  
ul. Gościńczyk 7, 24-100 Puławy  
📱 +48 720 776 138  
📧 panifizjoterapeutakobiet@gmail.com  

Instagram: [@pani_fizjoterapeuta_kobiet](https://www.instagram.com/pani_fizjoterapeuta_kobiet)  
Facebook: [panifizjoterapeutakobiet](https://www.facebook.com/panifizjoterapeutakobiet)

## 📝 Licencja

© 2025 Pani Fizjoterapeuta Kobiet. Wszystkie prawa zastrzeżone.

---

**Utworzono z ❤️ przez Emergent AI**

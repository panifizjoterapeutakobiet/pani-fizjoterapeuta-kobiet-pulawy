# ⚡ SZYBKI START - SKOPIUJ I WKLEJ

**Adres Twojej strony:**
https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy

---

## 📋 WSZYSTKIE POLECENIA DO SKOPIOWANIA

Po kliknięciu "Save to GitHub" w Emergent, otwórz terminal i skopiuj poniższe polecenia **kolejno**:

### 1️⃣ Pobierz kod

```bash
git clone https://github.com/panifizjoterapeutakobiet/panifizjoterapeutakobietpulawy.git
cd panifizjoterapeutakobietpulawy/frontend
```

### 2️⃣ Zainstaluj

```bash
npm install
```

### 3️⃣ Dodaj klucze API

```bash
cat > .env << 'EOF'
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6WEGfjvdd2gbDJPyJIEay9_hqBBFUXPE
REACT_APP_GOOGLE_PLACE_ID=ChIJJ5juV5t5IkcR2UaCBYO7ROc
EOF
```

### 4️⃣ (Opcjonalnie) Testuj lokalnie

```bash
npm start
```

Otwórz: http://localhost:3000
Zatrzymaj: `Ctrl + C`

### 5️⃣ OPUBLIKUJ! 🚀

```bash
npm run deploy
```

---

## ⚠️ NIE ZAPOMNIJ!

### A) Zaktualizuj Google API (WAŻNE!)

1. Otwórz: https://console.cloud.google.com/apis/credentials
2. Kliknij swój klucz API
3. W "Ograniczenia aplikacji" → "Ruch z HTTP"
4. Dodaj domenę:
   ```
   panifizjoterapeutakobiet.github.io/*
   ```
5. Kliknij **ZAPISZ**

### B) Włącz GitHub Pages

1. Otwórz: https://github.com/panifizjoterapeutakobiet/panifizjoterapeutakobietpulawy/settings/pages
2. Source → Branch: **gh-pages**
3. Kliknij **Save**

---

## ✅ GOTOWE!

Poczekaj 3-5 minut i otwórz:
https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy

---

## 🔄 Jak zaktualizować stronę?

```bash
git add .
git commit -m "Zaktualizowano treść"
git push origin main
npm run deploy
```

---

## 📞 Problem?

Zobacz szczegóły w: **DEPLOYMENT_GUIDE.md**

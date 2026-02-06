# INSTRUKCJA WDROŻENIA NA GITHUB PAGES

## Krok po kroku dla początkujących 🚀

### CZĘŚĆ 1: Zapisz kod na GitHub

1. **W tym chacie** kliknij przycisk **"Save to GitHub"** 
2. Emergent utworzy dla Ciebie repozytorium GitHub
3. Zapisz nazwę repozytorium (np. `fizjo-kobiet-strona`)

---

### CZĘŚĆ 2: Zaktualizuj adres strony

Po zapisaniu do GitHub:

1. Otwórz plik `frontend/package.json`
2. Znajdź linię:
   ```json
   "homepage": "https://TWOJA-NAZWA-UZYTKOWNIKA.github.io/NAZWA-REPOZYTORIUM",
   ```
3. Zamień na swoje dane:
   ```json
   "homepage": "https://klaudiaduda.github.io/fizjo-kobiet-strona",
   ```
   *(wpisz swoją nazwę użytkownika GitHub i nazwę repozytorium)*

---

### CZĘŚĆ 3: Pobierz kod na komputer

1. Otwórz Terminal (Mac/Linux) lub Git Bash (Windows)
2. Wpisz:
   ```bash
   git clone https://github.com/TWOJA-NAZWA/fizjo-kobiet-strona.git
   cd fizjo-kobiet-strona/frontend
   ```

---

### CZĘŚĆ 4: Zainstaluj program

W terminalu wpisz:
```bash
npm install
```
*(to zainstaluje wszystkie potrzebne biblioteki)*

---

### CZĘŚĆ 5: Dodaj klucze Google API

1. Utwórz plik `.env` w folderze `frontend/`
2. Skopiuj do niego:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6WEGfjvdd2gbDJPyJIEay9_hqBBFUXPE
   REACT_APP_GOOGLE_PLACE_ID=ChIJJ5juV5t5IkcR2UaCBYO7ROc
   ```

**⚠️ WAŻNE - Zaktualizuj ograniczenia Google API:**

1. Przejdź na: https://console.cloud.google.com/apis/credentials
2. Zaloguj się tym samym kontem, którym tworzyłaś klucze
3. Kliknij na swój klucz API (ten o nazwie projektu)
4. Przewiń do **"Ograniczenia aplikacji"**
5. W sekcji **"Ruch z HTTP (strony internetowe)"** dodaj:
   ```
   TWOJA-NAZWA.github.io/*
   ```
   Przykład: `klaudiaduda.github.io/*`
6. Kliknij **"Zapisz"**

---

### CZĘŚĆ 6: Testuj lokalnie (opcjonalne)

Sprawdź, czy strona działa na Twoim komputerze:
```bash
npm start
```
Otwórz przeglądarkę: http://localhost:3000

*(Naciśnij Ctrl+C w terminalu, aby zatrzymać)*

---

### CZĘŚĆ 7: Opublikuj na GitHub Pages

W terminalu wpisz:
```bash
npm run deploy
```

To polecenie:
- Zbuduje wersję produkcyjną strony
- Opublikuje ją na GitHub Pages
- Zajmie około 1-2 minuty

---

### CZĘŚĆ 8: Włącz GitHub Pages

1. Przejdź na: https://github.com/TWOJA-NAZWA/fizjo-kobiet-strona
2. Kliknij zakładkę **Settings** (Ustawienia)
3. W menu po lewej kliknij **Pages**
4. W sekcji **"Source"** (Źródło) wybierz:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Kliknij **Save** (Zapisz)

---

### CZĘŚĆ 9: Sprawdź stronę

Poczekaj 2-3 minuty, a następnie otwórz w przeglądarce:
```
https://TWOJA-NAZWA.github.io/fizjo-kobiet-strona
```

🎉 **Gotowe! Twoja strona jest online!**

---

## 🔄 Jak aktualizować stronę?

Jeśli chcesz wprowadzić zmiany:

1. Edytuj pliki na swoim komputerze
2. W terminalu wpisz:
   ```bash
   git add .
   git commit -m "Opis zmian"
   git push origin main
   npm run deploy
   ```
3. Poczekaj 2-3 minuty - zmiany będą widoczne

---

## ❓ Problemy?

### Strona nie działa:
- Sprawdź, czy włączyłaś GitHub Pages (Część 8)
- Sprawdź, czy zaktualizowałaś klucze Google API (Część 5)
- Poczekaj 5 minut - GitHub potrzebuje czasu

### Mapa nie działa:
- Sprawdź plik `.env` - czy klucze są poprawne?
- Zaktualizuj ograniczenia w Google Cloud Console (Część 5)

### Opinie nie ładują się:
- Sprawdź Place ID w pliku `.env`
- Sprawdź ograniczenia API w Google Cloud Console

---

## 📞 Potrzebujesz pomocy?

Wróć do tego chatu i napisz - chętnie pomogę! 💙

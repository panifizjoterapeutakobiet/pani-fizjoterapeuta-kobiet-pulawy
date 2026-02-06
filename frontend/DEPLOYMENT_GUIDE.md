# 🚀 INSTRUKCJA PUBLIKACJI STRONY - KROK PO KROKU

**Twoje dane:**
- Nazwa GitHub: `panifizjoterapeutakobiet`
- Nazwa repozytorium: `panifizjoterapeutakobietpulawy`
- Adres strony: https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy

---

## KROK 1: Zapisz kod na GitHub (w interfejsie Emergent)

1. W tym chacie kliknij przycisk **"Save to GitHub"** 
2. Nazwa repozytorium: `panifizjoterapeutakobietpulawy`
3. Poczekaj, aż kod zostanie zapisany

✅ **Gotowe? Przejdź do kroku 2**

---

## KROK 2: Pobierz kod na swój komputer

Otwórz Terminal (Mac) lub Git Bash (Windows) i skopiuj poniższe polecenia:

```bash
# Sklonuj repozytorium
git clone https://github.com/panifizjoterapeutakobiet/panifizjoterapeutakobietpulawy.git

# Wejdź do folderu frontend
cd panifizjoterapeutakobietpulawy/frontend
```

✅ **Skopiowane i wykonane? Przejdź do kroku 3**

---

## KROK 3: Zainstaluj zależności

W tym samym terminalu wpisz:

```bash
npm install
```

⏳ To zajmie około 2-3 minuty. Poczekaj, aż się skończy.

✅ **Instalacja zakończona? Przejdź do kroku 4**

---

## KROK 4: Utwórz plik .env z kluczami API

W tym samym terminalu skopiuj i wykonaj:

```bash
cat > .env << 'EOF'
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6WEGfjvdd2gbDJPyJIEay9_hqBBFUXPE
REACT_APP_GOOGLE_PLACE_ID=ChIJJ5juV5t5IkcR2UaCBYO7ROc
EOF
```

✅ **Plik .env utworzony? Przejdź do kroku 5**

---

## KROK 5: ⚠️ WAŻNE - Zaktualizuj ograniczenia Google API

**Musisz to zrobić, inaczej mapa i opinie nie będą działać!**

1. Otwórz: https://console.cloud.google.com/apis/credentials
2. Zaloguj się (tym samym kontem, którym tworzyłaś klucze)
3. Kliknij na swój klucz API (nazwa projektu: "Fizjo dla Kobiet" lub podobna)
4. Przewiń w dół do sekcji **"Ograniczenia aplikacji"**
5. Jeśli nie jest wybrane, wybierz: **"Ruch z HTTP (strony internetowe)"**
6. W polu **"Odwołania z witryn internetowych"** dodaj:
   ```
   panifizjoterapeutakobiet.github.io/*
   ```
7. Kliknij **"ZAPISZ"** na dole strony

✅ **Ograniczenia zaktualizowane? Przejdź do kroku 6**

---

## KROK 6: (Opcjonalnie) Testuj lokalnie

Jeśli chcesz zobaczyć stronę na swoim komputerze przed publikacją:

```bash
npm start
```

Otwórz przeglądarkę: http://localhost:3000

**Aby zatrzymać:**
- Naciśnij `Ctrl + C` w terminalu

✅ **Przetestowane lub pominięte? Przejdź do kroku 7**

---

## KROK 7: 🚀 OPUBLIKUJ STRONĘ!

To najważniejszy krok! Skopiuj i wykonaj w terminalu:

```bash
npm run deploy
```

📊 Co się stanie:
- Zostanie zbudowana wersja produkcyjna strony (1-2 min)
- Kod zostanie opublikowany na gałęzi `gh-pages`
- Zobaczysz komunikat: "Published"

⏳ To zajmie około 2-3 minuty. Poczekaj do końca!

✅ **Widzisz "Published"? Przejdź do kroku 8**

---

## KROK 8: Włącz GitHub Pages

1. Otwórz w przeglądarce: https://github.com/panifizjoterapeutakobiet/panifizjoterapeutakobietpulawy
2. Kliknij zakładkę **Settings** (Ustawienia)
3. W menu po lewej stronie kliknij **Pages**
4. W sekcji **"Source"** (Źródło):
   - Branch: wybierz **gh-pages**
   - Folder: zostaw **/ (root)**
5. Kliknij **Save** (Zapisz)

✅ **Zapisane? Przejdź do kroku 9**

---

## KROK 9: 🎉 SPRAWDŹ SWOJĄ STRONĘ!

Poczekaj **3-5 minut**, a następnie otwórz:

```
https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy
```

🎉 **GRATULACJE! Twoja strona jest online!**

---

## 📋 SZYBKI CHECKLIST

Zaznacz, co już zrobiłaś:

- [ ] KROK 1: Zapisano kod na GitHub ("Save to GitHub")
- [ ] KROK 2: Sklonowano repozytorium (`git clone...`)
- [ ] KROK 3: Zainstalowano zależności (`npm install`)
- [ ] KROK 4: Utworzono plik .env
- [ ] KROK 5: Zaktualizowano ograniczenia Google API
- [ ] KROK 6: (Opcjonalnie) Przetestowano lokalnie
- [ ] KROK 7: Opublikowano stronę (`npm run deploy`)
- [ ] KROK 8: Włączono GitHub Pages (Settings → Pages)
- [ ] KROK 9: Sprawdzono stronę w przeglądarce

---

## 🔄 JAK AKTUALIZOWAĆ STRONĘ W PRZYSZŁOŚCI?

Gdy będziesz chciała wprowadzić zmiany:

1. Edytuj pliki na swoim komputerze
2. W terminalu (w folderze `frontend/`):

```bash
# Zapisz zmiany
git add .
git commit -m "Opis zmian"
git push origin main

# Opublikuj aktualizację
npm run deploy
```

3. Poczekaj 2-3 minuty - zmiany będą widoczne na stronie

---

## ❓ CO JEŚLI COŚ NIE DZIAŁA?

### Problem: Strona pokazuje błąd 404
**Rozwiązanie:**
- Sprawdź KROK 8 - czy włączyłaś GitHub Pages?
- Poczekaj 5 minut - GitHub potrzebuje czasu
- Odśwież stronę (Ctrl+F5)

### Problem: Mapa nie działa
**Rozwiązanie:**
- Sprawdź KROK 5 - czy zaktualizowałaś ograniczenia API?
- Sprawdź KROK 4 - czy plik .env został utworzony?
- W Google Cloud Console sprawdź, czy domena `panifizjoterapeutakobiet.github.io/*` jest dodana

### Problem: Opinie nie ładują się
**Rozwiązanie:**
- Sprawdź KROK 5 - zaktualizuj ograniczenia API
- Sprawdź czy Place ID w .env jest poprawny: `ChIJJ5juV5t5IkcR2UaCBYO7ROc`

### Problem: `npm run deploy` pokazuje błąd
**Rozwiązanie:**
```bash
# Usuń folder build i spróbuj ponownie
rm -rf build
npm run deploy
```

### Problem: "Permission denied" przy git push
**Rozwiązanie:**
- Musisz być zalogowana do GitHub w terminalu
- Ustaw swoje dane:
```bash
git config --global user.name "panifizjoterapeutakobiet"
git config --global user.email "twoj-email@gmail.com"
```

---

## 📞 POTRZEBUJESZ POMOCY?

Wróć do tego chatu i napisz - chętnie pomogę rozwiązać problem! 💙

---

## 🎯 NASTĘPNE KROKI (OPCJONALNE)

Po opublikowaniu strony możesz:

1. **Dodać własną domenę** (np. fizjoterapiakobiet.pl)
   - Bardziej profesjonalnie
   - GitHub Pages obsługuje własne domeny za darmo!

2. **Dodać Google Analytics**
   - Śledź ile osób odwiedza stronę
   - Dowiedz się, które sekcje są najpopularniejsze

3. **Dodać politykę prywatności**
   - Wymagane przez RODO
   - Zwiększa zaufanie pacjentek

Powiedz mi, jeśli chcesz którąś z tych rzeczy dodać! 🌸

---

**Powodzenia! 🚀**

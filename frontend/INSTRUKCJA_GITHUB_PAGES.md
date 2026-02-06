# Instrukcja wdrożenia strony na GitHub Pages - Krok po kroku

## Część 1: Przygotowanie konta GitHub

### Krok 1.1: Załóż konto na GitHub (jeśli nie masz)

1. Otwórz przeglądarkę i wejdź na stronę: **https://github.com**
2. Kliknij zielony przycisk **"Sign up"** (Zarejestruj się) w prawym górnym rogu
3. Wypełnij formularz:
   - **Enter your email** - wpisz swój adres email
   - **Create a password** - wymyśl hasło (min. 8 znaków, jedna cyfra i mała litera)
   - **Enter a username** - wpisz nazwę użytkownika, np. `panifizjoterapeutakobiet`
   
   ⚠️ **WAŻNE**: Nazwa użytkownika będzie częścią adresu Twojej strony!
   
4. Kliknij **"Continue"** i przejdź weryfikację (puzzle)
5. Sprawdź swoją skrzynkę email i potwierdź rejestrację klikając w link

### Krok 1.2: Zaloguj się na GitHub

1. Wejdź na **https://github.com**
2. Kliknij **"Sign in"** (Zaloguj się)
3. Wpisz email i hasło

---

## Część 2: Pobierz pliki strony z Emergent

### Krok 2.1: Pobierz kod strony

1. W Emergent (tam gdzie teraz rozmawiamy) znajdź przycisk **"Download"** lub **"Pobierz kod"**
2. Kliknij go - pobierze się plik ZIP z całą stroną
3. Rozpakuj plik ZIP na swoim komputerze (kliknij prawym przyciskiem myszy → "Wypakuj tutaj" lub "Extract here")
4. Zapamiętaj gdzie zapisałaś folder - będziesz go potrzebować

---

## Część 3: Utwórz repozytorium na GitHub

### Krok 3.1: Utwórz nowe repozytorium

1. Zaloguj się na GitHub
2. Kliknij zielony przycisk **"New"** (po lewej stronie) lub ikonę **"+"** w prawym górnym rogu → **"New repository"**
3. Wypełnij formularz:
   - **Repository name**: wpisz `panifizjoterapeutakobietpulawy` (lub inną nazwę bez spacji i polskich znaków)
   - **Description**: możesz wpisać "Strona fizjoterapeutki" (opcjonalne)
   - **Public**: zostaw zaznaczone (strona musi być publiczna)
   - **Add a README file**: NIE zaznaczaj
4. Kliknij zielony przycisk **"Create repository"**

---

## Część 4: Wgraj pliki na GitHub

### Opcja A: Prosta metoda (przez przeglądarkę) - ZALECANA DLA POCZĄTKUJĄCYCH

#### Krok 4A.1: Wgraj pliki

1. Po utworzeniu repozytorium zobaczysz stronę z instrukcjami
2. Znajdź link **"uploading an existing file"** i kliknij go
3. Otwórz folder, który rozpakowałaś (z plikami strony)
4. Wejdź do folderu **"frontend"** 
5. Zaznacz WSZYSTKIE pliki i foldery wewnątrz folderu "frontend" (Ctrl+A)
6. Przeciągnij je na stronę GitHub (tam gdzie jest napisane "Drag files here")
7. Poczekaj aż wszystkie pliki się załadują (może to chwilę potrwać)
8. Na dole strony:
   - W polu "Commit changes" wpisz: `Pierwsza wersja strony`
   - Kliknij zielony przycisk **"Commit changes"**

⚠️ **UWAGA**: Jeśli masz dużo plików, GitHub może nie pozwolić wgrać wszystkich naraz. W takim przypadku użyj Opcji B.

---

### Opcja B: Przez GitHub Desktop (łatwiejsza dla wielu plików)

#### Krok 4B.1: Pobierz GitHub Desktop

1. Wejdź na **https://desktop.github.com**
2. Kliknij **"Download for Windows"** (lub Mac)
3. Zainstaluj program (klikaj "Next" → "Install" → "Finish")
4. Otwórz GitHub Desktop
5. Kliknij **"Sign in to GitHub.com"**
6. Zaloguj się swoimi danymi z GitHub

#### Krok 4B.2: Sklonuj repozytorium

1. W GitHub Desktop kliknij **"Clone a repository from the Internet"**
2. Wybierz swoje repozytorium z listy (np. `panifizjoterapeutakobiet/panifizjoterapeutakobietpulawy`)
3. Wybierz folder na komputerze gdzie ma być zapisane (np. Dokumenty)
4. Kliknij **"Clone"**

#### Krok 4B.3: Skopiuj pliki strony

1. Otwórz folder, do którego sklonowałaś repozytorium
2. Otwórz osobno folder z pobraną stroną z Emergent → wejdź do folderu **"frontend"**
3. Skopiuj CAŁĄ ZAWARTOŚĆ folderu "frontend" (wszystkie pliki i foldery)
4. Wklej do folderu repozytorium (tam gdzie sklonowałaś)

#### Krok 4B.4: Wyślij pliki na GitHub

1. Wróć do GitHub Desktop
2. Po lewej stronie zobaczysz listę zmienionych plików
3. Na dole wpisz w polu "Summary": `Pierwsza wersja strony`
4. Kliknij niebieski przycisk **"Commit to main"**
5. Kliknij **"Push origin"** (na górze)

---

## Część 5: Włącz GitHub Pages

### Krok 5.1: Skonfiguruj GitHub Pages

1. Wejdź na GitHub.com do swojego repozytorium
2. Kliknij zakładkę **"Settings"** (Ustawienia) - ikona koła zębatego na górze
3. W menu po lewej stronie znajdź i kliknij **"Pages"**
4. W sekcji **"Build and deployment"**:
   - **Source**: wybierz **"GitHub Actions"**
5. Kliknij **"Save"** jeśli jest taki przycisk

### Krok 5.2: Utwórz plik konfiguracyjny dla GitHub Actions

1. Wróć do głównej strony repozytorium (kliknij nazwę repozytorium na górze)
2. Kliknij przycisk **"Add file"** → **"Create new file"**
3. W polu nazwy pliku wpisz: `.github/workflows/deploy.yml`
   
   (GitHub automatycznie utworzy foldery .github i workflows)

4. W polu zawartości wklej poniższy kod:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build
      env:
        CI: false

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

5. Na dole kliknij zielony przycisk **"Commit changes"**
6. W okienku kliknij ponownie **"Commit changes"**

### Krok 5.3: Poczekaj na wdrożenie

1. Kliknij zakładkę **"Actions"** na górze repozytorium
2. Zobaczysz proces budowania strony (żółta kropka = w trakcie, zielony znaczek = sukces)
3. Poczekaj aż proces się zakończy (2-5 minut)

### Krok 5.4: Skonfiguruj źródło stron

1. Po zakończeniu procesu wróć do **Settings** → **Pages**
2. W sekcji **"Build and deployment"**:
   - **Source**: zmień na **"Deploy from a branch"**
   - **Branch**: wybierz **"gh-pages"** i folder **"/ (root)"**
3. Kliknij **"Save"**

---

## Część 6: Sprawdź swoją stronę!

### Krok 6.1: Znajdź adres strony

1. W **Settings** → **Pages** zobaczysz komunikat:
   
   **"Your site is live at https://TWOJA-NAZWA.github.io/NAZWA-REPO/"**

2. Kliknij ten link - to jest Twoja strona! 🎉

### Przykładowy adres:
```
https://panifizjoterapeutakobiet.github.io/panifizjoterapeutakobietpulawy/
```

---

## Część 7: Własna domena (opcjonalnie)

Jeśli masz własną domenę (np. klaudiaduda.pl), możesz ją podłączyć:

### Krok 7.1: Dodaj domenę w GitHub

1. W **Settings** → **Pages** znajdź sekcję **"Custom domain"**
2. Wpisz swoją domenę (np. `www.klaudiaduda.pl`)
3. Kliknij **"Save"**

### Krok 7.2: Skonfiguruj DNS u swojego dostawcy domeny

U dostawcy domeny (np. OVH, home.pl, nazwa.pl) dodaj rekordy DNS:

**Dla domeny głównej (klaudiaduda.pl):**
```
Typ: A
Nazwa: @
Wartość: 185.199.108.153

Typ: A  
Nazwa: @
Wartość: 185.199.109.153

Typ: A
Nazwa: @
Wartość: 185.199.110.153

Typ: A
Nazwa: @
Wartość: 185.199.111.153
```

**Dla subdomeny www:**
```
Typ: CNAME
Nazwa: www
Wartość: TWOJA-NAZWA.github.io
```

⏰ Zmiany DNS mogą potrwać do 24-48 godzin.

---

## Rozwiązywanie problemów

### Problem: "Strona nie działa / błąd 404"
- Sprawdź czy proces w zakładce "Actions" zakończył się sukcesem (zielony znaczek)
- Upewnij się, że w Settings → Pages jest wybrana gałąź "gh-pages"
- Poczekaj kilka minut - czasem strona potrzebuje czasu na uruchomienie

### Problem: "Brak pliku package.json"
- Upewnij się, że wgrałaś zawartość folderu "frontend", a nie cały folder "frontend"
- Plik package.json powinien być w głównym folderze repozytorium

### Problem: "Build failed" w Actions
- Sprawdź czy wszystkie pliki zostały poprawnie wgrane
- Skontaktuj się ze mną - pomogę rozwiązać problem

---

## Potrzebujesz pomocy?

Jeśli napotkasz jakikolwiek problem, napisz do mnie! Chętnie pomogę Ci przejść przez ten proces. 

Możesz też przesłać mi zrzut ekranu z błędem, a powiem Ci co zrobić.

---

**Powodzenia! 🎉**

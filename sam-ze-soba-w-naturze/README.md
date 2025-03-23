# Sam ze sobą w naturze

Strona internetowa dla ośrodka wypoczynkowego "Sam ze sobą w naturze" oferującego domki w sercu mazurskiej przyrody.

## Spis treści

- [Instalacja](#instalacja)
- [Uruchamianie projektu](#uruchamianie-projektu)
- [Dostępne skrypty](#dostępne-skrypty)
- [Struktura projektu](#struktura-projektu)
- [Zasoby statyczne](#zasoby-statyczne)
- [Najlepsze praktyki](#najlepsze-praktyki)
- [Rozwiązywanie problemów](#rozwiązywanie-problemów)

## Instalacja

```bash
# Klonowanie repozytorium
git clone <repo-url>
cd sam-ze-soba-w-naturze

# Instalacja zależności
npm install
```

## Uruchamianie projektu

```bash
# Uruchomienie w trybie deweloperskim
npm start

# Budowanie projektu
npm run build

# Weryfikacja zasobów i tłumaczeń przed deploymentem
npm run preflight
```

## Dostępne skrypty

- `npm start` - Uruchamia aplikację w trybie deweloperskim
- `npm run build` - Buduje aplikację do katalogu build
- `npm test` - Uruchamia testy
- `npm run check-translations` - Sprawdza duplikaty kluczy w plikach tłumaczeń
- `npm run verify-assets` - Weryfikuje, czy wszystkie obrazy używane w CSS istnieją
- `npm run preflight` - Uruchamia wszystkie testy weryfikacyjne przed deploymentem

## Struktura projektu

```
sam-ze-soba-w-naturze/
├── public/                  # Statyczne zasoby
│   ├── images/              # Obrazy używane w CSS
│   └── ...
├── scripts/                 # Skrypty pomocnicze
│   ├── checkTranslations.js # Skrypt sprawdzający tłumaczenia
│   └── verifyAssets.js      # Skrypt weryfikujący zasoby
├── src/
│   ├── assets/              # Zasoby aplikacji
│   │   ├── styles/          # Pliki CSS
│   │   └── ...
│   ├── components/          # Komponenty wielokrotnego użytku
│   ├── context/             # Konteksty React
│   ├── pages/               # Komponenty stron
│   ├── translations/        # Pliki tłumaczeń
│   └── ...
└── ...
```

## Zasoby statyczne

Projekt zawiera szczegółowe wytyczne dotyczące zarządzania zasobami statycznymi (obrazy, fonty itp.).

**Ważne:** Pełna dokumentacja dotycząca zasobów znajduje się w pliku [docs/ASSETS.md](docs/ASSETS.md).

### Kluczowe zasady:

1. **Obrazy w CSS** - używaj ścieżek względnych do obrazów w `src/assets/images/`:
   ```css
   background-image: url('../images/image-name.jpg');
   ```

2. **Obrazy w komponentach** - importuj bezpośrednio w kodzie:
   ```jsx
   import logo from '../assets/images/logo.png';
   ```

3. **Weryfikacja zasobów** - użyj skryptu do sprawdzenia poprawności ścieżek:
   ```bash
   npm run verify-assets
   ```

## Najlepsze praktyki

### Zarządzanie zasobami

1. **Obrazy używane w CSS**:
   - Umieszczaj obrazy używane bezpośrednio w CSS w katalogu `public/images/`
   - Używaj ścieżek zaczynających się od `/images/` w CSS

2. **Obrazy używane w komponentach**:
   - Importuj obrazy bezpośrednio w komponentach React
   - Przykład: `import logo from '../assets/images/logo.png'`

### Tłumaczenia

1. **Unikaj duplikatów kluczy**:
   - Przed dodaniem nowego klucza sprawdź, czy już nie istnieje
   - Używaj zagnieżdżonej struktury dla organizacji tłumaczeń

2. **Sprawdzaj tłumaczenia**:
   - Uruchamiaj `npm run check-translations` po wprowadzeniu zmian w plikach tłumaczeń
   - Upewnij się, że wszystkie klucze są obecne we wszystkich językach

### Kod CSS

1. **Organizacja klas**:
   - Używaj BEM (Block Element Modifier) do organizacji klas CSS
   - Przykład: `.cabin-card__image`, `.cabin-card__title`, `.cabin-card--featured`

2. **Fallback dla zasobów**:
   - Zawsze dodawaj fallback color dla elementów z obrazem tła
   - Przykład: `background-color: #333; background-image: url(...);`

### Eslint

1. **Przestrzegaj zasad lintowania**:
   - Rozwiązuj wszystkie błędy i ostrzeżenia wykryte przez ESLint
   - W razie potrzeby używaj komentarzy `// eslint-disable-next-line` z uzasadnieniem

## Rozwiązywanie problemów

### Brakujące obrazy

Jeśli otrzymujesz błędy dotyczące brakujących obrazów:

1. Uruchom `npm run verify-assets`, aby zidentyfikować brakujące zasoby
2. Utwórz wymagane katalogi i dodaj brakujące pliki
3. Alternatywnie, zaktualizuj ścieżki w CSS

### Problemy z tłumaczeniami

Jeśli napotykasz problemy z tłumaczeniami:

1. Uruchom `npm run check-translations`, aby znaleźć duplikaty kluczy
2. Sprawdź, czy wszystkie używane klucze tłumaczeń istnieją w plikach tłumaczeń
3. Upewnij się, że wszystkie pliki tłumaczeń są zarejestrowane w `src/translations/index.js`

### Problemy z ESLint

Jeśli ESLint zgłasza błędy lub ostrzeżenia:

1. Sprawdź plik `.eslintrc` dla konfiguracji zasad
2. Dodaj reguły ignorowania dla uzasadnionych przypadków
3. Używaj `// eslint-disable-next-line` z komentarzem wyjaśniającym dlaczego

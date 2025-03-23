# Przewodnik po zasobach statycznych

## Struktura katalogów z zasobami

```
sam-ze-soba-w-naturze/
├── public/                  # Zasoby statyczne dostępne publicznie
│   ├── favicon.ico          # Favicon witryny
│   ├── index.html           # Główny plik HTML
│   └── ...                  # Inne zasoby publiczne
├── src/
│   ├── assets/              # Zasoby przetwarzane przez webpack
│   │   ├── images/          # Obrazy używane w CSS i komponentach
│   │   ├── styles/          # Pliki CSS
│   │   └── ...              # Inne zasoby
```

## Najlepsze praktyki korzystania z zasobów

### 1. Obrazy używane w CSS

Obrazy używane w CSS powinny być umieszczone w katalogu `src/assets/images/` i odwoływać się do nich za pomocą ścieżek względnych:

```css
/* Prawidłowo - ścieżka względna */
.element {
  background-image: url('../images/image-name.jpg');
}

/* Nieprawidłowo - ścieżka bezwzględna */
.element {
  background-image: url('/images/image-name.jpg');
}
```

### 2. Obrazy używane w komponentach React

Obrazy używane w komponentach React powinny być importowane bezpośrednio:

```jsx
// Prawidłowo - import obrazu
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
    </header>
  );
}
```

### 3. Korzystanie z katalogu `public`

Katalog `public` powinien być używany tylko dla:
- Plików, które muszą zachować oryginalną nazwę (np. favicon.ico)
- Plików, które są odwołane przez bezwzględny URL w kodzie
- Plików statycznych większych niż 10 MB (które nie powinny być przetwarzane przez webpack)

Aby odwołać się do plików w katalogu `public` z kodu:

```jsx
// W JSX
<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />

// W CSS (unikaj, jeśli to możliwe)
.element {
  background-image: url('%PUBLIC_URL%/image.jpg');
}
```

## Rozwiązywanie problemów z zasobami

### Problem: "Module not found: Can't resolve '/path/to/asset'"

Ten błąd pojawia się, gdy webpack nie może znaleźć zasobu. Najczęstsze przyczyny:

1. **Nieprawidłowa ścieżka** - Upewnij się, że ścieżka jest poprawna i względna wobec pliku CSS lub komponentu.
2. **Zasób nie istnieje** - Sprawdź, czy plik faktycznie istnieje w podanej lokalizacji.
3. **Bezwzględna vs. względna ścieżka** - Używaj ścieżek względnych w CSS i importów w komponentach.

### Jak sprawdzić, czy zasoby są poprawnie dostępne

Uruchom skrypt weryfikacji zasobów:

```bash
npm run verify-assets
```

## Dodawanie nowych zasobów

1. Jeśli zasób jest używany w CSS, umieść go w `src/assets/images/`.
2. Jeśli zasób jest używany w komponencie React, umieść go w `src/assets/images/` i importuj go.
3. Jeśli zasób musi być dostępny publicznie, umieść go w katalogu `public/`. 
# Bezpieczeństwo aplikacji

## Naprawa podatności npm

W projekcie zastosowano szereg zabezpieczeń przed znanymi podatnościami w pakietach npm:

1. **Sekcja overrides** w package.json, która wymusza używanie bezpiecznych wersji pakietów
2. **Zaktualizowane pluginy Babel** (zamiana przestarzałych `plugin-proposal-*` na nowe `plugin-transform-*`)
3. **Skrypt naprawy podatności** (`fix-vulnerabilities.js`)

## Jak naprawić podatności?

### Automatycznie

Uruchom skrypt naprawy podatności:

```bash
node fix-vulnerabilities.js
```

Skrypt:
- Doda sekcję `overrides` do package.json (jeśli nie istnieje)
- Zaktualizuje pluginy Babel do nowych wersji
- Reinstaluje wszystkie pakiety z uwzględnieniem bezpiecznych wersji
- Sprawdzi pozostałe podatności

### Ręcznie

1. Najpierw spróbuj standardowego polecenia:

```bash
npm audit fix
```

2. Jeśli to nie rozwiąże problemu, użyj opcji `--force`:

```bash
npm audit fix --force
```

3. Zaktualizuj sekcję `overrides` w package.json ręcznie, dodając najnowsze wersje podatnych pakietów.

## Usuwanie przestarzałych pakietów Babel

Przestarzałe pakiety Babel można zamienić na nowe:

| Przestarzały pakiet | Nowy pakiet |
|---------------------|-------------|
| @babel/plugin-proposal-private-methods | @babel/plugin-transform-private-methods |
| @babel/plugin-proposal-numeric-separator | @babel/plugin-transform-numeric-separator |
| @babel/plugin-proposal-nullish-coalescing-operator | @babel/plugin-transform-nullish-coalescing-operator |
| @babel/plugin-proposal-class-properties | @babel/plugin-transform-class-properties |
| @babel/plugin-proposal-private-property-in-object | @babel/plugin-transform-private-property-in-object |
| @babel/plugin-proposal-optional-chaining | @babel/plugin-transform-optional-chaining |

## Monitorowanie bezpieczeństwa

Regularnie uruchamiaj:

```bash
npm audit
```

aby monitorować nowe podatności. Dodaj bieżące sprawdzanie do procesu CI/CD. 
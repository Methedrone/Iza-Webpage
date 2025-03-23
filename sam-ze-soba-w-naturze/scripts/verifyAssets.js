/**
 * Skrypt do weryfikacji zasobów używanych w CSS
 * Sprawdza, czy obrazy używane w plikach CSS istnieją w odpowiednich katalogach
 * Uruchamianie: node scripts/verifyAssets.js
 */

const fs = require('fs');
const path = require('path');

// Ścieżki
const cssDir = path.join(__dirname, '../src/assets/styles');
const publicDir = path.join(__dirname, '../public');

// Funkcja do znajdowania ścieżek do obrazów w plikach CSS
const findImagePathsInCss = (cssFilePath) => {
  try {
    const content = fs.readFileSync(cssFilePath, 'utf8');
    const imagePaths = [];
    
    // Znajdź wszystkie url() w CSS
    const urlRegex = /url\(['"]?([^'"()]+)['"]?\)/g;
    let match;
    
    while ((match = urlRegex.exec(content)) !== null) {
      const path = match[1];
      // Pomiń data URL i zewnętrzne URL
      if (!path.startsWith('data:') && !path.startsWith('http')) {
        imagePaths.push(path);
      }
    }
    
    return imagePaths;
  } catch (error) {
    console.error(`Błąd podczas analizy pliku ${cssFilePath}:`, error);
    return [];
  }
};

// Funkcja do sprawdzania, czy plik istnieje
const checkIfFileExists = (filePath) => {
  return fs.existsSync(filePath);
};

// Funkcja do konwersji ścieżki CSS na ścieżkę systemu plików
const cssPathToFilePath = (cssPath) => {
  // Względne ścieżki w CSS mogą odnosić się do różnych lokalizacji
  if (cssPath.startsWith('/')) {
    // Ścieżka bezwzględna z katalogu public
    return path.join(publicDir, cssPath);
  } else if (cssPath.startsWith('../')) {
    // Ścieżka względna w górę drzewa katalogów
    return path.join(cssDir, cssPath);
  } else {
    // Ścieżka względna w tym samym katalogu
    return path.join(cssDir, cssPath);
  }
};

// Główna funkcja sprawdzająca
const verifyAssetsInCssFiles = () => {
  try {
    // Odczytaj wszystkie pliki CSS
    const cssFiles = fs.readdirSync(cssDir)
      .filter(file => file.endsWith('.css'));
    
    let missingFiles = 0;
    const allMissingAssets = [];
    
    // Sprawdź każdy plik CSS
    for (const cssFile of cssFiles) {
      const cssFilePath = path.join(cssDir, cssFile);
      const imagePaths = findImagePathsInCss(cssFilePath);
      
      const missingAssets = [];
      
      // Sprawdź, czy każdy obraz istnieje
      for (const imagePath of imagePaths) {
        const filePath = cssPathToFilePath(imagePath);
        
        if (!checkIfFileExists(filePath)) {
          missingAssets.push({
            cssPath: imagePath,
            filePath
          });
          missingFiles++;
        }
      }
      
      // Wyświetl informacje o brakujących obrazach
      if (missingAssets.length > 0) {
        console.error(`\x1b[31mZnaleziono brakujące zasoby w pliku ${cssFile}:\x1b[0m`);
        missingAssets.forEach(asset => {
          console.error(`  - CSS: ${asset.cssPath}`);
          console.error(`    Oczekiwana ścieżka: ${asset.filePath}`);
          allMissingAssets.push(asset);
        });
        console.error();
      } else {
        console.log(`\x1b[32mWszystkie zasoby w pliku ${cssFile} istnieją\x1b[0m`);
      }
    }
    
    // Podsumowanie
    if (missingFiles > 0) {
      console.error(`\x1b[31mZnaleziono łącznie ${missingFiles} brakujących zasobów\x1b[0m`);
      console.log('\nAby naprawić brakujące zasoby:');
      console.log('1. Utwórz brakujące katalogi, jeśli nie istnieją');
      console.log('2. Dodaj brakujące pliki w odpowiednich ścieżkach');
      console.log('3. Alternatywnie, zaktualizuj ścieżki w CSS do prawidłowych lokalizacji');
      
      // Podaj polecenia do utworzenia katalogów i pustych plików
      console.log('\nPolecenia do szybkiego rozwiązania (tworzą puste pliki):\n');
      
      const directoriesToCreate = new Set();
      
      allMissingAssets.forEach(asset => {
        const dir = path.dirname(asset.filePath);
        directoriesToCreate.add(dir);
      });
      
      directoriesToCreate.forEach(dir => {
        console.log(`mkdir -p "${dir}"`);
      });
      
      console.log('');
      
      allMissingAssets.forEach(asset => {
        console.log(`touch "${asset.filePath}"`);
      });
      
      return 1;
    } else {
      console.log('\x1b[32mWszystkie zasoby zostały znalezione\x1b[0m');
      return 0;
    }
  } catch (error) {
    console.error('Błąd podczas weryfikacji zasobów:', error);
    return 1;
  }
};

// Uruchom weryfikację
const exitCode = verifyAssetsInCssFiles();
process.exit(exitCode); 
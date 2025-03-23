/**
 * Skrypt do sprawdzania duplikatów kluczy w plikach tłumaczeń
 * Uruchamianie: node scripts/checkTranslations.js
 */

const fs = require('fs');
const path = require('path');

// Ścieżka do katalogu z tłumaczeniami
const translationsDir = path.join(__dirname, '../src/translations');

// Funkcja sprawdzająca duplikaty kluczy w obiekcie JavaScript
const findDuplicateKeys = (obj, prefix = '') => {
  const duplicates = [];
  const keys = new Set();

  // Funkcja rekurencyjna do przeszukiwania zagnieżdżonych obiektów
  const traverse = (obj, currentPrefix = '') => {
    for (const key in obj) {
      const fullKey = currentPrefix ? `${currentPrefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverse(obj[key], fullKey);
      } else {
        if (keys.has(fullKey)) {
          duplicates.push(fullKey);
        } else {
          keys.add(fullKey);
        }
      }
    }
  };

  traverse(obj, prefix);
  return duplicates;
};

// Funkcja do sprawdzania duplikatów w pliku JavaScript
const checkFileForDuplicates = (filePath) => {
  try {
    // Odczytaj zawartość pliku
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Znajdź klucze obiektów w pliku
    const keyDuplicates = [];
    const keyRegex = /(['"])([^'"]+)\1\s*:/g;
    const keys = new Set();
    let match;
    
    while ((match = keyRegex.exec(content)) !== null) {
      const key = match[2];
      
      if (keys.has(key)) {
        keyDuplicates.push(key);
      } else {
        keys.add(key);
      }
    }
    
    return keyDuplicates;
  } catch (error) {
    console.error(`Błąd podczas sprawdzania pliku ${filePath}:`, error);
    return [];
  }
};

// Główna funkcja sprawdzająca wszystkie pliki tłumaczeń
const checkAllTranslationFiles = () => {
  try {
    // Odczytaj wszystkie pliki JS w katalogu tłumaczeń
    const files = fs.readdirSync(translationsDir)
      .filter(file => file.endsWith('.js') && file !== 'index.js');
    
    let hasErrors = false;
    
    // Sprawdź każdy plik
    for (const file of files) {
      const filePath = path.join(translationsDir, file);
      const duplicates = checkFileForDuplicates(filePath);
      
      if (duplicates.length > 0) {
        hasErrors = true;
        console.error(`\x1b[31mZnaleziono duplikaty kluczy w pliku ${file}:\x1b[0m`);
        duplicates.forEach(key => console.error(`  - ${key}`));
        console.error();
      } else {
        console.log(`\x1b[32mBrak duplikatów kluczy w pliku ${file}\x1b[0m`);
      }
    }
    
    return hasErrors ? 1 : 0;
  } catch (error) {
    console.error('Błąd podczas sprawdzania plików tłumaczeń:', error);
    return 1;
  }
};

// Uruchom sprawdzanie
const exitCode = checkAllTranslationFiles();
process.exit(exitCode); 
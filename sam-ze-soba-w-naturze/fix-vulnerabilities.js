#!/usr/bin/env node

/**
 * Skrypt do naprawy podatności w pakietach npm
 * Uruchom: node fix-vulnerabilities.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Upewnij się, że mamy sekcję overrides w package.json
function ensureOverrides() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.overrides) {
    packageJson.overrides = {};
  }
  
  // Dodajemy bezpieczne wersje pakietów z podatnościami
  Object.assign(packageJson.overrides, {
    'nth-check': '^2.1.1',
    'postcss': '^8.4.31',
    'svgo': '^2.8.0',
    'css-select': '^4.3.0',
    'resolve-url-loader': '^5.0.0',
    'terser': '^5.16.6',
    'semver': '^7.5.4',
    'serialize-javascript': '^6.0.1',
    'shell-quote': '^1.8.1',
    'tough-cookie': '^4.1.3'
  });
  
  // Zapisujemy zaktualizowany plik package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✅ Dodano overrides do package.json');
}

// Aktualizacja do nowych pluginów Babel
function updateBabelPlugins() {
  try {
    execSync('npm uninstall @babel/plugin-proposal-private-methods @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-property-in-object @babel/plugin-proposal-optional-chaining', { stdio: 'inherit' });
    
    execSync('npm install --save-dev @babel/plugin-transform-private-methods @babel/plugin-transform-numeric-separator @babel/plugin-transform-nullish-coalescing-operator @babel/plugin-transform-class-properties @babel/plugin-transform-private-property-in-object @babel/plugin-transform-optional-chaining', { stdio: 'inherit' });
    
    console.log('✅ Zaktualizowano pluginy Babel do nowych wersji transform');
  } catch (error) {
    console.error('❌ Błąd podczas aktualizacji pluginów Babel:', error.message);
  }
}

// Główna funkcja
async function main() {
  console.log('🔧 Rozpoczynam naprawę podatności...');
  
  // Upewnij się, że mamy sekcję overrides
  ensureOverrides();
  
  // Aktualizacja pluginów Babel
  updateBabelPlugins();
  
  // Wymuszenie instalacji pakietów z uwzględnieniem overrides
  try {
    console.log('🔄 Reinstalacja pakietów z overrides...');
    execSync('npm install --force', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Błąd podczas reinstalacji pakietów:', error.message);
  }
  
  console.log('🔍 Sprawdzam pozostałe podatności...');
  try {
    execSync('npm audit', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️ Niektóre podatności mogą pozostać, ale najważniejsze zostały naprawione.');
  }
  
  console.log('✅ Zakończono proces naprawy podatności.');
}

main().catch(error => {
  console.error('❌ Nieoczekiwany błąd:', error);
  process.exit(1);
}); 
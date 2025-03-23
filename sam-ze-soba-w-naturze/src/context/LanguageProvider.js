import React, { createContext, useState, useContext, useEffect } from 'react';
import translations, { availableLanguages } from '../translations';

// Tworzenie kontekstu
const LanguageContext = createContext();

// Hook do używania kontekstu języka
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Provider kontekstu języka
export const LanguageProvider = ({ children }) => {
  // Sprawdź, czy użytkownik ma zapisaną preferencję języka
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const availableLangCodes = availableLanguages.map(lang => lang.code);
    
    if (savedLanguage && availableLangCodes.includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Jeśli nie ma zapisanej preferencji, sprawdź język przeglądarki
    const browserLang = navigator.language || navigator.userLanguage;
    const browserLangShort = browserLang.split('-')[0];
    
    // Sprawdź, czy język przeglądarki jest obsługiwany
    if (availableLangCodes.includes(browserLangShort)) {
      return browserLangShort;
    }
    
    // Domyślnie polski
    return 'pl';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  
  // Aktualizuj język w localStorage przy zmianie
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    // Aktualizuj atrybut lang w HTML
    document.documentElement.lang = language;
  }, [language]);

  // Wartość kontekstu
  const value = {
    language,
    setLanguage,
    translations: translations[language] || translations.pl, // Fallback do polskiego
    allTranslations: translations,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 
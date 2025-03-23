import React, { createContext, useState, useContext, useEffect } from 'react';

// Tworzymy kontekst języka
const LanguageContext = createContext();

// Hook do użycia w komponentach
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

// Provider języka do opakowania aplikacji
export const LanguageProvider = ({ children }) => {
  // Pobierz język z localStorage lub ustaw domyślny 'pl'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pl';
  });

  // Dostępne języki
  const availableLanguages = ['pl', 'en'];

  // Aktualizuj localStorage przy zmianie języka
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Funkcja do zmiany języka
  const changeLanguage = (lang) => {
    if (availableLanguages.includes(lang)) {
      setLanguage(lang);
    } else {
      console.warn(`Język ${lang} nie jest obsługiwany. Dostępne języki: ${availableLanguages.join(', ')}`);
    }
  };

  // Wartość kontekstu do przekazania
  const value = {
    language,
    changeLanguage,
    availableLanguages,
    isCurrentLanguage: (lang) => language === lang
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 
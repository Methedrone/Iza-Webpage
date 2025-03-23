import React, { createContext, useState, useEffect, useContext } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Sprawdź, czy jest preferowany język w localStorage, domyślnie polski
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'pl';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [t, setT] = useState(translations.pl);

  useEffect(() => {
    // Aktualizuj tłumaczenia po zmianie języka
    setT(translations[language]);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 
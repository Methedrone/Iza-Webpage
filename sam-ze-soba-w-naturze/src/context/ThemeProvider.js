import React, { createContext, useState, useEffect } from 'react';

// Tworzymy kontekst
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Sprawdzanie, czy użytkownik preferuje ciemny motyw w systemie
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Sprawdzanie, czy użytkownik już wcześniej wybrał motyw (zapisany w localStorage)
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (prefersDarkMode ? 'dark' : 'light');
  };

  // Stan przechowujący aktualny motyw
  const [theme, setTheme] = useState(getSavedTheme);

  // Funkcja do przełączania motywu
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Efekt, który aktualizuje motyw na stronie
  useEffect(() => {
    const root = document.documentElement;
    
    // Ustawiamy atrybut data-theme zgodnie z obecnymi stylami w variables.css
    root.setAttribute('data-theme', theme);
    
    // Zapisujemy wybór użytkownika w localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Nasłuchujemy zmian preferencji systemowych
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Aktualizujemy motyw tylko jeśli użytkownik nie wybrał go ręcznie
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { useLanguage } from '../../context/LanguageProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { translations } = useLanguage();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? translations.theme.light : translations.theme.dark}
      title={theme === 'dark' ? translations.theme.light : translations.theme.dark}
    >
      <FontAwesomeIcon 
        icon={theme === 'dark' ? faSun : faMoon} 
        className="theme-toggle__icon"
      />
    </button>
  );
};

export default ThemeToggle; 
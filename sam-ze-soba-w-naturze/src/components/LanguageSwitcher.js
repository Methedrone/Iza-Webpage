import React from 'react';
import { useLanguage } from '../context/LanguageProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { availableLanguages } from '../translations';

const LanguageSwitcher = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
    // Zapisz preferencję języka w localStorage
    localStorage.setItem('preferredLanguage', lang);
  };

  // Zamknij dropdown po kliknięciu poza nim
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher">
      <button 
        className="language-switcher__button" 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label={translations.header.language}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <span className="language-switcher__current">{language.toUpperCase()}</span>
        <FontAwesomeIcon icon={faChevronDown} className={`language-switcher__arrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-switcher__dropdown">
          {availableLanguages.map((lang) => (
            <button 
              key={lang.code}
              className={`language-switcher__option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 
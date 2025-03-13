import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      try {
        if (
          isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          menuToggleRef.current && 
          !menuToggleRef.current.contains(event.target)
        ) {
          setIsMenuOpen(false);
        }
      } catch (error) {
        console.error('Error in click handler:', error);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Dodajemy event listenery
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    // Blokowanie przewijania strony, gdy menu jest otwarte
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Sprzątamy po sobie
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleLinkClick}>
          Pod Sosnami
        </Link>
        
        <button 
          className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="header-nav"
          ref={menuToggleRef}
        >
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
          <span className="sr-only">Menu</span>
        </button>

        <nav 
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          id="header-nav"
          ref={menuRef}
        >
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                {t('common.nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/cabins" onClick={handleLinkClick}>
                {t('common.nav.cabins')}
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={handleLinkClick}>
                {t('common.nav.booking')}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                {t('common.nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                {t('common.nav.contact')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__languages">
          <button 
            onClick={() => changeLanguage('pl')} 
            className={`header__lang-btn ${i18n.language === 'pl' ? 'active' : ''}`}
            aria-label="Polski"
          >
            PL
          </button>
          <button 
            onClick={() => changeLanguage('en')} 
            className={`header__lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            aria-label="English"
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('de')} 
            className={`header__lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
            aria-label="Deutsch"
          >
            DE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
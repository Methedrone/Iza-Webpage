import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageProvider';
import '../assets/styles/header.css';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Efekt śledzenia przewijania
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Teksty w zależności od języka
  const navItems = {
    pl: [
      { to: '/', text: 'Strona główna' },
      { to: '/about', text: 'O nas' },
      { to: '/cabins', text: 'Domki' },
      { to: '/contact', text: 'Kontakt' }
    ],
    en: [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
      { to: '/cabins', text: 'Cabins' },
      { to: '/contact', text: 'Contact' }
    ]
  };
  
  const items = navItems[language] || navItems.pl;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Sam ze sobą w naturze" />
        </Link>
        
        <div className="header-right">
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="language-switcher">
            <button 
              onClick={() => changeLanguage('pl')} 
              className={language === 'pl' ? 'active' : ''}
            >
              PL
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={language === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </div>
          
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Strona główna">
          Sam Ze Sobą w Naturze
        </Link>
        
        <button 
          className="header__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="header-nav"
          onClick={toggleMenu}
          aria-label="Menu główne"
        >
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
        </button>

        <nav 
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          id="header-nav"
          role="navigation"
          aria-label="Menu główne"
        >
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Strona główna</Link></li>
            <li><Link to="/cabins" onClick={() => setIsMenuOpen(false)}>Domki</Link></li>
            <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>Rezerwacja</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>O nas</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

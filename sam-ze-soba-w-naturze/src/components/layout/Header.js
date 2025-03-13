import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Sam Ze Sobą w Naturze
        </Link>
        <nav className="header__nav">
          <ul>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/cabins">Domki</Link></li>
            <li><Link to="/booking">Rezerwacja</Link></li>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

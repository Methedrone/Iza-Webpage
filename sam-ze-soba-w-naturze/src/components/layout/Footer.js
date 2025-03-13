import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Sam Ze Sobą w Naturze</h3>
          <p>Twoje miejsce na odpoczynek wśród natury</p>
        </div>
        <div className="footer__section">
          <h3>Nawigacja</h3>
          <ul>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/cabins">Domki</Link></li>
            <li><Link to="/booking">Rezerwacja</Link></li>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Kontakt</h3>
          <p>Email: kontakt@samzesoba.pl</p>
          <p>Telefon: +48 123 456 789</p>
        </div>
        <div className="footer__section">
          <h3>Śledź nas</h3>
          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Sam Ze Sobą w Naturze. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageProvider';
import '../assets/styles/Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  
  // Teksty w zależności od języka
  const texts = {
    pl: {
      description: 'Sam ze sobą w naturze to wyjątkowe domy wakacyjne położone w najpiękniejszych zakątkach Polski. Oferujemy niezapomniane doświadczenia w otoczeniu natury.',
      quickLinks: 'Szybkie linki',
      contact: 'Kontakt',
      address: 'Warszawa, Polska',
      phone: '+48 123 456 789',
      email: 'kontakt@samzesobanaturze.pl',
      follow: 'Obserwuj nas',
      copyright: '© 2023 Sam ze sobą w naturze. Wszelkie prawa zastrzeżone.',
      policy: 'Polityka prywatności',
      terms: 'Warunki korzystania'
    },
    en: {
      description: 'Sam ze sobą w naturze (Alone with Yourself in Nature) offers unique holiday homes located in the most beautiful corners of Poland. We provide unforgettable experiences surrounded by nature.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      address: 'Warsaw, Poland',
      phone: '+48 123 456 789',
      email: 'contact@samzesobanaturze.pl',
      follow: 'Follow Us',
      copyright: '© 2023 Sam ze sobą w naturze. All rights reserved.',
      policy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  };
  
  const t = texts[language] || texts.pl;
  
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
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Sam ze sobą w naturze" />
            <p>{t.description}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>{t.quickLinks}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>{t.contact}</h3>
              <ul className="footer-contact">
                <li>
                  <p><i className="fas fa-map-marker-alt"></i> {t.address}</p>
                </li>
                <li>
                  <p><i className="fas fa-phone"></i> {t.phone}</p>
                </li>
                <li>
                  <p><i className="fas fa-envelope"></i> {t.email}</p>
                </li>
              </ul>
              
              <h3 className="mt-4">{t.follow}</h3>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">{t.copyright}</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">{t.policy}</Link>
            <Link to="/terms">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
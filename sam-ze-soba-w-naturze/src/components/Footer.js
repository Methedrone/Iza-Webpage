import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <h3>Sam ze sobą w naturze</h3>
            <p>{t('footer.description')}</p>
          </div>
          
          <div className="footer__col">
            <h3>{t('footer.navigation')}</h3>
            <ul>
              <li><Link to="/">{t('common.nav.home')}</Link></li>
              <li><Link to="/cabins">{t('common.nav.cabins')}</Link></li>
              <li><Link to="/booking">{t('common.nav.booking')}</Link></li>
              <li><Link to="/about">{t('common.nav.about')}</Link></li>
              <li><Link to="/contact">{t('common.nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h3>{t('footer.contact')}</h3>
            <address>
              <p>{t('footer.address')}</p>
              <p>{t('footer.phone')}: +48 123 456 789</p>
              <p>{t('footer.email')}: kontakt@samzesobawnaturze.pl</p>
            </address>
          </div>
          
          <div className="footer__col">
            <h3>{t('footer.followUs')}</h3>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.facebook')}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.instagram')}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.twitter')}>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {currentYear} Sam ze sobą w naturze. {t('footer.rights')}</p>
          <div className="footer__links">
            <Link to="/privacy">{t('footer.links.privacy')}</Link>
            <Link to="/terms">{t('footer.links.terms')}</Link>
            <Link to="/cookies">{t('footer.links.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
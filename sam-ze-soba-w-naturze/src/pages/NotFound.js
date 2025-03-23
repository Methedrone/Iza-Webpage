import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = ({ translations }) => {
  const notFoundText = {
    pl: {
      title: 'Strona nie znaleziona',
      description: 'Przepraszamy, ale strona, której szukasz, nie istnieje.',
      backToHome: 'Wróć do strony głównej'
    },
    en: {
      title: 'Page Not Found',
      description: 'Sorry, but the page you are looking for does not exist.',
      backToHome: 'Back to Home'
    },
    de: {
      title: 'Seite nicht gefunden',
      description: 'Es tut uns leid, aber die gesuchte Seite existiert nicht.',
      backToHome: 'Zurück zur Startseite'
    }
  };

  // Ustal język, domyślnie polski
  const language = translations ? Object.keys(translations).includes('header') ? 'en' : 'pl' : 'pl';
  const t = notFoundText[language];

  return (
    <div className="not-found">
      <Helmet>
        <title>{t.title} | Sam ze sobą w naturze</title>
        <meta name="description" content={t.description} />
      </Helmet>
      
      <div className="container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">{t.title}</h2>
          <p className="not-found__description">{t.description}</p>
          <Link to="/" className="not-found__button">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{t.backToHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
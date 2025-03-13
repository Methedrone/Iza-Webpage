import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('notFound.title')} description={t('notFound.description')} />
      <div className="not-found-page">
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.message')}</p>
        <Link to="/" className="button">
          {t('notFound.backToHome')}
        </Link>
      </div>
    </>
  );
};

export default NotFound; 
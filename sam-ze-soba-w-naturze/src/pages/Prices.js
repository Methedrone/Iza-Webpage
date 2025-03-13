import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Prices = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('prices.title')} description={t('prices.description')} />
      <div className="prices-page">
        <h1>{t('prices.title')}</h1>
        <div className="prices-content">
          {/* Tu będzie zawartość strony z cenami */}
        </div>
      </div>
    </>
  );
};

export default Prices; 
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Regulations = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('regulations.title')} description={t('regulations.description')} />
      <div className="regulations-page">
        <h1>{t('regulations.title')}</h1>
        <div className="regulations-content">
          {/* Tu będzie zawartość strony z regulaminem */}
        </div>
      </div>
    </>
  );
};

export default Regulations; 
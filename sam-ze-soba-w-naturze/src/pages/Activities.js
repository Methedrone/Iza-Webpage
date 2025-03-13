import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Activities = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('activities.title')} description={t('activities.description')} />
      <div className="activities-page">
        <h1>{t('activities.title')}</h1>
        <div className="activities-content">
          {/* Tu będzie zawartość strony z aktywnościami */}
        </div>
      </div>
    </>
  );
};

export default Activities; 
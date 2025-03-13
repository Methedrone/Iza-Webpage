import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('gallery.title')} description={t('gallery.description')} />
      <div className="gallery-page">
        <h1>{t('gallery.title')}</h1>
        <div className="gallery-grid">
          {/* Tu będzie zawartość galerii */}
        </div>
      </div>
    </>
  );
};

export default Gallery; 
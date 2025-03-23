import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, imageUrl }) => {
  const siteTitle = "Sam ze sobą w naturze";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <Helmet>
      <html lang="pl" translate="no" />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Kanoniczny URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      
      {/* Wyłączenie automatycznego tłumaczenia */}
      <meta name="google" content="notranslate" />
    </Helmet>
  );
};

export default SEO; 
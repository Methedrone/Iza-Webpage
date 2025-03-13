import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Domki Wypoczynkowe "Pod Sosnami"',
  description = 'Przytulne domki w sercu natury, idealne na rodzinny wypoczynek. Oferujemy komfortowe zakwaterowanie w malowniczej okolicy.',
  keywords = 'domki wypoczynkowe, noclegi, wakacje, wypoczynek, natura, las, jezioro',
  image = '/images/og-image.jpg',
  url = 'https://pod-sosnami.pl'
}) => {
  useEffect(() => {
    // Tutaj możemy dodać dodatkową logikę, która musi być wykonana po zamontowaniu komponentu
  }, []);

  return (
    <Helmet>
      {/* Podstawowe meta tagi */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Dodatkowe meta tagi */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Polish" />
      <meta name="author" content="Iza Nowak" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO; 
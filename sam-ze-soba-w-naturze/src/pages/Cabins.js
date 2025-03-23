import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../context/TranslationContext';
import { useLanguage } from '../contexts/LanguageProvider';
import '../assets/styles/components.css';

const Cabins = () => {
  const { translations } = useTranslation();
  const { language } = useLanguage();
  const [cabins, setCabins] = useState([]);
  
  // Dane dla domów w zależności od języka
  useEffect(() => {
    // Symulacja pobrania danych z API
    const getCabins = () => {
      const cabinsData = {
        pl: [
          {
            id: 1,
            name: 'Dom nad jeziorem',
            description: 'Piękny dom z widokiem na jezioro, idealny dla rodzin.',
            image: '/images/cabin1.jpg',
            price: 450,
            capacity: 6,
            area: 120,
            location: 'Mazury'
          },
          {
            id: 2,
            name: 'Chatka w górach',
            description: 'Przytulna chatka w górach z kominkiem i tarasem.',
            image: '/images/cabin2.jpg',
            price: 350,
            capacity: 4,
            area: 80,
            location: 'Bieszczady'
          },
          {
            id: 3,
            name: 'Domek w lesie',
            description: 'Odosobniony domek w środku lasu, idealny na wypad z dala od miasta.',
            image: '/images/cabin3.jpg',
            price: 300,
            capacity: 2,
            area: 50,
            location: 'Puszcza Białowieska'
          }
        ],
        en: [
          {
            id: 1,
            name: 'Lake House',
            description: 'Beautiful house with lake view, perfect for families.',
            image: '/images/cabin1.jpg',
            price: 450,
            capacity: 6,
            area: 120,
            location: 'Masuria'
          },
          {
            id: 2,
            name: 'Mountain Cottage',
            description: 'Cozy mountain cottage with fireplace and terrace.',
            image: '/images/cabin2.jpg',
            price: 350,
            capacity: 4,
            area: 80,
            location: 'Bieszczady Mountains'
          },
          {
            id: 3,
            name: 'Forest Cabin',
            description: 'Secluded cabin in the middle of the forest, perfect for a getaway.',
            image: '/images/cabin3.jpg',
            price: 300,
            capacity: 2,
            area: 50,
            location: 'Białowieża Forest'
          }
        ]
      };
      
      return cabinsData[language] || cabinsData.pl;
    };
    
    setCabins(getCabins());
  }, [language]);
  
  // Teksty w zależności od języka
  const texts = {
    pl: {
      title: 'Nasze domki',
      description: 'Odkryj nasze piękne domki położone w najbardziej malowniczych częściach Polski. Każdy domek został zaprojektowany z myślą o komforcie i harmonii z naturą.',
      viewDetails: 'Zobacz szczegóły',
      capacity: 'Pojemność',
      area: 'Powierzchnia',
      price: 'Cena za noc',
      persons: 'osób',
      squareMeters: 'm²',
      currency: 'zł'
    },
    en: {
      title: 'Our Cabins',
      description: 'Discover our beautiful cabins located in the most picturesque parts of Poland. Each cabin has been designed with comfort and harmony with nature in mind.',
      viewDetails: 'View details',
      capacity: 'Capacity',
      area: 'Area',
      price: 'Price per night',
      persons: 'people',
      squareMeters: 'm²',
      currency: 'PLN'
    }
  };
  
  const t = texts[language] || texts.pl;
  
  // Funkcja pomocnicza do obsługi form liczby mnogiej w języku polskim
  const getPeopleText = (count, language) => {
    if (language === 'pl') {
      if (count === 1) {
        return `1 ${translations.cabins.person}`;
      } else {
        return `${count} ${translations.cabins.people}`;
      }
    } else {
      return count === 1 
        ? `1 ${translations.cabins.person}` 
        : `${count} ${translations.cabins.people}`;
    }
  };

  return (
    <div className="cabins section">
      <Helmet>
        <title>{translations.cabins.title} | {translations.siteTitle}</title>
        <meta 
          name="description" 
          content={translations.cabins.subtitle}
        />
        <meta 
          name="keywords" 
          content="domki, mazury, wypoczynek, natura, las, cisza, spokój, relaks"
        />
      </Helmet>
      
      <div className="container">
        <h1 className="text-center mb-4">{t.title}</h1>
        <p className="text-center mb-5">{t.description}</p>
        
        <div className="cabins-grid">
          {cabins.map((cabin) => (
            <div className="cabin-card" key={cabin.id}>
              <div className="cabin-card__image-container">
                <img 
                  src={process.env.PUBLIC_URL + (cabin.image || '/images/placeholder.jpg')} 
                  alt={cabin.name}
                  className="cabin-card__image"
                />
              </div>
              <div className="cabin-card__content">
                <h2 className="cabin-card__title">{cabin.name}</h2>
                <p className="cabin-card__description">{cabin.description}</p>
                <div className="cabin-card__details">
                  <span className="cabin-card__capacity">
                    <i className="fas fa-user"></i> {cabin.capacity} {t.persons}
                  </span>
                  <span className="cabin-card__area">
                    <i className="fas fa-ruler-combined"></i> {cabin.area} {t.squareMeters}
                  </span>
                  <span className="cabin-card__location">
                    <i className="fas fa-map-marker-alt"></i> {cabin.location}
                  </span>
                </div>
                <div className="cabin-card__price mb-3">
                  {cabin.price} {t.currency} / {t.night}
                </div>
                <div className="cabin-card__actions">
                  <Link to={`/cabins/${cabin.id}`} className="btn btn-primary">
                    {t.viewDetails}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cabins;

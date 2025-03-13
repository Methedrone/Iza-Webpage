import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const cabins = [
  {
    id: 1,
    name: 'Domek Leśny',
    description: 'Przytulny domek w sercu lasu, idealny na romantyczny wypad',
    price: '200 zł/noc',
    capacity: '2 osoby',
    image: '/images/cabin1.jpg',
    imageSmall: '/images/cabin1-small.jpg',
    imageMedium: '/images/cabin1-medium.jpg',
    imageLarge: '/images/cabin1-large.jpg'
  },
  {
    id: 2,
    name: 'Domek nad Stawem',
    description: 'Domek z widokiem na staw, idealny dla rodzin',
    price: '300 zł/noc',
    capacity: '4 osoby',
    image: '/images/cabin2.jpg',
    imageSmall: '/images/cabin2-small.jpg',
    imageMedium: '/images/cabin2-medium.jpg',
    imageLarge: '/images/cabin2-large.jpg'
  },
  {
    id: 3,
    name: 'Domek w Gaju',
    description: 'Przestronny domek wśród drzew, z tarasem i miejscem na grilla',
    price: '250 zł/noc',
    capacity: '3 osoby',
    image: '/images/cabin3.jpg',
    imageSmall: '/images/cabin3-small.jpg',
    imageMedium: '/images/cabin3-medium.jpg',
    imageLarge: '/images/cabin3-large.jpg'
  }
];

const Cabins = () => {
  return (
    <>
      <SEO 
        title="Nasze Domki - Domki Wypoczynkowe 'Pod Sosnami'"
        description="Oferujemy trzy przytulne domki w sercu natury. Każdy domek jest idealnie wyposażony i dostosowany do różnych potrzeb gości."
        keywords="domki wypoczynkowe, noclegi, wakacje, wypoczynek, domek leśny, domek nad stawem, domek w gaju"
      />
      
      <div className="cabins">
        <h1>Nasze Domki</h1>
        <div className="cabins__grid">
          {cabins.map(cabin => (
            <div key={cabin.id} className="cabin-card">
              <img 
                src={cabin.image}
                srcSet={`${cabin.imageSmall} 300w, ${cabin.imageMedium} 600w, ${cabin.imageLarge} 900w`}
                sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
                alt={`${cabin.name} - domek wypoczynkowy`}
                loading="lazy"
                className="cabin-card__image"
              />
              <div className="cabin-card__content">
                <h2>{cabin.name}</h2>
                <p>{cabin.description}</p>
                <div className="cabin-card__details">
                  <p>Cena: {cabin.price}</p>
                  <p>Pojemność: {cabin.capacity}</p>
                </div>
                <Link 
                  to={`/cabins/${cabin.id}`} 
                  className="btn btn-primary"
                  aria-label={`Zobacz szczegóły domku ${cabin.name}`}
                >
                  Zobacz szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cabins;

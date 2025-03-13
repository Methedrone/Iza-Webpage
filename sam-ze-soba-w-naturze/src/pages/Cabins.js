import React from 'react';
import { Link } from 'react-router-dom';

const cabins = [
  {
    id: 1,
    name: 'Domek Leśny',
    description: 'Przytulny domek w sercu lasu, idealny na romantyczny wypad',
    price: '200 zł/noc',
    capacity: '2 osoby',
    image: '/images/cabin1.jpg'
  },
  {
    id: 2,
    name: 'Domek nad Stawem',
    description: 'Domek z widokiem na staw, idealny dla rodzin',
    price: '300 zł/noc',
    capacity: '4 osoby',
    image: '/images/cabin2.jpg'
  },
  {
    id: 3,
    name: 'Domek w Gaju',
    description: 'Przestronny domek wśród drzew, z tarasem i miejscem na grilla',
    price: '250 zł/noc',
    capacity: '3 osoby',
    image: '/images/cabin3.jpg'
  }
];

const Cabins = () => {
  return (
    <div className="cabins">
      <h1>Nasze Domki</h1>
      <div className="cabins__grid">
        {cabins.map(cabin => (
          <div key={cabin.id} className="cabin-card">
            <img src={cabin.image} alt={cabin.name} className="cabin-card__image" />
            <div className="cabin-card__content">
              <h2>{cabin.name}</h2>
              <p>{cabin.description}</p>
              <div className="cabin-card__details">
                <p>Cena: {cabin.price}</p>
                <p>Pojemność: {cabin.capacity}</p>
              </div>
              <Link to={`/cabins/${cabin.id}`} className="btn btn-primary">
                Zobacz szczegóły
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cabins;

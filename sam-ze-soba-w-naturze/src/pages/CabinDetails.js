import React from 'react';
import { useParams, Link } from 'react-router-dom';

const cabins = [
  {
    id: 1,
    name: 'Domek Leśny',
    description: 'Przytulny domek w sercu lasu, idealny na romantyczny wypad',
    price: '200 zł/noc',
    capacity: '2 osoby',
    image: '/images/cabin1.jpg',
    amenities: [
      'Łóżko małżeńskie',
      'Kuchnia',
      'Łazienka',
      'WiFi',
      'TV',
      'Taras'
    ],
    longDescription: 'Domek Leśny to idealne miejsce dla par, które chcą spędzić czas w spokoju i ciszy. Znajduje się w sercu lasu, z dala od miejskiego zgiełku. Wnętrze jest przytulne i wygodne, wyposażone we wszystko, czego potrzebujesz na romantyczny wypad.'
  },
  {
    id: 2,
    name: 'Domek nad Stawem',
    description: 'Domek z widokiem na staw, idealny dla rodzin',
    price: '300 zł/noc',
    capacity: '4 osoby',
    image: '/images/cabin2.jpg',
    amenities: [
      '2 sypialnie',
      'Kuchnia',
      'Łazienka',
      'WiFi',
      'TV',
      'Taras',
      'Miejsce na grilla'
    ],
    longDescription: 'Domek nad Stawem to idealne miejsce dla rodzin. Przestronne wnętrze i piękny widok na staw sprawiają, że jest to idealne miejsce na rodzinny wypad. Domek jest w pełni wyposażony i oferuje wiele udogodnień dla rodzin z dziećmi.'
  },
  {
    id: 3,
    name: 'Domek w Gaju',
    description: 'Przestronny domek wśród drzew, z tarasem i miejscem na grilla',
    price: '250 zł/noc',
    capacity: '3 osoby',
    image: '/images/cabin3.jpg',
    amenities: [
      'Łóżko małżeńskie + pojedyncze',
      'Kuchnia',
      'Łazienka',
      'WiFi',
      'TV',
      'Taras',
      'Miejsce na grilla'
    ],
    longDescription: 'Domek w Gaju to idealne miejsce dla małych grup przyjaciół lub rodzin. Przestronne wnętrze i duży taras sprawiają, że jest to idealne miejsce na spotkania towarzyskie. Domek jest w pełni wyposażony i oferuje wiele udogodnień.'
  }
];

const CabinDetails = () => {
  const { id } = useParams();
  const cabin = cabins.find(c => c.id === parseInt(id));

  if (!cabin) {
    return (
      <div className="cabin-details">
        <h1>Domek nie został znaleziony</h1>
        <Link to="/cabins" className="btn btn-primary">
          Powrót do listy domków
        </Link>
      </div>
    );
  }

  return (
    <div className="cabin-details">
      <div className="cabin-details__header">
        <h1>{cabin.name}</h1>
        <p className="cabin-details__price">{cabin.price}</p>
      </div>

      <div className="cabin-details__image">
        <img src={cabin.image} alt={cabin.name} />
      </div>

      <div className="cabin-details__content">
        <div className="cabin-details__description">
          <h2>Opis</h2>
          <p>{cabin.longDescription}</p>
        </div>

        <div className="cabin-details__amenities">
          <h2>Udogodnienia</h2>
          <ul>
            {cabin.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className="cabin-details__booking">
          <Link to={`/booking?cabinId=${cabin.id}`} className="btn btn-primary">
            Zarezerwuj teraz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabinDetails;

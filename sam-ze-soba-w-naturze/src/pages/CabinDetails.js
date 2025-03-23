import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faWifi, 
  faUtensils, 
  faBed,
  faShower,
  faMountain,
  faTree
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../context/TranslationContext';
import { useLanguage } from '../contexts/LanguageProvider';

const CabinDetails = () => {
  const { slug } = useParams();
  const { translations } = useTranslation();
  const { language } = useLanguage();
  const [cabin, setCabin] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Symulacja pobrania danych z API
    const getCabinData = () => {
      const cabinsData = {
        pl: {
          1: {
      id: 1,
      name: 'Leśna Ostoja',
      description: 'Przytulny domek w sercu lasu, idealny dla par szukających romantycznego wypoczynku. Otoczony drzewami, oferuje pełną prywatność i spokój. Z tarasu rozpościera się piękny widok na leśną polanę. Wnętrze urządzone jest w rustykalnym stylu, z wykorzystaniem naturalnych materiałów.',
      price: 350,
      capacity: 2,
      location: 'Brzeg lasu',
      image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      images: [
        'https://images.unsplash.com/photo-1510137600163-2729bc6959e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
      ],
      amenities: [
        'Pełne wyposażenie kuchni',
        'Łazienka z prysznicem',
        'Kominek',
        'Taras',
        'Wi-Fi',
        'TV'
      ],
      features: [
        'Bliskość natury',
        'Cisza i spokój',
        'Romantyczna atmosfera',
        'Możliwość grillowania'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Jezioro (15 min spacerem)',
        'Restauracja (3 km)',
        'Sklep spożywczy (2 km)'
      ],
      minStay: 2,
      slug: 'lesna-ostoja'
    },
          2: {
      id: 2,
      name: 'Sosnowy Zakątek',
      description: 'Przestronny domek z tarasem, otoczony sosnowym lasem, idealny dla rodzin z dziećmi. Domek posiada dwie sypialnie, salon z kominkiem, w pełni wyposażoną kuchnię oraz łazienkę. Z dużego tarasu rozpościera się widok na las. Teren wokół domku jest ogrodzony, co zapewnia bezpieczeństwo dla najmłodszych.',
      price: 450,
      capacity: 4,
      location: 'Polana leśna',
      image: 'https://images.unsplash.com/photo-1517395312956-34c059c9ead5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      images: [
        'https://images.unsplash.com/photo-1517395312956-34c059c9ead5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1539478654698-81430114149e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      ],
      amenities: [
        'Dwie sypialnie',
        'Pełne wyposażenie kuchni',
        'Łazienka z prysznicem',
        'Kominek',
        'Duży taras',
        'Wi-Fi',
        'TV',
        'Miejsce parkingowe'
      ],
      features: [
        'Ogrodzony teren',
        'Przyjazny dla rodzin',
        'Możliwość grillowania',
        'Huśtawka dla dzieci'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Jezioro (10 min spacerem)',
        'Restauracja (2 km)',
        'Sklep spożywczy (1 km)',
        'Plac zabaw (500 m)'
      ],
      minStay: 2,
      slug: 'sosnowy-zakatek'
    },
          3: {
      id: 3,
      name: 'Widok na Jezioro',
      description: 'Luksusowy domek z panoramicznym widokiem na jezioro, idealny dla większych grup. Domek posiada trzy sypialnie, dwie łazienki, przestronny salon z kominkiem oraz w pełni wyposażoną kuchnię. Z dużego tarasu rozpościera się piękny widok na jezioro i otaczający las. Domek posiada prywatną plażę i pomost.',
      price: 550,
      capacity: 6,
      location: 'Brzeg jeziora',
      image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      images: [
        'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      ],
      amenities: [
        'Trzy sypialnie',
        'Dwie łazienki',
        'Pełne wyposażenie kuchni',
        'Kominek',
        'Duży taras',
        'Wi-Fi',
        'TV',
        'Miejsce parkingowe',
        'Prywatna plaża',
        'Pomost'
      ],
      features: [
        'Panoramiczny widok na jezioro',
        'Możliwość kąpieli w jeziorze',
        'Możliwość wypożyczenia łódki',
        'Możliwość grillowania'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Restauracja (3 km)',
        'Sklep spożywczy (2 km)',
        'Wypożyczalnia sprzętu wodnego (1 km)'
      ],
      minStay: 3,
      slug: 'widok-na-jezioro'
    },
          4: {
      id: 4,
      name: 'Chatka Rybaka',
      description: 'Klimatyczny domek przy molo, idealny dla miłośników wędkarstwa i sportów wodnych. Domek posiada jedną sypialnię, salon z rozkładaną kanapą, w pełni wyposażoną kuchnię oraz łazienkę. Z tarasu rozpościera się widok na jezioro i pomost. Domek posiada własny sprzęt wędkarski i łódkę.',
      price: 400,
      capacity: 3,
      location: 'Pomost nad jeziorem',
      image: 'https://images.unsplash.com/photo-1554322662-f32e38688a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      images: [
        'https://images.unsplash.com/photo-1554322662-f32e38688a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1464537356976-89e35dfa63ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
      ],
      amenities: [
        'Jedna sypialnia',
        'Rozkładana kanapa',
        'Pełne wyposażenie kuchni',
        'Łazienka z prysznicem',
        'Taras',
        'Wi-Fi',
        'TV',
        'Miejsce parkingowe',
        'Sprzęt wędkarski',
        'Łódka'
      ],
      features: [
        'Bliskość jeziora',
        'Możliwość wędkowania',
        'Możliwość pływania łódką',
        'Możliwość grillowania'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Restauracja (2 km)',
        'Sklep spożywczy (1 km)',
        'Wypożyczalnia sprzętu wodnego (500 m)'
      ],
      minStay: 2,
      slug: 'chatka-rybaka'
    },
          5: {
      id: 5,
      name: 'Górska Polana',
      description: 'Przytulny domek położony na niewielkim wzniesieniu, z widokiem na całą okolicę. Domek posiada dwie sypialnie, salon z kominkiem, w pełni wyposażoną kuchnię oraz łazienkę. Z dużego tarasu rozpościera się panoramiczny widok na okolicę. Idealny dla miłośników górskich wędrówek.',
      price: 480,
      capacity: 5,
      location: 'Wzgórze leśne',
      image: 'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      images: [
        'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1561361398-a8cb13cd5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
      ],
      amenities: [
        'Dwie sypialnie',
        'Pełne wyposażenie kuchni',
        'Łazienka z prysznicem',
        'Kominek',
        'Duży taras',
        'Wi-Fi',
        'TV',
        'Miejsce parkingowe'
      ],
      features: [
        'Panoramiczny widok na okolicę',
        'Bliskość szlaków turystycznych',
        'Możliwość grillowania',
        'Cisza i spokój'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Jezioro (20 min spacerem)',
        'Restauracja (3 km)',
        'Sklep spożywczy (2 km)'
      ],
      minStay: 2,
      slug: 'gorska-polana'
    },
          6: {
      id: 6,
      name: 'Cicha Przystań',
      description: 'Domek położony w zacisznym miejscu, otoczony bujną roślinnością, idealny dla miłośników przyrody. Domek posiada jedną sypialnię, salon z rozkładaną kanapą, w pełni wyposażoną kuchnię oraz łazienkę. Z tarasu rozpościera się widok na las i niewielki strumyk. Idealne miejsce do obserwacji ptaków i dzikich zwierząt.',
      price: 320,
      capacity: 2,
      location: 'Zaciszna dolina',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      images: [
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
        'https://images.unsplash.com/photo-1568025478542-7e42a3c908fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
      ],
      amenities: [
        'Jedna sypialnia',
        'Rozkładana kanapa',
        'Pełne wyposażenie kuchni',
        'Łazienka z prysznicem',
        'Taras',
        'Wi-Fi',
        'TV',
        'Miejsce parkingowe'
      ],
      features: [
        'Bliskość natury',
        'Możliwość obserwacji ptaków i dzikich zwierząt',
        'Możliwość grillowania',
        'Cisza i spokój'
      ],
      surroundings: [
        'Szlaki turystyczne',
        'Jezioro (15 min spacerem)',
        'Restauracja (3 km)',
        'Sklep spożywczy (2 km)'
      ],
      minStay: 2,
      slug: 'cicha-przystan'
    }
        },
        en: {
          1: {
            id: 1,
            name: 'Lake House',
            description: 'Beautiful house with lake view, perfect for families.',
            price: 450,
            capacity: 6,
            location: 'Masuria',
            image: 'https://images.unsplash.com/photo-1510137600163-2729bc6959e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
            images: [
              'https://images.unsplash.com/photo-1510137600163-2729bc6959e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
              'https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
            ],
            amenities: ['Wi-Fi', 'Parking', 'Kominek', 'Taras', 'Grill', 'Pomost', 'Bicycles', 'Kayaks'],
            features: ['Bliskość natury', 'Cisza i spokój', 'Romantyczna atmosfera', 'Możliwość grillowania'],
            surroundings: ['Szlaki turystyczne', 'Jezioro (15 min spacerem)', 'Restauracja (3 km)', 'Sklep spożywczy (2 km)'],
            minStay: 2,
            slug: 'lesna-ostoja'
          },
          2: {
            id: 2,
            name: 'Mountain Cottage',
            description: 'Cozy mountain cottage with fireplace and terrace.',
            price: 350,
            capacity: 4,
            location: 'Bieszczady Mountains',
            image: 'https://images.unsplash.com/photo-1517395312956-34c059c9ead5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            images: [
              'https://images.unsplash.com/photo-1517395312956-34c059c9ead5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1539478654698-81430114149e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            amenities: ['Wi-Fi', 'Parking', 'Kominek', 'Taras', 'Grill', 'Hiking trails nearby'],
            features: ['Ogrodzony teren', 'Przyjazny dla rodzin', 'Możliwość grillowania', 'Huśtawka dla dzieci'],
            surroundings: ['Szlaki turystyczne', 'Jezioro (10 min spacerem)', 'Restauracja (2 km)', 'Sklep spożywczy (1 km)', 'Plac zabaw (500 m)'],
            minStay: 2,
            slug: 'sosnowy-zakatek'
          },
          3: {
            id: 3,
            name: 'Widok na Jezioro',
            description: 'Luksusowy domek z panoramicznym widokiem na jezioro, idealny dla większych grup. Domek posiada trzy sypialnie, dwie łazienki, przestronny salon z kominkiem oraz w pełni wyposażoną kuchnię. Z dużego tarasu rozpościera się piękny widok na jezioro i otaczający las. Domek posiada prywatną plażę i pomost.',
            price: 550,
            capacity: 6,
            location: 'Brzeg jeziora',
            image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            images: [
              'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            amenities: ['Trzy sypialnie', 'Dwie łazienki', 'Pełne wyposażenie kuchni', 'Kominek', 'Duży taras', 'Wi-Fi', 'TV', 'Miejsce parkingowe', 'Prywatna plaża', 'Pomost'],
            features: ['Panoramiczny widok na jezioro', 'Możliwość kąpieli w jeziorze', 'Możliwość wypożyczenia łódki', 'Możliwość grillowania'],
            surroundings: ['Szlaki turystyczne', 'Restauracja (3 km)', 'Sklep spożywczy (2 km)', 'Wypożyczalnia sprzętu wodnego (1 km)'],
            minStay: 3,
            slug: 'widok-na-jezioro'
          },
          4: {
            id: 4,
            name: 'Chatka Rybaka',
            description: 'Klimatyczny domek przy molo, idealny dla miłośników wędkarstwa i sportów wodnych. Domek posiada jedną sypialnię, salon z rozkładaną kanapą, w pełni wyposażoną kuchnię oraz łazienkę. Z tarasu rozpościera się widok na jezioro i pomost. Domek posiada własny sprzęt wędkarski i łódkę.',
            price: 400,
            capacity: 3,
            location: 'Pomost nad jeziorem',
            image: 'https://images.unsplash.com/photo-1554322662-f32e38688a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
            images: [
              'https://images.unsplash.com/photo-1554322662-f32e38688a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
              'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1464537356976-89e35dfa63ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
            ],
            amenities: ['Jedna sypialnia', 'Rozkładana kanapa', 'Pełne wyposażenie kuchni', 'Łazienka z prysznicem', 'Taras', 'Wi-Fi', 'TV', 'Miejsce parkingowe', 'Sprzęt wędkarski', 'Łódka'],
            features: ['Bliskość jeziora', 'Możliwość wędkowania', 'Możliwość pływania łódką', 'Możliwość grillowania'],
            surroundings: ['Szlaki turystyczne', 'Restauracja (2 km)', 'Sklep spożywczy (1 km)', 'Wypożyczalnia sprzętu wodnego (500 m)'],
            minStay: 2,
            slug: 'chatka-rybaka'
          },
          5: {
            id: 5,
            name: 'Górska Polana',
            description: 'Przytulny domek położony na niewielkim wzniesieniu, z widokiem na całą okolicę. Domek posiada dwie sypialnie, salon z kominkiem, w pełni wyposażoną kuchnię oraz łazienkę. Z dużego tarasu rozpościera się panoramiczny widok na okolicę. Idealny dla miłośników górskich wędrówek.',
            price: 480,
            capacity: 5,
            location: 'Wzgórze leśne',
            image: 'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
            images: [
              'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
              'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              'https://images.unsplash.com/photo-1561361398-a8cb13cd5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
            ],
            amenities: ['Dwie sypialnie', 'Pełne wyposażenie kuchni', 'Łazienka z prysznicem', 'Kominek', 'Duży taras', 'Wi-Fi', 'TV', 'Miejsce parkingowe'],
            features: ['Panoramiczny widok na okolicę', 'Bliskość szlaków turystycznych', 'Możliwość grillowania', 'Cisza i spokój'],
            surroundings: ['Szlaki turystyczne', 'Jezioro (20 min spacerem)', 'Restauracja (3 km)', 'Sklep spożywczy (2 km)'],
            minStay: 2,
            slug: 'gorska-polana'
          },
          6: {
            id: 6,
            name: 'Cicha Przystań',
            description: 'Domek położony w zacisznym miejscu, otoczony bujną roślinnością, idealny dla miłośników przyrody. Domek posiada jedną sypialnię, salon z rozkładaną kanapą, w pełni wyposażoną kuchnię oraz łazienkę. Z tarasu rozpościera się widok na las i niewielki strumyk. Idealne miejsce do obserwacji ptaków i dzikich zwierząt.',
            price: 320,
            capacity: 2,
            location: 'Zaciszna dolina',
            image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            images: [
              'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
              'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
              'https://images.unsplash.com/photo-1568025478542-7e42a3c908fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
            ],
            amenities: ['Jedna sypialnia', 'Rozkładana kanapa', 'Pełne wyposażenie kuchni', 'Łazienka z prysznicem', 'Taras', 'Wi-Fi', 'TV', 'Miejsce parkingowe'],
            features: ['Bliskość natury', 'Możliwość obserwacji ptaków i dzikich zwierząt', 'Możliwość grillowania', 'Cisza i spokój'],
            surroundings: ['Szlaki turystyczne', 'Jezioro (15 min spacerem)', 'Restauracja (3 km)', 'Sklep spożywczy (2 km)'],
            minStay: 2,
            slug: 'cicha-przystan'
          }
        }
      };
      
      return cabinsData[language]?.[id] || cabinsData.pl?.[id];
    };
    
    // Symulacja opóźnienia ładowania danych
    const timer = setTimeout(() => {
      const data = getCabinData();
      setCabin(data);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id, language]);
  
  // Teksty w zależności od języka
  const texts = {
    pl: {
      loading: 'Ładowanie...',
      notFound: 'Domek nie został znaleziony',
      back: 'Powrót do listy domków',
      price: 'Cena za noc',
      capacity: 'Pojemność',
      bedrooms: 'Sypialnie',
      bathrooms: 'Łazienki',
      area: 'Powierzchnia',
      location: 'Lokalizacja',
      amenities: 'Udogodnienia',
      activities: 'Aktywności',
      book: 'Zarezerwuj teraz',
      night: 'noc',
      persons: 'osób',
      bedCount: 'sypialnie',
      bathCount: 'łazienki',
      squareMeters: 'm²',
      currency: 'zł'
    },
    en: {
      loading: 'Loading...',
      notFound: 'Cabin not found',
      back: 'Back to cabins list',
      price: 'Price per night',
      capacity: 'Capacity',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      area: 'Area',
      location: 'Location',
      amenities: 'Amenities',
      activities: 'Activities',
      book: 'Book now',
      night: 'night',
      persons: 'people',
      bedCount: 'bedrooms',
      bathCount: 'bathrooms',
      squareMeters: 'm²',
      currency: 'PLN'
    }
  };
  
  const t = texts[language] || texts.pl;
  
  if (loading) {
    return (
      <div className="section container">
        <div className="loading-container">
          <div className="loader"></div>
          <p>{t.loading}</p>
        </div>
      </div>
    );
  }
  
  if (!cabin) {
    return (
      <div className="section container">
        <div className="alert alert-error">
          <p>{t.notFound}</p>
          <Link to="/cabins" className="btn btn-primary mt-3">
            {t.back}
        </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cabin-details section">
      <div className="container">
      <Helmet>
        <title>{cabin.name} | {translations.siteTitle}</title>
        <meta name="description" content={cabin.description} />
        <meta name="keywords" content={`domek, ${cabin.name}, mazury, wypoczynek, natura, las`} />
        <meta property="og:title" content={`${cabin.name} | ${translations.siteTitle}`} />
        <meta property="og:description" content={cabin.description} />
        <meta property="og:image" content={cabin.images[0]} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="cabin-details__header">
        <h1 className="cabin-details__title">{cabin.name}</h1>
        <div className="cabin-details__location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{cabin.location}</span>
        </div>
      </div>

      <div className="cabin-details__gallery">
        <div className="cabin-details__main-image">
          <img 
              src={process.env.PUBLIC_URL + (cabin.images[0] || '/images/placeholder.jpg')} 
              alt={cabin.name} 
            className="cabin-details__image" 
          />
        </div>
          <div className="cabin-details__thumbnails">
            {cabin.images.map((image, index) => (
              <div className={`cabin-details__thumbnail ${index === 0 ? 'active' : ''}`} key={index}>
          <img 
                  src={process.env.PUBLIC_URL + image} 
                  alt={`${cabin.name} - zdjęcie ${index + 1}`}
          />
        </div>
            ))}
          </div>
      </div>

      <div className="cabin-details__content">
          <div className="cabin-details__description">
            <p className="mb-4">{cabin.description}</p>
            <p>{cabin.longDescription}</p>
            
            <div className="cabin-details__section mt-4">
              <h3 className="cabin-details__section-title">{t.amenities}</h3>
              <ul className="cabin-details__amenities">
              {cabin.amenities.map((amenity, index) => (
                  <li key={index} className="cabin-details__amenity">
                    <i className="fas fa-check"></i> {amenity}
                  </li>
                ))}
              </ul>
          </div>

            <div className="cabin-details__section mt-4">
              <h3 className="cabin-details__section-title">{t.activities}</h3>
              <ul className="cabin-details__amenities">
                {cabin.activities.map((activity, index) => (
                  <li key={index} className="cabin-details__amenity">
                    <i className="fas fa-hiking"></i> {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cabin-details__sidebar">
            <div className="cabin-details__price mb-3">
              <span>{cabin.price} {t.currency}</span>
              <small className="cabin-details__price-period">/ {t.night}</small>
            </div>
            
            <div className="cabin-details__info mb-4">
              <div className="cabin-details__info-item">
                <span className="cabin-details__info-label">{t.capacity}:</span>
                <strong>{cabin.capacity} {t.persons}</strong>
          </div>
              <div className="cabin-details__info-item">
                <span className="cabin-details__info-label">{t.bedrooms}:</span>
                <strong>{cabin.bedrooms} {t.bedCount}</strong>
          </div>
            <div className="cabin-details__info-item">
                <span className="cabin-details__info-label">{t.bathrooms}:</span>
                <strong>{cabin.bathrooms} {t.bathCount}</strong>
            </div>
            <div className="cabin-details__info-item">
                <span className="cabin-details__info-label">{t.area}:</span>
                <strong>{cabin.area} {t.squareMeters}</strong>
              </div>
            </div>
            
            <button className="btn btn-primary cabin-details__book-btn">
              {t.book}
            </button>
            
            <p className="cabin-details__notice mt-3">
              <i className="fas fa-info-circle"></i> Skontaktuj się z nami, aby sprawdzić dostępność
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinDetails;

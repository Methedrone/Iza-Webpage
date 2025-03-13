import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faMountain, faWater, faBed } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <SEO 
        title="Sam ze sobą w naturze - Wypoczynek w sercu lasu"
        description="Odkryj urokliwe miejsce położone w sercu lasu, idealne na niezapomniany wypoczynek i kontakt z naturą. Komfortowe zakwaterowanie w malowniczej okolicy."
        keywords="wypoczynek, natura, las, spokój, cisza, domki, mazury, relaks, odpoczynek"
      />
      
      <div className="home fade-in">
        <section className="hero slide-in-up">
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <h1>Sam ze sobą w naturze</h1>
            <p>Odnajdź spokój i harmonię w otoczeniu lasu</p>
            <Link to="/domki" className="btn btn-primary hover-lift">
              Zobacz nasze domki
            </Link>
          </div>
        </section>

        <section className="features">
          <h2 className="slide-in-up">Dlaczego warto wybrać to miejsce?</h2>
          <div className="features__grid">
            <div className="feature hover-lift">
              <div className="feature__icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>Natura</h3>
              <p>Otoczenie lasu, świeże powietrze i bliskość przyrody</p>
            </div>
            <div className="feature hover-lift">
              <div className="feature__icon">
                <FontAwesomeIcon icon={faMountain} />
              </div>
              <h3>Cisza</h3>
              <p>Z dala od miejskiego zgiełku, tylko Ty i natura</p>
            </div>
            <div className="feature hover-lift">
              <div className="feature__icon">
                <FontAwesomeIcon icon={faWater} />
              </div>
              <h3>Relaks</h3>
              <p>Idealne miejsce na odpoczynek i regenerację</p>
            </div>
            <div className="feature hover-lift">
              <div className="feature__icon">
                <FontAwesomeIcon icon={faBed} />
              </div>
              <h3>Komfort</h3>
              <p>Przytulne domki z wszystkimi udogodnieniami</p>
            </div>
          </div>
        </section>

        <section className="cta slide-in-up">
          <div className="cta__content">
            <h2>Gotowy na niezapomniany wypoczynek?</h2>
            <p>Zarezerwuj swój pobyt już dziś i ciesz się spokojem natury</p>
            <Link to="/rezerwacja" className="btn btn-secondary hover-lift pulse">
              Zarezerwuj teraz
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

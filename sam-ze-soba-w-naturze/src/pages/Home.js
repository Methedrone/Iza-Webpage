import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Domki Wypoczynkowe 'Pod Sosnami' - Wypoczynek w sercu natury"
        description="Odkryj urokliwe domki położone w sercu natury, idealne na niezapomniany wypoczynek. Oferujemy komfortowe zakwaterowanie w malowniczej okolicy."
        keywords="domki wypoczynkowe, noclegi, wakacje, wypoczynek, natura, las, jezioro, mazury"
      />
      
      <div className="home">
        <section className="hero">
          <div className="hero__content">
            <h1>Domki Wypoczynkowe "Pod Sosnami"</h1>
            <p>Twoje wymarzone miejsce na odpoczynek z dala od miejskiego zgiełku</p>
            <Link to="/cabins" className="btn btn-primary">
              Zobacz nasze domki
            </Link>
          </div>
        </section>

        <section className="features">
          <h2>Dlaczego warto wybrać nasze domki?</h2>
          <div className="features__grid">
            <div className="feature">
              <h3>Lokalizacja</h3>
              <p>Położone w sercu natury, z dala od miejskiego zgiełku</p>
            </div>
            <div className="feature">
              <h3>Komfort</h3>
              <p>W pełni wyposażone domki z wszystkimi udogodnieniami</p>
            </div>
            <div className="feature">
              <h3>Natura</h3>
              <p>Bezpośredni dostęp do lasu i jeziora</p>
            </div>
            <div className="feature">
              <h3>Relaks</h3>
              <p>Idealne miejsce na odpoczynek i regenerację</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Gotowy na niezapomniany wypoczynek?</h2>
          <p>Zarezerwuj swój pobyt już dziś!</p>
          <Link to="/booking" className="btn btn-primary">
            Zarezerwuj teraz
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <h1>Sam Ze Sobą w Naturze</h1>
          <p>Odkryj piękno natury i znajdź spokój w naszych domkach</p>
          <Link to="/cabins" className="btn btn-primary">
            Zobacz nasze domki
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Dlaczego my?</h2>
        <div className="features__grid">
          <div className="feature">
            <h3>Lokalizacja</h3>
            <p>Piękne miejsce w sercu natury, z dala od miejskiego zgiełku</p>
          </div>
          <div className="feature">
            <h3>Komfort</h3>
            <p>Wygodne i przytulne domki wyposażone we wszystko, czego potrzebujesz</p>
          </div>
          <div className="feature">
            <h3>Przyroda</h3>
            <p>Bezpośredni dostęp do lasu i ścieżek rowerowych</p>
          </div>
          <div className="feature">
            <h3>Relaks</h3>
            <p>Idealne miejsce na odpoczynek i regenerację</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Gotowy na niezapomnianą przygodę?</h2>
        <p>Zarezerwuj swój pobyt już dziś!</p>
        <Link to="/booking" className="btn btn-secondary">
          Zarezerwuj teraz
        </Link>
      </section>
    </div>
  );
};

export default Home;

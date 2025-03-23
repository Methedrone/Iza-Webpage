import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../TranslationContext';

const Home = () => {
  const { translate } = useLanguage();

  return (
    <>
      <SEO 
        title={translate('homePageTitle') || "Sam ze sobą w naturze - Wypoczynek w sercu natury"}
        description={translate('homePageDescription') || "Odkryj urokliwe domki w sercu natury, idealne miejsce na odpoczynek i relaks z dala od miejskiego zgiełku."}
        keywords={translate('homePageKeywords') || "domki, wypoczynek, natura, las, odosobnienie, relaks"}
      />
      
      <div className="home">
        <section className="hero fade-in">
          <div className="hero-content slide-in-up">
            <h1>{translate('welcome') || "Witamy w Sam ze sobą w naturze"}</h1>
            <p>{translate('welcomeDescription') || "Odpocznij wśród natury"}</p>
            <Link to="/cabins" className="btn btn-primary hover-lift pulse">
              {translate('discoverCabins') || "Odkryj nasze domki"}
            </Link>
          </div>
        </section>
        
        <section className="about-preview">
          <div className="container">
            <div className="about-preview-content">
              <h2>{translate('aboutUsTitle') || "Kilka słów o nas"}</h2>
              <p>{translate('aboutUsPreview') || "Jesteśmy rodzinnym biznesem z pasją do natury. Nasze domki oferują idealne miejsce do odpoczynku, refleksji i połączenia się z otaczającym światem przyrody."}</p>
              <Link to="/about" className="btn btn-secondary hover-lift">
                {translate('learnMore') || "Dowiedz się więcej"}
              </Link>
            </div>
            <div className="about-preview-image">
              <img src="https://images.unsplash.com/photo-1605545282366-fc350ed947fc" alt={translate('aboutUsImageAlt') || "Piękny krajobraz lasu"} />
            </div>
          </div>
        </section>
        
        <section className="featured-cabins">
          <div className="container">
            <h2>{translate('featuredCabins') || "Polecane domki"}</h2>
            <div className="featured-cabins-grid">
              <div className="cabin-card">
                <img src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d" alt={translate('cabin1Alt') || "Domek Leśny"} />
                <div className="cabin-card-content">
                  <h3>{translate('cabin1Name') || "Domek Leśny"}</h3>
                  <p>{translate('cabin1Description') || "Przytulny domek otoczony lasem, idealny dla par."}</p>
                  <Link to="/cabins/domek-lesny" className="btn btn-sm hover-lift">
                    {translate('viewDetails') || "Zobacz szczegóły"}
                  </Link>
                </div>
              </div>
              <div className="cabin-card">
                <img src="https://images.unsplash.com/photo-1607638126202-60a6a2994055" alt={translate('cabin2Alt') || "Domek nad Stawem"} />
                <div className="cabin-card-content">
                  <h3>{translate('cabin2Name') || "Domek nad Stawem"}</h3>
                  <p>{translate('cabin2Description') || "Przestronny domek z widokiem na staw, idealny dla rodzin."}</p>
                  <Link to="/cabins/domek-nad-stawem" className="btn btn-sm hover-lift">
                    {translate('viewDetails') || "Zobacz szczegóły"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="featured-cabins-cta">
              <Link to="/cabins" className="btn btn-primary hover-lift">
                {translate('viewAllCabins') || "Zobacz wszystkie domki"}
              </Link>
            </div>
          </div>
        </section>
        
        <section className="cta-booking">
          <div className="container">
            <div className="cta-booking-content">
              <h2>{translate('bookingCTATitle') || "Zarezerwuj swój pobyt już dziś"}</h2>
              <p>{translate('bookingCTADescription') || "Sprawdź dostępność naszych domków i zarezerwuj swój wymarzony pobyt w sercu natury."}</p>
              <Link to="/booking" className="btn btn-primary hover-lift pulse">
                {translate('bookNow') || "Zarezerwuj teraz"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

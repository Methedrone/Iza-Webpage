import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <h1>O nas</h1>
        <p>Poznaj historię naszego miejsca i ludzi, którzy je tworzą</p>
      </div>

      <div className="about__content">
        <section className="about__section">
          <h2>Nasza Historia</h2>
          <p>
            Nasze domki powstały z pasji do natury i chęci stworzenia miejsca,
            gdzie każdy może poczuć się jak w domu, jednocześnie ciesząc się
            bliskością przyrody. Historia tego miejsca sięga początków XX wieku,
            kiedy to teren ten był częścią większego gospodarstwa rolnego.
          </p>
        </section>

        <section className="about__section">
          <h2>Nasza Misja</h2>
          <p>
            Chcemy zapewnić naszym gościom niezapomniane chwile w otoczeniu
            natury, z dala od miejskiego zgiełku. Nasze domki są zaprojektowane
            tak, aby łączyć komfort nowoczesnego życia z autentycznym
            doświadczeniem życia w lesie.
          </p>
        </section>

        <section className="about__section">
          <h2>Nasz Zespół</h2>
          <div className="about__team">
            <div className="about__team-member">
              <img 
                src="/images/team1.jpg"
                srcSet="/images/team1-small.jpg 200w, /images/team1-medium.jpg 400w, /images/team1-large.jpg 600w"
                sizes="(max-width: 400px) 200px, (max-width: 600px) 400px, 600px"
                alt="Jan Kowalski - właściciel i założyciel"
                loading="lazy"
              />
              <h3>Jan Kowalski</h3>
              <p>Właściciel i założyciel</p>
            </div>
            <div className="about__team-member">
              <img 
                src="/images/team2.jpg"
                srcSet="/images/team2-small.jpg 200w, /images/team2-medium.jpg 400w, /images/team2-large.jpg 600w"
                sizes="(max-width: 400px) 200px, (max-width: 600px) 400px, 600px"
                alt="Anna Nowak - manager obiektu"
                loading="lazy"
              />
              <h3>Anna Nowak</h3>
              <p>Manager obiektu</p>
            </div>
            <div className="about__team-member">
              <img 
                src="/images/team3.jpg"
                srcSet="/images/team3-small.jpg 200w, /images/team3-medium.jpg 400w, /images/team3-large.jpg 600w"
                sizes="(max-width: 400px) 200px, (max-width: 600px) 400px, 600px"
                alt="Piotr Wiśniewski - opiekun terenu"
                loading="lazy"
              />
              <h3>Piotr Wiśniewski</h3>
              <p>Opiekun terenu</p>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2>Nasze Wartości</h2>
          <div className="about__values">
            <div className="about__value">
              <h3>Szacunek do Natury</h3>
              <p>
                Dbamy o środowisko naturalne i promujemy zrównoważony rozwój.
              </p>
            </div>
            <div className="about__value">
              <h3>Gościnność</h3>
              <p>
                Zapewniamy naszym gościom najwyższy poziom obsługi i komfortu.
              </p>
            </div>
            <div className="about__value">
              <h3>Autentyczność</h3>
              <p>
                Tworzymy autentyczne doświadczenia, które pozwalają na prawdziwy
                kontakt z naturą.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

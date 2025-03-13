// W pliku src/pages/Home.js
function renderHomePage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="home-hero">
      <h2>Domki Wypoczynkowe "Pod Sosnami"</h2>
      <p>Twoje wymarzone miejsce na odpoczynek z dala od miejskiego zgiełku.</p>
      <div class="cta" style="margin-top: 20px;">
        <a href="#" class="btn btn-primary primary-btn">Zarezerwuj teraz</a>
      </div>
    </section>

    <section class="about-section">
      <div class="about-content">
        <div class="about-text">
          <h3>O nas</h3>
          <p>Witamy w kompleksie "Pod Sosnami", gdzie natura spotyka się z komfortem. Nasze domki położone są w malowniczej okolicy, otoczone lasem sosnowym i blisko jeziora.</p>
          <p>Jako właściciel, Iza zapewnia nie tylko komfortowy pobyt, ale także profesjonalne doradztwo finansowe i prawne związane z wynajmem krótkoterminowym i długoterminowym.</p>
          <a href="#" class="btn btn-secondary" data-page="about">Dowiedz się więcej</a>
        </div>
        <div class="about-image">
          <img src="public/images/cabin-exterior.jpg" alt="Domek wypoczynkowy">
        </div>
      </div>
    </section>

    <section class="featured-cabins">
      <h3>Nasze Domki</h3>
      <div class="cabins-grid">
        <div class="cabin-card">
          <img src="public/images/cabin1.jpg" alt="Domek Sosnowy">
          <h4>Domek Sosnowy</h4>
          <p>Przytulny domek dla 4 osób z tarasem i widokiem na las.</p>
          <p class="price">od 350 zł / noc</p>
          <a href="#" class="btn btn-outline cabin-details" data-cabin="sosnowy">Szczegóły</a>
        </div>
        <div class="cabin-card">
          <img src="public/images/cabin2.jpg" alt="Domek Brzozowy">
          <h4>Domek Brzozowy</h4>
          <p>Przestronny domek dla 6 osób z kominkiem i prywatnym jacuzzi.</p>
          <p class="price">od 450 zł / noc</p>
          <a href="#" class="btn btn-outline cabin-details" data-cabin="brzozowy">Szczegóły</a>
        </div>
        <div class="cabin-card">
          <img src="public/images/cabin3.jpg" alt="Domek Modrzewiowy">
          <h4>Domek Modrzewiowy</h4>
          <p>Luksusowy domek dla 8 osób z sauną i dostępem do jeziora.</p>
          <p class="price">od 550 zł / noc</p>
          <a href="#" class="btn btn-outline cabin-details" data-cabin="modrzewiowy">Szczegóły</a>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h3>Co mówią nasi goście</h3>
      <div class="testimonials-slider">
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"Wspaniałe miejsce na odpoczynek. Domki są czyste, dobrze wyposażone, a okolica przepiękna. Iza była bardzo pomocna i udzieliła nam świetnych porad dotyczących lokalnych atrakcji."</p>
            <div class="testimonial-author">
              <span>Anna i Marek</span>
              <div class="stars">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"Skorzystaliśmy z pomocy Izy przy długoterminowym wynajmie domku na cały sezon letni. Profesjonalne podejście i jasne zasady współpracy. Polecamy!"</p>
            <div class="testimonial-author">
              <span>Rodzina Kowalskich</span>
              <div class="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Obsługa przycisku CTA
  const ctaButton = content.querySelector('.cta .primary-btn');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      // Import modułu Booking.js i wywołanie funkcji renderBookingPage
      import('./Booking.js').then((module) => {
        module.renderBookingPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="booking"]').classList.add('active');
      });
    });
  }

  // Obsługa przycisków szczegółów domków
  const cabinButtons = content.querySelectorAll('.cabin-details');
  cabinButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const cabinType = button.getAttribute('data-cabin');

      // Import modułu CabinDetails.js i wywołanie funkcji renderCabinDetails
      import('./CabinDetails.js').then((module) => {
        module.renderCabinDetails(cabinType);
      });
    });
  });
}

export { renderHomePage };

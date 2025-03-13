// W pliku src/pages/About.js
function renderAboutPage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="about-header">
      <h2>O Nas</h2>
      <p>Poznaj historię naszych domków i dowiedz się więcej o naszej misji.</p>
    </section>

    <section class="about-story">
      <div class="about-content">
        <div class="about-image">
          <img src="public/images/owner.jpg" alt="Iza - właścicielka">
        </div>
        <div class="about-text">
          <h3>Nasza Historia</h3>
          <p>Kompleks domków "Pod Sosnami" powstał z miłości do natury i chęci dzielenia się z innymi pięknem Mazur. Iza, właścicielka, zdecydowała się otworzyć ten biznes po latach pracy w sektorze finansowym i prawnym.</p>
          <p>Z jej doświadczenia i pasji narodził się pomysł stworzenia miejsca, które łączy komfort z bliskością natury, oferując jednocześnie profesjonalne wsparcie i doradztwo w kwestiach finansowych i prawnych związanych z wynajmem i nieruchomościami.</p>
          <p>Dziś kompleks "Pod Sosnami" to nie tylko miejsce, gdzie można wypocząć, ale także uzyskać fachową poradę dotyczącą inwestycji w nieruchomości czy wynajmu długoterminowego.</p>
        </div>
      </div>
    </section>

    <section class="about-services">
      <h3>Nasze Usługi</h3>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-home"></i>
          </div>
          <h4>Wynajem Domków</h4>
          <p>Oferujemy komfortowe domki w różnych rozmiarach, idealne zarówno na weekendowy wypad, jak i dłuższy pobyt.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <h4>Doradztwo Finansowe</h4>
          <p>Pomagamy w planowaniu budżetu wakacyjnego oraz oferujemy doradztwo w zakresie inwestycji w nieruchomości.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-balance-scale"></i>
          </div>
          <h4>Wsparcie Prawne</h4>
          <p>Zapewniamy pomoc prawną w kwestiach związanych z wynajmem krótkoterminowym i długoterminowym.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h4>Organizacja Wydarzeń</h4>
          <p>Pomagamy w organizacji wydarzeń rodzinnych, firmowych i integracyjnych w naszym kompleksie.</p>
        </div>
      </div>
    </section>

    <section class="team-section">
      <h3>Nasz Zespół</h3>
      <div class="team-grid">
        <div class="team-member">
          <img src="public/images/team-iza.jpg" alt="Iza - Właścicielka">
          <h4>Iza Nowak</h4>
          <p class="role">Właścicielka / Doradca Finansowy</p>
          <p>Z wykształcenia prawnik i finansista, z pasji - miłośniczka natury i gościnności.</p>
        </div>
        <div class="team-member">
          <img src="public/images/team-member1.jpg" alt="Anna - Manager">
          <h4>Anna Kowalska</h4>
          <p class="role">Manager Kompleksu</p>
          <p>Dba o codzienne funkcjonowanie domków i zadowolenie naszych gości.</p>
        </div>
        <div class="team-member">
          <img src="public/images/team-member2.jpg" alt="Marek - Konserwator">
          <h4>Marek Wiśniewski</h4>
          <p class="role">Konserwator</p>
          <p>Zapewnia, że wszystkie domki są w idealnym stanie technicznym.</p>
        </div>
        <div class="team-member">
          <img src="public/images/team-member3.jpg" alt="Kasia - Recepcjonistka">
          <h4>Kasia Lewandowska</h4>
          <p class="role">Recepcjonistka</p>
          <p>Pierwsza osoba, którą spotkasz przy zameldowaniu, zawsze służąca pomocą.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content">
        <h3>Gotowy na wypoczynek?</h3>
        <p>Zarezerwuj swój pobyt już dziś i skorzystaj z naszych wyjątkowych usług.</p>
        <button class="btn btn-primary book-now-cta">Zarezerwuj teraz</button>
      </div>
    </section>
  `;

  // Obsługa przycisku CTA
  const ctaButton = content.querySelector('.book-now-cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      // Przekierowanie do strony rezerwacji
      import('./Booking.js').then((module) => {
        module.renderBookingPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="booking"]').classList.add('active');
      });
    });
  }
}

export { renderAboutPage };

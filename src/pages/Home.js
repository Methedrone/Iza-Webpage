// src/pages/Home.js

/**
 * Renderuje stronę główną
 */
function renderHomePage() {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>Witaj na mojej stronie!</h1>
        <p>Odkryj świat kreatywnych pomysłów i profesjonalnych rozwiązań.</p>
        <button class="btn primary-btn">Dowiedz się więcej</button>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">Co oferuję</h2>
      <div class="features-container">
        <div class="feature-card">
          <div class="feature-icon"><i class="icon-design"></i></div>
          <h3>Projektowanie</h3>
          <p>Kreatywne projekty dostosowane do Twoich potrzeb.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="icon-develop"></i></div>
          <h3>Rozwój</h3>
          <p>Nowoczesne rozwiązania z wykorzystaniem najnowszych technologii.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="icon-support"></i></div>
          <h3>Wsparcie</h3>
          <p>Profesjonalna pomoc techniczna dla Twoich projektów.</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2 class="section-title">Co mówią klienci</h2>
      <div class="testimonials-slider">
        <div class="testimonial">
          <p class="testimonial-text">"Współpraca z Izą to czysta przyjemność. Profesjonalizm i zaangażowanie na najwyższym poziomie!"</p>
          <div class="testimonial-author">
            <p><strong>Jan Kowalski</strong></p>
            <p>CEO, Company Ltd.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-content">
        <h2>Gotowy na współpracę?</h2>
        <p>Skontaktuj się ze mną i omówmy szczegóły Twojego projektu.</p>
        <button class="btn primary-btn">Kontakt</button>
      </div>
    </section>
  `;

  // Obsługa przycisku CTA
  const ctaButton = contentContainer.querySelector('.cta .primary-btn');
  ctaButton.addEventListener('click', () => {
    // Import modułu Contact.js i wywołanie funkcji renderContactPage
    import('./Contact.js').then(module => {
      module.renderContactPage();

      // Aktualizacja aktywnego linku w nawigacji
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector('a[data-page="contact"]').classList.add('active');
    });
  });
}

export { renderHomePage };

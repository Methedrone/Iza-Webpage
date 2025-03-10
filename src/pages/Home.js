// W pliku src/pages/Home.js
function renderHomePage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="home-hero">
      <h2>Witaj na mojej stronie!</h2>
      <p>To jest strona startowa mojego portfolio. Znajdziesz tu informacje o mnie i mojej pracy.</p>
    </section>

    <section class="featured-projects">
      <h3>Wybrane projekty</h3>
      <div class="projects-grid">
        <div class="project-card">
          <img src="public/images/project1.jpg" alt="Projekt 1">
          <h4>Projekt 1</h4>
          <p>Krótki opis projektu 1.</p>
        </div>
        <div class="project-card">
          <img src="public/images/project2.jpg" alt="Projekt 2">
          <h4>Projekt 2</h4>
          <p>Krótki opis projektu 2.</p>
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

  {
    // Obsługa przycisku CTA
    // eslint-disable-next-line no-undef
    const ctaButton = content.querySelector('.cta .primary-btn');
    ctaButton.addEventListener('click', () => {
      // Import modułu Contact.js i wywołanie funkcji renderContactPage
      import('./Contact.js').then((module) => {
        module.renderContactPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="contact"]').classList.add('active');
      });
    });
  }
}
export { renderHomePage };

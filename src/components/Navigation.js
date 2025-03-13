/* eslint-disable no-console */
// W pliku src/components/Navigation.js
function renderNavigation() {
  const nav = document.getElementById('navigation');

  if (!nav) {
    console.error('Element o id "navigation" nie istnieje!');
    return;
  }

  nav.innerHTML = `
    <ul>
      <li><a href="#" class="nav-link" data-page="home">Strona główna</a></li>
      <li><a href="#" class="nav-link" data-page="about">O mnie</a></li>
      <li><a href="#" class="nav-link" data-page="portfolio">Portfolio</a></li>
      <li><a href="#" class="nav-link" data-page="contact">Kontakt</a></li>
    </ul>
  `;

  // Dodanie event listenerów do linków nawigacyjnych
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      // Tutaj możesz dodać logikę zmiany strony
      console.log(`Przejście do strony: ${page}`);
    });
  });
}

export { renderNavigation };

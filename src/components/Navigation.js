// src/components/Navigation.js

/**
 * Renderuje nawigację strony
 */
function renderNavigation() {
  const nav = document.getElementById('navigation');

  nav.innerHTML = `
    <div class="nav-container">
      <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Menu">
        <span class="hamburger-icon"></span>
      </button>
      <ul class="nav-links">
        <li><a href="#" data-page="home" class="active">Strona główna</a></li>
        <li><a href="#" data-page="about">O nas</a></li>
        <li><a href="#" data-page="services">Usługi</a></li>
        <li><a href="#" data-page="portfolio">Portfolio</a></li>
        <li><a href="#" data-page="blog">Blog</a></li>
        <li><a href="#" data-page="contact">Kontakt</a></li>
      </ul>
    </div>
  `;

  // Obsługa menu mobilnego
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
  });

  // Obsługa aktywnych linków
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Usuń klasę active ze wszystkich linków
      links.forEach(l => l.classList.remove('active'));
      // Dodaj klasę active do klikniętego linku
      e.target.classList.add('active');
    });
  });
}

export { renderNavigation };

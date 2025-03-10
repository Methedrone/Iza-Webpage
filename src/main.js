// Importy modułów i komponentów
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderNavigation } from './components/Navigation.js';
import { renderHomePage } from './pages/Home.js';

// Funkcja inicjalizująca aplikację
function initApp() {
  renderHeader();
  renderNavigation();
  renderHomePage(); // Domyślnie renderujemy stronę główną
  renderFooter();

  setupRouting();
}

// Podstawowa obsługa routingu
function setupRouting() {
  const links = document.querySelectorAll('nav a');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('data-page');
      navigateTo(page);
    });
  });
}

// Funkcja do nawigacji między stronami
function navigateTo(page) {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';

  switch (page) {
    case 'home':
      import('./pages/Home.js').then((module) => {
        module.renderHomePage();
      });
      break;
    case 'about':
      import('./pages/About.js').then((module) => {
        module.renderAboutPage();
      });
      break;
    case 'contact':
      import('./pages/Contact.js').then((module) => {
        module.renderContactPage();
      });
      break;
    case 'booking':
      import('./pages/Booking.js').then((module) => {
        module.renderBookingPage();
      });
      break;
    default:
      import('./pages/Home.js').then((module) => {
        module.renderHomePage();
      });
  }
}

export { initApp };

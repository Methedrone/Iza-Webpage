/* eslint-disable no-console */
/* eslint-disable indent */
// Importy modułów i komponentów
// W pliku src/main.js
// import { renderHeader } from './components/Header.js';
// import { renderNavigation } from './components/Navigation.js';
// import { renderFooter } from './components/Footer.js';
//import { renderHomePage } from './pages/Home.js';
// src/main.js
import { renderHomePage } from './pages/Home.js';
import { renderAboutPage } from './pages/About.js';
import { renderContactPage } from './pages/Contact.js';
import { renderBookingPage } from './pages/Booking.js';
import { renderCabinsPage } from './pages/Cabins.js';

// Importuj style
import './styles/main.css';

// Funkcja inicjalizująca nawigację
function initNavigation() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');

      // Usunięcie klasy 'active' ze wszystkich linków
      navLinks.forEach((l) => l.classList.remove('active'));

      // Dodanie klasy 'active' do klikniętego linku
      link.classList.add('active');

      // Renderowanie odpowiedniej strony
      switch (page) {
        case 'home':
          renderHomePage();
          break;
        case 'about':
          renderAboutPage();
          break;
        case 'cabins':
          renderCabinsPage();
          break;
        case 'booking':
          renderBookingPage();
          break;
        case 'contact':
          renderContactPage();
          break;
      }
    });
  });

  // Domyślnie ładuj stronę główną
  renderHomePage();
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', initNavigation);

export { initNavigation };

// function initApp() {
//   console.log('Inicjalizacja aplikacji...');

//   // Renderuj komponenty
//   renderHeader();
//   renderNavigation();
//   renderHomePage(); // Domyślna strona główna
//   renderFooter();

//   console.log('Aplikacja zainicjalizowana!');
// }

// // Podstawowa obsługa routingu
// function setupRouting() {
//   const links = document.querySelectorAll('nav a');

//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const page = e.target.getAttribute('data-page');
//       navigateTo(page);
//     });
//   });
// }

// Funkcja do nawigacji między stronami
// function navigateTo(page) {
//   const contentContainer = document.getElementById('content');
//   contentContainer.innerHTML = '';

//   switch (page) {
//     case 'home':
//       import('./pages/Home.js').then((module) => {
//         module.renderHomePage();
//       });
//       break;
//     case 'about':
//       import('./pages/About.js').then((module) => {
//         module.renderAboutPage();
//       });
//       break;
//     case 'contact':
//       import('./pages/Contact.js').then((module) => {
//         module.renderContactPage();
//       });
//       break;
//     case 'booking':
//       import('./pages/Booking.js').then((module) => {
//         module.renderBookingPage();
//       });
//       break;
//     default:
//       import('./pages/Home.js').then((module) => {
//         module.renderHomePage();
//       });
//       break;
//   }
// }

//export { initApp };

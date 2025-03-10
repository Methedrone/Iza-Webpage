// src/pages/Contact.js

import { validateForm } from '../utils/helpers.js';

/**
 * Renderuje stronę kontaktową
 */
function renderContactPage() {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = `
    <section class="contact">
      <h1 class="page-title">Kontakt</h1>

      <div class="contact-container">
        <div class="contact-info">
          <h2>Dane kontaktowe</h2>
          <div class="info-item">
            <i class="icon-email"></i>
            <p>contact@izawebpage.com</p>
          </div>
          <div class="info-item">
            <i class="icon-phone"></i>
            <p>+48 123 456 789</p>
          </div>
          <div class="info-item">
            <i class="icon-location"></i>
            <p>ul. Przykładowa 123<br>00-000 Warszawa</p>
          </div>

          <div class="social-media">
            <h3>Media społecznościowe</h3>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Wyślij wiadomość</h2>
          <form id="contactForm">
            <div class="form-group">
              <label for="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
              <label for="subject">Temat</label>
              <input type="text" id="subject" name="subject" required>
            </div>

            <div class="form-group">
              <label for="message">Wiadomość</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div class="form-group">
              <button type="submit" class="btn primary-btn">Wyślij wiadomość</button>
            </div>

            <div id="formStatus" class="form-status"></div>
          </form>
        </div>
      </div>

      <div class="map-container">
        <h2>Znajdź mnie</h2>
        <div id="map" class="map">
          <!-- Tu będzie wstawiona mapa z API -->
          <img src="public/images/map-placeholder.jpg" alt="Mapa lokalizacji" class="map-placeholder">
        </div>
      </div>
    </section>
  `;

  // Obsługa formularza kontaktowego
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    if (validateForm(formData)) {
      // Tutaj byłoby wysłanie danych do API
      formStatus.innerHTML = 'Wiadomość została wysłana. Dziękujemy!';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      formStatus.innerHTML = 'Proszę wypełnić wszystkie pola poprawnie.';
      formStatus.className = 'form-status error';
    }
  });
}

export { renderContactPage };

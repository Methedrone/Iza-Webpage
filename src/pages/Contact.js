// W pliku src/pages/Contact.js (kontynuacja)
function renderContactPage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="contact-header">
      <h2>Kontakt</h2>
      <p>Masz pytania? Skontaktuj się z nami!</p>
    </section>

    <section class="contact-container">
      <div class="contact-info">
        <div class="contact-details">
          <h3>Dane kontaktowe</h3>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Adres</h4>
              <p>Domki "Pod Sosnami"</p>
              <p>ul. Leśna 123</p>
              <p>12-345 Mazury</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Telefon</h4>
              <p>+48 123 456 789</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>kontakt@podsosnami.pl</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
              <h4>Godziny pracy recepcji</h4>
              <p>Poniedziałek - Piątek: 8:00 - 20:00</p>
              <p>Sobota - Niedziela: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div class="social-media">
          <h3>Znajdź nas w mediach społecznościowych</h3>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div class="contact-form-container">
        <h3>Wyślij wiadomość</h3>
        <form id="contact-form" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="phone">Telefon</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
              <label for="subject">Temat</label>
              <select id="subject" name="subject" required>
                <option value="">Wybierz temat</option>
                <option value="reservation">Rezerwacja</option>
                <option value="inquiry">Zapytanie ogólne</option>
                <option value="feedback">Opinia</option>
                <option value="financial">Doradztwo finansowe</option>
                <option value="legal">Wsparcie prawne</option>
              </select>
            </div>
          </div>
          <div class="form-group full-width">
            <label for="message">Wiadomość</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <div class="form-group full-width">
            <div class="consent-checkbox">
              <input type="checkbox" id="consent" name="consent" required>
              <label for="consent">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na moje zapytanie.</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Wyślij wiadomość</button>
        </form>
      </div>
    </section>

    <section class="map-section">
      <h3>Jak do nas dojechać</h3>
      <div class="map-container">
        <!-- Tutaj możesz dodać iframe z Google Maps lub używasz odpowiedniej biblioteki JS -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.6358177128324!2d21.7645!3d53.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU3JzUyLjIiTiAyMcKwNDUnNTIuMiJF!5e0!3m2!1spl!2spl!4v1645432651784!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="directions">
        <h4>Wskazówki dojazdu:</h4>
        <ul>
          <li>Z Warszawy: Trasa S7 w kierunku Gdańska, zjazd na Olsztynek, następnie droga nr 58 w kierunku wschodnim. Po około 30 km skręć w prawo na drogę lokalną oznaczoną znakiem "Domki Pod Sosnami".</li>
          <li>Z Gdańska: Trasa S7 w kierunku Warszawy, zjazd na Ostródę, następnie droga nr 16 w kierunku Olsztyna. Po około 20 km skręć w lewo na drogę lokalną oznaczoną znakiem "Domki Pod Sosnami".</li>
          <li>Transport publiczny: Najbliższy dworzec PKP znajduje się w Olsztynie. Oferujemy płatny transfer z dworca po wcześniejszym uzgodnieniu.</li>
        </ul>
      </div>
    </section>

    <section class="faq-section">
      <h3>Najczęściej zadawane pytania</h3>
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Jakie są godziny zameldowania i wymeldowania?</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>Zameldowanie jest możliwe od godziny 15:00, a wymeldowanie do godziny 11:00. W razie potrzeby wcześniejszego zameldowania lub późniejszego wymeldowania, prosimy o kontakt z recepcją - jeśli będzie to możliwe, postaramy się dostosować do Państwa potrzeb.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Czy akceptujecie zwierzęta domowe?</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>Tak, akceptujemy zwierzęta domowe w wybranych domkach za dodatkową opłatą 50 zł za pobyt. Prosimy o wcześniejsze poinformowanie nas o zamiarze przyjazdu ze zwierzęciem.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Czy oferujecie doradztwo finansowe związane z wynajmem domków?</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>Tak, nasza właścicielka Iza jest ekspertem w dziedzinie finansów i prawa nieruchomości. Oferujemy konsultacje dotyczące aspektów finansowych i prawnych wynajmu krótko- i długoterminowego, a także doradztwo w zakresie inwestycji w nieruchomości wakacyjne. Więcej informacji można uzyskać kontaktując się bezpośrednio z nami.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Jakie atrakcje znajdują się w okolicy?</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>W okolicy znajduje się wiele atrakcji, w tym jeziora z plażami i możliwością uprawiania sportów wodnych, szlaki piesze i rowerowe, zabytki architektury oraz lokalne restauracje serwujące regionalne potrawy. W recepcji dostępne są mapy i broszury z pełną informacją o okolicznych atrakcjach.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Obsługa formularza kontaktowego
  const contactForm = content.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Symulacja wysłania formularza
      alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
      contactForm.reset();
    });
  }

  // Obsługa akordeonu FAQ
  const accordionItems = content.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    header.addEventListener('click', () => {
      // Zamknij inne elementy akordeonu
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-icon').textContent = '+';
        }
      });

      // Przełącz bieżący element
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
      } else {
        content.style.maxHeight = null;
        icon.textContent = '+';
      }
    });
  });
}

export { renderContactPage };

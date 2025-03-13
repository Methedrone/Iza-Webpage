// W pliku src/pages/Cabins.js
function renderCabinsPage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="cabins-header">
      <h2>Nasze Domki</h2>
      <p>Odkryj urokliwe domki położone w sercu natury, idealne na niezapomniany wypoczynek.</p>
    </section>

    <section class="cabins-list">
      <div class="cabin-item">
        <div class="cabin-images">
          <div class="main-image">
            <img src="public/images/cabin1.jpg" alt="Domek Sosnowy - Widok zewnętrzny">
          </div>
          <div class="thumbnails">
            <img src="public/images/cabin1-interior1.jpg" alt="Domek Sosnowy - Wnętrze" class="thumbnail">
            <img src="public/images/cabin1-interior2.jpg" alt="Domek Sosnowy - Sypialnia" class="thumbnail">
            <img src="public/images/cabin1-bathroom.jpg" alt="Domek Sosnowy - Łazienka" class="thumbnail">
            <img src="public/images/cabin1-terrace.jpg" alt="Domek Sosnowy - Taras" class="thumbnail">
          </div>
        </div>
        <div class="cabin-details">
          <h3>Domek Sosnowy</h3>
          <div class="cabin-features">
            <span class="feature"><i class="fas fa-users"></i> 4 osoby</span>
            <span class="feature"><i class="fas fa-bed"></i> 2 sypialnie</span>
            <span class="feature"><i class="fas fa-bath"></i> 1 łazienka</span>
            <span class="feature"><i class="fas fa-vector-square"></i> 50 m²</span>
          </div>
          <p class="cabin-description">
            Przytulny domek dla 4 osób z w pełni wyposażonym aneksem kuchennym, łazienką z prysznicem oraz tarasem z widokiem na las. Idealne miejsce na rodzinny wypoczynek.
          </p>
          <div class="amenities">
            <h4>Udogodnienia:</h4>
            <ul>
              <li><i class="fas fa-wifi"></i> Darmowe Wi-Fi</li>
              <li><i class="fas fa-tv"></i> Telewizor Smart TV</li>
              <li><i class="fas fa-parking"></i> Prywatny parking</li>
              <li><i class="fas fa-utensils"></i> W pełni wyposażona kuchnia</li>
              <li><i class="fas fa-snowflake"></i> Klimatyzacja</li>
              <li><i class="fas fa-fire"></i> Kominek</li>
            </ul>
          </div>
          <div class="cabin-price">
            <p>Cena od <span>350 zł</span> / noc</p>
            <button class="btn btn-primary book-now" data-cabin="sosnowy">Zarezerwuj teraz</button>
          </div>
        </div>
      </div>

      <div class="cabin-item">
        <div class="cabin-images">
          <div class="main-image">
            <img src="public/images/cabin2.jpg" alt="Domek Brzozowy - Widok zewnętrzny">
          </div>
          <div class="thumbnails">
            <img src="public/images/cabin2-interior1.jpg" alt="Domek Brzozowy - Wnętrze" class="thumbnail">
            <img src="public/images/cabin2-interior2.jpg" alt="Domek Brzozowy - Sypialnia" class="thumbnail">
            <img src="public/images/cabin2-bathroom.jpg" alt="Domek Brzozowy - Łazienka" class="thumbnail">
            <img src="public/images/cabin2-terrace.jpg" alt="Domek Brzozowy - Taras" class="thumbnail">
          </div>
        </div>
        <div class="cabin-details">
          <h3>Domek Brzozowy</h3>
          <div class="cabin-features">
            <span class="feature"><i class="fas fa-users"></i> 6 osób</span>
            <span class="feature"><i class="fas fa-bed"></i> 3 sypialnie</span>
            <span class="feature"><i class="fas fa-bath"></i> 2 łazienki</span>
            <span class="feature"><i class="fas fa-vector-square"></i> 80 m²</span>
          </div>
          <p class="cabin-description">
            Przestronny domek dla 6 osób z dużym salonem z kominkiem, w pełni wyposażoną kuchnią, dwiema łazienkami oraz prywatnym jacuzzi na tarasie. Doskonały wybór dla większej rodziny lub grupy przyjaciół.
          </p>
          <div class="amenities">
            <h4>Udogodnienia:</h4>
            <ul>
              <li><i class="fas fa-wifi"></i> Darmowe Wi-Fi</li>
              <li><i class="fas fa-tv"></i> Telewizor Smart TV</li>
              <li><i class="fas fa-parking"></i> Prywatny parking</li>
              <li><i class="fas fa-utensils"></i> W pełni wyposażona kuchnia</li>
              <li><i class="fas fa-snowflake"></i> Klimatyzacja</li>
              <li><i class="fas fa-fire"></i> Kominek</li>
              <li><i class="fas fa-hot-tub"></i> Jacuzzi</li>
            </ul>
          </div>
          <div class="cabin-price">
            <p>Cena od <span>450 zł</span> / noc</p>
            <button class="btn btn-primary book-now" data-cabin="brzozowy">Zarezerwuj teraz</button>
          </div>
        </div>
      </div>

      <div class="cabin-item">
        <div class="cabin-images">
          <div class="main-image">
            <img src="public/images/cabin3.jpg" alt="Domek Modrzewiowy - Widok zewnętrzny">
          </div>
          <div class="thumbnails">
            <img src="public/images/cabin3-interior1.jpg" alt="Domek Modrzewiowy - Wnętrze" class="thumbnail">
            <img src="public/images/cabin3-interior2.jpg" alt="Domek Modrzewiowy - Sypialnia" class="thumbnail">
            <img src="public/images/cabin3-bathroom.jpg" alt="Domek Modrzewiowy - Łazienka" class="thumbnail">
            <img src="public/images/cabin3-terrace.jpg" alt="Domek Modrzewiowy - Taras" class="thumbnail">
          </div>
        </div>
        <div class="cabin-details">
          <h3>Domek Modrzewiowy</h3>
          <div class="cabin-features">
            <span class="feature"><i class="fas fa-users"></i> 8 osób</span>
            <span class="feature"><i class="fas fa-bed"></i> 4 sypialnie</span>
            <span class="feature"><i class="fas fa-bath"></i> 2 łazienki</span>
            <span class="feature"><i class="fas fa-vector-square"></i> 120 m²</span>
          </div>
          <p class="cabin-description">
            Luksusowy domek dla 8 osób z czterema sypialniami, dwiema łazienkami, przestronnym salonem z panoramicznym widokiem na jezioro, w pełni wyposażoną kuchnią, sauną oraz bezpośrednim dostępem do jeziora. Idealny na ekskluzywny wypoczynek w większym gronie.
          </p>
          <div class="amenities">
            <h4>Udogodnienia:</h4>
            <ul>
              <li><i class="fas fa-wifi"></i> Darmowe Wi-Fi</li>
              <li><i class="fas fa-tv"></i> Telewizor Smart TV</li>
              <li><i class="fas fa-parking"></i> Prywatny parking</li>
              <li><i class="fas fa-utensils"></i> W pełni wyposażona kuchnia</li>
              <li><i class="fas fa-snowflake"></i> Klimatyzacja</li>
              <li><i class="fas fa-fire"></i> Kominek</li>
              <li><i class="fas fa-hot-tub"></i> Sauna</li>
              <li><i class="fas fa-swimming-pool"></i> Dostęp do jeziora</li>
            </ul>
          </div>
          <div class="cabin-price">
            <p>Cena od <span>550 zł</span> / noc</p>
            <button class="btn btn-primary book-now" data-cabin="modrzewiowy">Zarezerwuj teraz</button>
          </div>
        </div>
      </div>
    </section>
  `;

  // Obsługa przycisków rezerwacji
  const bookButtons = content.querySelectorAll('.book-now');
  bookButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const cabinType = button.getAttribute('data-cabin');

      // Przekierowanie do strony rezerwacji
      import('./Booking.js').then((module) => {
        module.renderBookingPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="booking"]').classList.add('active');

        // Zaznacz odpowiedni domek w formularzu rezerwacji (możesz dodać tę funkcjonalność później)
        setTimeout(() => {
          const cabinRadio = document.querySelector(`#cabin-${cabinType}`);
          if (cabinRadio) {
            cabinRadio.checked = true;
            // Wywołaj event change aby zaktualizować podsumowanie
            const event = new Event('change');
            cabinRadio.dispatchEvent(event);
          }
        }, 100);
      });
    });
  });

  // Obsługa miniatur zdjęć
  const thumbnails = content.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      const mainImage = thumbnail.closest('.cabin-images').querySelector('.main-image img');
      const tempSrc = mainImage.src;
      mainImage.src = thumbnail.src;
      thumbnail.src = tempSrc;
    });
  });
}

export { renderCabinsPage };

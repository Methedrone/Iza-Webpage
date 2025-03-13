// W pliku src/pages/CabinDetails.js
function renderCabinDetails(cabinType) {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  // Dane domków
  const cabinData = {
    sosnowy: {
      name: 'Domek Sosnowy',
      capacity: '4 osoby',
      bedrooms: '2 sypialnie',
      bathrooms: '1 łazienka',
      area: '50 m²',
      price: '350 zł / noc',
      description:
        'Przytulny domek dla 4 osób z w pełni wyposażonym aneksem kuchennym, łazienką z prysznicem oraz tarasem z widokiem na las. Idealne miejsce na rodzinny wypoczynek.',
      mainImage: 'public/images/cabin1.jpg',
      images: [
        'public/images/cabin1-interior1.jpg',
        'public/images/cabin1-interior2.jpg',
        'public/images/cabin1-bathroom.jpg',
        'public/images/cabin1-terrace.jpg',
      ],
      amenities: [
        'Darmowe Wi-Fi',
        'Telewizor Smart TV',
        'Prywatny parking',
        'W pełni wyposażona kuchnia',
        'Klimatyzacja',
        'Kominek',
        'Taras z widokiem na las',
        'Grill zewnętrzny',
      ],
    },
    brzozowy: {
      name: 'Domek Brzozowy',
      capacity: '6 osób',
      bedrooms: '3 sypialnie',
      bathrooms: '2 łazienki',
      area: '80 m²',
      price: '450 zł / noc',
      description:
        'Przestronny domek dla 6 osób z dużym salonem z kominkiem, w pełni wyposażoną kuchnią, dwiema łazienkami oraz prywatnym jacuzzi na tarasie. Doskonały wybór dla większej rodziny lub grupy przyjaciół.',
      mainImage: 'public/images/cabin2.jpg',
      images: [
        'public/images/cabin2-interior1.jpg',
        'public/images/cabin2-interior2.jpg',
        'public/images/cabin2-bathroom.jpg',
        'public/images/cabin2-terrace.jpg',
      ],
      amenities: [
        'Darmowe Wi-Fi',
        'Telewizor Smart TV',
        'Prywatny parking',
        'W pełni wyposażona kuchnia',
        'Klimatyzacja',
        'Kominek',
        'Jacuzzi na tarasie',
        'Grill zewnętrzny',
        'Plac zabaw dla dzieci',
      ],
    },
    modrzewiowy: {
      name: 'Domek Modrzewiowy',
      capacity: '8 osób',
      bedrooms: '4 sypialnie',
      bathrooms: '2 łazienki',
      area: '120 m²',
      price: '550 zł / noc',
      description:
        'Luksusowy domek dla 8 osób z czterema sypialniami, dwiema łazienkami, przestronnym salonem z panoramicznym widokiem na jezioro, w pełni wyposażoną kuchnią, sauną oraz bezpośrednim dostępem do jeziora. Idealny na ekskluzywny wypoczynek w większym gronie.',
      mainImage: 'public/images/cabin3.jpg',
      images: [
        'public/images/cabin3-interior1.jpg',
        'public/images/cabin3-interior2.jpg',
        'public/images/cabin3-bathroom.jpg',
        'public/images/cabin3-terrace.jpg',
      ],
      amenities: [
        'Darmowe Wi-Fi',
        'Telewizor Smart TV',
        'Prywatny parking',
        'W pełni wyposażona kuchnia',
        'Klimatyzacja',
        'Kominek',
        'Sauna',
        'Bezpośredni dostęp do jeziora',
        'Taras z widokiem na jezioro',
        'Prywatna plaża',
        'Łódka do dyspozycji gości',
      ],
    },
  };

  // Pobierz dane wybranego domku
  const cabin = cabinData[cabinType];

  if (!cabin) {
    console.error(`Nie znaleziono danych dla domku o typie: ${cabinType}`);
    return;
  }

  // Generowanie listy udogodnień
  const amenitiesList = cabin.amenities
    .map((amenity) => `<li><i class="fas fa-check"></i> ${amenity}</li>`)
    .join('');

  // Generowanie galerii zdjęć
  const galleryThumbnails = cabin.images
    .map(
      (img) =>
        `<div class="gallery-thumbnail">
      <img src="${img}" alt="${cabin.name}" onclick="document.getElementById('main-cabin-image').src='${img}'">
    </div>`
    )
    .join('');

  content.innerHTML = `
    <section class="cabin-details-header">
      <h2>${cabin.name}</h2>
      <div class="cabin-navigation">
        <a href="#" class="btn btn-outline" id="back-to-cabins">Powrót do listy domków</a>
      </div>
    </section>

    <section class="cabin-details-container">
      <div class="cabin-gallery">
        <div class="main-gallery-image">
          <img id="main-cabin-image" src="${cabin.mainImage}" alt="${cabin.name}">
        </div>
        <div class="gallery-thumbnails">
          ${galleryThumbnails}
        </div>
      </div>

      <div class="cabin-info">
        <div class="cabin-features-details">
          <div class="feature-item">
            <i class="fas fa-users"></i>
            <span>${cabin.capacity}</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-bed"></i>
            <span>${cabin.bedrooms}</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-bath"></i>
            <span>${cabin.bathrooms}</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-vector-square"></i>
            <span>${cabin.area}</span>
          </div>
        </div>

        <div class="cabin-description-full">
          <h3>Opis</h3>
          <p>${cabin.description}</p>
        </div>

        <div class="cabin-amenities-full">
          <h3>Udogodnienia</h3>
          <ul class="amenities-list">
            ${amenitiesList}
          </ul>
        </div>

        <div class="cabin-pricing">
          <h3>Cena</h3>
          <p class="price-info">od <span class="price-value">${cabin.price}</span></p>
          <p class="price-note">* Cena może się różnić w zależności od sezonu i długości pobytu.</p>
        </div>

        <div class="booking-actions">
          <button class="btn btn-primary book-cabin" data-cabin="${cabinType}">Zarezerwuj teraz</button>
          <button class="btn btn-outline contact-about-cabin">Zapytaj o dostępność</button>
        </div>
      </div>
    </section>

    <section class="cabin-additional-info">
      <div class="info-tabs">
        <button class="tab-button active" data-tab="rules">Regulamin</button>
        <button class="tab-button" data-tab="location">Lokalizacja</button>
        <button class="tab-button" data-tab="reviews">Opinie</button>
      </div>

      <div class="tab-content active" id="rules">
        <h3>Regulamin pobytu</h3>
        <ul class="rules-list">
          <li>Zameldowanie od godziny 15:00, wymeldowanie do godziny 11:00.</li>
          <li>Cisza nocna obowiązuje od 22:00 do 7:00.</li>
          <li>Palenie tytoniu dozwolone tylko w wyznaczonych miejscach na zewnątrz.</li>
          <li>Zwierzęta domowe są akceptowane za dodatkową opłatą 50 zł/pobyt.</li>
          <li>Goście ponoszą odpowiedzialność finansową za wszelkie szkody wyrządzone w domku.</li>
          <li>Zgubienie klucza wiąże się z opłatą 100 zł.</li>
          <li>Prosimy o segregację śmieci zgodnie z oznaczeniami na pojemnikach.</li>
        </ul>
      </div>

      <div class="tab-content" id="location">
        <h3>Lokalizacja</h3>
        <div class="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.6358177128324!2d21.7645!3d53.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU3JzUyLjIiTiAyMcKwNDUnNTIuMiJF!5e0!3m2!1spl!2spl!4v1645432651784!5m2!1spl!2spl" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="location-info">
          <h4>W pobliżu:</h4>
          <ul>
            <li>Jezioro: 50 m</li>
            <li>Las: bezpośrednio przy domku</li>
            <li>Sklep spożywczy: 2 km</li>
            <li>Restauracja: 3 km</li>
            <li>Wypożyczalnia rowerów: 3 km</li>
            <li>Wypożyczalnia sprzętu wodnego: 1 km</li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="reviews">
        <h3>Opinie naszych gości</h3>
        <div class="reviews-container">
          <div class="review">
            <div class="review-header">
              <div class="reviewer">Anna Kowalska</div>
              <div class="review-date">Sierpień 2023</div>
            </div>
            <div class="review-stars">★★★★★</div>
            <div class="review-content">
              <p>Wspaniały domek, czysto, przytulnie i z pięknymi widokami. Wyposażenie kuchni kompletne, wygodne łóżka. Na pewno wrócimy!</p>
            </div>
          </div>
          <div class="review">
            <div class="review-header">
              <div class="reviewer">Jan Nowak</div>
              <div class="review-date">Lipiec 2023</div>
            </div>
            <div class="review-stars">★★★★☆</div>
            <div class="review-content">
              <p>Bardzo dobra lokalizacja, blisko jeziora. Domek przestronny i dobrze wyposażony. Jedyne zastrzeżenie to słaby zasięg WiFi, ale w końcu przyjechaliśmy odpocząć od technologii.</p>
            </div>
          </div>
          <div class="review">
            <div class="review-header">
              <div class="reviewer">Małgorzata Wiśniewska</div>
              <div class="review-date">Czerwiec 2023</div>
            </div>
            <div class="review-stars">★★★★★</div>
            <div class="review-content">
              <p>Idealne miejsce dla rodziny. Dzieci były zachwycone placem zabaw, my odpoczynkiem w jacuzzi. Właścicielka bardzo pomocna, udzieliła nam cennych wskazówek dotyczących atrakcji w okolicy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Obsługa zakładek
  const tabButtons = content.querySelectorAll('.tab-button');
  const tabContents = content.querySelectorAll('.tab-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      // Usuń klasę active ze wszystkich przycisków i zawartości
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Dodaj klasę active do klikniętego przycisku i odpowiedniej zawartości
      button.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });

  // Obsługa przycisku powrotu do listy domków
  const backButton = content.querySelector('#back-to-cabins');
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();
      import('./Cabins.js').then((module) => {
        module.renderCabinsPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="cabins"]').classList.add('active');
      });
    });
  }

  // Obsługa przycisków rezerwacji i zapytania
  const bookButton = content.querySelector('.book-cabin');
  if (bookButton) {
    bookButton.addEventListener('click', () => {
      import('./Booking.js').then((module) => {
        module.renderBookingPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="booking"]').classList.add('active');

        // Zaznacz odpowiedni domek w formularzu rezerwacji
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
  }

  const contactButton = content.querySelector('.contact-about-cabin');
  if (contactButton) {
    contactButton.addEventListener('click', () => {
      import('./Contact.js').then((module) => {
        module.renderContactPage();

        // Aktualizacja aktywnego linku w nawigacji
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link) => link.classList.remove('active'));
        document.querySelector('a[data-page="contact"]').classList.add('active');

        // Wybierz odpowiedni temat w formularzu kontaktowym
        setTimeout(() => {
          const subjectSelect = document.querySelector('#subject');
          if (subjectSelect) {
            subjectSelect.value = 'inquiry';
            const messageText = document.querySelector('#message');
            if (messageText) {
              messageText.value = `Dzień dobry,\n\nChciałbym/chciałabym zapytać o dostępność domku ${cabin.name} w terminie...\n\nZ poważaniem,`;
            }
          }
        }, 100);
      });
    });
  }

  // Obsługa miniatury obrazów
  const galleryThumbnailElements = content.querySelectorAll('.gallery-thumbnail img');
  galleryThumbnailElements.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      const mainImage = document.getElementById('main-cabin-image');
      mainImage.src = thumbnail.src;
    });
  });
}

export { renderCabinDetails };

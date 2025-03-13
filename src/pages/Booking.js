/* eslint-disable indent */
/* eslint-disable no-case-declarations */
// W pliku src/pages/Booking.js
function renderBookingPage() {
  const content = document.getElementById('content');

  if (!content) {
    console.error('Element o id "content" nie istnieje!');
    return;
  }

  content.innerHTML = `
    <section class="booking-header">
      <h2>Zarezerwuj swój wymarzony wypoczynek</h2>
      <p>Wypełnij formularz poniżej, aby zarezerwować pobyt w jednym z naszych domków.</p>
    </section>

    <section class="booking-form-container">
      <form id="booking-form" class="booking-form">
        <div class="form-group">
          <h3>1. Wybierz domek</h3>
          <div class="cabin-selection">
            <div class="cabin-option">
              <input type="radio" id="cabin-sosnowy" name="cabin-type" value="sosnowy">
              <label for="cabin-sosnowy">
                <img src="public/images/cabin1.jpg" alt="Domek Sosnowy">
                <div class="cabin-info">
                  <h4>Domek Sosnowy</h4>
                  <p>4 osoby • 2 sypialnie • 1 łazienka</p>
                  <p class="price">od 350 zł / noc</p>
                </div>
              </label>
            </div>
            <div class="cabin-option">
              <input type="radio" id="cabin-brzozowy" name="cabin-type" value="brzozowy">
              <label for="cabin-brzozowy">
                <img src="public/images/cabin2.jpg" alt="Domek Brzozowy">
                <div class="cabin-info">
                  <h4>Domek Brzozowy</h4>
                  <p>6 osób • 3 sypialnie • 2 łazienki</p>
                  <p class="price">od 450 zł / noc</p>
                </div>
              </label>
            </div>
            <div class="cabin-option">
              <input type="radio" id="cabin-modrzewiowy" name="cabin-type" value="modrzewiowy">
              <label for="cabin-modrzewiowy">
                <img src="public/images/cabin3.jpg" alt="Domek Modrzewiowy">
                <div class="cabin-info">
                  <h4>Domek Modrzewiowy</h4>
                  <p>8 osób • 4 sypialnie • 2 łazienki</p>
                  <p class="price">od 550 zł / noc</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3>2. Wybierz termin pobytu</h3>
          <div class="date-selection">
            <div class="date-input">
              <label for="check-in">Data przyjazdu:</label>
              <input type="date" id="check-in" name="check-in" required>
            </div>
            <div class="date-input">
              <label for="check-out">Data wyjazdu:</label>
              <input type="date" id="check-out" name="check-out" required>
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3>3. Liczba gości</h3>
          <div class="guests-selection">
            <div class="guests-input">
              <label for="adults">Dorośli:</label>
              <div class="number-input">
                <button type="button" class="decrease">-</button>
                <input type="number" id="adults" name="adults" min="1" max="10" value="2" readonly>
                <button type="button" class="increase">+</button>
              </div>
            </div>
            <div class="guests-input">
              <label for="children">Dzieci (do 12 lat):</label>
              <div class="number-input">
                <button type="button" class="decrease">-</button>
                <input type="number" id="children" name="children" min="0" max="8" value="0" readonly>
                <button type="button" class="increase">+</button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3>4. Dodatkowe usługi</h3>
          <div class="additional-services">
            <div class="service-option">
              <input type="checkbox" id="breakfast" name="services" value="breakfast">
              <label for="breakfast">Śniadania (50 zł/osoba/dzień)</label>
            </div>
            <div class="service-option">
              <input type="checkbox" id="cleaning" name="services" value="cleaning">
              <label for="cleaning">Codzienny serwis sprzątający (80 zł/dzień)</label>
            </div>
            <div class="service-option">
              <input type="checkbox" id="transfer" name="services" value="transfer">
              <label for="transfer">Transfer z/na dworzec/lotnisko (120 zł/w jedną stronę)</label>
            </div>
            <div class="service-option">
              <input type="checkbox" id="bbq" name="services" value="bbq">
              <label for="bbq">Wypożyczenie grilla z węglem (60 zł/pobyt)</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <h3>5. Dane kontaktowe</h3>
          <div class="contact-details">
            <div class="input-row">
              <div class="input-group">
                <label for="first-name">Imię:</label>
                <input type="text" id="first-name" name="first-name" required>
              </div>
              <div class="input-group">
                <label for="last-name">Nazwisko:</label>
                <input type="text" id="last-name" name="last-name" required>
              </div>
            </div>
            <div class="input-row">
              <div class="input-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="input-group">
                <label for="phone">Telefon:</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
            </div>
            <div class="input-group full-width">
              <label for="special-requests">Dodatkowe uwagi/życzenia:</label>
              <textarea id="special-requests" name="special-requests" rows="4"></textarea>
            </div>
          </div>
        </div>

        <div class="form-group summary">
          <h3>Podsumowanie rezerwacji</h3>
          <div id="booking-summary" class="booking-summary">
            <p>Wybierz domek i termin, aby zobaczyć podsumowanie.</p>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Rezerwuj teraz</button>
          <button type="button" class="btn btn-outline" id="back-button">Wróć</button>
        </div>
      </form>
    </section>
  `;

  // Obsługa przycisków zwiększania/zmniejszania liczby gości
  const decreaseButtons = content.querySelectorAll('.decrease');
  const increaseButtons = content.querySelectorAll('.increase');

  decreaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const input = button.nextElementSibling;
      if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        updateBookingSummary();
      }
    });
  });

  increaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const input = button.previousElementSibling;
      if (parseInt(input.value) < parseInt(input.max)) {
        input.value = parseInt(input.value) + 1;
        updateBookingSummary();
      }
    });
  });

  // Aktualizacja podsumowania przy zmianie wyboru domku, dat, itp.
  const cabinRadios = content.querySelectorAll('input[name="cabin-type"]');
  const checkInInput = content.querySelector('#check-in');
  const checkOutInput = content.querySelector('#check-out');
  const additionalServices = content.querySelectorAll('input[name="services"]');

  cabinRadios.forEach((radio) => {
    radio.addEventListener('change', updateBookingSummary);
  });

  checkInInput.addEventListener('change', () => {
    // Ustaw minimalną datę wyjazdu na dzień po przyjeździe
    if (checkInInput.value) {
      const nextDay = new Date(checkInInput.value);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayFormatted = nextDay.toISOString().split('T')[0];
      checkOutInput.min = nextDayFormatted;

      // Jeśli obecna data wyjazdu jest wcześniejsza niż nowa minimalna data
      if (checkOutInput.value && checkOutInput.value < nextDayFormatted) {
        checkOutInput.value = nextDayFormatted;
      }
    }
    updateBookingSummary();
  });

  checkOutInput.addEventListener('change', updateBookingSummary);

  additionalServices.forEach((service) => {
    service.addEventListener('change', updateBookingSummary);
  });

  // Ustaw minimalną datę przyjazdu na dzisiaj
  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0];
  checkInInput.min = todayFormatted;

  // Obsługa przycisku powrotu
  const backButton = content.querySelector('#back-button');
  backButton.addEventListener('click', () => {
    import('./Home.js').then((module) => {
      module.renderHomePage();

      // Aktualizacja aktywnego linku w nawigacji
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach((link) => link.classList.remove('active'));
      document.querySelector('a[data-page="home"]').classList.add('active');
    });
  });

  // Obsługa wysłania formularza
  const bookingForm = content.querySelector('#booking-form');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Sprawdź czy wszystkie wymagane pola są wypełnione
    const selectedCabin = content.querySelector('input[name="cabin-type"]:checked');
    if (!selectedCabin) {
      alert('Proszę wybrać domek.');
      return;
    }

    if (!checkInInput.value || !checkOutInput.value) {
      alert('Proszę wybrać daty pobytu.');
      return;
    }

    // Możesz tutaj dodać więcej walidacji

    // Symulacja wysłania formularza i wyświetlenie potwierdzenia
    alert(
      'Dziękujemy! Twoja rezerwacja została przyjęta. Wkrótce otrzymasz potwierdzenie na email.'
    );

    // Powrót do strony głównej
    import('./Home.js').then((module) => {
      module.renderHomePage();

      // Aktualizacja aktywnego linku w nawigacji
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach((link) => link.classList.remove('active'));
      document.querySelector('a[data-page="home"]').classList.add('active');
    });
  });

  // Funkcja aktualizująca podsumowanie rezerwacji
  function updateBookingSummary() {
    const summary = content.querySelector('#booking-summary');
    const selectedCabin = content.querySelector('input[name="cabin-type"]:checked');
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const adults = parseInt(content.querySelector('#adults').value);
    const children = parseInt(content.querySelector('#children').value);

    if (!selectedCabin || !checkIn || !checkOut) {
      summary.innerHTML = '<p>Wybierz domek i termin, aby zobaczyć podsumowanie.</p>';
      return;
    }

    // Obliczenie liczby dni pobytu
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const daysOfStay = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    // Ceny domków
    const cabinPrices = {
      sosnowy: 350,
      brzozowy: 450,
      modrzewiowy: 550,
    };

    // Obliczenie podstawowej ceny pobytu
    const cabinPrice = cabinPrices[selectedCabin.value];
    const totalCabinPrice = cabinPrice * daysOfStay;

    // Obliczenie ceny dodatkowych usług
    let additionalServicesPrice = 0;
    let additionalServicesList = '';

    additionalServices.forEach((service) => {
      if (service.checked) {
        switch (service.value) {
          case 'breakfast':
            const breakfastPrice = 50 * (adults + children) * daysOfStay;
            additionalServicesPrice += breakfastPrice;
            additionalServicesList += `<li>Śniadania: ${breakfastPrice} zł</li>`;
            break;
          case 'cleaning':
            const cleaningPrice = 80 * daysOfStay;
            additionalServicesPrice += cleaningPrice;
            additionalServicesList += `<li>Serwis sprzątający: ${cleaningPrice} zł</li>`;
            break;
          case 'transfer':
            const transferPrice = 120;
            additionalServicesPrice += transferPrice;
            additionalServicesList += `<li>Transfer: ${transferPrice} zł</li>`;
            break;
          case 'bbq':
            const bbqPrice = 60;
            additionalServicesPrice += bbqPrice;
            additionalServicesList += `<li>Wypożyczenie grilla: ${bbqPrice} zł</li>`;
            break;
        }
      }
    });

    // Łączna cena
    const totalPrice = totalCabinPrice + additionalServicesPrice;

    // Aktualizacja HTML podsumowania
    let cabinName = '';
    switch (selectedCabin.value) {
      case 'sosnowy':
        cabinName = 'Domek Sosnowy';
        break;
      case 'brzozowy':
        cabinName = 'Domek Brzozowy';
        break;
      case 'modrzewiowy':
        cabinName = 'Domek Modrzewiowy';
        break;
    }

    const checkInFormatted = new Date(checkIn).toLocaleDateString('pl-PL');
    const checkOutFormatted = new Date(checkOut).toLocaleDateString('pl-PL');

    summary.innerHTML = `
      <div class="summary-item">
        <span>Domek:</span>
        <span>${cabinName}</span>
      </div>
      <div class="summary-item">
        <span>Termin pobytu:</span>
        <span>${checkInFormatted} - ${checkOutFormatted} (${daysOfStay} ${
      daysOfStay === 1 ? 'dzień' : 'dni'
    })</span>
      </div>
      <div class="summary-item">
        <span>Liczba gości:</span>
        <span>${adults} ${adults === 1 ? 'dorosły' : 'dorosłych'}${
      children ? `, ${children} ${children === 1 ? 'dziecko' : 'dzieci'}` : ''
    }</span>
      </div>
      <div class="summary-item">
        <span>Cena za domek:</span>
        <span>${cabinPrice} zł x ${daysOfStay} ${
      daysOfStay === 1 ? 'dzień' : 'dni'
    } = ${totalCabinPrice} zł</span>
      </div>
      ${
        additionalServicesList
          ? `
        <div class="summary-item">
          <span>Dodatkowe usługi:</span>
          <ul>${additionalServicesList}</ul>
        </div>
      `
          : ''
      }
      <div class="summary-total">
        <span>Łączna cena:</span>
        <span>${totalPrice} zł</span>
      </div>
    `;
  }
}

export { renderBookingPage };

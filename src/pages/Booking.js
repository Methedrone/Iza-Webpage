// src/pages/Booking.js

import { validateForm } from '../utils/helpers.js';

/**
 * Renderuje stronę rezerwacji
 */
function renderBookingPage() {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = `
    <section class="booking">
      <h1 class="page-title">Rezerwacje online</h1>

      <div class="booking-tabs">
        <button class="tab-btn active" data-tab="search">Wyszukaj</button>
        <button class="tab-btn" data-tab="login">Zaloguj się</button>
        <button class="tab-btn" data-tab="register">Zarejestruj się</button>
      </div>

      <div class="tab-content">
        <!-- Wyszukiwarka rezerwacji -->
        <div class="tab-pane active" id="search-tab">
          <div class="search-container">
            <form id="searchForm" class="search-form">
              <div class="search-group">
                <div class="form-group">
                  <label for="location">Lokalizacja</label>
                  <input type="text" id="location" name="location" placeholder="Gdzie chcesz jechać?" required>
                </div>

                <div class="form-group date-group">
                  <div class="date-input">
                    <label for="check-in">Zameldowanie</label>
                    <input type="date" id="check-in" name="check-in" required>
                  </div>
                  <div class="date-input">
                    <label for="check-out">Wymeldowanie</label>
                    <input type="date" id="check-out" name="check-out" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="guests">Goście</label>
                  <select id="guests" name="guests" required>
                    <option value="1">1 osoba</option>
                    <option value="2" selected>2 osoby</option>
                    <option value="3">3 osoby</option>
                    <option value="4">4 osoby</option>
                    <option value="5">5 osób</option>
                    <option value="6">6+ osób</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <button type="submit" class="btn primary-btn full-width">Wyszukaj dostępne pokoje</button>
              </div>
            </form>
          </div>

          <!-- Wyniki wyszukiwania -->
          <div id="searchResults" class="search-results">
            <h2>Polecane miejsca</h2>

            <div class="result-grid">
              <div class="property-card">
                <div class="property-img">
                  <img src="public/images/hotel1.jpg" alt="Hotel Premium">
                  <span class="property-rating">9.2</span>
                </div>
                <div class="property-info">
                  <h3>Hotel Premium</h3>
                  <p class="property-location">Centrum, Warszawa</p>
                  <div class="property-features">
                    <span>Wi-Fi</span>
                    <span>Basen</span>
                    <span>Śniadanie</span>
                  </div>
                  <div class="property-price">
                    <span class="price">450 zł</span>
                    <span class="per-night">za noc</span>
                  </div>
                  <button class="btn secondary-btn view-rooms-btn" data-id="1">Sprawdź dostępność</button>
                </div>
              </div>

              <div class="property-card">
                <div class="property-img">
                  <img src="public/images/hotel2.jpg" alt="Apartament Deluxe">
                  <span class="property-rating">8.9</span>
                </div>
                <div class="property-info">
                  <h3>Apartament Deluxe</h3>
                  <p class="property-location">Mokotów, Warszawa</p>
                  <div class="property-features">
                    <span>Wi-Fi</span>
                    <span>Kuchnia</span>
                    <span>Taras</span>
                  </div>
                  <div class="property-price">
                    <span class="price">380 zł</span>
                    <span class="per-night">za noc</span>
                  </div>
                  <button class="btn secondary-btn view-rooms-btn" data-id="2">Sprawdź dostępność</button>
                </div>
              </div>

              <div class="property-card">
                <div class="property-img">
                  <img src="public/images/hotel3.jpg" alt="Resort & Spa">
                  <span class="property-rating">9.6</span>
                </div>
                <div class="property-info">
                  <h3>Resort & Spa</h3>
                  <p class="property-location">Konstancin-Jeziorna</p>
                  <div class="property-features">
                    <span>Wi-Fi</span>
                    <span>Spa</span>
                    <span>Restauracja</span>
                  </div>
                  <div class="property-price">
                    <span class="price">650 zł</span>
                    <span class="per-night">za noc</span>
                  </div>
                  <button class="btn secondary-btn view-rooms-btn" data-id="3">Sprawdź dostępność</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel logowania -->
        <div class="tab-pane" id="login-tab">
          <div class="auth-container">
            <div class="auth-form-container">
              <h2>Zaloguj się</h2>
              <p>Zaloguj się, aby zarządzać swoimi rezerwacjami i uzyskać dostęp do specjalnych ofert.</p>

              <form id="loginForm" class="auth-form">
                <div class="form-group">
                  <label for="login-email">Email</label>
                  <input type="email" id="login-email" name="email" required>
                </div>

                <div class="form-group">
                  <label for="login-password">Hasło</label>
                  <input type="password" id="login-password" name="password" required>
                  <a href="#" class="forgot-password">Zapomniałeś hasła?</a>
                </div>

                <div class="form-group">
                  <div class="remember-me">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">Zapamiętaj mnie</label>
                  </div>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn primary-btn full-width">Zaloguj się</button>
                </div>

                <div id="loginStatus" class="form-status"></div>
              </form>

              <div class="auth-social">
                <p>Lub zaloguj się przez:</p>
                <div class="social-login-buttons">
                  <button class="social-btn facebook">Facebook</button>
                  <button class="social-btn google">Google</button>
                </div>
              </div>

              <div class="auth-switch">
                <p>Nie masz jeszcze konta? <a href="#" class="switch-auth" data-tab="register">Zarejestruj się</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel rejestracji -->
        <div class="tab-pane" id="register-tab">
          <div class="auth-container">
            <div class="auth-form-container">
              <h2>Utwórz nowe konto</h2>
              <p>Zarejestruj się, aby korzystać ze wszystkich funkcji platformy rezerwacyjnej.</p>

              <form id="registerForm" class="auth-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="register-first-name">Imię</label>
                    <input type="text" id="register-first-name" name="firstName" required>
                  </div>

                  <div class="form-group">
                    <label for="register-last-name">Nazwisko</label>
                    <input type="text" id="register-last-name" name="lastName" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="register-email">Email</label>
                  <input type="email" id="register-email" name="email" required>
                </div>

                <div class="form-group">
                  <label for="register-phone">Numer telefonu</label>
                  <input type="tel" id="register-phone" name="phone" required>
                </div>

                <div class="form-group">
                  <label for="register-password">Hasło</label>
                  <input type="password" id="register-password" name="password" required>
                  <small class="password-hint">Hasło powinno zawierać minimum 8 znaków, w tym cyfrę i znak specjalny.</small>
                </div>

                <div class="form-group">
                  <label for="register-confirm-password">Powtórz hasło</label>
                  <input type="password" id="register-confirm-password" name="confirmPassword" required>
                </div>

                <div class="form-group">
                  <div class="terms-checkbox">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">Akceptuję <a href="#">Regulamin</a> i <a href="#">Politykę Prywatności</a></label>
                  </div>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn primary-btn full-width">Zarejestruj się</button>
                </div>

                <div id="registerStatus" class="form-status"></div>
              </form>

              <div class="auth-switch">
                <p>Masz już konto? <a href="#" class="switch-auth" data-tab="login">Zaloguj się</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Szczegóły pokoju (wyświetlane po kliknięciu "Sprawdź dostępność") -->
      <div id="roomDetails" class="room-details modal">
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <h2>Hotel Premium - Dostępne pokoje</h2>

          <div class="room-list">
            <div class="room-item">
              <div class="room-img">
                <img src="public/images/room1.jpg" alt="Pokój Standard">
              </div>
              <div class="room-info">
                <h3>Pokój Standard</h3>
                <div class="room-details-list">
                  <div class="detail-item">
                    <i class="icon-size"></i>
                    <span>25 m²</span>
                  </div>
                  <div class="detail-item">
                    <i class="icon-bed"></i>
                    <span>1 łóżko podwójne</span>
                  </div>
                  <div class="detail-item">
                    <i class="icon-user"></i>
                    <span>2 osoby</span>
                  </div>
                </div>
                <div class="room-amenities">
                  <span>Klimatyzacja</span>
                  <span>TV</span>
                  <span>Wi-Fi</span>
                  <span>Łazienka</span>
                </div>
              </div>
              <div class="room-booking">
                <div class="room-price">
                  <span class="price">450 zł</span>
                  <span class="per-night">za noc</span>
                </div>
                <button class="btn primary-btn">Zarezerwuj teraz</button>
                <div class="cancellation-policy">Bezpłatne anulowanie do 24h przed przyjazdem</div>
              </div>
            </div>

            <div class="room-item">
              <div class="room-img">
                <img src="public/images/room2.jpg" alt="Pokój Deluxe">
              </div>
              <div class="room-info">
                <h3>Pokój Deluxe</h3>
                <div class="room-details-list">
                  <div class="detail-item">
                    <i class="icon-size"></i>
                    <span>35 m²</span>
                  </div>
                  <div class="detail-item">
                    <i class="icon-bed"></i>
                    <span>1 łóżko king-size</span>
                  </div>
                  <div class="detail-item">
                    <i class="icon-user"></i>
                    <span>2 osoby</span>
                  </div>
                </div>
                <div class="room-amenities">
                  <span>Klimatyzacja</span>
                  <span>TV</span>
                  <span>Wi-Fi</span>
                  <span>Minibar</span>
                  <span>Szlafrok</span>
                </div>
              </div>
              <div class="room-booking">
                <div class="room-price">
                  <span class="price">650 zł</span>
                  <span class="per-night">za noc</span>
                </div>
                <button class="btn primary-btn">Zarezerwuj teraz</button>
                <div class="cancellation-policy">Bezpłatne anulowanie do 24h przed przyjazdem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Obsługa zakładek
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');

      // Ukryj wszystkie zakładki
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabPanes.forEach((pane) => pane.classList.remove('active'));

      // Pokaż wybraną zakładkę
      button.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });

  // Obsługa przełączania między logowaniem i rejestracją
  const switchAuthLinks = document.querySelectorAll('.switch-auth');

  switchAuthLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = link.getAttribute('data-tab');

      // Ukryj wszystkie zakładki
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabPanes.forEach((pane) => pane.classList.remove('active'));

      // Pokaż wybraną zakładkę
      document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });

  // Obsługa formularza wyszukiwania
  const searchForm = document.getElementById('searchForm');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      location: document.getElementById('location').value,
      checkIn: document.getElementById('check-in').value,
      checkOut: document.getElementById('check-out').value,
      guests: document.getElementById('guests').value,
    };

    // Tutaj byłoby wysłanie danych do API i wyświetlenie wyników
    console.log('Szukam dostępnych pokoi dla:', formData);

    // Symulacja wyświetlenia wyników
    document.getElementById('searchResults').scrollIntoView({ behavior: 'smooth' });
  });

  // Obsługa formularza logowania
  const loginForm = document.getElementById('loginForm');
  const loginStatus = document.getElementById('loginStatus');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      email: document.getElementById('login-email').value,
      password: document.getElementById('login-password').value,
      remember: document.getElementById('remember').checked,
    };

    // Tutaj byłoby wysłanie danych do API
    setTimeout(() => {
      // Symulacja udanego logowania
      loginStatus.innerHTML = 'Logowanie udane! Przekierowuję...';
      loginStatus.className = 'form-status success';

      // Symulacja przekierowania
      setTimeout(() => {
        // Przekierowanie na stronę główną po zalogowaniu
        import('./Home.js').then((module) => {
          module.renderHomePage();

          // Aktualizacja aktywnego linku w nawigacji
          const navLinks = document.querySelectorAll('.nav-links a');
          navLinks.forEach((link) => link.classList.remove('active'));
          document.querySelector('a[data-page="home"]').classList.add('active');
        });
      }, 1500);
    }, 1000);
  });

  // Obsługa formularza rejestracji
  const registerForm = document.getElementById('registerForm');
  const registerStatus = document.getElementById('registerStatus');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById('register-first-name').value,
      lastName: document.getElementById('register-last-name').value,
      email: document.getElementById('register-email').value,
      phone: document.getElementById('register-phone').value,
      password: document.getElementById('register-password').value,
      confirmPassword: document.getElementById('register-confirm-password').value,
      terms: document.getElementById('terms').checked,
    };

    // Walidacja hasła
    if (formData.password !== formData.confirmPassword) {
      registerStatus.innerHTML = 'Hasła nie są identyczne.';
      registerStatus.className = 'form-status error';
      return;
    }

    // Walidacja siły hasła
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(formData.password)) {
      registerStatus.innerHTML =
        'Hasło musi zawierać minimum 8 znaków, w tym cyfrę i znak specjalny.';
      registerStatus.className = 'form-status error';
      return;
    }

    // Tutaj byłoby wysłanie danych do API
    setTimeout(() => {
      // Symulacja udanej rejestracji
      registerStatus.innerHTML = 'Rejestracja udana! Możesz się teraz zalogować.';
      registerStatus.className = 'form-status success';

      // Resetowanie formularza
      registerForm.reset();

      // Przełączenie na panel logowania po chwili
      setTimeout(() => {
        document.querySelector('.tab-btn[data-tab="login"]').click();
      }, 3000);
    }, 1000);
  });

  // Obsługa przycisków "Sprawdź dostępność"
  const viewRoomsButtons = document.querySelectorAll('.view-rooms-btn');
  const roomDetailsModal = document.getElementById('roomDetails');
  const closeModalButton = document.querySelector('.close-modal');

  viewRoomsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      roomDetailsModal.style.display = 'block';

      // Pobieranie id hotelu i pobranie danych z API
      const hotelId = button.getAttribute('data-id');
      // Tu można byłoby pobrać dane z API na podstawie hotelId

      document.body.classList.add('modal-open');
    });
  });

  // Obsługa zamykania modalu
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      roomDetailsModal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  }

  // Zamykanie modalu po kliknięciu poza nim
  window.addEventListener('click', (e) => {
    if (e.target === roomDetailsModal) {
      roomDetailsModal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });

  // Ustawienie domyślnych dat w formularzu wyszukiwania
  const setDefaultDates = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    if (checkInInput && checkOutInput) {
      checkInInput.valueAsDate = today;
      checkOutInput.valueAsDate = tomorrow;

      // Ustawienie minimalnych dat
      const todayStr = today.toISOString().split('T')[0];
      const tomorrowStr = tomorrow.toISOString().split('T')[0];

      checkInInput.min = todayStr;
      checkOutInput.min = tomorrowStr;

      // Aktualizacja minimalnej daty wymeldowania przy zmianie daty zameldowania
      checkInInput.addEventListener('change', () => {
        const newCheckIn = new Date(checkInInput.value);
        const newCheckOut = new Date(newCheckIn);
        newCheckOut.setDate(newCheckIn.getDate() + 1);

        const newMinDate = newCheckOut.toISOString().split('T')[0];
        checkOutInput.min = newMinDate;

        // Jeśli aktualna data wymeldowania jest wcześniejsza niż nowa data zameldowania + 1
        if (new Date(checkOutInput.value) <= newCheckIn) {
          checkOutInput.valueAsDate = newCheckOut;
        }
      });
    }
  };

  // Wywołanie funkcji ustawiającej domyślne daty
  setDefaultDates();
}

export { renderBookingPage };

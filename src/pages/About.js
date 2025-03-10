// src/pages/About.js

/**
 * Renderuje stronę O mnie
 */
function renderAboutPage() {
  const contentContainer = document.getElementById('content');

  contentContainer.innerHTML = `
    <section class="about">
      <h1 class="page-title">O mnie</h1>

      <div class="about-container">
        <div class="about-image">
          <img src="public/images/profile.jpg" alt="Iza Profile" class="profile-img">
        </div>
        <div class="about-content">
          <h2>Cześć, jestem Iza!</h2>
          <p>Jestem doświadczoną specjalistką z pasją do tworzenia innowacyjnych rozwiązań.
             Moja przygoda z branżą zaczęła się ponad 5 lat temu, a od tego czasu nieustannie rozwijam swoje umiejętności.</p>

          <p>Specjalizuję się w:</p>
          <ul class="skills-list">
            <li>Tworzeniu responsywnych stron internetowych</li>
            <li>Projektowaniu interfejsów użytkownika</li>
            <li>Optymalizacji wydajności aplikacji</li>
            <li>Zarządzaniu projektami</li>
          </ul>

          <p>Poza pracą lubię podróżować, czytać książki i eksperymentować w kuchni.</p>

          <div class="education">
            <h3>Wykształcenie</h3>
            <p><strong>Uniwersytet Technologiczny</strong> - Magister Informatyki, 2018</p>
            <p><strong>Akademia Sztuk Pięknych</strong> - Licencjat Projektowania Graficznego, 2016</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export { renderAboutPage };

// src/components/Header.js

// /**
//  * Renderuje nagłówek strony
//  */
// // Poprawki w Header.js
// function renderHeader() {
//   const header = document.getElementById('header');

//   header.innerHTML = `
//      <div class="logo-container">
//        <img src="./public/images/logo.png" alt="Iza Logo" class="logo">
//        <h1>Iza's Website</h1>
//      </div>
//      <div class="header-contact">
//        <p><i class="icon-phone"></i> +48 123 456 789</p>
//        <p><i class="icon-email"></i> contact@izawebpage.com</p>
//      </div>
//    `;
// }
// export { renderHeader };

// W pliku src/components/Header.js
function renderHeader() {
  const header = document.getElementById('header');

  if (!header) {
    console.error('Element o id "header" nie istnieje!');
    return;
  }

  header.innerHTML = `
      // Przykład w Header.js
      <img src="https://placehold.co/60x60?text=Logo" alt="Iza Logo" class="logo">
      <h1>Iza's Website</h1>
    </div>
    <div class="header-contact">
      <p><i class="fas fa-phone"></i> +48 123 456 789</p>
      <p><i class="fas fa-envelope"></i> contact@izawebpage.com</p>
    </div>
      `;
}

export { renderHeader };

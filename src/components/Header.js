// src/components/Header.js

/**
 * Renderuje nagłówek strony
 */
// Poprawki w Header.js
function renderHeader() {
  const header = document.getElementById('header');

  header.innerHTML = `
     <div class="logo-container">
       <img src="./public/images/logo.png" alt="Iza Logo" class="logo">
       <h1>Iza's Website</h1>
     </div>
     <div class="header-contact">
       <p><i class="icon-phone"></i> +48 123 456 789</p>
       <p><i class="icon-email"></i> contact@izawebpage.com</p>
     </div>
   `;
}
export { renderHeader };

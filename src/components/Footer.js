// // src/components/Footer.js

// /**
//  * Renderuje stopkę strony
//  */
// function renderFooter() {
//   const footer = document.getElementById('footer');

//   const currentYear = new Date().getFullYear();

//   footer.innerHTML = `
//     <div class="footer-content">
//       <div class="footer-col">
//         <h3>Iza's Website</h3>
//         <p>Tworzenie wartościowych treści od ${currentYear}</p>
//       </div>
//       <div class="footer-col">
//         <h3>Kontakt</h3>
//         <p>Email: contact@izawebpage.com</p>
//         <p>Telefon: +48 123 456 789</p>
//       </div>
//       <div class="footer-col">
//         <h3>Media społecznościowe</h3>
//         <div class="social-icons">
//           <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
//           <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
//           <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
//         </div>
//       </div>
//     </div>
//     <div class="copyright">
//       <p>&copy; ${currentYear} Iza's Website. Wszelkie prawa zastrzeżone.</p>
//     </div>
//   `;
// }

// export { renderFooter };

// W pliku src/components/Footer.js
function renderFooter() {
  const footer = document.getElementById('footer');

  if (!footer) {
    console.error('Element o id "footer" nie istnieje!');
    return;
  }

  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Iza's Website. Wszelkie prawa zastrzeżone.</p>
    <div class="social-media">
      <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
    </div>
  `;
}

export { renderFooter };

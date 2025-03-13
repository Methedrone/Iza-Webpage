// src/utils/helpers.js

/**
 * Waliduje dane formularza
 * @param {Object} formData - Dane formularza
 * @returns {boolean} - Czy dane są poprawne
 */
function validateForm(formData) {
  // Prosta walidacja czy pola nie są puste
  for (const key in formData) {
    if (!formData[key].trim()) {
      return false;
    }
  }

  // Walidacja adresu email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return false;
  }

  return true;
}

/**
 * Formatuje datę do czytelnego formatu
 * @param {Date|string} date - Data do sformatowania
 * @returns {string} - Sformatowana data
 */
function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
}

/**
 * Tworzy skrót tekstu do określonej długości
 * @param {string} text - Tekst do skrócenia
 * @param {number} maxLength - Maksymalna długość
 * @returns {string} - Skrócony tekst
 */
function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength) + '...';
}

export { validateForm, formatDate, truncateText };

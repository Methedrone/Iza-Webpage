// src/utils/api.js

const API_URL = 'https://api.izawebpage.com'; // Przykładowy URL API

/**
 * Wysyła zapytanie do API
 * @param {string} endpoint - Endpoint API
 * @param {Object} options - Opcje zapytania
 * @returns {Promise<Object>} - Odpowiedź z API
 */
async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    throw error;
  }
}

/**
 * Wysyła formularz kontaktowy
 * @param {Object} formData - Dane formularza
 * @returns {Promise<Object>} - Odpowiedź z API
 */
async function sendContactForm(formData) {
  return fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
}

/**
 * Pobiera artykuły z bloga
 * @param {number} limit - Limit artykułów
 * @returns {Promise<Array>} - Lista artykułów
 */
async function getBlogPosts(limit = 10) {
  return fetchAPI(`/blog?limit=${limit}`);
}

/**
 * Pobiera szczegóły artykułu
 * @param {string|number} id - ID artykułu
 * @returns {Promise<Object>} - Dane artykułu
 */
async function getBlogPostDetails(id) {
  return fetchAPI(`/blog/${id}`);
}

export { fetchAPI, sendContactForm, getBlogPosts, getBlogPostDetails };

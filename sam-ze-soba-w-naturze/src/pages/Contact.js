import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj dodamy logikę wysyłania formularza
    console.log('Dane formularza:', formData);
  };

  return (
    <div className="contact">
      <div className="contact__hero">
        <h1>Kontakt</h1>
        <p>Skontaktuj się z nami - jesteśmy do Twojej dyspozycji</p>
      </div>

      <div className="contact__content">
        <div className="contact__info">
          <h2>Informacje kontaktowe</h2>
          <div className="contact__details">
            <div className="contact__detail">
              <h3>Adres</h3>
              <p>ul. Leśna 123</p>
              <p>00-000 Warszawa</p>
            </div>
            <div className="contact__detail">
              <h3>Telefon</h3>
              <p>+48 123 456 789</p>
              <p>+48 987 654 321</p>
            </div>
            <div className="contact__detail">
              <h3>Email</h3>
              <p>kontakt@samzesoba.pl</p>
              <p>rezerwacje@samzesoba.pl</p>
            </div>
          </div>

          <div className="contact__hours">
            <h2>Godziny otwarcia</h2>
            <ul>
              <li>Poniedziałek - Piątek: 9:00 - 17:00</li>
              <li>Sobota: 10:00 - 15:00</li>
              <li>Niedziela: Zamknięte</li>
            </ul>
          </div>
        </div>

        <div className="contact__form-container">
          <h2>Wyślij wiadomość</h2>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Temat</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>

      <div className="contact__map">
        <h2>Jak do nas trafić</h2>
        <div className="map-container">
          {/* Tutaj dodamy mapę Google Maps */}
          <iframe
            title="Lokalizacja Sam Ze Sobą w Naturze na mapie Google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1234567890123!2d21.12345678901234!3d52.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA3JzM0LjQiTiAyMcKwMDcnMzQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

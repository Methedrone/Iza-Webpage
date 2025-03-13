import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cabinId = searchParams.get('cabinId');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
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
    <div className="booking">
      <h1>Rezerwacja domku</h1>
      
      <form onSubmit={handleSubmit} className="booking__form">
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
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkIn">Data przyjazdu</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOut">Data wyjazdu</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Liczba gości</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            <option value="1">1 osoba</option>
            <option value="2">2 osoby</option>
            <option value="3">3 osoby</option>
            <option value="4">4 osoby</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość (opcjonalnie)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Wyślij rezerwację
        </button>
      </form>
    </div>
  );
};

export default Booking;

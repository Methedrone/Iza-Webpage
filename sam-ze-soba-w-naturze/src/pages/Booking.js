import React, { useState, useEffect } from 'react';
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
    message: '',
    cabinId: cabinId || ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Walidacja formularza
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format emaila';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    } else if (!/^\+?[\d\s-]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy format numeru telefonu';
    }

    if (!formData.checkIn) {
      newErrors.checkIn = 'Data przyjazdu jest wymagana';
    }

    if (!formData.checkOut) {
      newErrors.checkOut = 'Data wyjazdu jest wymagana';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Data wyjazdu musi być późniejsza niż data przyjazdu';
    }

    if (!formData.guests) {
      newErrors.guests = 'Liczba gości jest wymagana';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Czyścimy błąd dla danego pola po zmianie
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Symulacja wysyłania formularza
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Tutaj dodamy rzeczywistą logikę wysyłania formularza
      console.log('Dane formularza:', formData);
      
      setSubmitSuccess(true);
      
      // Reset formularza po 3 sekundach
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1',
          message: '',
          cabinId: cabinId || ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Zapobiegamy opuszczeniu strony z wypełnionym formularzem
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (Object.values(formData).some(value => value !== '')) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData]);

  return (
    <div className="booking">
      <h1>Rezerwacja domku</h1>
      
      {submitSuccess && (
        <div className="booking__success" role="alert">
          Dziękujemy za rezerwację! Skontaktujemy się z Tobą wkrótce.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="booking__form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <div id="name-error" className="form-error" role="alert">
              {errors.name}
            </div>
          )}
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
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <div id="email-error" className="form-error" role="alert">
              {errors.email}
            </div>
          )}
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
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <div id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </div>
          )}
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
            min={new Date().toISOString().split('T')[0]}
            aria-invalid={errors.checkIn ? 'true' : 'false'}
            aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
          />
          {errors.checkIn && (
            <div id="checkIn-error" className="form-error" role="alert">
              {errors.checkIn}
            </div>
          )}
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
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            aria-invalid={errors.checkOut ? 'true' : 'false'}
            aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
          />
          {errors.checkOut && (
            <div id="checkOut-error" className="form-error" role="alert">
              {errors.checkOut}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Liczba gości</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            aria-invalid={errors.guests ? 'true' : 'false'}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
          >
            <option value="1">1 osoba</option>
            <option value="2">2 osoby</option>
            <option value="3">3 osoby</option>
            <option value="4">4 osoby</option>
          </select>
          {errors.guests && (
            <div id="guests-error" className="form-error" role="alert">
              {errors.guests}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość (opcjonalnie)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            aria-describedby="message-help"
          />
          <div id="message-help" className="form-help">
            Możesz dodać dodatkowe informacje lub pytania
          </div>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Wysyłanie...' : 'Wyślij rezerwację'}
        </button>
      </form>
    </div>
  );
};

export default Booking;

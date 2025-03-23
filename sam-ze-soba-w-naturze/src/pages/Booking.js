import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faHome, faCreditCard, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useLanguage } from '../TranslationContext';

// Dane domków (te same co na stronie Cabins)
const cabins = [
  {
    id: 1,
    name: 'Domek Leśny',
    price: 250,
    capacity: '2 osoby',
    minStay: 2,
    image: 'https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=500',
    slug: 'domek-lesny'
  },
  {
    id: 2,
    name: 'Domek nad Stawem',
    price: 350,
    capacity: '4 osoby',
    minStay: 3,
    image: 'https://images.unsplash.com/photo-1568659585069-facb248756e9?q=80&w=500',
    slug: 'domek-nad-stawem'
  },
  {
    id: 3,
    name: 'Domek w Gaju',
    price: 300,
    capacity: '3 osoby',
    minStay: 2,
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=500',
    slug: 'domek-w-gaju'
  },
  {
    id: 4,
    name: 'Domek na Polanie',
    price: 280,
    capacity: '2 osoby',
    minStay: 2,
    image: 'https://images.unsplash.com/photo-1604184343882-eba3cb8bccc5?q=80&w=500',
    slug: 'domek-na-polanie'
  }
];

// Symulacja dat niedostępnych dla rezerwacji
const unavailableDates = {
  'domek-lesny': ['2023-06-15', '2023-06-16', '2023-06-17', '2023-07-01', '2023-07-02'],
  'domek-nad-stawem': ['2023-06-20', '2023-06-21', '2023-06-22', '2023-07-10', '2023-07-11'],
  'domek-w-gaju': ['2023-06-25', '2023-06-26', '2023-07-05', '2023-07-06'],
  'domek-na-polanie': ['2023-06-10', '2023-06-11', '2023-07-15', '2023-07-16']
};

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCabinSlug = searchParams.get('domek');
  const { translate } = useLanguage();
  
  // Stan formularza
  const [formData, setFormData] = useState({
    cabin: initialCabinSlug || '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    agreeToTerms: false
  });
  
  // Stan płynnego formularza
  const [currentStep, setCurrentStep] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);
  
  // Aktualizuj cenę całkowitą przy zmianie danych
  useEffect(() => {
    if (formData.cabin && formData.checkIn && formData.checkOut) {
      const selectedCabin = cabins.find(cabin => cabin.slug === formData.cabin);
      if (selectedCabin) {
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        setTotalPrice(selectedCabin.price * diffDays);
      }
    }
  }, [formData.cabin, formData.checkIn, formData.checkOut]);
  
  // Obsługa zmiany inputów
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Wyczyść błąd dla pola, jeśli został wprowadzony
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Obsługa zmiany domku
  const handleCabinChange = (slug) => {
    setFormData({
      ...formData,
      cabin: slug
    });
  };
  
  // Funkcja do sprawdzania dostępności dat
  const isDateUnavailable = (date) => {
    if (!formData.cabin) return false;
    
    const dateString = date.toISOString().split('T')[0];
    return unavailableDates[formData.cabin]?.includes(dateString);
  };
  
  // Obsługa przejścia do następnego kroku
  const nextStep = () => {
    const newErrors = {};
    
    // Walidacja dla kroku 1
    if (currentStep === 1) {
      if (!formData.cabin) newErrors.cabin = translate('chooseCabin');
      if (!formData.checkIn) newErrors.checkIn = translate('chooseArrivalDate');
      if (!formData.checkOut) newErrors.checkOut = translate('chooseDepartureDate');
      
      if (formData.checkIn && formData.checkOut) {
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        
        if (checkInDate >= checkOutDate) {
          newErrors.checkOut = translate('departureDateMustBeLater');
        }
        
        const selectedCabin = cabins.find(cabin => cabin.slug === formData.cabin);
        if (selectedCabin) {
          const diffTime = Math.abs(checkOutDate - checkInDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays < selectedCabin.minStay) {
            newErrors.checkOut = translate('minimumStay').replace('{days}', selectedCabin.minStay);
          }
        }
      }
    }
    
    // Walidacja dla kroku 2
    if (currentStep === 2) {
      if (!formData.firstName) newErrors.firstName = translate('enterFirstName');
      if (!formData.lastName) newErrors.lastName = translate('enterLastName');
      if (!formData.email) {
        newErrors.email = translate('enterEmail');
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = translate('enterValidEmail');
      }
      if (!formData.phone) newErrors.phone = translate('enterPhone');
    }
    
    // Walidacja dla kroku 3
    if (currentStep === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = translate('mustAcceptTerms');
    }
    
    // Jeśli są błędy, nie przechodzimy dalej
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Dla ostatniego kroku, symulujemy rezerwację
    if (currentStep === 3) {
      // Symulacja wysłania rezerwacji
      setTimeout(() => {
        const bookingId = Math.floor(100000 + Math.random() * 900000);
        setBooking({
          id: bookingId,
          ...formData,
          createdAt: new Date().toISOString()
        });
      }, 1500);
    }
    
    setCurrentStep(currentStep + 1);
  };
  
  // Obsługa powrotu do poprzedniego kroku
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  // Jeśli rezerwacja została złożona, pokaż potwierdzenie
  if (booking) {
    return (
      <div className="booking-confirmation fade-in">
        <div className="booking-confirmation__content slide-in-up">
          <div className="booking-confirmation__icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <h2>{translate('bookingAccepted')}</h2>
          <p>{translate('bookingConfirmationMessage')}</p>
          
          <div className="booking-confirmation__details">
            <h3>{translate('bookingDetails')}</h3>
            <p><strong>{translate('bookingNumber')}</strong> #{booking.id}</p>
            <p><strong>{translate('cabin')}</strong> {cabins.find(c => c.slug === booking.cabin)?.name}</p>
            <p><strong>{translate('arrivalDate')}</strong> {new Date(booking.checkIn).toLocaleDateString('pl-PL')}</p>
            <p><strong>{translate('departureDate')}</strong> {new Date(booking.checkOut).toLocaleDateString('pl-PL')}</p>
            <p><strong>{translate('totalAmount')}</strong> {totalPrice} zł</p>
          </div>
          
          <button 
            className="btn btn-primary hover-lift" 
            onClick={() => navigate('/')}
            aria-label={translate('backToHomepage')}
          >
            {translate('backToHomepage')}
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <SEO 
        title={translate('bookingPageTitle')}
        description={translate('bookingPageDescription')}
        keywords={translate('bookingPageKeywords')}
      />
      
      <div className="booking fade-in">
        <h1 className="slide-in-up">{translate('booking')}</h1>
        
        <div className="booking__progress">
          <div className={`booking__step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="booking__step-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <span>{translate('cabinSelection')}</span>
          </div>
          <div className={`booking__step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="booking__step-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <span>{translate('personalData')}</span>
          </div>
          <div className={`booking__step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="booking__step-icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <span>{translate('payment')}</span>
          </div>
          <div className={`booking__step ${currentStep >= 4 ? 'active' : ''}`}>
            <div className="booking__step-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <span>{translate('confirmation')}</span>
          </div>
        </div>
        
        <div className="booking__container">
          {/* Krok 1: Wybór domku i dat */}
          {currentStep === 1 && (
            <div className="booking__step-content slide-in-up">
              <h2>{translate('chooseCabinAndDate')}</h2>
              
              <div className="booking__cabins">
                {cabins.map(cabin => (
                  <div 
                    key={cabin.id} 
                    className={`booking__cabin ${formData.cabin === cabin.slug ? 'active' : ''}`}
                    onClick={() => handleCabinChange(cabin.slug)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCabinChange(cabin.slug);
                      }
                    }}
                    tabIndex="0"
                    role="button"
                    aria-label={`${translate('choose')} ${cabin.name}`}
                    aria-selected={formData.cabin === cabin.slug}
                  >
                    <img src={cabin.image} alt={cabin.name} />
                    <div className="booking__cabin-info">
                      <h3>{cabin.name}</h3>
                      <p>{cabin.capacity}</p>
                      <p className="booking__cabin-price">{cabin.price} zł / {translate('night')}</p>
                    </div>
                  </div>
                ))}
                {errors.cabin && <div className="booking__error" role="alert">{errors.cabin}</div>}
              </div>
              
              <div className="booking__dates">
                <div className="form-group">
                  <label htmlFor="checkIn">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {translate('checkIn')}
                  </label>
                  <input 
                    type="date" 
                    id="checkIn" 
                    name="checkIn" 
                    value={formData.checkIn} 
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.checkIn ? 'error' : ''}
                    aria-required="true"
                    aria-invalid={!!errors.checkIn}
                  />
                  {errors.checkIn && <div className="booking__error" role="alert">{errors.checkIn}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="checkOut">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {translate('checkOut')}
                  </label>
                  <input 
                    type="date" 
                    id="checkOut" 
                    name="checkOut" 
                    value={formData.checkOut} 
                    onChange={handleChange}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className={errors.checkOut ? 'error' : ''}
                    aria-required="true"
                    aria-invalid={!!errors.checkOut}
                  />
                  {errors.checkOut && <div className="booking__error" role="alert">{errors.checkOut}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="guests">
                    <FontAwesomeIcon icon={faUsers} /> {translate('numberOfGuests')}
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    aria-label={translate('numberOfGuests')}
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {totalPrice > 0 && (
                <div className="booking__summary">
                  <h3>{translate('summary')}</h3>
                  <p>
                    <strong>{translate('totalPrice')}</strong> {totalPrice} zł
                    <small> ({(formData.checkIn && formData.checkOut) ? Math.ceil(Math.abs(new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)) : 0} {translate('nights')})</small>
                  </p>
                </div>
              )}
              
              <div className="booking__actions">
                <button 
                  className="btn btn-primary hover-lift" 
                  onClick={nextStep}
                  aria-label={translate('next')}
                >
                  {translate('next')}
                </button>
              </div>
            </div>
          )}
          
          {/* Krok 2: Dane osobowe */}
          {currentStep === 2 && (
            <div className="booking__step-content slide-in-up">
              <h2>{translate('personalData')}</h2>
              
              <div className="booking__form">
                <div className="form-group">
                  <label htmlFor="firstName">{translate('firstName')}</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <div className="booking__error" role="alert">{errors.firstName}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">{translate('lastName')}</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <div className="booking__error" role="alert">{errors.lastName}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{translate('email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <div className="booking__error" role="alert">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">{translate('phone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <div className="booking__error" role="alert">{errors.phone}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="specialRequests">{translate('additionalNotes')}</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              
              <div className="booking__actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={prevStep}
                  aria-label={translate('back')}
                >
                  {translate('back')}
                </button>
                <button 
                  className="btn btn-primary hover-lift" 
                  onClick={nextStep}
                  aria-label={translate('next')}
                >
                  {translate('next')}
                </button>
              </div>
            </div>
          )}
          
          {/* Krok 3: Płatność i potwierdzenie */}
          {currentStep === 3 && (
            <div className="booking__step-content slide-in-up">
              <h2>{translate('summaryAndPayment')}</h2>
              
              <div className="booking__summary-details">
                <h3>{translate('yourBooking')}</h3>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('cabin')}</div>
                  <div className="booking__summary-value">{cabins.find(c => c.slug === formData.cabin)?.name}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('arrivalDate')}</div>
                  <div className="booking__summary-value">{new Date(formData.checkIn).toLocaleDateString('pl-PL')}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('departureDate')}</div>
                  <div className="booking__summary-value">{new Date(formData.checkOut).toLocaleDateString('pl-PL')}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('numberOfGuests')}</div>
                  <div className="booking__summary-value">{formData.guests}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('fullName')}</div>
                  <div className="booking__summary-value">{formData.firstName} {formData.lastName}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('email')}</div>
                  <div className="booking__summary-value">{formData.email}</div>
                </div>
                
                <div className="booking__summary-item">
                  <div className="booking__summary-label">{translate('phone')}</div>
                  <div className="booking__summary-value">{formData.phone}</div>
                </div>
                
                {formData.specialRequests && (
                  <div className="booking__summary-item">
                    <div className="booking__summary-label">{translate('additionalNotes')}</div>
                    <div className="booking__summary-value">{formData.specialRequests}</div>
                  </div>
                )}
                
                <div className="booking__summary-total">
                  <div className="booking__summary-label">{translate('totalAmount')}</div>
                  <div className="booking__summary-value">{totalPrice} zł</div>
                </div>
              </div>
              
              <div className="booking__payment">
                <h3>{translate('paymentMethod')}</h3>
                <p>{translate('paymentOnSite')}</p>
                
                <div className="booking__info-box">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <p>{translate('bookingConfirmationInfo')}</p>
                </div>
                
                <div className="form-group booking__terms">
                  <label>
                    <input 
                      type="checkbox" 
                      name="agreeToTerms" 
                      checked={formData.agreeToTerms} 
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.agreeToTerms}
                    />
                    {translate('iAcceptTerms')} <Link to="/regulamin">{translate('terms')}</Link> {translate('and')} <Link to="/polityka-prywatnosci">{translate('privacyPolicy')}</Link>
                  </label>
                  {errors.agreeToTerms && <div className="booking__error" role="alert">{errors.agreeToTerms}</div>}
                </div>
              </div>
              
              <div className="booking__actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={prevStep}
                  aria-label={translate('back')}
                >
                  {translate('back')}
                </button>
                <button 
                  className="btn btn-primary hover-lift pulse" 
                  onClick={nextStep}
                  aria-label={translate('confirmBooking')}
                >
                  {translate('confirmBooking')}
                </button>
              </div>
            </div>
          )}
          
          {/* Krok 4: Oczekiwanie na potwierdzenie */}
          {currentStep === 4 && (
            <div className="booking__step-content slide-in-up">
              <div className="booking__loading">
                <div className="loading-spinner" aria-hidden="true"></div>
                <h2>{translate('processingBooking')}</h2>
                <p>{translate('pleaseWait')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;

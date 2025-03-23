import React, { createContext, useState, useContext, useEffect } from 'react';

// Stałe dla dostępnych języków
export const LANGUAGES = {
  PL: 'pl',
  EN: 'en'
};

// Utworzenie kontekstu języka
const LanguageContext = createContext({
  language: LANGUAGES.PL,
  setLanguage: () => {},
  translate: () => {}
});

// Tłumaczenia
export const translations = {
  [LANGUAGES.PL]: {
    // Nagłówek
    home: 'Strona główna',
    about: 'O nas',
    cabins: 'Domki',
    booking: 'Rezerwacja',
    contact: 'Kontakt',
    mainNavigation: 'Główna nawigacja',
    languageSwitcher: 'Wybór języka',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    // Strona główna
    welcome: 'Witamy w Sam ze sobą w naturze',
    welcomeDescription: 'Odpocznij wśród natury',
    homePageTitle: 'Sam ze sobą w naturze - Wypoczynek w sercu natury',
    homePageDescription: 'Odkryj urokliwe domki w sercu natury, idealne miejsce na odpoczynek i relaks z dala od miejskiego zgiełku.',
    homePageKeywords: 'domki, wypoczynek, natura, las, odosobnienie, relaks',
    aboutUsTitle: 'Kilka słów o nas',
    aboutUsPreview: 'Jesteśmy rodzinnym biznesem z pasją do natury. Nasze domki oferują idealne miejsce do odpoczynku, refleksji i połączenia się z otaczającym światem przyrody.',
    learnMore: 'Dowiedz się więcej',
    aboutUsImageAlt: 'Piękny krajobraz lasu',
    featuredCabins: 'Polecane domki',
    cabin1Alt: 'Domek Leśny',
    cabin1Name: 'Domek Leśny',
    cabin1Description: 'Przytulny domek otoczony lasem, idealny dla par.',
    cabin2Alt: 'Domek nad Stawem',
    cabin2Name: 'Domek nad Stawem',
    cabin2Description: 'Przestronny domek z widokiem na staw, idealny dla rodzin.',
    viewDetails: 'Zobacz szczegóły',
    viewAllCabins: 'Zobacz wszystkie domki',
    bookingCTATitle: 'Zarezerwuj swój pobyt już dziś',
    bookingCTADescription: 'Sprawdź dostępność naszych domków i zarezerwuj swój wymarzony pobyt w sercu natury.',
    bookNow: 'Zarezerwuj teraz',
    discoverCabins: 'Odkryj nasze domki',
    // Footer
    footerTagline: 'Twój naturalny azyl wśród drzew',
    navigation: 'Nawigacja',
    legalInfo: 'Informacje prawne',
    privacyPolicy: 'Polityka prywatności',
    terms: 'Regulamin',
    cookiesPolicy: 'Polityka Cookies',
    address: 'Leśna 123, 00-000 Zielonka',
    allRightsReserved: 'Wszelkie prawa zastrzeżone.',
    // Rezerwacja
    bookingTitle: 'Zarezerwuj swój pobyt',
    checkIn: 'Data przyjazdu',
    checkOut: 'Data wyjazdu',
    guests: 'Liczba gości',
    submit: 'Zarezerwuj',
    // Domki
    cabinsTitle: 'Nasze domki',
    cabinDescription: 'Przytulne domki w sercu natury',
    choose: 'Wybierz',
    // Kontakt
    contactTitle: 'Skontaktuj się z nami',
    name: 'Imię i nazwisko',
    email: 'Email',
    message: 'Wiadomość',
    send: 'Wyślij',
    // Dodatkowe tłumaczenia dla Booking.js
    bookingPageTitle: 'Rezerwacja - Sam ze sobą w naturze',
    bookingPageDescription: 'Zarezerwuj swój wymarzony pobyt w jednym z naszych domków w sercu natury.',
    bookingPageKeywords: 'rezerwacja, domki, wypoczynek, natura, las',
    chooseCabin: 'Wybierz domek',
    chooseArrivalDate: 'Wybierz datę przyjazdu',
    chooseDepartureDate: 'Wybierz datę wyjazdu',
    departureDateMustBeLater: 'Data wyjazdu musi być późniejsza niż data przyjazdu',
    minimumStay: 'Minimalny pobyt to {days} noce',
    enterFirstName: 'Podaj imię',
    enterLastName: 'Podaj nazwisko',
    enterEmail: 'Podaj adres email',
    enterValidEmail: 'Podaj poprawny adres email',
    enterPhone: 'Podaj numer telefonu',
    mustAcceptTerms: 'Musisz zaakceptować regulamin',
    cabinSelection: 'Wybór domku',
    personalData: 'Dane osobowe',
    payment: 'Płatność',
    confirmation: 'Potwierdzenie',
    chooseCabinAndDate: 'Wybierz domek i termin',
    night: 'noc',
    nights: 'nocy',
    numberOfGuests: 'Liczba osób',
    summary: 'Podsumowanie',
    totalPrice: 'Łączna cena:',
    next: 'Dalej',
    back: 'Wstecz',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    phone: 'Telefon',
    additionalNotes: 'Dodatkowe uwagi (opcjonalnie)',
    summaryAndPayment: 'Podsumowanie i płatność',
    yourBooking: 'Twoja rezerwacja',
    cabin: 'Domek:',
    arrivalDate: 'Data przyjazdu:',
    departureDate: 'Data wyjazdu:',
    fullName: 'Imię i nazwisko:',
    paymentMethod: 'Metoda płatności',
    paymentOnSite: 'Na miejscu płatność gotówką lub kartą',
    bookingConfirmationInfo: 'Rezerwacja zostanie potwierdzona automatycznie. W ciągu 24 godzin skontaktujemy się z Tobą, aby potwierdzić szczegóły.',
    iAcceptTerms: 'Zapoznałem się i akceptuję',
    and: 'i',
    confirmBooking: 'Potwierdź rezerwację',
    processingBooking: 'Przetwarzanie rezerwacji...',
    pleaseWait: 'Proszę czekać, Twoja rezerwacja jest przetwarzana.',
    bookingAccepted: 'Rezerwacja przyjęta!',
    bookingConfirmationMessage: 'Dziękujemy za złożenie rezerwacji. Wkrótce otrzymasz e-mail z potwierdzeniem.',
    bookingDetails: 'Szczegóły rezerwacji:',
    bookingNumber: 'Numer rezerwacji:',
    totalAmount: 'Łączna kwota:',
    backToHomepage: 'Powrót do strony głównej'
  },
  [LANGUAGES.EN]: {
    // Header
    home: 'Home',
    about: 'About',
    cabins: 'Cabins',
    booking: 'Booking',
    contact: 'Contact',
    mainNavigation: 'Main navigation',
    languageSwitcher: 'Language selection',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    // Home page
    welcome: 'Welcome to Sam ze sobą w naturze',
    welcomeDescription: 'Relax in nature',
    homePageTitle: 'Sam ze sobą w naturze - Relaxation in the Heart of Nature',
    homePageDescription: 'Discover charming cabins in the heart of nature, the perfect place to rest and relax away from the city noise.',
    homePageKeywords: 'cabins, relaxation, nature, forest, seclusion, rest',
    aboutUsTitle: 'About Us',
    aboutUsPreview: 'We are a family business with a passion for nature. Our cabins offer the perfect place to rest, reflect, and connect with the natural world around you.',
    learnMore: 'Learn more',
    aboutUsImageAlt: 'Beautiful forest landscape',
    featuredCabins: 'Featured Cabins',
    cabin1Alt: 'Forest Cabin',
    cabin1Name: 'Forest Cabin',
    cabin1Description: 'Cozy cabin surrounded by forest, perfect for couples.',
    cabin2Alt: 'Pond Cabin',
    cabin2Name: 'Pond Cabin',
    cabin2Description: 'Spacious cabin with a view of the pond, ideal for families.',
    viewDetails: 'View details',
    viewAllCabins: 'View all cabins',
    bookingCTATitle: 'Book your stay today',
    bookingCTADescription: 'Check the availability of our cabins and book your dream stay in the heart of nature.',
    bookNow: 'Book now',
    discoverCabins: 'Discover our cabins',
    // Footer
    footerTagline: 'Your natural haven among the trees',
    navigation: 'Navigation',
    legalInfo: 'Legal information',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    cookiesPolicy: 'Cookies Policy',
    address: 'Forest Street 123, 00-000 Zielonka',
    allRightsReserved: 'All rights reserved.',
    // Booking
    bookingTitle: 'Book your stay',
    checkIn: 'Check-in date',
    checkOut: 'Check-out date',
    guests: 'Number of guests',
    submit: 'Book now',
    // Cabins
    cabinsTitle: 'Our cabins',
    cabinDescription: 'Cozy cabins in the heart of nature',
    choose: 'Select',
    // Contact
    contactTitle: 'Contact us',
    name: 'Full name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    // Additional translations for Booking.js
    bookingPageTitle: 'Booking - Sam ze sobą w naturze',
    bookingPageDescription: 'Book your dream stay in one of our cabins in the heart of nature.',
    bookingPageKeywords: 'booking, cabins, relaxation, nature, forest',
    chooseCabin: 'Choose a cabin',
    chooseArrivalDate: 'Choose arrival date',
    chooseDepartureDate: 'Choose departure date',
    departureDateMustBeLater: 'Departure date must be later than arrival date',
    minimumStay: 'Minimum stay is {days} nights',
    enterFirstName: 'Enter first name',
    enterLastName: 'Enter last name',
    enterEmail: 'Enter email address',
    enterValidEmail: 'Enter a valid email address',
    enterPhone: 'Enter phone number',
    mustAcceptTerms: 'You must accept the terms',
    cabinSelection: 'Cabin selection',
    personalData: 'Personal data',
    payment: 'Payment',
    confirmation: 'Confirmation',
    chooseCabinAndDate: 'Choose a cabin and dates',
    night: 'night',
    nights: 'nights',
    numberOfGuests: 'Number of guests',
    summary: 'Summary',
    totalPrice: 'Total price:',
    next: 'Next',
    back: 'Back',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    additionalNotes: 'Additional notes (optional)',
    summaryAndPayment: 'Summary and payment',
    yourBooking: 'Your booking',
    cabin: 'Cabin:',
    arrivalDate: 'Arrival date:',
    departureDate: 'Departure date:',
    fullName: 'Full name:',
    paymentMethod: 'Payment method',
    paymentOnSite: 'Pay on site by cash or card',
    bookingConfirmationInfo: 'Your booking will be confirmed automatically. We will contact you within 24 hours to confirm the details.',
    iAcceptTerms: 'I have read and accept the',
    and: 'and',
    confirmBooking: 'Confirm booking',
    processingBooking: 'Processing booking...',
    pleaseWait: 'Please wait, your booking is being processed.',
    bookingAccepted: 'Booking accepted!',
    bookingConfirmationMessage: 'Thank you for your booking. You will soon receive a confirmation email.',
    bookingDetails: 'Booking details:',
    bookingNumber: 'Booking number:',
    totalAmount: 'Total amount:',
    backToHomepage: 'Back to homepage'
  }
};

// Provider do zarządzania językiem
export const LanguageProvider = ({ children }) => {
  // Odczytujemy zapisany język z localStorage lub ustawiamy domyślny
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage && Object.values(LANGUAGES).includes(savedLanguage) 
      ? savedLanguage 
      : LANGUAGES.PL;
  });

  // Zapisujemy wybrany język w localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Funkcja zmiany języka
  const handleSetLanguage = (lang) => {
    if (Object.values(LANGUAGES).includes(lang)) {
      setLanguage(lang);
    }
  };

  // Funkcja tłumaczenia
  const translate = (key) => {
    if (!translations[language]) {
      console.error(`Translations for language "${language}" not found`);
      return key;
    }
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage, 
        translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook do używania kontekstu języka
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 
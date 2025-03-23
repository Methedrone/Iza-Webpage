import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageProvider';

// Komponenty
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cabins from './pages/Cabins';
import CabinDetails from './pages/CabinDetails';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Zoptymalizowane wczytywanie stylów
import './assets/styles/index.css'; // Główny plik stylów łączący wszystkie potrzebne style

// Komponent do przewijania na górę przy zmianie strony
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cabins" element={<Cabins />} />
                <Route path="/cabins/:id" element={<CabinDetails />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
};

export default App;

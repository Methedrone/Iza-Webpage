import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './context/ThemeContext';
import Layout from './components/layout/Layout';

// Lazy loading komponentów stron
const Home = lazy(() => import('./pages/Home'));
const Cabins = lazy(() => import('./pages/Cabins'));
const CabinDetails = lazy(() => import('./pages/CabinDetails'));
const Booking = lazy(() => import('./pages/Booking'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Komponent ładowania
const Loading = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/domki" element={<Cabins />} />
                <Route path="/domki/:id" element={<CabinDetails />} />
                <Route path="/rezerwacja" element={<Booking />} />
                <Route path="/o-nas" element={<About />} />
                <Route path="/kontakt" element={<Contact />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

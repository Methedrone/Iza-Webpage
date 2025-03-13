import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cabins from './pages/Cabins';
import CabinDetails from './pages/CabinDetails';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domki" element={<Cabins />} />
            <Route path="/domki/:id" element={<CabinDetails />} />
            <Route path="/rezerwacja" element={<Booking />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;

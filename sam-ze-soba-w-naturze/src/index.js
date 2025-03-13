import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
import './assets/styles/variables.css';
import './assets/styles/index.css';
import './assets/styles/header.css';
import './assets/styles/contact.css';
import './assets/styles/booking.css';
import './assets/styles/components.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import plTranslations from './locales/pl.json';
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        translation: plTranslations
      },
      en: {
        translation: enTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
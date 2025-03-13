import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import plTranslations from './translations/pl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        translation: plTranslations
      }
    },
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n; 
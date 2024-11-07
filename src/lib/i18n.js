import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enHeader from '../locales/en/header.json';
import ptHeader from '../locales/pt/header.json';
import enAbout from '../locales/en/about.json';
import ptAbout from '../locales/pt/about.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            header: enHeader, 
            about: enAbout,     
          },
          pt: {
            header: ptHeader,
            about: ptAbout,
          },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

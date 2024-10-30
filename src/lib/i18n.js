import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enHeader from '../locales/en/header.json';
import ptHeader from '../locales/pt/header.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enHeader,  
        },
        pt: {
            translation: ptHeader,
        },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

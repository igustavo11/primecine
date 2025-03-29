import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHeader from "../locales/en/header.json";
import ptHeader from "../locales/pt/header.json";
import enAbout from "../locales/en/about.json";
import ptAbout from "../locales/pt/about.json";
import enHome from "../locales/en/home.json";
import ptHome from "../locales/pt/home.json";
import enPortfolio from "../locales/en/portfolio.json";
import ptPortfolio from "../locales/pt/portfolio.json";

i18n
  // Usa o detector de idioma
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: enHeader,
        about: enAbout,
        home: enHome,
        portfolio: enPortfolio,
      },
      pt: {
        header: ptHeader,
        about: ptAbout,
        home: ptHome,
        portfolio: ptPortfolio,
      },
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      // Converte o idioma do navegador para o formato que a aplicação utiliza
      convertDetectedLanguage: (lng) => {
        if (lng.startsWith('pt')) {
          return 'pt';
        }
        return 'en';
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

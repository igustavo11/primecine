import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeader from "../locales/en/header.json";
import ptHeader from "../locales/pt/header.json";
import enAbout from "../locales/en/about.json";
import ptAbout from "../locales/pt/about.json";
import enHome from "../locales/en/home.json";
import ptHome from "../locales/pt/home.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: enHeader,
      about: enAbout,
      home: enHome,
    },
    pt: {
      header: ptHeader,
      about: ptAbout,
      home: ptHome,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

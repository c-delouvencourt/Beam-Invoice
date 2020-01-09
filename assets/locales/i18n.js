import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from "./fr.json";
import en from "./en.json";

const languageDefault = localStorage.getItem("language");

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: languageDefault == null ? "fr" : languageDefault,
    fallbackLng: 'fr',
    resources: {
      fr,
      en
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from "./fr.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'fr',
    fallbackLng: 'fr',
    resources: {
      fr,
      en
    },
  });

export default i18n;

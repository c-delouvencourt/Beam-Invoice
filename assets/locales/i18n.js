import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from "./fr.json";
import en from "./en.json";
import es from "./es.json";
import it from "./it.json";
import de from "./de.json";

const languageDefault = localStorage.getItem("language");

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: languageDefault == null ? "fr" : languageDefault,
    fallbackLng: 'fr',
    resources: {
      fr,
      en,
      es,
      it,
      de
    },
  });

export default i18n;

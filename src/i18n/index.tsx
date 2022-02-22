import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { kr, zh } from "./locales";

const resources = {
  kr: {
    translation: kr,
  },
  en: {
    translation: zh,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["kr", "zh"],
    interpolation: { escapeValue: false },
  });

export default i18n;

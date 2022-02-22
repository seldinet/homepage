import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import { kr, zh } from "./locales";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { kr, en: zh },
    fallbackLng: ["kr", "en"],
    interpolation: { escapeValue: false },
  });

export default i18n;

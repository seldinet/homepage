/* eslint-disable */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { kr, zh } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { kr, zh },
    lng: "kr",
    fallbackLng: ["kr", "zh"],
    interpolation: { escapeValue: false },
    detection: { order: ["path", "navigator"] },
  });

export default i18n;

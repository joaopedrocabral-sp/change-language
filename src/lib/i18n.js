import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


import ptBR from "../locale/ptBR.json";
import enUS from '../locale/enUS.json';

const resources = {
    "pt-BR": ptBR,
    "en-US": enUS
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: "en-US",
    // supportedLngs: ["en-US", "pt-BR"],
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;
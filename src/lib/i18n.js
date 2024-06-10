import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "../locale/ptBR.json";
import enUS from '../locale/enUS.json';

const resources = {
    "pt-BR": ptBR,
    "en-US": enUS
}

i18n
    .use(initReactI18next)
    .init({
    resources,
    lng: navigator.language,
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;
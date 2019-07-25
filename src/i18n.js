import i18n from "i18next"
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: {
            "welcome": "welcome to React"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        keySeparator: false,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })
export default i18n;
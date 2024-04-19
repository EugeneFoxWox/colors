import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18next 
  .use(initReactI18next) // передаем экземпляр i18n в react-i18next, который сделает его доступным для всех компонентов через context API.
  .use(LanguageDetector) 
  .init({
    //resources, // передаем переводы текстов интерфейса в формате JSON
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18next;
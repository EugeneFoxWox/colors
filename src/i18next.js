import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'


i18next
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    fallbackLng: 'ru',  
    resources: { 
      ru: {
        translation: ru
      },
      en: {
        translation: en
      }
      }
    }

  );


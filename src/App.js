import "./App.css";
import "./styles/mixins/global.scss";
import Routes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frTranslation from './locales/fr.json';
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';


function App() {
  i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  return (
    <>
      <Routes />
    </>
  );
}

export default App;

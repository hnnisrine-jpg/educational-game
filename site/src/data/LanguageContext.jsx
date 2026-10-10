import { createContext, useContext, useState, useEffect } from 'react';
import translations from './i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('houmetna-lang') || 'fr';
    } catch {
      return 'fr';
    }
  });

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    try {
      localStorage.setItem('houmetna-lang', lang);
    } catch {}
  }, [lang, t]);

  const toggleLang = () => setLang(l => (l === 'fr' ? 'ar' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

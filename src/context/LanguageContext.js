"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(undefined);

export const LANGUAGES = {
  en: { name: "English", flag: "🇺🇸", code: "en" },
  nl: { name: "Dutch", flag: "🇳🇱", code: "nl" },
  fr: { name: "French", flag: "🇫🇷", code: "fr" },
  de: { name: "German", flag: "🇩🇪", code: "de" },
  it: { name: "Italian", flag: "🇮🇹", code: "it" },
  ru: { name: "Russian", flag: "🇷🇺", code: "ru" },
  pt: { name: "Portuguese", flag: "🇵🇹", code: "pt" },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language") || "en";
      setLanguage(saved);
    } catch (error) {
      console.error("Language initialization error:", error);
    }
    setMounted(true);
  }, []);

  const setLanguageValue = (lang) => {
    try {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
    } catch (error) {
      console.error("Language set error:", error);
    }
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageValue }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
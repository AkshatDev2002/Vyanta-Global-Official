"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentLanguage = LANGUAGES[language];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerButton}
        aria-label="Change language"
        title={`Current language: ${currentLanguage.name}`}
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.code}>{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {Object.entries(LANGUAGES).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`${styles.menuItem} ${language === code ? styles.active : ""}`}
              aria-current={language === code ? "true" : "false"}
            >
              <span className={styles.menuFlag}>{lang.flag}</span>
              <span className={styles.menuName}>{lang.name}</span>
              {language === code && <span className={styles.checkmark}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import styles from "./Hero.module.css";
import Marquee from "@/components/Hero/Marquee/Marquee";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language]?.hero || translations.en.hero;
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % t.words.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [t.words.length]);

  const wordVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className={styles.heroContainer}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.badgeText}>{t.badge}</span>
          <motion.span
            className={styles.animatedWordBadge}
            key={`word-${currentWordIndex}`}
            variants={wordVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            {t.words[currentWordIndex]}
          </motion.span>
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.heading}
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.subheading}
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t.description}
        </motion.p>

        <motion.button
  className={styles.button}
  onClick={() => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  }}
>
          {t.button}
        </motion.button>
      </motion.div>

      <motion.div className={styles.wordCycleContainer}>
        {t.words.map((word, index) => (
          <motion.div
            key={word}
            className={styles.cycleWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 1.2 + 0.8,
            }}
          />
        ))}
      </motion.div>
      <Marquee />
    </div>
  );
}
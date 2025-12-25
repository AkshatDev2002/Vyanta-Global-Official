"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { bigDataTranslations } from "@/lib/BigDataTranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  Database,
  Cloud,
  ShieldCheck,
  Activity,
  Layers,
  Brain,
} from "lucide-react";
import styles from "./BigData.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BigDataPage() {
  const { language } = useLanguage();
  const t = bigDataTranslations[language] || bigDataTranslations.en;

  const challengeIcons = [
    <Database size={26} />,
    <Cloud size={26} />,
    <ShieldCheck size={26} />,
    <Layers size={26} />,
    <Activity size={26} />,
    <Brain size={26} />,
  ];

  const capabilityIcons = [
    <Cloud size={26} />,
    <Layers size={26} />,
    <Activity size={26} />,
    <ShieldCheck size={26} />,
    <Database size={26} />,
    <Brain size={26} />,
  ];

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.hero.title}</h1>
          <p className={styles.heroSubtitle}>
            {t.hero.subtitle.split("\n\n").map((p, i) => (
              <span key={i}>
                {p}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/services/b1.jpg"
            alt="Big Data Architecture"
            loading="lazy"
          />
        </div>
      </section>

      {/* CHALLENGES */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.challenges}</h2>
        <div className={styles.cardGrid}>
          {t.challenges.map((item, i) => (
            <div key={i} className={styles.infoCard}>
              <div className={styles.cardIcon}>{challengeIcons[i]}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CAPABILITIES */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.capabilities}</h2>
        <div className={styles.cardGrid}>
          {t.capabilities.map((cap, i) => (
            <div key={i} className={styles.capabilityCard}>
              <div className={styles.cardIcon}>{capabilityIcons[i]}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* USE CASES */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.useCases}</h2>
        <div className={styles.cardGrid}>
          {t.useCases.map((useCase, i) => (
            <div key={i} className={styles.useCaseCard}>
              {useCase}
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <CtaContact
  bannerText="Ready to Build a Scalable, High-Performance Big Data Strategy?"
  submitText="Talk to our expert team"
/>

    </motion.div>
  );
}

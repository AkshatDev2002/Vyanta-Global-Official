"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import CtaContact from "@/components/ui/CtaContact";

import { healthcareTranslations } from "@/lib/HealthcareTranslation";
import styles from "./Healthcare.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Healthcare() {
  const { language } = useLanguage();
  const t = healthcareTranslations[language] || healthcareTranslations.en;

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.overview.title}</h2>
        <p className={styles.subtitle}>{t.overview.description}</p>

        <div className={styles.bentoGrid}>
          {t.overview.cards.map((item, i) => (
            <CardContainer key={i} className={styles.cardContainer}>
              <CardBody className={styles.cardBody}>
                <CardItem translateZ={40}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </CardItem>
                <CardItem translateZ={30}>
                  <p className={styles.cardText}>{item.text}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* ================= INTEGRATION ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.integration.title}</h2>
            <ul className={styles.list}>
              {t.integration.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/industry/h1.jpg"
              alt="Healthcare Data Integration"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= AI & ML ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.ai.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.ai.items.map((item, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/industry/h2.jpg"
              alt="Healthcare AI & Analytics"
              width={480}
              height={380}
            />
          </div>
        </div>
      </section>

      {/* ================= GOVERNANCE ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.governance.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.governance.items.map((item, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/industry/h3.jpg"
              alt="Healthcare Compliance"
              width={460}
              height={360}
            />
          </div>
        </div>
      </section>

      {/* ================= WHY VYANTA ================= */}
      <section className={styles.centerSection}>
        <h2 className={styles.centerTitle}>{t.why.title}</h2>
        <p className={styles.centerText}>{t.why.text}</p>
      </section>

      {/* ================= CTA (NOT TRANSLATED) ================= */}
      <CtaContact
        bannerText="Building a smarter, safer, and more connected healthcare ecosystem with trusted data and intelligent analytics."
        submitText="Get In Touch"
      />
    </motion.div>
  );
}

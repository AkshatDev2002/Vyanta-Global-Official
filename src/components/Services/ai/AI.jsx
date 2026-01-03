"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { aiTranslations } from "@/lib/AITranslation";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import CtaContact from "@/components/ui/CtaContact";

import styles from "./AI.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AI() {
  const { language } = useLanguage();
  const t = aiTranslations[language] || aiTranslations.en;

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
        <p className={styles.subtitle}>{t.overview.subtitle}</p>

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

      {/* ================= SECURE AI ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.secureAI.title}</h2>
            <ul className={styles.list}>
              {t.secureAI.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/ai1.jpg"
              alt="Secure AI Enablement"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= DATA SECURITY ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.dataSecurity.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.dataSecurity.points.map((p, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/ai2.jpg"
              alt="Enterprise Data Security"
              width={480}
              height={380}
            />
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.compliance.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.compliance.points.map((p, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/ai3.jpg"
              alt="AI Compliance & Privacy"
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
        bannerText="Secure your AI initiatives with trusted, governed, and enterprise-grade data foundations."
        submitText="Talk to our expert team"
      />
    </motion.div>
  );
}

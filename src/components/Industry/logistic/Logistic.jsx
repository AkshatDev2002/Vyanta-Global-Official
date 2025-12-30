"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import CtaContact from "@/components/ui/CtaContact";

import { logisticTranslations } from "@/lib/LogisticTranslation";
import styles from "./Logistic.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Logistic() {
  const { language } = useLanguage();
  const t = logisticTranslations[language] || logisticTranslations.en;

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

      {/* ================= AUTOMATION ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.automation.title}</h2>
            <ul className={styles.list}>
              {t.automation.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/industry/l1.jpg"
              alt="Logistics Automation & AI"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= SUSTAINABILITY ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.sustainability.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.sustainability.benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/industry/l2.jpg"
              alt="Sustainable Logistics"
              width={480}
              height={380}
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
        bannerText="Build a smart, automated, and scalable logistics ecosystem with Vyanta Global."
        submitText="Get In Touch"
      />
    </motion.div>
  );
}

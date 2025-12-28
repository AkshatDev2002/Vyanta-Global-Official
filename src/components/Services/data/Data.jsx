"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";

import styles from "./Data.module.css";
import businessAnimation from "@/assets/business.json";
import CtaContact from "@/components/ui/CtaContact";

import { useLanguage } from "@/context/LanguageContext";
import { dataTranslations } from "@/lib/DataTranslation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Data() {
  const { language } = useLanguage();
  const t = dataTranslations[language] || dataTranslations.en;

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

      {/* ================= WHAT WE OFFER ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.offer.title}</h2>

        <div className={styles.bentoGrid}>
          {t.offer.items.map((item, i) => (
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

      {/* ================= ADVANTAGE ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.advantage.title}</h2>
            <ul className={styles.list}>
              {t.advantage.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/d1.jpg"
              alt="Enterprise Data Architecture"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS ================= */}
      <section className={styles.section}>
        <div className={styles.benefitsLayout}>
          <div>
            <h2 className={styles.sectionTitle}>{t.benefits.title}</h2>

            <div className={styles.benefitsGrid}>
              {t.benefits.items.map((benefit, i) => (
                <div key={i} className={styles.benefitItem}>
                  <span className={styles.index}>{i + 1}</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.benefitsLottie} aria-hidden>
            <Lottie animationData={businessAnimation} loop autoplay />
          </div>
        </div>
      </section>

      {/* ================= GOVERNANCE ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGridReverse}>
          <div className={styles.altImage}>
            <Image
              src="/services/d2.jpg"
              alt="Data Governance & Security"
              width={520}
              height={420}
            />
          </div>

          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.governance.title}</h2>
            <ul className={styles.list}>
              {t.governance.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaContact
        bannerText="Let’s Design the Right Data Engineering Strategy for Your Business!"
        submitText="Talk to our expert team"
      />
    </motion.div>
  );
}

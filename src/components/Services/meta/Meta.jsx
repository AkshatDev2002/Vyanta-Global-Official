"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { metaTranslations } from "@/lib/MetaTranslation";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";

import styles from "./Meta.module.css";
import CtaContact from "@/components/ui/CtaContact";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Meta() {
  const { language } = useLanguage();
  const t = metaTranslations[language] || metaTranslations.en;

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
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
        </div>
      </section>

      {/* FROM CHAOS TO CLARITY */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.clarity.title}</h2>
            <p>{t.clarity.p1}</p>
            <p>{t.clarity.p2}</p>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/m1.png"
              alt="Metadata Management Architecture"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.capabilities.title}</h2>

        <div className={styles.bentoGrid}>
          {t.capabilities.items.map((item, i) => (
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

      {/* FEATURES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.features.title}</h2>
        <ul className={styles.list}>
          {t.features.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BUSINESS IMPACT */}
      <section className={styles.altSection}>
        <h2 className={styles.sectionTitle}>{t.impact.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.impact.items.map((item, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/m2.png"
              alt="Metadata Business Impact"
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.delivery.title}</h2>
        <p className={styles.paragraph}>{t.delivery.p1}</p>
        <p className={styles.paragraph}>{t.delivery.p2}</p>
      </section>

      {/* CTA */}
      <CtaContact
        bannerText="Ready to make metadata your competitive advantage?"
        submitText="Talk to our expert team"
      />
    </motion.div>
  );
}

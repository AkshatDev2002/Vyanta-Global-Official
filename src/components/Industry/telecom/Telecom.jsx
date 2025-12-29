"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import CtaContact from "@/components/ui/CtaContact";

import { telecomTranslations } from "@/lib/TelecomTranslation";
import styles from "./Telecom.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Telecom() {
  const { language } = useLanguage();
  const t = telecomTranslations[language] || telecomTranslations.en;

  return (
    <motion.div className={styles.container} initial="hidden" animate="visible" variants={fadeUp}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.challenges.title}</h2>
        <p className={styles.subtitle}>{t.challenges.description}</p>

        <div className={styles.bentoGrid}>
          {t.challenges.items.map((item, i) => (
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

      {/* SERVICES */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.services.title}</h2>
            <ul className={styles.list}>
              {t.services.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image src="/industry/t1.jpg" alt="Telecom Data Architecture" width={520} height={420} />
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.transformation.title}</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {t.transformation.benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image src="/industry/t2.jpg" alt="Telecom Digital Transformation" width={480} height={380} />
          </div>
        </div>
      </section>

      {/* WHY VYANTA */}
      <section className={styles.centerSection}>
        <div className={styles.centerContent}>
          <h2 className={styles.centerTitle}>{t.why.title}</h2>
          <p className={styles.centerText}>{t.why.text}</p>
        </div>
      </section>

      {/* CTA – NOT TRANSLATED */}
      <CtaContact
        bannerText="Empowering telecom enterprises with intelligent, data-driven transformation for the future!"
        submitText="Get In Touch"
      />
    </motion.div>
  );
}

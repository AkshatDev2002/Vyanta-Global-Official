"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { customTranslations } from "@/lib/CustomTranslation";
import CtaContact from "@/components/ui/CtaContact";
import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";

import styles from "./Custom.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Custom() {
  const { language } = useLanguage();
  const t = customTranslations[language] || customTranslations.en;

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

      {/* ================= WHAT WE DELIVER ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.delivery.title}</h2>

        <div className={styles.bentoGrid}>
          {t.delivery.items.map((item, i) => (
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

      {/* ================= DELIVERY MODEL ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.lifecycle.title}</h2>
            <ul className={styles.list}>
              {t.lifecycle.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image src="/services/a1.jpg" alt="" width={520} height={420} />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className={styles.section}>
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
            <Image src="/services/a2.png" alt="" width={480} height={380} />
          </div>
        </div>
      </section>

      {/* ================= EXPERT COVERAGE ================= */}
      <section className={styles.centerSection}>
        <div className={styles.centerContent}>
          <h2 className={styles.centerTitle}>{t.coverage.title}</h2>

          <div className={styles.centerImage}>
            <Image src="/services/a3.png" alt="" width={420} height={320} />
          </div>

          <p className={styles.centerText}>{t.coverage.text}</p>
        </div>
      </section>
      <CtaContact
              bannerText="Partner with Vyanta to turn your application vision into cutting-edge, scalable software."
              submitText="Talk to our expert team"
            />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { industryTranslations } from "@/lib/Industry4";
import CtaContact from "@/components/ui/CtaContact";
import styles from "./Industry.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Industry() {
  const { language } = useLanguage();
  const t = industryTranslations[language] || industryTranslations.en;

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

      {/* ================= BENTO GRID ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.capabilities.title}</h2>

        <div className={styles.bentoGrid}>
          {t.capabilities.items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.cardBody}
              whileHover={{ y: -6 }}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ALTERNATING SECTION ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>{t.smartFactory.title}</h2>
            <p className={styles.subtitle}>{t.smartFactory.subtitle}</p>

            <ul className={styles.list}>
              {t.smartFactory.points.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.altImage}>
            <img src="/services/i1.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={styles.section}>
        <div className={styles.benefitsLayout}>
          <div>
            <h2 className={styles.sectionTitle}>{t.benefits.title}</h2>
            <p className={styles.subtitle}>{t.benefits.subtitle}</p>
          </div>

          <div className={styles.benefitsGrid}>
            {t.benefits.items.map((text, i) => (
              <div key={i} className={styles.benefitItem}>
                <div className={styles.index}>{i + 1}</div>
                <p className={styles.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CENTERED STATEMENT ================= */}
      <section className={styles.centerSection}>
        <div className={styles.centerContent}>
          <h2 className={styles.centerTitle}>{t.future.title}</h2>

          <div className={styles.centerImage}>
            <Image
              src="/services/i2.jpg"
              alt=""
              width={420}
              height={320}
              priority
            />
          </div>

          <p className={styles.centerText}>{t.future.text}</p>
        </div>
      </section>
      <CtaContact
                    bannerText="Accelerate Industry 4.0 with Vyanta—build intelligent and resilient manufacturing operations.
"
                    submitText="Talk to our expert team"
                  />
    </motion.div>
  );
}

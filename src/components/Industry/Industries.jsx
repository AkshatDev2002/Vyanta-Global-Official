"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Industries.module.css";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";

import { useLanguage } from "@/context/LanguageContext";
import { industryTranslations } from "@/lib/IndustryTranslation";

const industriesMeta = [
  {
    key: "telecom",
    title: "Telecom",
    image: "/industry/i1.jpg",
    href: "/industries/telecom",
  },
  {
    key: "bfsi",
    title: "BFSI",
    image: "/industry/i2.jpg",
    href: "/industries/bfsi",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    image: "/industry/i3.jpg",
    href: "/industries/health",
  },
  {
    key: "logistics",
    title: "Logistics & Automation",
    image: "/industry/i4.jpg",
    href: "/industries/logistics",
  },
];

export default function Industries() {
  const { language } = useLanguage();
  const t =
    industryTranslations[language] || industryTranslations.en;

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </motion.div>

      <div className={styles.grid}>
        {industriesMeta.map((industry) => (
          <div key={industry.key} className={styles.perspective}>
            <CardContainer className={styles.container}>
              <CardBody className={styles.cardBody}>
                <CardItem translateZ={60} className={styles.imageWrapper}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className={styles.image}
                  />
                </CardItem>

                <CardItem translateZ={40}>
                  <h3 className={styles.cardTitle}>
                    {industry.title}
                  </h3>
                </CardItem>

                <CardItem translateZ={30}>
                  <p className={styles.cardDescription}>
                    {t.industries[industry.key]}
                  </p>
                </CardItem>

                <CardItem translateZ={20} className={styles.ctaWrapper}>
                  <Link href={industry.href} className={styles.readMore}>
                    {t.readMore}
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

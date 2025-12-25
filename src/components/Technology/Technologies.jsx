"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Technologies.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { technologiesTranslations } from "@/lib/TechnologiesTranslation";

import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";

const techImages = {
  "ab-initio": "/abintio.png",
  "dbt-labs": "/dbt.png",
  aws: "/aws.png",
  snowflake: "/snowflake.png",
  databricks: "/databricks.png",
  gcp: "/gcp.png",
};

export default function Technologies() {
  const { language } = useLanguage();
  const t =
    technologiesTranslations[language] ||
    technologiesTranslations.en;

  return (
    <section id="technologies" className={styles.technologiesSection}>
      <div className={styles.container}>
        {/* SECTION TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          {t.title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={styles.description}
        >
          {t.description.p1}
          <br /><br />
          {t.description.p2}
          <br /><br />
          {t.description.p3}
        </motion.p>

        {/* 3D TECHNOLOGY CARDS */}
        <div className={styles.grid}>
          {t.techs.map((tech, index) => (
            <div key={tech.id} className={styles.perspective}>
              <CardContainer className={styles.cardContainer}>
                <CardBody className={styles.cardBody}>
                  {/* IMAGE */}
                  <CardItem translateZ={60} className={styles.imageWrapper}>
                    <Image
                      src={techImages[tech.id]}
                      alt={tech.id}
                      fill
                      className={styles.image}
                    />
                  </CardItem>

                  {/* DESCRIPTION */}
                  <CardItem translateZ={30}>
                    <p className={styles.cardDescription}>
                      {tech.desc}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

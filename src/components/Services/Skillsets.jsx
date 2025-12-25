"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { skillsetTranslations } from "@/lib/SkillsetTranslation";
import styles from "./Skillsets.module.css";
import bigData from "@/assets/big.json";
import customIntegration from "@/assets/custom.json";
import dataInt from "@/assets/data.json";
import govCompliance from "@/assets/gov.json";
import industry4 from "@/assets/ind4.json";
import metadata from "@/assets/meta.json";

const animationMap = {
  "Big Data Solutions": bigData,
  "Data Integration Services": dataInt,
  "Data Governance & Compliance": govCompliance,
  "Metadata Management": metadata,
  "Custom Data Solutions": customIntegration,
  "Industry 4.0 Solutions": industry4,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skillsets() {
  const { language } = useLanguage();
  const t = skillsetTranslations[language] || skillsetTranslations.en;

  // Create skillsets data with animations
  const skillsetsData = t.skillsets.map((skill, index) => ({
    id: index + 1,
    title: skill.title,
    description: skill.description,
    animation: animationMap[skill.title] || bigData,
    imagePosition: index % 2 === 0 ? "right" : "left",
  }));

  return (
    <motion.div
      className={styles.skillsetsContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Section Header with Image */}
      <motion.div className={styles.header} variants={itemVariants}>
        <div className={`${styles.headerContent} ${styles.headerReverseLayout}`}>
          {/* Text Content */}
          <div className={styles.headerTextContent}>
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              {t.skillsetsTitle}
            </motion.h2>
            <motion.p
              className={styles.headerDescription}
              variants={itemVariants}
            >
              {t.headerDescription}
            </motion.p>
            <motion.ul
              className={styles.capabilitiesList}
              variants={itemVariants}
            >
              {t.capabilities.map((capability, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {capability}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              className={styles.headerFooter}
              variants={itemVariants}
            >
              {t.headerFooter}
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            className={styles.headerImageWrapper}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.headerImageContainer}>
              <Image
                src="/services/skill.jpg"
                alt="Vyanta Global Skillsets"
                fill
                className={styles.headerImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skillsets Grid */}
      <div className={styles.skillsetsGrid}>
        {skillsetsData.map((skill) => (
          <motion.div
            key={skill.id}
            className={styles.skillsetCard}
            variants={itemVariants}
          >
            <div
              className={`${styles.cardContent} ${
                skill.imagePosition === "right"
                  ? styles.reverseLayout
                  : styles.normalLayout
              }`}
            >
              {/* Lottie Animation */}
              <motion.div
                className={styles.animationWrapper}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.lottieContainer}>
                  <Lottie
                    animationData={skill.animation}
                    loop={true}
                    autoplay={true}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className={styles.textContent}>
                <motion.h3 className={styles.skillTitle} variants={itemVariants}>
                  {skill.title}
                </motion.h3>
                <motion.p
                  className={styles.skillDescription}
                  variants={itemVariants}
                >
                  {skill.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
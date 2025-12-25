"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/lib/ServicesTranslation";
import Technologies from "@/components/Technology/Technologies";
import styles from "./Services.module.css";

const ServicesCarousel = dynamic(() => import("./ServicesCarousel"), {
  ssr: false,
});

const Skillsets = dynamic(() => import("./Skillsets"), {
  ssr: false,
});

export default function Services() {
  const { language } = useLanguage();

  
  const t =
    servicesTranslations[language] ||
    servicesTranslations.en;

  return (
    <div className={styles.servicesContainer}>
      {/* Header Section */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.title}
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.description}
        </motion.p>
      </motion.div>

      {/* Cards Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <ServicesCarousel services={t.carousel} language={language} />
      </motion.div>

      {/* Skillsets Section */}
      <Skillsets />
      <Technologies />
    </div>
  );
}

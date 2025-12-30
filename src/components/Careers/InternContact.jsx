"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaBriefcase, FaAward } from "react-icons/fa";
import styles from "./InternContact.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 } 
  },
};

export default function InternContact() {
  const highlights = [
    {
      icon: <FaStar />,
      text: "Industry Certifications",
    },
    {
      icon: <FaBriefcase />,
      text: "5+ Real Projects",
    },
    {
      icon: <FaAward />,
      text: "Lifetime Career Support",
    },
  ];

  return (
    <section className={styles.section}>
      {/* Premium Banner */}
      <motion.div
        className={styles.banner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.bannerContent}>
          {/* Main Heading */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 className={styles.bannerTitle} variants={itemVariants}>
              Launch Your Career in Data Engineering
            </motion.h1>

            <motion.p className={styles.bannerSubtitle} variants={itemVariants}>
              Join Vyanta's Elite Internship Program
            </motion.p>

            {/* Highlight Cards Grid */}
            <motion.div 
              className={styles.highlightGrid} 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.highlightCard}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className={styles.highlightIcon}>{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p className={styles.bannerDescription} variants={itemVariants}>
              Gain industry certifications, work on 5+ real-world projects with industry leaders, 
              and receive lifetime career support to accelerate your professional journey.
            </motion.p>

            {/* CTA Subtext */}
            <motion.div className={styles.ctaContainer} variants={itemVariants}>
              <p className={styles.ctaSubtext}>
                Limited spots available • Applications open year-round
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.bannerDecoration}>
          <div className={styles.decorBlob1}></div>
          <div className={styles.decorBlob2}></div>
        </div>
      </motion.div>

      {/* Google Form Embed */}
      <motion.div
        className={styles.formEmbed}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdcYBBRvOoPx1JwLzLAfm0EC8vRtgOvgKg5qIr9GmU8wgoDDA/viewform?embedded=true"
          title="Vyanta Internship Application Form"
          loading="lazy"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className={styles.iframe}
          allowFullScreen
          aria-label="Application form"
        >
          Loading…
        </iframe>
      </motion.div>
    </section>
  );
}
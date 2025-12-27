"use client";

import { motion } from "framer-motion";
import styles from "./Industry.module.css";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Industry() {
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
          <h1 className={styles.title}>
            Vyanta's Industry 4.0 Solutions & Smart Manufacturing
          </h1>
          <p className={styles.subtitle}>
            Our Industry 4.0 services help enterprises accelerate
            digital transformation by integrating Industrial IoT (IIoT), AI/ML,
            advanced analytics, automation, and digital twins into resilient,
            data-driven manufacturing operations.
          </p>
        </div>
      </section>

      {/* ================= BENTO GRID ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Industry 4.0 Capabilities</h2>

        <div className={styles.bentoGrid}>
          {[
            {
              title: "Industrial IoT (IIoT) Connectivity",
              text:
                "Enable real-time machine-to-machine communication and sensor-driven telemetry across manufacturing and industrial assets.",
            },
            {
              title: "AI & Advanced Analytics",
              text:
                "Apply AI-driven analytics for predictive maintenance, anomaly detection, process optimization, and quality control.",
            },
            {
              title: "Cloud & Edge Integration",
              text:
                "Deploy secure cloud-native architectures integrated with edge computing for scalable processing and low-latency analytics.",
            },
            {
              title: "Robotics & Intelligent Automation",
              text:
                "Implement advanced automation and robotics to improve throughput, reduce manual intervention, and enhance consistency.",
            },
            {
              title: "Digital Twins & Simulation",
              text:
                "Create digital twins of assets and production lines for simulation, performance tuning, and what-if analysis.",
            },
            {
              title: "Supply Chain & Operations Visibility",
              text:
                "Integrate production and supply-chain data for demand forecasting, resource optimization, and end-to-end visibility.",
            },
          ].map((item, i) => (
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
            <h2 className={styles.sectionTitle}>
              Building Smart Factories for the Digital Era
            </h2>
            <p className={styles.subtitle}>
              Vyanta Global delivers Industry 4.0 implementations with a
              data-first approach, combining edge intelligence, secure cloud
              analytics, and automation to enable predictive, adaptive, and
              autonomous operations.
            </p>

            <ul className={styles.list}>
              <li>Reduced downtime through predictive workflows</li>
              <li>Increased throughput with intelligent automation</li>
              <li>Unified visibility across production environments</li>
            </ul>
          </div>

          <div className={styles.altImage}>
            <img
              src="/services/i1.jpg"
              alt="Smart Factory Industry 4.0"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={styles.section}>
        <div className={styles.benefitsLayout}>
          <div>
            <h2 className={styles.sectionTitle}>
              Business Benefits of Industry 4.0
            </h2>

            <p className={styles.subtitle}>
              Our Industry 4.0 solutions deliver faster ROI, reduced operational
              risk, and continuous improvement through intelligent,
              data-driven manufacturing.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {[
              "Improved production efficiency and throughput through smart automation",
              "Reduced unplanned downtime using predictive maintenance",
              "Higher product quality via continuous monitoring",
              "Greater agility to adapt to changing market demand",
              "Sustainable manufacturing powered by analytics and optimization",
            ].map((text, i) => (
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
          <h2 className={styles.centerTitle}>
            Future-Ready Industrial Operations
          </h2>

          <div className={styles.centerImage}>
      <Image
        src="/services/i2.jpg"
        alt="Industry 4.0"
        width={420}
        height={320}
        priority
      />
    </div>

          <p className={styles.centerText}>
            Vyanta Global helps organizations move beyond automation—toward
            intelligent, connected, and future-ready industrial operations
            powered by Industry 4.0.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

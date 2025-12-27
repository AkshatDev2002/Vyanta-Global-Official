"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            Vyanta's Custom Application Development Services
          </h1>
          <p className={styles.subtitle}>
            Transform your digital vision into scalable, secure, and
            high-performance applications. Vyanta Global designs, builds, and
            maintains enterprise-grade applications that align with business
            goals and scale with demand.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Enterprise-Grade Application Development Built to Scale
        </h2>

        <div className={styles.bentoGrid}>
          {[
            {
              title: "Custom Web & Application Development",
              text:
                "Design and build tailored web applications using modern frameworks and component-based architectures for performance, flexibility, and long-term scalability.",
            },
            {
              title: "Scalable & Modular Architectures",
              text:
                "Clean, modular design patterns that support growth, high availability, and seamless feature expansion.",
            },
            {
              title: "Application Maintenance & Support",
              text:
                "Ongoing monitoring, optimization, and enhancements to ensure reliability, performance, and uptime.",
            },
            {
              title: "Security-First Development",
              text:
                "Secure coding practices, authentication, authorization, and data protection aligned with enterprise compliance standards.",
            },
            {
              title: "Agile & DevOps-Driven Delivery",
              text:
                "Agile methodologies and CI/CD pipelines for faster releases, predictable delivery, and continuous improvement.",
            },
            {
              title: "AI-Ready & Future-Proof Architecture",
              text:
                "Ensure applications are built with extensibility in mind—supporting future integrations, analytics, and AI-driven capabilities as business needs evolve.",
            },
          ].map((item, i) => (
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
            <h2 className={styles.sectionTitle}>
              End-to-End Application Lifecycle Management
            </h2>
            <ul className={styles.list}>
              <li>Consultative discovery & architecture design</li>
              <li>Agile development with iterative delivery</li>
              <li>Proactive application maintenance and optimisation</li>
              <li>Transparent project governance and reporting</li>
              <li>Security & compliance embedded by design</li>
              <li>Automation-led innovation with CI/CD pipelines</li>
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/a1.jpg"
              alt="Custom Application Development"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Business Impact</h2>

        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsGrid}>
            {[
              "Faster application delivery with reduced development risk",
              "Scalable, high-performance applications built for growth",
              "Lower maintenance overhead through clean architecture",
              "Improved security, reliability, and user experience",
              "Future-ready engineering with long-term sustainability",
            ].map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/a2.png"
              alt="Business Impact"
              width={480}
              height={380}
            />
          </div>
        </div>
      </section>

      {/* ================= EXPERT COVERAGE ================= */}
<section className={styles.centerSection}>
  <div className={styles.centerContent}>
    <h2 className={styles.centerTitle}>Our Expert Team Covers</h2>

    <div className={styles.centerImage}>
      <Image
        src="/services/a3.png"
        alt="Vyanta Global Expert Coverage"
        width={420}
        height={320}
        priority
      />
    </div>

    <p className={styles.centerText}>
      Our solutions are fully customised for your needs, considering every
      possible use case and scenario—ensuring scalability, performance, and
      long-term business value.
    </p>
  </div>
</section>

    </motion.div>
  );
}

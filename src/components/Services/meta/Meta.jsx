"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import styles from "./Meta.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Meta() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Vyanta's Metadata Management Solutions</h1>
          <p className={styles.subtitle}>
            Unlock the full value of your data with enterprise-grade metadata
            management solutions from Vyanta Global. We help organizations
            improve data discovery, lineage, governance, and operational trust—
            enabling analytics, AI, and BI initiatives to deliver consistent,
            reliable outcomes.
          </p>
        </div>
      </section>

      {/* FROM CHAOS TO CLARITY */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>From Data Chaos to Enterprise Clarity</h2>
            <p>
              Disconnected systems, siloed datasets, and poorly documented
              metadata slow innovation and increase risk. Vyanta Global’s
              metadata management framework connects, classifies, and
              contextualizes enterprise data across cloud, on‑prem, and hybrid
              environments.
            </p>
            <p>
              By creating a unified metadata layer, we enable faster data access,
              stronger governance, and greater confidence in data‑driven
              decision‑making.
            </p>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/m1.png"
              alt="Metadata Management Architecture"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Core Metadata Management Capabilities</h2>

        <div className={styles.bentoGrid}>
          {[
            {
              title: "Automated Metadata Discovery",
              text: "Automatically catalog, tag, and index data assets across hybrid and multi‑cloud environments using automation‑driven discovery—minimizing manual effort and accelerating onboarding.",
            },
            {
              title: "End‑to‑End Data Lineage & Impact Analysis",
              text: "Visualize how data flows and transforms across pipelines to assess downstream impact, accelerate troubleshooting, and strengthen audit readiness.",
            },
            {
              title: "Governance & Catalog Integrations",
              text: "Seamless integration with Collibra, Alation, Azure Purview, and AWS Glue to establish a single, trusted source of metadata truth.",
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

      {/* FEATURES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Comprehensive Metadata Management Features</h2>
        <ul className={styles.list}>
          <li>Automated metadata discovery across cloud, on‑prem, and hybrid systems</li>
          <li>End‑to‑end data lineage for analytics, reporting, and AI pipelines</li>
          <li>Enterprise catalog integrations (Collibra, Alation, AWS Glue, Azure Purview)</li>
          <li>Governance and compliance alignment supporting GDPR and CCPA</li>
          <li>Cross‑platform visibility across Ab Initio, Databricks, Snowflake, AWS, and GCP</li>
          <li>Business glossary and semantic layer for consistent definitions</li>
          <li>Impact analysis and data quality monitoring to reduce failures</li>
        </ul>
      </section>

      {/* BUSINESS IMPACT */}
      <section className={styles.altSection}>
        <h2 className={styles.sectionTitle}>Measurable Business Impact</h2>
        <div className={styles.benefitsLayout}>
            
          <div className={styles.benefitsGrid}>
            {[
              "Up to 40% faster data discovery and onboarding",
              "60% improvement in governance efficiency",
              "Unified visibility across hybrid and multi‑cloud ecosystems",
              "Reduced compliance risk and operational redundancy",
              "Higher trust and adoption of analytics and AI",
            ].map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <span className={styles.index}>{i + 1}</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/m2.png"
              alt="Metadata Business Impact"
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Delivery & Implementation Approach</h2>
        <p className={styles.paragraph}>
          Vyanta Global follows a phased, outcomes‑driven delivery model—from
          assessment and pilot to enterprise rollout and continuous optimization.
          Each engagement includes automation‑first metadata collection,
          governance tooling integration, and structured knowledge transfer.
        </p>
        <p className={styles.paragraph}>
          Our teams bring deep experience across Ab Initio, Databricks,
          Snowflake, AWS, and GCP—using vendor‑agnostic architectures to keep
          your metadata layer portable, scalable, and future‑proof.
        </p>
      </section>
    </motion.div>
  );
}

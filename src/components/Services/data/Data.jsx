"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import styles from "./Data.module.css";
import Lottie from "lottie-react";
import businessAnimation from "@/assets/business.json";
import CtaContact from "@/components/ui/CtaContact";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Data() {
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
          <h1 className={styles.title}>Vyanta's Data Engineering & Governance Services</h1>
          <p className={styles.subtitle}>
            Vyanta Global helps enterprises modernise their data landscape with
            end‑to‑end data engineering, integration, and governance solutions—
            turning raw data into reliable, analytics‑ready assets for AI, BI,
            and confident decision‑making.
          </p>
        </div>
      </section>

      {/* ================= BENTO GRID – WHAT WE OFFER ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>

        <div className={styles.bentoGrid}>
          {[
            {
              title: "Enterprise Data Integration",
              text: "Unifying structured and unstructured data from CRMs, ERPs, SaaS platforms, warehouses, lakes, and legacy systems into a governed single source of truth.",
            },
            {
              title: "ETL / ELT Pipelines",
              text: "High‑performance batch and real‑time pipelines enabling scalable ingestion, transformation, and orchestration for analytics and AI platforms.",
            },
            {
              title: "API & Middleware Integration",
              text: "Secure API‑driven and message‑based integrations ensuring low‑latency, reliable data synchronisation across enterprise systems.",
            },
            {
              title: "Cloud & Hybrid Architectures",
              text: "Cloud‑native and hybrid data integration solutions across AWS, Azure, GCP, and on‑prem environments—optimised for scale and cost efficiency.",
            },
            {
              title: "Data Governance & Compliance",
              text: "Enterprise‑wide governance frameworks covering ownership, stewardship, classification, access control, and regulatory compliance.",
            },
            {
              title: "Data Quality & Enrichment",
              text: "Automated validation, profiling, and enrichment to ensure accuracy, consistency, and trust in business‑critical data.",
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

      {/* ================= ADVANTAGE – ALTERNATING LAYOUT ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGrid}>
          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>The Vyanta Global Advantage</h2>
            <ul className={styles.list}>
              <li>Metadata‑driven, secure data engineering for complex enterprises</li>
              <li>Reusable, standardised integration and pipeline frameworks</li>
              <li>Optimised cloud and infrastructure spend with right‑sized architectures</li>
              <li>End‑to‑end monitoring, logging, and recoverability built in</li>
            </ul>
          </div>

          <div className={styles.altImage}>
            <Image
              src="/services/d1.jpg"
              alt="Enterprise Data Architecture"
              width={520}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS ================= */}
<section className={styles.section}>
  <div className={styles.benefitsLayout}>
    {/* LEFT: BENEFITS */}
    <div>
      <h2 className={styles.sectionTitle}>Business Benefits</h2>

      <div className={styles.benefitsGrid}>
        {[
          "Eliminate data silos with unified enterprise datasets",
          "Accelerate analytics, BI, and AI initiatives",
          "Improve agility through automation and orchestration",
          "Strengthen regulatory compliance and data privacy",
          "Simplify modernisation and M&A integrations",
        ].map((benefit, i) => (
          <div key={i} className={styles.benefitItem}>
            <span className={styles.index}>{i + 1}</span>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: LOTTIE */}
    <div className={styles.benefitsLottie} aria-hidden>
      <Lottie
        animationData={businessAnimation}
        loop
        autoplay
      />
    </div>
  </div>
</section>

      {/* ================= GOVERNANCE BY DESIGN ================= */}
      <section className={styles.altSection}>
        <div className={styles.altGridReverse}>
          <div className={styles.altImage}>
            <Image
              src="/services/d2.jpg"
              alt="Data Governance & Security"
              width={520}
              height={420}
            />
          </div>

          <div className={styles.altText}>
            <h2 className={styles.sectionTitle}>Governance, Security & Compliance</h2>
            <ul className={styles.list}>
              <li>Role‑based access control and fine‑grained permissions</li>
              <li>Data lineage, cataloguing, and metadata traceability</li>
              <li>Audit trails, monitoring, and operational playbooks</li>
              <li>Controls aligned with GDPR, CCPA, and industry regulations</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaContact
        bannerText="Let’s Design the Right Data Engineering Strategy for Your Business!"
        submitText="Talk to our expert team"
      />


    </motion.div>
  );
}

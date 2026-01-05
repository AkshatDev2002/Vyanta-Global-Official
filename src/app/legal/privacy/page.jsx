"use client";

import { motion } from "framer-motion";
import styles from "./privacy.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PrivacyPage() {
  return (
    <motion.main
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ===== HEADER ===== */}
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last Updated: 5th January 2026</p>
      </header>

      {/* ===== INTRO ===== */}
      <section className={styles.section}>
        <p>
          At <strong>Vyanta Global</strong>, we are committed to protecting your
          privacy and safeguarding your personal information. This Privacy
          Policy explains how we collect, use, disclose, and protect data when
          you visit our website, engage with our services, or interact with us.
        </p>
        <p>
          By accessing or using our website, you consent to the practices
          described in this Privacy Policy.
        </p>
      </section>

      {/* ===== INFORMATION WE COLLECT ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Information We Collect</h2>

        <h3 className={styles.subTitle}>Personal Information</h3>
        <ul className={styles.list}>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or organization details</li>
          <li>Information submitted via contact forms or inquiries</li>
        </ul>

        <h3 className={styles.subTitle}>Non-Personal Information</h3>
        <ul className={styles.list}>
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and time spent on the website</li>
          <li>Referring URLs and usage analytics</li>
        </ul>
      </section>

      {/* ===== USE OF INFORMATION ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        <ul className={styles.list}>
          <li>Respond to inquiries and provide requested services</li>
          <li>Improve website functionality, performance, and user experience</li>
          <li>Communicate updates and service-related information</li>
          <li>Maintain security, prevent fraud, and ensure system integrity</li>
          <li>Comply with legal, regulatory, and contractual obligations</li>
        </ul>
        <p className={styles.note}>
          We do not sell, rent, or trade personal information to third parties.
        </p>
      </section>

      {/* ===== DATA SHARING ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Sharing & Disclosure</h2>
        <ul className={styles.list}>
          <li>Trusted service providers supporting business operations</li>
          <li>Legal or regulatory authorities when required by law</li>
          <li>Protection of rights, property, or safety of Vyanta Global</li>
        </ul>
        <p>
          All third parties are required to maintain appropriate confidentiality
          and data protection standards.
        </p>
      </section>

      {/* ===== SECURITY ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and organizational
          safeguards to protect personal data. However, no system can guarantee
          absolute security.
        </p>
      </section>

      {/* ===== COOKIES ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies & Tracking Technologies</h2>
        <p>
          We may use cookies and similar technologies to enhance functionality,
          analyze traffic, and improve user experience. You can manage cookies
          through browser settings.
        </p>
      </section>

      {/* ===== RETENTION ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Retention</h2>
        <p>
          Personal information is retained only for as long as necessary to
          fulfill the purposes outlined in this policy or as required by law.
        </p>
      </section>

      {/* ===== RIGHTS ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <ul className={styles.list}>
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Object to or restrict processing</li>
          <li>Withdraw consent where applicable</li>
        </ul>
      </section>

      {/* ===== THIRD PARTY LINKS ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Third-Party Links</h2>
        <p>
          Our website may contain links to external websites. Vyanta Global is
          not responsible for third-party privacy practices.
        </p>
      </section>

      {/* ===== CHANGES ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Policy Updates</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time.
          Continued use of the website constitutes acceptance of changes.
        </p>
      </section>

      {/* ===== CONTACT ===== */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p>
          <strong>Vyanta Global</strong><br />
          📧 info@vyantaglobal.com<br />
          🌐 https://www.vyantaglobal.com/
        </p>
      </section>
    </motion.main>
  );
}

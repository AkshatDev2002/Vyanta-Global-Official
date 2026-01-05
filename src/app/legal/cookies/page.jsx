"use client";

import { motion } from "framer-motion";
import styles from "./cookies.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CookiesPage() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.subtitle}>
          This Cookie Policy explains how Vyanta Global uses cookies and similar
          technologies to recognize you when you visit our website. It explains
          what these technologies are, why we use them, and your rights to
          control our use of them.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Are Cookies?</h2>
        <p className={styles.text}>
          Cookies are small data files placed on your device when you visit a
          website. Cookies are widely used by website owners to make their
          websites work efficiently, enhance user experience, and provide
          reporting information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why We Use Cookies</h2>
        <ul className={styles.list}>
          <li>Ensure website functionality and performance</li>
          <li>Understand how users interact with our website</li>
          <li>Improve usability, content, and navigation</li>
          <li>Maintain security and prevent misuse</li>
          <li>Support analytics and performance monitoring</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Cookies We Use</h2>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot
              be switched off. They enable core functionality such as security,
              network management, and accessibility.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Analytics & Performance Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with the
              website by collecting and reporting information anonymously.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization,
              such as language preferences and regional settings.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Managing Your Cookie Preferences</h2>
        <p className={styles.text}>
          You can control and manage cookies through your browser settings.
          Please note that disabling cookies may impact the functionality and
          performance of this website.
        </p>
        <p className={styles.text}>
          Most browsers allow you to refuse or accept cookies and to delete
          existing cookies. The methods for doing so vary from browser to
          browser.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Updates to This Policy</h2>
        <p className={styles.text}>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, law, or our business practices. Any updates will be
          posted on this page with a revised effective date.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about our use of cookies or this Cookie
          Policy, please contact Vyanta Global through our official website.
        </p>
        <p className={styles.contact}>
          <strong>Vyanta Global</strong>
          <br />
          📧 info@vyantaglobal.com
          <br />
          🌐 https://www.vyantaglobal.com/
        </p>
      </section>
    </motion.div>
  );
}

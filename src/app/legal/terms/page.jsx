"use client";

import { motion } from "framer-motion";
import styles from "./terms.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TermsPage() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.updated}>Last Updated: 5th January 2026</p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className={styles.content}>
        <p>
          Welcome to Vyanta Global. These Terms & Conditions (“Terms”) govern your
          access to and use of our website, services, and content. By accessing
          or using this website, you agree to be legally bound by these Terms. If
          you do not agree, please discontinue use of the website immediately.
        </p>

        <h2>Use of Website</h2>
        <p>
          The content provided on this website is for general informational
          purposes related to Vyanta Global’s services, solutions, and offerings.
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe upon the rights of others or restrict their use
          of the site.
        </p>
        <p>
          Unauthorized use, misuse, or interference with the website’s
          functionality is strictly prohibited.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          All content on this website, including but not limited to text,
          graphics, logos, images, software, designs, and trademarks, is the
          intellectual property of Vyanta Global or its licensors and is
          protected by applicable intellectual property laws.
        </p>
        <p>
          You may not copy, reproduce, modify, distribute, or exploit any
          content without prior written consent from Vyanta Global.
        </p>

        <h2>Services & Information Disclaimer</h2>
        <p>
          Vyanta Global provides professional services in data engineering,
          analytics, AI, and related domains. Any information provided on this
          website does not constitute legal, financial, or professional advice
          unless expressly stated.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any service or
          content without prior notice.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Vyanta Global shall not be liable for any direct, indirect, incidental,
          consequential, or special damages arising from your use of, or
          inability to use, this website or its content. This includes, without
          limitation, damages resulting from data loss, system interruptions, or
          reliance on information provided.
        </p>
        <p>
          All content is provided “as is” and “as available” without warranties
          of any kind.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites for convenience
          or informational purposes. Vyanta Global does not endorse, control, or
          assume responsibility for the content, policies, or practices of any
          third-party sites.
        </p>
        <p>Accessing third-party links is done at your own risk.</p>

        <h2>Privacy & Data Protection</h2>
        <p>
          Your use of this website is also governed by our Privacy Policy, which
          outlines how we collect, use, and protect personal data. By using the
          website, you consent to the processing of your information in
          accordance with applicable data protection laws.
        </p>

        <h2>User Responsibilities</h2>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Attempt unauthorized access to systems or data</li>
          <li>Upload malicious code or harmful content</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
        <p>
          Vyanta Global reserves the right to restrict or terminate access for
          violations of these Terms.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          Vyanta Global may revise these Terms & Conditions at any time without
          prior notice. Updated terms will be posted on this page, and continued
          use of the website constitutes acceptance of the revised Terms.
        </p>

        <h2>Governing Law & Jurisdiction</h2>
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of the applicable jurisdiction. Any disputes
          arising from these Terms shall be subject to the exclusive jurisdiction
          of the competent courts.
        </p>

        <h2>Contact Information</h2>
        <p>
          For any questions regarding these Terms & Conditions, please contact:
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import FooterLogo from "./FooterLogo"; 
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";



export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const footerLinks = [
    {
      title: "What We Do",
      links: [
        { label: "Big Data Solutions", href: "/services/bigdata" },
        { label: "Data Integration/ Data Governance", href: "/services/integration" },
        { label: "Metadata Management", href: "/services/metadata" },
        { label: "Custom Development", href: "/services/custom" },
        { label: "Industry 4.0 Solutions", href: "/services/industry" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Services", href: "/services" },
        { label: "Industry", href: "/industry" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Telecom", href: "/telecom" },
        { label: "BFSI", href: "/bfsi" },
        { label: "Healthcare", href: "/healthcare" },
        { label: "Logistics & Automation", href: "/logistic" },
      ],
    },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          {/* Brand Section */}
          <motion.div
  className={styles.brandSection}
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className={styles.logo}>
    <div className={styles.logoWrapper}>
      <FooterLogo />
    </div>

    <p className={styles.logoSubtext}>
      Transforming Data Into Competitive Advantage
    </p>
  </div>

  <p className={styles.brandDescription}>
    Enterprise data solutions that empower organizations to unlock insights,
    accelerate growth, and drive digital transformation.
  </p>

  {/* GET IN TOUCH */}
  <div className={styles.contactBlock}>
    <div className={styles.contactItem}>
      <FaMapMarkerAlt />
      <span>Bengaluru, India</span>
    </div>

    <div className={styles.contactItem}>
      <FaPhoneAlt />
      <span>+91 XXXXX XXXXX</span>
    </div>

    <div className={styles.contactItem}>
      <FaEnvelope />
      <span>contact@vyantaglobal.com</span>
    </div>
  </div>

  {/* SOCIAL */}
  <div className={styles.socialLinks}>
    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
      <FaLinkedinIn />
    </a>
    <a href="#" className={styles.socialLink} aria-label="Twitter">
      <FaTwitter />
    </a>
    <a href="#" className={styles.socialLink} aria-label="Facebook">
      <FaFacebookF />
    </a>
  </div>
</motion.div>


          {/* Links Grid */}
          <motion.div
            className={styles.linksGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerLinks.map((column) => (
              <motion.div key={column.title} className={styles.linkColumn} variants={itemVariants}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

    
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Bottom Section */}
      <motion.div
        className={styles.footerBottom}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.footerContainer}>
          <p className={styles.copyright}>
            © {currentYear}{" "}
            <span className={styles.brandName}>Vyanta Global</span>. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="/legal/terms" className={styles.bottomLink}>
              Terms
            </a>
            <span className={styles.separator}>•</span>
            <a href="/legal/privacy" className={styles.bottomLink}>
              Privacy
            </a>
            <span className={styles.separator}>•</span>
            <a href="/legal/cookies" className={styles.bottomLink}>
              Cookies
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
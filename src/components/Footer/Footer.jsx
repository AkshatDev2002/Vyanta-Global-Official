"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import FooterLogo from "./FooterLogo";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Marquee from "@/components/Hero/Marquee/Marquee";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=707C+Jaina+Tower+2+Janakpuri+New+Delhi";

const OFFICES = [
  {
    country: "India",
    address: "707C, Jaina Tower-2, Janakpuri, New Delhi",
  },
  {
    country: "Bahrain",
    address:
      "Office 22, Entrance 266, Road 1204, Block 712 Ramli, Block 721, Kingdom of Bahrain",
  },
];

const quickLinks = [
  { label: "Who We Are",         href: "/about"    },
  { label: "What We Do",         href: "/services" },
  { label: "Industries Covered", href: "/industry" },
  { label: "Careers",            href: "/careers"  },
  { label: "Contact",            href: "/contact"  },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Marquee />
      <footer className={styles.footer}>
      {/* ── TOP ── */}
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>

          {/* LEFT — Logo + Contact */}
          <motion.div
            className={styles.brandSection}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href="/" className={styles.logoWrapper}>
              <FooterLogo />
            </a>
            <p className={styles.logoSubtext}>
              Transforming Data Into Competitive Advantage
            </p>
            <p className={styles.brandDescription}>
              Enterprise data solutions that empower organizations to unlock
              insights, accelerate growth, and drive digital transformation.
            </p>

            <div className={styles.contactBlock}>

              {/* Office Addresses */}
              <p className={styles.officeTitle}>Office Addresses</p>
              {OFFICES.map((office) => (
                <div key={office.country} className={styles.contactItem}>
                  <FaMapMarkerAlt />
                  <span>
                    <span className={styles.officeCountry}>{office.country}</span>
                    <br />
                    {office.address}
                  </span>
                </div>
              ))}

              {/* Divider between addresses and contact info */}
              <div className={styles.contactDivider} />

              <div className={styles.contactItem}>
                <FaPhoneAlt />
                <span>+91 9716800903</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>info@vyantaglobal.com</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER — Quick Links */}
          <motion.div
            className={styles.quickLinks}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Embedded Map (Delhi office only) */}
          <motion.div
            className={styles.mapSection}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className={styles.columnTitle}>Find Us</h4>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              aria-label="Open office location in Google Maps"
            >
              <div className={styles.mapWrapper}>
                <iframe
                  title="Vyanta Global Office — New Delhi"
                  src="https://maps.google.com/maps?q=707C+Jaina+Tower+2+Janakpuri+New+Delhi&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className={styles.mapOverlay}>
                  <FaMapMarkerAlt className={styles.mapOverlayIcon} />
                  <span>Open in Maps</span>
                </div>
              </div>
            </a>
            <p className={styles.mapAddress}>707C, Jaina Tower-2, Janakpuri, New Delhi</p>
          </motion.div>

        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className={styles.divider} />

      {/* ── BOTTOM ── */}
      <motion.div
        className={styles.footerBottom}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {currentYear}{" "}
            <span className={styles.brandName}>Vyanta Global</span>. All Rights
            Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="/legal/terms"    className={styles.bottomLink}>Terms</a>
            <span className={styles.separator}>•</span>
            <a href="/legal/privacy"  className={styles.bottomLink}>Privacy</a>
            <span className={styles.separator}>•</span>
            <a href="/legal/cookies"  className={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </motion.div>
    </footer>
    </>
  );
}
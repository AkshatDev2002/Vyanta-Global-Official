"use client";

import styles from "./Logo.module.css";

export default function FooterLogo() {
  return (
    <div className={styles.logoWrapper}>
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Vyanta Global"
        className={styles.logoImage}
      />

    </div>
  );
}

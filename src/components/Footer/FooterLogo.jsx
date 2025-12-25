"use client";

import Lottie from "lottie-react";
import styles from "./Logo.module.css";
import globeAnimation from "@/assets/globe.json";

export default function FooterLogo() {
  return (
    <div className={styles.logoWrapper}>
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Vyanta Global"
        className={styles.logoImage}
      />

      {/* Globe Animation */}
      <div className={styles.globe}>
        <Lottie
          animationData={globeAnimation}
          loop
          autoplay
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    </div>
  );
}

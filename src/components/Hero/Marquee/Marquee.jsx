"use client";

import { useEffect, useState } from "react";
import styles from "./Marquee.module.css";

const marqueeLogos = [
  "/abintio.png",
  "/databricks.png",
  "/snowflake.png",
  "/azure.png",
  "/aws.png",
  "/gcp.png",
  "/dbt.png",
];

export default function Marquee() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`${styles.footer} ${visible ? styles.footerVisible : ""}`}
      aria-label="Client logos marquee"
    >
      <div className={styles.container}>
        <div className={styles.marqueeTrack}>
          {[...marqueeLogos, ...marqueeLogos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Client logo ${i + 1}`}
              className={styles.logo}
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
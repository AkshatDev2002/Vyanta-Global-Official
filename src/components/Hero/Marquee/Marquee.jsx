"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Marquee.module.css";

const marqueeLogos = [
  "/marq/ent.png",
  "/marq/soc.png",
  "/marq/stc.png",
  "/marq/tera.png",
  "/marq/turk.png",
  "/marq/voda.png",
  "/marq/wpp.png",
  "/marq/lg.png",
  "/marq/gall.png",
];

export default function Marquee() {
  const [visible, setVisible] = useState(false);
  const firstSetRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Measure the exact pixel width of the first set and set it as a CSS var.
  // The animation then translates by exactly that many px — no guessing.
  useEffect(() => {
    if (!firstSetRef.current || !trackRef.current) return;

    const measure = () => {
      const width = firstSetRef.current.getBoundingClientRect().width;
      trackRef.current.style.setProperty("--set-width", `${width}px`);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <footer
      className={`${styles.footer} ${visible ? styles.footerVisible : ""}`}
      aria-label="Client logos marquee"
    >
      <div className={styles.container}>
        <div className={styles.marqueeTrack} ref={trackRef}>

          {/* First set — measured */}
          <div className={styles.logoSet} ref={firstSetRef}>
            {marqueeLogos.map((src, i) => (
              <div key={`a-${i}`} className={styles.logoCell}>
                <img
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  className={styles.logo}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Second set — exact duplicate, sits right after the first */}
          <div className={styles.logoSet} aria-hidden="true">
            {marqueeLogos.map((src, i) => (
              <div key={`b-${i}`} className={styles.logoCell}>
                <img
                  src={src}
                  alt=""
                  className={styles.logo}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import styles from "./OurVision.module.css";

export default function VisionStickyScroll({ content }) {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop only
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mq.matches);

    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Desktop-only scroll tracking
  const { scrollYProgress } = useScroll({
    container: isDesktop ? containerRef : undefined,
  });

  // Desktop-only active card logic
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
    const index = Math.min(
      content.length - 1,
      Math.floor(latest * content.length)
    );
    setActiveCard(index);
  });

  // Lock body scroll only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const el = containerRef.current;
    if (!el) return;

    const lock = () => (document.body.style.overflow = "hidden");
    const unlock = () => (document.body.style.overflow = "");

    el.addEventListener("mouseenter", lock);
    el.addEventListener("mouseleave", unlock);

    return () => {
      unlock();
      el.removeEventListener("mouseenter", lock);
      el.removeEventListener("mouseleave", unlock);
    };
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      className={isDesktop ? styles.scrollContainer : styles.staticContainer}
    >
      <div className={styles.inner}>
        {/* TEXT COLUMN */}
        <div className={styles.textColumn}>
          {content.map((item, i) => (
            <motion.div
              key={i}
              className={styles.textBlock}
              animate={{ opacity: !isDesktop || activeCard === i ? 1 : 0.35 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE COLUMN (DESKTOP ONLY) */}
        {isDesktop && (
          <div className={styles.imageColumn}>
            <div className={styles.stickyImage}>
              {content.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.imageLayer}
                  animate={{ opacity: activeCard === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={i === 0}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

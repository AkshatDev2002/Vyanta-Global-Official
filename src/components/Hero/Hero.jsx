"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Hero.module.css";

const SLIDES = [
  {
    id: 1,
    src: "/hero/hero1.jpg",
    headline: "Unlock the Power of Big Data",
    sub: "Scalable data platforms that transform raw volumes into strategic business intelligence",
    href: "/services/bigdata",
  },
  {
    id: 2,
    src: "/hero/hero2.jpg",
    headline: "Seamless Data Integration & Governance",
    sub: "Unified pipelines, trusted data quality, and compliance-ready governance frameworks",
    href: "/services/data",
  },
  {
    id: 3,
    src: "/hero/hero3.jpg",
    headline: "Cyber Security You Can Rely On",
    sub: "End-to-end protection across infrastructure, applications, and enterprise data assets",
    href: "/services/cyber",
  },
  {
    id: 4,
    src: "/hero/hero4.jpg",
    headline: "AI Solutions Built for the Enterprise",
    sub: "From OCR and facial recognition to intelligent chatbots — AI that delivers real outcomes",
    href: "/services/ai",
  },
  {
    id: 5,
    src: "/hero/hero5.jpg",
    headline: "Mobile & Web Development",
    sub: "High-performance apps and websites engineered for scale, speed, and user experience",
    href: "/services/mobile",
  },
  {
    id: 6,
    src: "/hero/Hero6.jpg",
    headline: "Digital Marketing That Drives Growth",
    sub: "Data-driven campaigns, SEO, and online reputation management to amplify your brand",
    href: "/services/digital",
  },
  {
    id: 7,
    src: "/hero/hero7.jpg",
    headline: "Supply Chain & Logistics Intelligence",
    sub: "Smart logistics platforms with real-time tracking, RPA, and end-to-end visibility",
    href: "/services/supply",
  },
];

const SLIDE_DURATION = 5000;

function scrollToServices() {
  const el = document.getElementById("services");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─── Individual slide ─── */
function Slide({ slide, direction, onCtaClick }) {
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "8%" : "-8%",
      opacity: 0,
      scale: 1.04,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x:       { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.7, ease: "easeOut" },
        scale:   { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-8%" : "8%",
      opacity: 0,
      scale: 0.97,
      transition: {
        x:       { duration: 0.8, ease: [0.55, 0, 1, 0.45] },
        opacity: { duration: 0.5, ease: "easeIn" },
        scale:   { duration: 0.8 },
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.45 + i * 0.13,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <motion.div
      className={styles.slide}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      onClick={scrollToServices}
      role="button"
      tabIndex={0}
      aria-label={`${slide.headline} — scroll to services`}
      onKeyDown={(e) => e.key === "Enter" && scrollToServices()}
    >
      {/* Banner image */}
      <div className={styles.imageWrap}>
        <Image
          src={slide.src}
          alt={slide.headline}
          fill
          priority={slide.id === 1}
          sizes="100vw"
          className={styles.image}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Overlays */}
      <div className={styles.overlayBase} />
      <div className={styles.overlayVignette} />

      {/* Text */}
      <div className={styles.textBlock}>
        <motion.div
          className={styles.slideTag}
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Vyanta Global
        </motion.div>

        <motion.h1
          className={styles.slideHeadline}
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {slide.headline}
        </motion.h1>

        <motion.p
          className={styles.slideSub}
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {slide.sub}
        </motion.p>

        {/* CTA — stopPropagation so it doesn't also trigger scrollToServices */}
        <motion.div
          className={styles.slideCta}
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          onClick={(e) => {
            e.stopPropagation();
            onCtaClick();
          }}
        >
          <span>Explore Our Services</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const router = useRouter();

  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused]       = useState(false);
  const [progress, setProgress]   = useState(0);

  const progressRef = useRef(null);
  const startRef    = useRef(null);

  const goTo = useCallback((idx, dir) => {
    setDirection(dir ?? (idx > current ? 1 : -1));
    setCurrent(idx);
    setProgress(0);
    startRef.current = performance.now();
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length, 1),  [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1), [current, goTo]);

  /* Auto-advance + progress bar */
  useEffect(() => {
    if (paused) return;
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
      if (elapsed >= SLIDE_DURATION) {
        next();
      } else {
        progressRef.current = requestAnimationFrame(tick);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [current, paused, next]);

  /* Touch / swipe */
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  /* Safe current slide — guards against any out-of-bounds state */
  const slide = SLIDES[current] ?? SLIDES[0];

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero banner carousel"
    >
      <AnimatePresence mode="sync" custom={direction}>
        <Slide
          key={slide.id}
          slide={slide}
          direction={direction}
          onCtaClick={() => router.push(slide.href)}
        />
      </AnimatePresence>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`}  onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Controls */}
      <div className={styles.controls}>
        <span className={styles.counter}>
          {String(current + 1).padStart(2, "0")}
          <span className={styles.counterTotal}>/ {String(SLIDES.length).padStart(2, "0")}</span>
        </span>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%`, transition: paused ? "none" : undefined }}
          />
        </div>

        <div className={styles.dots}>
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} onClick={scrollToServices} aria-hidden="true">
        <span>Know More</span>
      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/lib/ServicesTranslation";
import Technologies from "@/components/Technology/Technologies";
import styles from "./Services.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import bigData           from "@/assets/big.json";
import customIntegration from "@/assets/custom.json";
import dataInt           from "@/assets/data.json";
import aiData            from "@/assets/ai.json";
import govCompliance     from "@/assets/gov.json";
import industry4         from "@/assets/ind4.json";

const SLIDESHOW_ITEMS = [
  { animationData: bigData,           label: "Big Data"         },
  { animationData: aiData,            label: "AI Solutions"     },
  { animationData: dataInt,           label: "Data Integration" },
  { animationData: govCompliance,     label: "Gov & Compliance" },
  { animationData: industry4,         label: "Industry 4.0"     },
  { animationData: customIntegration, label: "Custom Dev"       },
];

const SLIDE_DURATION = 3000;

const slideVariants = {
  enter:  { opacity: 0, y: 40,  scale: 0.82, filter: "blur(6px)" },
  center: { opacity: 1, y: 0,   scale: 1,    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -30, scale: 0.88, filter: "blur(4px)",
    transition: { duration: 0.38, ease: [0.55, 0, 1, 0.45] } },
};

function LottieSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() =>
      setCurrent((prev) => (prev + 1) % SLIDESHOW_ITEMS.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, []);

  const item = SLIDESHOW_ITEMS[current];

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowDots}>
        {SLIDESHOW_ITEMS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className={styles.slideshowStage}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.slideWrapper}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Lottie
              animationData={item.animationData}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Icons ─── */
const BigDataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const DataIntegrationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="5" cy="12" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
    <path d="M7 12h4m2-5h-4.5A2.5 2.5 0 0 0 6 9.5v0" />
    <path d="M13 17h-4.5A2.5 2.5 0 0 1 6 14.5v0" />
    <line x1="13" y1="7" x2="17" y2="6" /><line x1="13" y1="17" x2="17" y2="18" />
  </svg>
);
const CyberIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <rect x="9" y="11" width="6" height="5" rx="1" /><path d="M10 11V9a2 2 0 0 1 4 0v2" />
  </svg>
);
const AiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7H7a3 3 0 0 0 0 6h.5" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v0A2.5 2.5 0 0 0 14.5 7H17a3 3 0 0 1 0 6h-.5" />
    <path d="M12 7v10" /><path d="M9 17a3 3 0 0 0 6 0" />
    <circle cx="9" cy="17" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="17" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2.5} /><line x1="9" y1="6" x2="15" y2="6" />
  </svg>
);
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="2" y="3" width="20" height="15" rx="2" />
    <line x1="2" y1="7" x2="22" y2="7" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="18" x2="12" y2="21" />
    <polyline points="8 11 10 13 8 15" /><line x1="12" y1="15" x2="15" y2="15" />
  </svg>
);
const SupplyChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 3L9.218 10.083" />
    <path d="M11.698 20.334A1 1 0 0 1 10.232 21H7.768a1 1 0 0 1-.978-1.208L8 14H4a1 1 0 0 1-.962-1.272L5 6h13l4 3-9 7z" />
  </svg>
);

const leftServices = [
  { label: "Big Data Solutions",                            href: "/services/bigdata", Icon: BigDataIcon          },
  { label: "Data Integration / Data Governance Solutions",  href: "/services/data",    Icon: DataIntegrationIcon  },
  { label: "Cyber Security Solutions",                      href: "/services/cyber",   Icon: CyberIcon            },
  { label: "Artificial Intelligence Solutions",             href: "/services/ai",      Icon: AiIcon               },
];
const rightServices = [
  { label: "Mobile Application Development",        href: "/services/mobile",  Icon: MobileIcon           },
  { label: "Custom Development",                    href: "/services/custom",  Icon: WebIcon              },
  { label: "Supply Chain and Logistics Solutions",  href: "/services/supply",  Icon: SupplyChainIcon      },
  { label: "Digital Marketing",                     href: "/services/digital", Icon: DigitalMarketingIcon },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariantsLeft  = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const itemVariantsRight = { hidden: { opacity: 0, x:  24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } };

/*
  IMPORTANT — DOM order is always: <iconCircle> then <serviceLabel>
  Desktop left  (.left):  flex-direction: row-reverse  → visually: label … icon
  Desktop right (.right): flex-direction: row          → visually: icon … label
  Mobile both:            flex-direction: row          → visually: icon … label  ✓
*/
function ServiceItem({ label, href, Icon, align }) {
  return (
    <motion.div variants={align === "left" ? itemVariantsLeft : itemVariantsRight} whileHover={{ scale: 1.04 }}>
      <Link href={href} className={`${styles.serviceItem} ${styles[align]}`}>
        <span className={styles.iconCircle}><Icon /></span>
        <span className={styles.serviceLabel}>{label}</span>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const { language } = useLanguage();
  const t = servicesTranslations[language] || servicesTranslations.en;

  return (
    <div className={styles.servicesContainer}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.description}
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.servicesGrid}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Left column */}
        <motion.div className={styles.leftColumn} variants={containerVariants} initial="hidden" animate="visible">
          {leftServices.map((svc) => <ServiceItem key={svc.href} {...svc} align="left" />)}
        </motion.div>

        {/* Center — Lottie Slideshow */}
        <motion.div
          className={styles.centerIllustration}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
        >
          <LottieSlideshow />
        </motion.div>

        {/* Right column */}
        <motion.div className={styles.rightColumn} variants={containerVariants} initial="hidden" animate="visible">
          {rightServices.map((svc) => <ServiceItem key={svc.href} {...svc} align="right" />)}
        </motion.div>
      </motion.div>

      <Technologies />
    </div>
  );
}
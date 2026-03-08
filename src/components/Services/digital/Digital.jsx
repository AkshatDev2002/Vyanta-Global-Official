"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { digitalTranslations } from "@/lib/DigitalTranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  Map,
  Search,
  MonitorPlay,
  Share2,
  FileText,
  MousePointerClick,
  Mail,
  Linkedin,
  Megaphone,
  Target,
  Eye,
  Star,
  ShieldAlert,
  TrendingUp,
  BarChart2,
  Layers,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import styles from "./Digital.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Acquisition service icons */
const acquisitionIcons = [
  <Map size={20} />,
  <Search size={20} />,
  <MonitorPlay size={20} />,
  <Share2 size={20} />,
  <FileText size={20} />,
  <MousePointerClick size={20} />,
  <Mail size={20} />,
  <Linkedin size={20} />,
];

/* Reputation service icons */
const reputationIcons = [
  <Megaphone size={20} />,
  <Target size={20} />,
  <Eye size={20} />,
  <Star size={20} />,
  <ShieldAlert size={20} />,
];

/* Advantage icons */
const advantageIcons = [
  <TrendingUp size={26} />,
  <BarChart2 size={26} />,
  <Layers size={26} />,
  <Globe size={26} />,
];

/* Why Choose icons */
const whyChooseIcons = [
  <Target size={26} />,
  <Eye size={26} />,
  <BarChart2 size={26} />,
  <TrendingUp size={26} />,
];

export default function DigitalPage() {
  const { language } = useLanguage();
  const t = digitalTranslations[language] || digitalTranslations.en;

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.hero.title}</h1>
          <p className={styles.heroSubtitle}>
            {t.hero.subtitle.split("\n\n").map((p, i) => (
              <span key={i}>
                {p}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/services/dg.png"
            alt="Digital Marketing Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <motion.section className={styles.philosophySection} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.philosophy}</h2>
        <p className={styles.philosophyText}>{t.sections.philosophyText}</p>
      </motion.section>

      {/* ── CUSTOMER ACQUISITION ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.acquisition}</h2>
        <p className={styles.sectionIntro}>
          {t.sections.acquisitionIntro.split("\n").map((line, i) => (
            <span key={i}>
              {i === 0 ? <strong>{line}</strong> : line}
              {i < t.sections.acquisitionIntro.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        <h3 className={styles.subSectionLabel}>Our Acquisition Services Include:</h3>
        <div className={styles.servicesGrid}>
          {t.acquisitionServices.map((svc, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceCardHeader}>
                <span className={styles.serviceIcon}>{acquisitionIcons[i]}</span>
                <strong className={styles.serviceName}>{svc.name}</strong>
              </div>
              <p className={styles.serviceDetail}>{svc.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── REPUTATION MANAGEMENT ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.reputation}</h2>
        <p className={styles.sectionIntro}>
          {t.sections.reputationIntro.split("\n").map((line, i) => (
            <span key={i}>
              {i === 0 ? <strong>{line}</strong> : line}
              {i < t.sections.reputationIntro.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        <h3 className={styles.subSectionLabel}>Our Reputation Services Include:</h3>
        <div className={styles.reputationGrid}>
          {t.reputationServices.map((svc, i) => (
            <div key={i} className={styles.reputationCard}>
              <div className={styles.reputationCardHeader}>
                <span className={styles.reputationIcon}>{reputationIcons[i]}</span>
                <strong className={styles.reputationName}>{svc.name}</strong>
              </div>
              <p className={styles.reputationDetail}>{svc.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── ADVANTAGES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.advantage}</h2>
        <div className={styles.cardGrid}>
          {t.advantages.map((adv, i) => (
            <div key={i} className={styles.infoCard}>
              <div className={styles.cardIcon}>{advantageIcons[i]}</div>
              <h3>{adv.title}</h3>
              <p>{adv.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── WHY CHOOSE ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.whyChoose}</h2>
        <div className={styles.whyGrid}>
          {t.whyChoose.map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyCardHeader}>
                <span className={styles.whyNumber}>{item.number}</span>
                <span className={styles.whyIcon}>{whyChooseIcons[i]}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
              </div>
              <p className={styles.whyText}>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.faq}</h2>
        <div className={styles.faqList}>
          {t.faq.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.q}</h3>
              <p className={styles.faqAnswer}>{item.a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <CtaContact
        bannerText="Ready to Grow and Protect Your Brand?"
        submitText="Let's build your digital growth strategy"
      />
    </motion.div>
  );
}
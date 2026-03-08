"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cyberSecurityTranslations } from "@/lib/CyberSecurityTranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  ShieldCheck,
  Network,
  KeyRound,
  ScanSearch,
  ClipboardCheck,
  Eye,
  Fingerprint,
  AlertTriangle,
  Brain,
  Zap,
  SearchCode,
  RefreshCw,
  BadgeCheck,
  Lightbulb,
  Settings2,
  LineChart,
  Building2,
  HeartPulse,
  Code2,
  Globe,
} from "lucide-react";
import styles from "./Cyber.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Icons per pillar service item */
const pillarServiceIcons = [
  /* Pillar I — Infrastructure & Network */
  [<Network size={20} />, <ShieldCheck size={20} />, <Eye size={20} />, <Settings2 size={20} />],
  /* Pillar II — Identity & Data */
  [<KeyRound size={20} />, <Fingerprint size={20} />, <BadgeCheck size={20} />, <AlertTriangle size={20} />],
  /* Pillar III — Threat Management */
  [<Brain size={20} />, <ScanSearch size={20} />, <Zap size={20} />, <Settings2 size={20} />],
  /* Pillar IV — Audits & Transformation */
  [<ClipboardCheck size={20} />, <SearchCode size={20} />, <RefreshCw size={20} />, <ShieldCheck size={20} />],
];

/* Icons for advantages */
const advantageIcons = [
  <Eye size={26} />,
  <Lightbulb size={26} />,
  <LineChart size={26} />,
  <Settings2 size={26} />,
];

/* Icons for industries */
const industryIcons = [
  <Building2 size={26} />,
  <HeartPulse size={26} />,
  <Code2 size={26} />,
  <Globe size={26} />,
];

export default function CyberSecurityPage() {
  const { language } = useLanguage();
  const t =
    cyberSecurityTranslations[language] || cyberSecurityTranslations.en;

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
            src="/services/c1.png"
            alt="Cybersecurity Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── FRAMEWORK INTRO ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.framework}</h2>
        <p className={styles.sectionIntro}>{t.sections.frameworkIntro}</p>

        {/* Four pillars */}
        <div className={styles.pillarsGrid}>
          {t.pillars.map((pillar, pi) => (
            <div key={pi} className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>{pillar.number}</span>
                <div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
              </div>

              <ul className={styles.serviceList}>
                {pillar.services.map((svc, si) => (
                  <li key={si} className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>
                      {pillarServiceIcons[pi][si]}
                    </span>
                    <div>
                      <strong className={styles.serviceName}>{svc.name}</strong>
                      <span className={styles.serviceDetail}>{svc.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── ADVANTAGES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.advantage}</h2>
        <p className={styles.sectionIntro}>{t.sections.advantageIntro}</p>
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

      {/* ── INDUSTRIES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.industries}</h2>
        <p className={styles.sectionIntro}>{t.sections.industriesIntro}</p>
        <div className={styles.cardGrid}>
          {t.industries.map((ind, i) => (
            <div key={i} className={styles.capabilityCard}>
              <div className={styles.cardIcon}>{industryIcons[i]}</div>
              <h3>{ind.name}</h3>
              <p>{ind.detail}</p>
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
        bannerText="Ready to Transform Your Security Posture?"
        submitText="Talk to our security experts"
      />
    </motion.div>
  );
}
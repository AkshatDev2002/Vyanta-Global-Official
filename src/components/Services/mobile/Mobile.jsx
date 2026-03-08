"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { mobileTranslations } from "@/lib/MobileTranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  Smartphone,
  Apple,
  Layers,
  Code2,
  Globe,
  Zap,
  Watch,
  Radio,
  Bluetooth,
  MapPin,
  Wifi,
  PhoneCall,
  MessageSquare,
  Bell,
  Share2,
  RefreshCw,
  CreditCard,
  Landmark,
  Map,
  Database,
  BarChart2,
  Video,
  Play,
  Glasses,
  ScanLine,
  QrCode,
  Building2,
  Users,
  Link,
  BrainCircuit,
  Wrench,
  PackageCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import styles from "./Mobile.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Platform icons */
const platformIcons = [
  [<Smartphone size={20} />, <Apple size={20} />, <Layers size={20} />],
  [<Code2 size={20} />, <Code2 size={20} />, <Globe size={20} />, <Zap size={20} />],
];

/* Integration category icons */
const categoryIcons = [
  <Watch size={22} />,
  <MessageSquare size={22} />,
  <CreditCard size={22} />,
  <Map size={22} />,
  <Video size={22} />,
  <Building2 size={22} />,
];

/* Per-item icons for each integration category */
const integrationItemIcons = [
  /* IoT & Hardware */
  [<Watch size={16} />, <Radio size={16} />, <Bluetooth size={16} />, <MapPin size={16} />, <Wifi size={16} />],
  /* Communication */
  [<PhoneCall size={16} />, <MessageSquare size={16} />, <Bell size={16} />, <Share2 size={16} />, <RefreshCw size={16} />],
  /* Payments */
  [<CreditCard size={16} />, <Landmark size={16} />],
  /* Data & Maps */
  [<Map size={16} />, <Database size={16} />, <BarChart2 size={16} />],
  /* Media */
  [<Video size={16} />, <Play size={16} />, <Glasses size={16} />, <ScanLine size={16} />, <QrCode size={16} />],
  /* Enterprise */
  [<Building2 size={16} />, <Users size={16} />, <Link size={16} />],
];

/* Advantage icons */
const advantageIcons = [
  <BrainCircuit size={26} />,
  <Wrench size={26} />,
  <PackageCheck size={26} />,
  <TrendingUp size={26} />,
];

export default function MobilePage() {
  const { language } = useLanguage();
  const t = mobileTranslations[language] || mobileTranslations.en;

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
            src="/services/mb.png"
            alt="Mobile Application Development"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── MOBILE EXPERTISE ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.expertise}</h2>
        <p className={styles.sectionIntro}>{t.sections.expertiseIntro}</p>

        <div className={styles.expertiseGrid}>
          {t.platformExpertise.map((group, gi) => (
            <div key={gi} className={styles.expertiseGroup}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.expertiseList}>
                {group.items.map((item, ii) => (
                  <li key={ii} className={styles.expertiseItem}>
                    <span className={styles.expertiseIcon}>
                      {platformIcons[gi]?.[ii] ?? <Smartphone size={20} />}
                    </span>
                    <div>
                      <strong className={styles.expertiseName}>{item.name}</strong>
                      <span className={styles.expertiseDetail}>{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── INTEGRATIONS ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.integrations}</h2>
        <p className={styles.sectionIntro}>{t.sections.integrationsIntro}</p>

        <div className={styles.integrationsGrid}>
          {t.integrationCategories.map((cat, ci) => (
            <div key={ci} className={styles.integrationCard}>
              <div className={styles.integrationCardHeader}>
                <span className={styles.integrationCategoryIcon}>
                  {categoryIcons[ci]}
                </span>
                <h3 className={styles.integrationCategoryTitle}>{cat.category}</h3>
              </div>
              <ul className={styles.integrationList}>
                {cat.items.map((item, ii) => (
                  <li key={ii} className={styles.integrationItem}>
                    <span className={styles.integrationItemIcon}>
                      {integrationItemIcons[ci]?.[ii] ?? <ArrowRight size={16} />}
                    </span>
                    <div>
                      <strong className={styles.integrationName}>{item.name}:</strong>
                      <span className={styles.integrationDetail}> {item.detail}</span>
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
        bannerText="Ready to Build Your Mobile App?"
        submitText="Let's build your mobile experience"
      />
    </motion.div>
  );
}
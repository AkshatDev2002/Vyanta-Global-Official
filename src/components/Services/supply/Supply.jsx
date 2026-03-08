"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { supplyTranslations } from "@/lib/SupplyTranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  PackageSearch,
  Truck,
  Navigation,
  Users,
  ShoppingCart,
  HandshakeIcon,
  BarChart2,
  Bot,
  ScanFace,
  Zap,
  Eye,
  BrainCircuit,
  Layers,
  Plug,
  Building2,
  ShoppingBag,
  Factory,
  FlaskConical,
  Package,
  ArrowRight,
  CheckCircle2,
  ScanLine,
  Car,
} from "lucide-react";
import styles from "./Supply.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Module icons — one per logistics suite module */
const moduleIcons = [
  <PackageSearch size={28} />,
  <Truck size={28} />,
  <Navigation size={28} />,
  <Users size={28} />,
  <ShoppingCart size={28} />,
  <HandshakeIcon size={28} />,
  <BarChart2 size={28} />,
];

/* Tech pillar icons */
const techPillarIcons = [
  <Bot size={28} />,
  <ScanFace size={28} />,
  <Zap size={28} />,
];

/* Recognition sub-item icons */
const recognitionIcons = [
  <ScanLine size={16} />,
  <Car size={16} />,
  <ScanFace size={16} />,
];

/* Advantage icons */
const advantageIcons = [
  <Eye size={26} />,
  <BrainCircuit size={26} />,
  <Layers size={26} />,
  <Plug size={26} />,
];

/* Industry icons */
const industryIcons = [
  <Truck size={26} />,
  <ShoppingBag size={26} />,
  <Factory size={26} />,
  <FlaskConical size={26} />,
  <Package size={26} />,
];

export default function SupplyPage() {
  const { language } = useLanguage();
  const t = supplyTranslations[language] || supplyTranslations.en;

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
            src="/services/sp.png"
            alt="Supply Chain & Logistics Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── LOGISTICS SUITE MODULES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.suite}</h2>
        <p className={styles.sectionIntro}>{t.sections.suiteIntro}</p>

        <div className={styles.modulesGrid}>
          {t.modules.map((mod, mi) => (
            <div key={mi} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleNumber}>{mod.number}</span>
                <span className={styles.moduleIcon}>{moduleIcons[mi]}</span>
                <div>
                  <h3 className={styles.moduleTitle}>{mod.title}</h3>
                  <p className={styles.moduleTagline}>{mod.tagline}</p>
                </div>
              </div>

              <p className={styles.moduleDescription}>{mod.description}</p>

              <ul className={styles.moduleList}>
                {mod.items.map((item, ii) => (
                  <li key={ii} className={styles.moduleListItem}>
                    <CheckCircle2 size={15} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── TECHNOLOGY PILLARS ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.technology}</h2>
        <p className={styles.sectionIntro}>{t.sections.technologyIntro}</p>

        <div className={styles.techGrid}>
          {t.techPillars.map((pillar, pi) => (
            <div key={pi} className={styles.techCard}>
              <div className={styles.techCardHeader}>
                <span className={styles.techIcon}>{techPillarIcons[pi]}</span>
                <h3 className={styles.techTitle}>{pillar.title}</h3>
              </div>

              {pillar.description && (
                <p className={styles.techDescription}>{pillar.description}</p>
              )}

              {pillar.subItems && (
                <ul className={styles.techSubList}>
                  {pillar.subItems.map((sub, si) => (
                    <li key={si} className={styles.techSubItem}>
                      <span className={styles.techSubIcon}>
                        {recognitionIcons[si]}
                      </span>
                      <div>
                        <strong className={styles.techSubName}>{sub.name}:</strong>
                        <span className={styles.techSubDetail}> {sub.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
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

      {/* ── INDUSTRIES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.industries}</h2>
        <div className={styles.industriesGrid}>
          {t.industries.map((ind, i) => (
            <div key={i} className={styles.industryCard}>
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
        bannerText="Ready to Transform Your Supply Chain?"
        submitText="Build an intelligent logistics solution"
      />
    </motion.div>
  );
}
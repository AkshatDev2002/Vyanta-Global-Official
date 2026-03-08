"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { aiTranslations } from "@/lib/AITranslation";
import CtaContact from "@/components/ui/CtaContact";
import {
  BrainCircuit,
  FlaskConical,
  Bot,
  Lightbulb,
  FileSearch,
  MessageSquare,
  ScanFace,
  CheckCircle2,
  Layers,
  TrendingUp,
  Users,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import styles from "./AI.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Team role icons */
const teamIcons = [
  <BrainCircuit size={26} />,
  <FlaskConical size={26} />,
  <Layers size={26} />,
  <Lightbulb size={26} />,
];

/* Offering header icons */
const offeringIcons = [
  <FileSearch size={28} />,
  <MessageSquare size={28} />,
  <ScanFace size={28} />,
];

/* Advantage icons */
const advantageIcons = [
  <Users size={26} />,
  <Sparkles size={26} />,
  <TrendingUp size={26} />,
  <Wrench size={26} />,
];

export default function AIPage() {
  const { language } = useLanguage();
  const t = aiTranslations[language] || aiTranslations.en;

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
            src="/services/ai1.jpg"
            alt="AI Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── AI TEAM ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.team}</h2>
        <p className={styles.sectionIntro}>{t.sections.teamIntro}</p>

        <div className={styles.cardGrid}>
          {t.team.map((member, i) => (
            <div key={i} className={styles.infoCard}>
              <div className={styles.cardIcon}>{teamIcons[i]}</div>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.teamOutro}>{t.teamOutro}</p>
      </motion.section>

      {/* ── CORE OFFERINGS ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.offerings}</h2>
        <p className={styles.sectionIntro}>{t.sections.offeringsIntro}</p>

        <div className={styles.offeringsGrid}>
          {t.offerings.map((offering, oi) => (
            <div key={oi} className={styles.offeringCard}>

              {/* Offering header */}
              <div className={styles.offeringHeader}>
                <span className={styles.offeringNumber}>{offering.number}</span>
                <div className={styles.offeringIcon}>{offeringIcons[oi]}</div>
                <div>
                  <h3 className={styles.offeringTitle}>{offering.title}</h3>
                  <p className={styles.offeringTagline}>{offering.tagline}</p>
                </div>
              </div>

              <p className={styles.offeringDescription}>{offering.description}</p>

              {/* How it works (OCR only) */}
              {offering.howItWorks && (
                <div className={styles.howItWorks}>
                  <h4 className={styles.subHeading}>How it works:</h4>
                  <ol className={styles.stepList}>
                    {offering.howItWorks.map((step, si) => (
                      <li key={si} className={styles.stepItem}>
                        <span className={styles.stepNumber}>{si + 1}</span>
                        <div>
                          <strong className={styles.stepName}>{step.step}:</strong>
                          <span className={styles.stepDetail}> {step.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Key features (Chatbot + Facial Recognition) */}
              {offering.features && (
                <div className={styles.featuresBlock}>
                  <h4 className={styles.subHeading}>Key Features:</h4>
                  <ul className={styles.featureList}>
                    {offering.features.map((feat, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <CheckCircle2 size={16} className={styles.featureIcon} />
                        <div>
                          <strong className={styles.featureName}>{feat.name}:</strong>
                          <span className={styles.featureDetail}> {feat.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Use cases */}
              <div className={styles.useCasesBlock}>
                <h4 className={styles.subHeading}>Use Cases:</h4>
                <ul className={styles.useCaseList}>
                  {offering.useCases.map((uc, ui) => (
                    <li key={ui} className={styles.useCaseItem}>
                      <ArrowRight size={14} className={styles.useCaseArrow} />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── ADVANTAGES ── */}
      <motion.section className={styles.section} variants={fadeUp}>
        <h2 className={styles.sectionTitle}>{t.sections.advantage}</h2>
        <div className={styles.cardGrid}>
          {t.advantages.map((adv, i) => (
            <div key={i} className={styles.capabilityCard}>
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
        bannerText="Ready to Build Something Intelligent?"
        submitText="Let's explore AI for your business"
      />
    </motion.div>
  );
}
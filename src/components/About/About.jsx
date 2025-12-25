"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaHandshake, FaLightbulb, FaShieldAlt, FaSearch, FaArrowRight, FaDatabase, FaClock, FaUsersCog } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { aboutTranslations } from "@/lib/AboutTranslation";
import styles from "./About.module.css";
import TeamCarousel from "./TeamCaraousel";
import VisionStickyScroll from "./OurVision";
import CtaContact from "@/components/ui/CtaContact";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Hero Section
function HeroSection({ t }) {
  return (
    <motion.section className={styles.heroSection} variants={containerVariants} initial="hidden" animate="visible">
      <div className={styles.heroContent}>
        <motion.div className={styles.heroText} variants={itemVariants}>
          <motion.h1 className={styles.heroTitle} variants={itemVariants}>
            {t.heroTitle}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={itemVariants}>
            {t.heroSubtitle}
          </motion.p>
        </motion.div>
        <motion.div className={styles.heroImageWrapper} variants={itemVariants}>
          <div className={styles.heroImageContainer}>
            <Image src="/about/about1.jpg" alt={t.heroImageAlt} fill className={styles.heroImage} priority />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Story Section
function StorySection({ t }) {
  return (
    <motion.section className={styles.storySection} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className={styles.storyContent}>
        <motion.div className={styles.storyHeader} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{t.storyTitle}</h2>
        </motion.div>
        <motion.div className={styles.storyGrid} variants={containerVariants}>
          {t.stories.map((story, index) => (
            <motion.div key={index} className={styles.storyCard} variants={itemVariants}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Problem Section
function ProblemSection({ t }) {
  const iconMap = {
    0: <FaDatabase />,
    1: <FaClock />,
    2: <FaShieldAlt />,
    3: <FaUsersCog />,
  };

  return (
    <motion.section className={styles.problemSection} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className={styles.problemContent}>
        <motion.div className={styles.problemHeader} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{t.problemTitle}</h2>
          <p className={styles.sectionDescription}>{t.problemDescription}</p>
        </motion.div>
        <motion.div className={styles.problemGrid} variants={containerVariants}>
          {t.problems.map((problem, index) => (
            <motion.div key={index} className={styles.problemCard} variants={itemVariants} whileHover={{ y: -8 }}>
              <div className={styles.problemIcon}>{iconMap[index]}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Solution Section
function SolutionSection({ t }) {
  return (
    <motion.section className={styles.solutionSection} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className={styles.solutionContent}>
        <motion.div className={styles.solutionHeader} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{t.solutionTitle}</h2>
          <p className={styles.sectionDescription}>{t.solutionDescription}</p>
        </motion.div>
        <motion.div className={styles.solutionGrid} variants={containerVariants}>
          {t.solutions.map((solution, index) => (
            <motion.div key={index} className={styles.solutionCard} variants={itemVariants} whileHover={{ y: -8 }}>
              <div className={styles.solutionNumber}>{solution.number}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Values Section
function ValuesSection({ t }) {
  const iconMap = [
    <FaStar key="excellence" />,
    <FaHandshake key="partnership" />,
    <FaLightbulb key="innovation" />,
    <FaShieldAlt key="trust" />,
    <FaSearch key="transparency" />,
    <FaArrowRight key="agility" />,
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContent}>
        <h2 className={styles.sectionTitleCenter}>{t.valuesTitle}</h2>
        <div className={styles.valuesGrid}>
          {t.values.map((value, index) => (
            <div key={index} className={styles.valueHexCard}>
              <div className={styles.valueIcon}>{iconMap[index]}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection({ t }) {
  return (
    <motion.section className={styles.teamSection} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className={styles.teamContent}>
        <motion.div className={styles.teamHeader} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>{t.teamTitle}</h2>
          <p className={styles.sectionDescription}>{t.teamDescription}</p>
        </motion.div>
        <motion.div className={styles.teamStats} variants={containerVariants}>
          {t.teamStats.map((stat, index) => (
            <motion.div key={index} className={styles.statCard} variants={itemVariants}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <TeamCarousel />
      </div>
    </motion.section>
  );
}

// Vision Section
function VisionSection({ t }) {
  return (
    <section className={styles.visionSection}>
      <h2 className={styles.sectionTitle}>{t.visionTitle}</h2>
      <p className={styles.sectionDescription}>{t.visionDescription1}</p>
      <br />
      <p className={styles.sectionDescription}>{t.visionDescription2}</p>
      <div className={styles.visionScrollWrapper}>
        <VisionStickyScroll content={t.visionContent} />
      </div>
    </section>
  );
}

// Main About Component
export default function About() {
  const { language } = useLanguage();
  const t = aboutTranslations[language] || aboutTranslations.en;

  return (
    <main className={styles.aboutContainer}>
      <HeroSection t={t} />
      <StorySection t={t} />
      <ProblemSection t={t} />
      <SolutionSection t={t} />
      <ValuesSection t={t} />
      <TeamSection t={t} />
      <VisionSection t={t} />
      <CtaContact
        bannerText="Unlock greater business value from your data with Vyanta's deep expertise"
        submitText="Get In Touch"
      />
    </main>
  );
}
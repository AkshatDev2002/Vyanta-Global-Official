"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import styles from "./Career.module.css";
import internshipAnimation from "@/assets/internship.json";
import { CardContainer } from "@/components/ui/3d-card/CardContainer";
import CardBody from "@/components/ui/3d-card/CardBody";
import CardItem from "@/components/ui/3d-card/CardItem";
import JobContact from "./JobContact";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const whyVyanta = [
  {
    title: "People-First Culture with Real Flexibility",
    description:
      "At Vyanta Global, we genuinely value our people. We support individual circumstances with flexibility, empathy, and trust—creating a professional yet inclusive environment where every team member feels respected and empowered.",
  },
  {
    title: "Open, Accessible Leadership",
    description:
      "Our leadership maintains open communication across all levels. Regular interactions between directors and teams foster transparency, approachability, and a culture where every voice is heard.",
  },
  {
    title: "Collaboration Driven by Shared Purpose",
    description:
      "From early-career professionals to senior leaders, our teams are united by collaboration, continuous learning, and a shared commitment to delivering meaningful outcomes together.",
  },
  {
    title: "Customer-First Mindset, Always",
    description:
      "We go beyond delivery. When client success requires extra effort, we step up—deploying the right expertise and resources to build exceptional value and long-term partnerships.",
  },
];

export default function Career() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* ================= INTERNSHIP SECTION ================= */}
      <section className={styles.section}>
        <div className={styles.grid}>
          <motion.div className={styles.content} variants={fadeUp}>
            <h1 className={styles.title}>
              Launch Your Career in Data Engineering
            </h1>

            <p className={styles.description}>
              Breaking into data engineering without prior experience is
              challenging—often feeling nearly impossible for fresh graduates,
              non-graduates, and early-career professionals.
            </p>

            <p className={styles.description}>
              Vyanta Global bridges this gap through a structured, project-based
              internship program where you work on real-world data engineering
              projects under the guidance of professionals with 10+ years of
              enterprise experience.
            </p>

            <div className={styles.ctaWrapper}>
              <Link href="/careers/intern" className={styles.primaryButton}>
                Apply for Internship
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.lottieWrapper}
            variants={fadeUp}
            aria-hidden
          >
            <Lottie
              animationData={internshipAnimation}
              loop
              className={styles.lottie}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY VYANTA SECTION ================= */}
<section className={`${styles.section} ${styles.whySection}`}>
  <motion.div className={styles.content} variants={fadeUp}>
    <h2 className={styles.subtitle}>
      Why Ambitious Talent Chooses Vyanta Global
    </h2>

    <p className={styles.sectionIntro}>
      The Vyanta Global work environment is collaborative, supportive, and
      guided by strong values that shape how we work every day. Here’s what
      makes Vyanta Global a rewarding place to grow your career:
    </p>
  </motion.div>

  <div className={styles.cardsGrid}>
    {whyVyanta.map((item, index) => (
      <CardContainer key={index} className={styles.cardContainer}>
        <CardBody className={styles.cardBody}>
          {/* INDEX */}
          <CardItem translateZ={50}>
            <span className={styles.cardIndex}>
              {index + 1}
            </span>
          </CardItem>

          {/* TITLE */}
          <CardItem translateZ={40}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
          </CardItem>

          {/* TEXT */}
          <CardItem translateZ={30}>
            <p className={styles.cardText}>{item.description}</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    ))}
  </div>
</section>


      {/* ================= FULL-TIME CAREERS SECTION ================= */}
      <section className={`${styles.section} ${styles.altSection}`}>
          <JobContact/>

          
          

      </section>
    </motion.div>
  );
}

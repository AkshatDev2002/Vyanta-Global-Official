"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./TeamCaraousel.module.css";

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      image: "/about/M1.jpg",
      description: "15+ years of enterprise data architecture expertise. Leads our technical vision and innovation strategy.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Data Engineering",
      image: "/about/M2.jpg",
      description: "Expert in scalable data pipeline design. Ensures delivery of robust, cloud-native solutions.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Solutions Architect",
      image: "/about/M3.jpg",
      description: "Specializes in complex data governance frameworks. Bridges client needs with technical implementation.",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Analytics Lead",
      image: "/about/M4.jpg",
      description: "Passionate about turning data into actionable insights. Drives analytics strategy and AI initiatives.",
    },
    {
      id: 5,
      name: "David Martinez",
      role: "Cloud Infrastructure Engineer",
      image: "/about/M3.jpg",
      description: "Expert in AWS and Azure architectures. Ensures secure, scalable cloud deployments.",
    },
  ];

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index) => {
    const totalCards = teamMembers.length;
    const position = (index - currentIndex + totalCards) % totalCards;

    if (position === 0) return styles.centerCard;
    if (position === 1) return styles.nextCard;
    if (position === totalCards - 1) return styles.prevCard;
    return styles.card;
  };

  const getCardOrder = (index) => {
    const totalCards = teamMembers.length;
    return (index - currentIndex + totalCards) % totalCards;
  };

  const visibleCards = [
    teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length],
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
  ];

  return (
    <div className={styles.carouselContainer}>
      <motion.h3
        className={styles.carouselTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h3>

      <div className={styles.carouselWrapper}>
        {/* Navigation Buttons */}
        <button className={styles.navButton} onClick={goToPrev}>
          ←
        </button>

        {/* Cards */}
        {visibleCards.map((member, idx) => {
          const actualIndex = (currentIndex - 1 + idx + teamMembers.length) % teamMembers.length;
          const cardStyle = getCardStyle(actualIndex);
          const isCenterCard = cardStyle === styles.centerCard;

          return (
            <motion.div
              key={member.id}
              className={`${styles.card} ${cardStyle}`}
              onClick={() => setCurrentIndex(actualIndex)}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* For non-center cards, show simple image */}
              {!isCenterCard ? (
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.cardImage}
                  />
                </div>
              ) : (
                /* For center card, show full details */
                <>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div>
                      <h4 className={styles.cardTitle}>{member.name}</h4>
                      <p className={styles.cardRole}>{member.role}</p>
                      <p className={styles.cardDescription}>{member.description}</p>
                    </div>
                    <button className={styles.readMoreLink}>
                      View Profile →
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}

        {/* Navigation Button */}
        <button className={styles.navButton} onClick={goToNext}>
          →
        </button>
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {teamMembers.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
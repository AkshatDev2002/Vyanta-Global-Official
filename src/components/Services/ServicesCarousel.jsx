"use client";

import { useState } from "react";
import styles from "./ServicesCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICE_IMAGES = {
  0: "/services/bigdata.jpg",
  1: "/services/datagov.jpg",
  2: "/services/meta.jpg",
  3: "/services/custom.jpg",
  4: "/services/industry4.jpg",
};

export default function ServicesCarousel({ services }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const getPrevIndex = (index) =>
    index === 0 ? services.length - 1 : index - 1;
  const getNextIndex = (index) =>
    index === services.length - 1 ? 0 : index + 1;

  const prevService = services[getPrevIndex(currentIndex)];
  const currentService = services[currentIndex];
  const nextService = services[getNextIndex(currentIndex)];

  const prevImage = SERVICE_IMAGES[getPrevIndex(currentIndex)];
  const currentImage = SERVICE_IMAGES[currentIndex];
  const nextImage = SERVICE_IMAGES[getNextIndex(currentIndex)];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {/* Previous Card - Image Only */}
        <div className={`${styles.card} ${styles.prevCard}`}>
          <img
            src={prevImage}
            alt={prevService.title}
            className={styles.cardImage}
          />
        </div>

        {/* Current Card - Image + Title + Description */}
        <div className={`${styles.card} ${styles.centerCard}`}>
          <div className={styles.cardImageWrapper}>
            <img
              src={currentImage}
              alt={currentService.title}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{currentService.title}</h3>
            <p className={styles.cardDescription}>{currentService.description}</p>
            <a 
              href={currentService.link} 
              className={styles.readMoreLink}
            >
              {currentService.linkText || "Read More"}
            </a>
          </div>
        </div>

        {/* Next Card - Image Only */}
        <div className={`${styles.card} ${styles.nextCard}`}>
          <img
            src={nextImage}
            alt={nextService.title}
            className={styles.cardImage}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={styles.navButton}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className={styles.navButton}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`${styles.indicator} ${
              currentIndex === idx ? styles.active : ""
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
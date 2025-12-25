"use client";

import { CardContainer, CardBody, CardItem } from "./Card3D";
import styles from "./ServicesCard.module.css";

export default function ServicesCard({ service }) {
  return (
    <CardContainer containerClassName={styles.cardContainerWrapper}>
      <CardBody>
        {/* Card Front - Title and Image */}
        <CardItem
          className={styles.cardFront}
          translateZ={50}
          rotateY={0}
        >
          <div className={styles.cardImageContainer}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardFrontContent}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
          </div>
        </CardItem>

        {/* Card Back - Description */}
        <CardItem
          className={styles.cardBack}
          translateZ={-50}
          rotateY={180}
        >
          <div className={styles.cardBackContent}>
            <p className={styles.cardDescription}>{service.description}</p>
            <a href={service.readMoreHref} className={styles.readMoreLink}>
              Read More
            </a>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
"use client";

import styles from "./Card3D.module.css";

export default function CardBody({ children, className = "" }) {
  return (
    <div className={`${styles.cardBody} ${className}`}>
      {children}
    </div>
  );
}

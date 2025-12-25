"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import styles from "./Card3D.module.css";

const MouseContext = createContext(null);

export function CardContainer({ children, autoRotate = false }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    containerRef.current.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const resetRotation = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <MouseContext.Provider value={isHovered}>
      <div className={styles.perspective}>
        <div
          ref={containerRef}
          className={`${styles.container} ${
            autoRotate && !isHovered ? styles.autoRotate : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            resetRotation();
          }}
          onMouseMove={handleMouseMove}
        >
          {children}
        </div>
      </div>
    </MouseContext.Provider>
  );
}

export const useCardHover = () => useContext(MouseContext);

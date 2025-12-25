"use client";

import { useEffect, useRef } from "react";
import { useCardHover } from "./CardContainer";
import styles from "./Card3D.module.css";

export default function CardItem({
  children,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Tag = "div",
  className = "",
}) {
  const ref = useRef(null);
  const isHovered = useCardHover();

  useEffect(() => {
    if (!ref.current) return;

    if (isHovered) {
      ref.current.style.transform = `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `;
    } else {
      ref.current.style.transform = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;
    }
  }, [isHovered]);

  return (
    <Tag ref={ref} className={`${styles.cardItem} ${className}`}>
      {children}
    </Tag>
  );
}

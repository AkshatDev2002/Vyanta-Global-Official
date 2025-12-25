"use client";

import styles from "./Grid.module.css";

export default function GridBackground({ children }) {
  return (
    <div className="relative w-full h-full">
      
      {/* Soft grid layer */}
      <div className={`${styles.gridLayer} opacity-60 -z-10 pointer-events-none`} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
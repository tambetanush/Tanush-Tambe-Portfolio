"use client";

import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function HeroGridBg() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized cursor position relative to window center (-1 to 1)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute tilt angles (max 6deg) and offset sliding (max 10px)
  const rotateX = -coords.y * 6;
  const rotateY = coords.x * 6;
  const translateX = coords.x * 10;
  const translateY = coords.y * 10;

  return (
    <div 
      className={styles.gridBg}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0)`,
        transition: 'transform 0.15s ease-out'
      }}
    />
  );
}

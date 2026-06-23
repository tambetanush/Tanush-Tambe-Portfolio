"use client";

import React, { useState, useEffect } from 'react';

export default function TypingCarousel() {
  const roles = [
    "Generative AI Architect",
    "MLOps Pipeline Engineer",
    "Deep Learning Researcher",
    "AWS Certified ML Specialist"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(80);

        if (currentText === fullText) {
          setSpeed(2000); // Pause at completed role
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(500); // Pause before starting next role
        }
      }
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed]);

  return (
    <span 
      style={{ 
        borderRight: '2.5px solid var(--clr-cyan)', 
        paddingRight: '4px',
        animation: 'typingBlink 0.8s step-end infinite' 
      }}
    >
      {currentText}
    </span>
  );
}

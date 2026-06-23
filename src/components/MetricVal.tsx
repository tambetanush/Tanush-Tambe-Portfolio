"use client";

import React, { useState, useEffect } from 'react';

interface MetricValProps {
  value: string;
}

export default function MetricVal({ value }: MetricValProps) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    // Extract first numeric section
    const numericMatch = value.match(/[-+]?\d*\.?\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    // Count decimal places
    const decimalIndex = numericMatch[0].indexOf('.');
    const decimals = decimalIndex === -1 ? 0 : numericMatch[0].length - decimalIndex - 1;

    const duration = 1200; // milliseconds
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Exponential ease-out function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = targetNum * easeProgress;
      
      const formattedNum = currentNum.toFixed(decimals);
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(value); // ensure precise target string on final frame
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [value]);

  return <span>{displayValue}</span>;
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CircularRingProps {
  value: number;
  max: number;
  label: string;
  color?: string;
}

const CircularRing = ({ value, max, label, color = "#4ade80" }: CircularRingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const size = 180;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth - 6;
  const circumference = 2 * Math.PI * radius;

  // Percentage for progress arc
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setDisplayValue(end);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center m-4">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {/* Dark translucent filled circle background */}
        <div className="absolute inset-2 rounded-full bg-black/40 backdrop-blur-md shadow-2xl border border-white/10" />

        {/* SVG Progress Circle */}
        <svg width={size} height={size} className="transform -rotate-90 relative z-10">
          {/* Background Track Circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Animated Neon Green Stroke Circle */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_12px_rgba(74,222,128,0.7)]"
          />
        </svg>

        {/* Center Text Number */}
        <div className="absolute z-20 flex flex-col items-center justify-center text-center">
          <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
            {String(displayValue).padStart(2, "0")}
          </span>
          <span className="font-display text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-300 uppercase mt-1">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function CircularCounterSection() {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 11,
    hours: 13,
    minutes: 46,
    seconds: 35,
  });

  useEffect(() => {
    // Real-time ticking countdown simulation
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-[#0a1120] via-[#0f1f3d] to-[#0a1120] text-white">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url('/images/hero 2.png')` }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* LOGO Header */}
        <div className="mb-3">
          <h3 className="font-display text-2xl sm:text-3xl font-black tracking-[0.25em] text-white uppercase drop-shadow-md">
            SP AUDIO
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium tracking-wide mb-12 max-w-xl">
          We Are Currently Creating Next Generation Audio Systems
        </p>

        {/* 4 Circular Progress Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 justify-center items-center w-full">
          <CircularRing value={timeLeft.days} max={30} label="DAYS" color="#4ade80" />
          <CircularRing value={timeLeft.hours} max={24} label="HOURS" color="#4ade80" />
          <CircularRing value={timeLeft.minutes} max={60} label="MINUTES" color="#4ade80" />
          <CircularRing value={timeLeft.seconds} max={60} label="SECONDS" color="#4ade80" />
        </div>

        {/* Footer note */}
        <div className="mt-16 text-gray-400 text-xs sm:text-sm font-medium tracking-wider">
          © 2026 SP Audio. All rights reserved. Designed for Excellence.
        </div>

      </div>
    </section>
  );
}

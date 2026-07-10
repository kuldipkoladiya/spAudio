"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Simple class merger helper
const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(" ");

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.01, 1.01, 1.01)`
          : "rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800",
        containerClassName
      )}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0px 1px 0px 0px rgba(255,255,255,0.05)",
        }}
      >
        <motion.div
          style={{
            transform: isHovered
              ? `translate3d(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px, 0)`
              : "translate3d(0px, 0px, 0px)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full px-6 py-12 sm:px-10", className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

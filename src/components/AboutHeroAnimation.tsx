"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  progress: MotionValue<number>;
};

export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  progress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    progress,
    [0, 0.3],
    [distanceFromCenter * 50, 0]
  );
  const rotateX = useTransform(
    progress,
    [0, 0.3],
    [distanceFromCenter * 40, 0]
  );

  return (
    <motion.span
      className={cn("inline-block text-[#3b82f6]", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

export const CharacterV2 = ({
  char,
  index,
  centerIndex,
  progress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    progress,
    [0.35, 0.6],
    [distanceFromCenter * 50, 0]
  );
  const scale = useTransform(progress, [0.35, 0.6], [0.75, 1]);

  const y = useTransform(
    progress,
    [0.35, 0.6],
    [Math.abs(distanceFromCenter) * 40, 0]
  );

  return (
    <motion.img
      src={char}
      alt="SP Audio Feature"
      className={cn(
        "inline-block h-20 sm:h-28 w-auto object-contain mx-2 rounded-2xl bg-white p-2.5 border border-slate-200/80 shadow-md",
        isSpace && "w-4"
      )}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    />
  );
};

export const CharacterV3 = ({
  char,
  index,
  centerIndex,
  progress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    progress,
    [0.68, 0.95],
    [distanceFromCenter * 80, 0]
  );
  const rotate = useTransform(
    progress,
    [0.68, 0.95],
    [distanceFromCenter * 45, 0]
  );

  const y = useTransform(
    progress,
    [0.68, 0.95],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(progress, [0.68, 0.95], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="SP Audio Gear"
      className={cn(
        "inline-block h-24 sm:h-32 w-auto object-contain mx-2 rounded-2xl bg-white p-3 border border-slate-200/80 shadow-lg",
        isSpace && "w-4"
      )}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

export const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};

export default function AboutHeroAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text = "SP AUDIO EXCELLENCE";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const audioIcons = [
    "/images/spaudio_clean_speaker_1.png",
    "/images/spaudio_clean_speaker_2.png",
    "/images/spaudio_clean_speaker_3.png",
    "/images/spaudio_stage_monitor.png",
    "/images/spaudio_subwoofer.png",
    "/images/amp2.png",
    "/images/spkr2.png",
  ];
  const iconCenterIndex = Math.floor(audioIcons.length / 2);

  // Phase visibility opacities
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.33], [1, 1, 0]);
  const phase2Opacity = useTransform(scrollYProgress, [0.32, 0.36, 0.63, 0.67], [0, 1, 1, 0]);
  const phase3Opacity = useTransform(scrollYProgress, [0.66, 0.7, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-[#f8fafc]">
      {/* Sticky Pin Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center border-b border-slate-100 select-none">
        
        {/* Top Scroll Indicator */}
        <div className="absolute top-24 left-1/2 z-20 -translate-x-1/2 text-center pointer-events-none">
          <span className="relative text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#3b82f6]">
            Scroll to explore
          </span>
        </div>

        {/* Phase 1: Kinetic Text Animation */}
        <motion.div
          style={{ opacity: phase1Opacity }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <div
            className="font-display w-full max-w-5xl text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#0f1f3d]"
            style={{ perspective: "500px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>

        {/* Phase 2: Audio Lineup Showcase V1 */}
        <motion.div
          style={{ opacity: phase2Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6"
        >
          <p className="font-display flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold tracking-tight text-[#0f1f3d]">
            <Bracket className="h-10 text-[#3b82f6]" />
            <span className="font-display font-black uppercase tracking-wider text-[#0f1f3d]">
              Engineered For Tour-Grade Performance
            </span>
            <Bracket className="h-10 scale-x-[-1] text-[#3b82f6]" />
          </p>
          <div className="w-full max-w-5xl text-center flex items-center justify-center flex-wrap">
            {audioIcons.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>

        {/* Phase 3: Audio Lineup Showcase V2 */}
        <motion.div
          style={{ opacity: phase3Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6"
        >
          <p className="font-display flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold tracking-tight text-[#0f1f3d]">
            <Bracket className="h-10 text-[#3b82f6]" />
            <span className="font-display font-black uppercase tracking-wider text-[#0f1f3d]">
              Uncompromising Acoustic Precision
            </span>
            <Bracket className="h-10 scale-x-[-1] text-[#3b82f6]" />
          </p>
          <div
            className="w-full max-w-5xl text-center flex items-center justify-center flex-wrap"
            style={{ perspective: "500px" }}
          >
            {audioIcons.map((char, index) => (
              <CharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

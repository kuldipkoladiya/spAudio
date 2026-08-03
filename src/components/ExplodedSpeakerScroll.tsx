"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ExplodedSpeakerScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll Transforms: 0 = Assembled/Closed, 1 = Exploded/Open
  const grillY = useTransform(scrollYProgress, [0.1, 0.85], [0, -110]);
  const grillScale = useTransform(scrollYProgress, [0.1, 0.85], [1, 1.15]);

  const coneY = useTransform(scrollYProgress, [0.1, 0.85], [0, -35]);
  const coneScale = useTransform(scrollYProgress, [0.1, 0.85], [1, 1.06]);

  const magnetY = useTransform(scrollYProgress, [0.1, 0.85], [0, 105]);
  const magnetScale = useTransform(scrollYProgress, [0.1, 0.85], [1, 0.92]);

  const labelOpacity = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
  const labelXLeft = useTransform(scrollYProgress, [0.25, 0.75], [-35, 0]);
  const labelXRight = useTransform(scrollYProgress, [0.25, 0.75], [35, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[220vh] bg-[#f8fafc]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-5 border-b border-slate-100 select-none">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mb-4 sm:mb-8 z-20">
          <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-2 block">
            INTERACTIVE ACOUSTIC ASSEMBLY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d]">
            Scroll to Explode & Assemble Transducer
          </h2>
          <p className="text-xs sm:text-sm text-[#6b7280] font-semibold mt-2">
            Scroll down to open internal speaker components &bull; Scroll back up to assemble
          </p>
        </div>

        {/* Exploded Speaker Stage */}
        <div className="relative w-full max-w-4xl h-[400px] sm:h-[480px] flex items-center justify-center">

          {/* Layer 1: Rear Chassis / Magnet Assembly */}
          <motion.div
            style={{ y: magnetY, scale: magnetScale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] drop-shadow-[0_20px_35px_rgba(15,31,61,0.12)]">
              <Image
                src="/images/spaudio_subwoofer.png"
                alt="Rear Chassis & Magnet Assembly"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Layer 2: Transducer Voice Coil & Cone */}
          <motion.div
            style={{ y: coneY, scale: coneScale }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="relative w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] drop-shadow-[0_15px_30px_rgba(59,130,246,0.2)]">
              <Image
                src="/images/spaudio_clean_speaker_2.png"
                alt="Voice Coil Transducer Cone"
                fill
                className="object-contain opacity-95"
              />
            </div>
          </motion.div>

          {/* Layer 3: Front Loudspeaker Frame */}
          <motion.div
            style={{ y: grillY, scale: grillScale }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="relative w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] drop-shadow-[0_25px_45px_rgba(15,31,61,0.2)]">
              <Image
                src="/images/spaudio_clean_speaker_1.png"
                alt="Front Loudspeaker Frame"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Exploded Label Callouts */}
          <motion.div
            style={{ opacity: labelOpacity, x: labelXLeft }}
            className="absolute left-2 sm:left-10 top-1/6 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xl max-w-[190px] sm:max-w-[220px]"
          >
            <span className="font-display font-black text-xs sm:text-sm text-[#0f1f3d] block">
              1. CONE & DUST CAP
            </span>
            <span className="text-[10px] sm:text-xs text-[#6b7280] font-semibold mt-0.5 block">
              High-excursion composite cone with ultra-low harmonic distortion.
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: labelOpacity, x: labelXRight }}
            className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xl max-w-[190px] sm:max-w-[220px]"
          >
            <span className="font-display font-black text-xs sm:text-sm text-[#0f1f3d] block">
              2. VOICE COIL & MAGNET
            </span>
            <span className="text-[10px] sm:text-xs text-[#6b7280] font-semibold mt-0.5 block">
              4.5" voice coil with Neodymium N52 high-density magnet structure.
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: labelOpacity, x: labelXLeft }}
            className="absolute left-4 sm:left-14 bottom-4 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xl max-w-[190px] sm:max-w-[220px]"
          >
            <span className="font-display font-black text-xs sm:text-sm text-[#0f1f3d] block">
              3. BIRCH ENCLOSURE
            </span>
            <span className="text-[10px] sm:text-xs text-[#6b7280] font-semibold mt-0.5 block">
              18mm Baltic Birch multi-ply cabinet with interlocked acoustic bracing.
            </span>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

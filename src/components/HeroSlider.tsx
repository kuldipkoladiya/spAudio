"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Grid, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#070605] text-white overflow-hidden flex flex-col justify-between pt-4 pb-12 px-4 sm:px-6 lg:px-12 select-none font-sans">
      
      {/* ================= BACKGROUND HERO VIDEO ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero video.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Dark Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-black/55 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-black/70 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,6,5,0.85)_90%)] pointer-events-none z-0" />

      {/* ================= 1. TOP FLOATING PILL NAVBAR ================= */}
      <div className="w-full max-w-[920px] mx-auto z-30 relative pt-2">
        <div className="bg-[#181512]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 sm:px-8 py-2.5 flex items-center justify-between">
          
          {/* Left Sub Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-amber-100/80">
            <Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">Technology</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">FAQs</Link>
          </div>

          {/* Center Brand Title / Logo */}
          <Link href="/" className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              spaudio
            </span>
          </Link>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/contact" className="text-xs font-semibold text-amber-100/80 hover:text-white transition-colors hidden sm:inline">
              Contact
            </Link>

            <Link href="/products">
              <button className="px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-amber-100 text-[#070605] text-xs font-extrabold tracking-wide transition-all shadow-md cursor-pointer whitespace-nowrap">
                Explore Catalog
              </button>
            </Link>

            <Link href="/products" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-amber-500/20 flex items-center justify-center text-amber-200 transition-colors cursor-pointer" title="Grid View">
              <Grid className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* ================= 2. UPGRADED HERO TEXT CONTENT UI ================= */}
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start justify-center my-auto z-10 relative pt-16 pb-10">
        
        {/* Main Cinematic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black text-white leading-[1.04] tracking-tight mb-6 max-w-4xl"
        >
          <span className="block text-white drop-shadow-xl">ENGINEERED FOR</span>
          <span className="block bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
            UNCOMPROMISING SOUND.
          </span>
        </motion.h1>

        {/* Sub-headline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-amber-100/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
        >
          Tour-grade loudspeakers, subwoofers, and DSP power amplifiers engineered for maximum SPL, acoustic clarity, and absolute reliability.
        </motion.p>

        {/* Dual Call-To-Action Pill Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link href="/products">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white hover:bg-amber-100 text-[#070605] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-2xl cursor-pointer flex items-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-black/60 hover:bg-black/80 text-amber-100 border border-amber-500/40 font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer backdrop-blur-md"
            >
              View Technology
            </motion.button>
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
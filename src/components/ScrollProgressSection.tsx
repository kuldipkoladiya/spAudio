"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollProgressSection() {
    const title = "Audio solutions for every environment.";
    const words = title.split(" ");

    // Container for staggered word animation
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    // Animation details for each word/element
    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 24,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            },
        },
    };

    return (
        <section className="mx-auto flex w-full flex-col items-center justify-center bg-white px-4 text-[#0f1f3d] py-24 sm:py-32 md:py-40 border-b border-gray-100 overflow-hidden">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative flex w-fit flex-col items-center justify-center gap-6 text-center z-10"
            >
                {/* Our Solutions Tag */}
                <motion.span 
                    variants={wordVariants}
                    className="font-display text-[12px] font-extrabold tracking-[0.3em] text-[#3b82f6] uppercase mb-1 block"
                >
                    Our Solutions
                </motion.span>

                {/* Staggered Word Reveal Title */}
                <h2 className="font-display text-5xl sm:text-7xl md:text-[85px] font-black tracking-[-0.05em] leading-none text-[#0f1f3d] flex flex-wrap justify-center gap-x-[0.25em] gap-y-1.5 select-none">
                    {words.map((word, index) => (
                        <span key={index} className="inline-block overflow-hidden pt-1 pb-4 -mb-3">
                            <motion.span
                                variants={wordVariants}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </h2>

                {/* Fade and Slide Description */}
                <motion.p 
                    variants={wordVariants}
                    className="max-w-2xl text-lg md:text-xl font-medium text-[#6b7280] px-4 mt-2"
                >
                    From live events to installations, SP Audio delivers unmatched sound reproduction.
                </motion.p>
            </motion.div>
        </section>
    );
}

"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotations = [5, -4, 3, -6, 4];

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-12 text-[#0f1f3d] dark:text-white">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => (
                isActive(index) && (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotations[index % randomRotations.length],
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      zIndex: 10,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotations[index % randomRotations.length],
                      zIndex: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[#0f1f3d] dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium mt-1">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-[#6b7280] dark:text-neutral-300 font-medium mt-8 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(8px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.015,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full border border-gray-200 dark:border-white/10 hover:border-[#0f1f3d] dark:hover:border-[#C2F84F] bg-white dark:bg-white/5 flex items-center justify-center group/button transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 text-[#0f1f3d] dark:text-white group-hover/button:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full border border-gray-200 dark:border-white/10 hover:border-[#0f1f3d] dark:hover:border-[#C2F84F] bg-white dark:bg-white/5 flex items-center justify-center group/button transition-colors duration-200"
            >
              <ArrowRight className="h-5 w-5 text-[#0f1f3d] dark:text-white group-hover/button:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

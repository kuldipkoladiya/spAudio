"use client";

import React from "react";
import BlobReveal from "@/components/ui/BlobReveal";

export function StickyCardsSection() {
  return (
    <section className="relative w-full bg-white py-6 sm:py-10 lg:py-20 px-3 sm:px-6 overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-5xl lg:max-w-[92vw] h-[400px] sm:h-[550px] lg:h-[85vh] flex items-center justify-center relative">
        <BlobReveal
          image="/images/stack_1.png"
          fit="contain"
          blobCount={18}
          startAlign="center"
          replay={true}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export const StickyCard002 = StickyCardsSection;

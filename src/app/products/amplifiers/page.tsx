"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import KineticGrid from "@/components/ui/KineticGrid";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { allProducts } from "@/data/products";

export default function AmplifiersPage() {
    const amplifiers = allProducts.filter(p => p.category === "Amplifiers");

    return (
        <div className="bg-white text-[#0f1f3d] font-sans overflow-hidden min-h-screen relative">
            {/* Ambient Backdrops */}
            <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,61,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,61,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-80" />

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-28 md:py-36 text-center px-6 border-b border-gray-100 min-h-[60vh] flex flex-col justify-center items-center overflow-hidden z-10">
                <div className="absolute inset-0 z-0">
                    <KineticGrid 
                        dotColor="rgba(15, 31, 61, 0.12)" 
                        lineColor="rgba(59, 130, 246, 0.06)" 
                        trailColor="rgba(59, 130, 246, 0.25)"
                        spacing={35}
                        radius={280}
                        strength={4}
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center select-none w-full">
                    <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold text-[#3b82f6] uppercase tracking-wider mb-6 hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Back To All Products
                    </Link>

                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-extrabold tracking-[0.4em] text-[#3b82f6] uppercase mb-4 font-display"
                    >
                        PRO AUDIO // POWER AMPLIFIERS
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight text-[#0f1f3d]"
                    >
                        HIGH-EFFICIENCY <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            POWER AMPLIFIERS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-[#6b7280] mt-6 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed"
                    >
                        Quad-channel Class-D amplifiers, touchscreen FIR DSP processors, and audiophile-grade analog reference amplifiers for touring and installation.
                    </motion.p>
                </div>
            </section>

            {/* ================= PRODUCTS GRID ================= */}
            <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amplifiers.map((product) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            key={product.id}
                            className="bg-white rounded-[28px] border border-gray-100 shadow-xl shadow-slate-200/40 p-6 flex flex-col justify-between group hover:shadow-2xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-blue-50 text-[#3b82f6]">
                                        {product.category}
                                    </span>
                                </div>

                                <Link href={`/products/${product.id}`}>
                                    <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center bg-slate-50/60 rounded-2xl p-4 my-2 overflow-hidden cursor-pointer group/img">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-2 group-hover/img:scale-108 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </Link>

                                <Link href={`/products/${product.id}`}>
                                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#0f1f3d] mt-4 mb-2 tracking-tight hover:text-[#3b82f6] transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                </Link>

                                <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed mb-6">
                                    {product.desc}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {product.specs.map((spec, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-50 text-slate-600 text-[11px] font-semibold border border-gray-100">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                                <Link 
                                    href={`/products/${product.id}`}
                                    className="flex-1 py-3 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-bold tracking-wider uppercase transition duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                                >
                                    <span>View Details</span>
                                </Link>
                                <a
                                    href={`https://wa.me/919638470305?text=Hi, I'm interested in SPAudio ${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition duration-300 text-center flex items-center justify-center cursor-pointer border border-emerald-200"
                                    title="Inquire on WhatsApp"
                                >
                                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

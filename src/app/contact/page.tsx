"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Headphones } from "lucide-react";
import toast from "react-hot-toast";
import KineticGrid from "@/components/ui/KineticGrid";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    /* ================= SUBMIT ================= */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Request received successfully 🎧");
                setForm({ name: "", email: "", phone: "", message: "" });
            } else {
                toast.error("Failed to submit request ❌");
            }
        } catch {
            toast.error("Server connection error ⚠️");
        }

        setLoading(false);
    };

    return (
        <div className="relative bg-white text-[#0f1f3d] font-sans overflow-hidden min-h-screen">
            {/* Ambient subtle glowing backdrops */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" 
            />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" 
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,61,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,61,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-80" />

            {/* ================= CLEAN ANIMATED HERO SECTION ================= */}
            <section className="relative py-28 md:py-36 text-center px-6 border-b border-gray-100 min-h-[75vh] flex flex-col justify-center items-center overflow-hidden z-10">
                {/* Kinetic Grid Interactive Background */}
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
                    {/* Live Status Tag */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/70 border border-blue-100/80 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#3b82f6] uppercase">
                            SUPPORT LAB // INQUIRIES OPEN
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-[#0f1f3d] text-center"
                    >
                        LET&apos;S BUILD SOMETHING <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            THAT SOUNDS AMAZING
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                        className="text-[#6b7280] mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center pointer-events-none"
                    >
                        Get in touch with our team for active monitor specs, coverage maps, and system engineering support. We are ready to help.
                    </motion.p>

                    {/* Clean Stat Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-10 pointer-events-auto"
                    >
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-md text-xs sm:text-sm font-semibold text-[#0f1f3d]">
                            <Clock className="w-4 h-4 text-[#3b82f6]" />
                            <span>Fast Response (&lt;24 hrs)</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-md text-xs sm:text-sm font-semibold text-[#0f1f3d]">
                            <Headphones className="w-4 h-4 text-[#3b82f6]" />
                            <span>Expert Sound Support</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= CONTACT INFO CARDS ================= */}
            <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                {[
                    { 
                        icon: <Mail className="w-6 h-6 text-[#3b82f6]" />, 
                        title: "Email Us", 
                        value: "support@spaudio.com", 
                        subtitle: "Direct inquiry inbox",
                        href: "mailto:support@spaudio.com" 
                    },
                    { 
                        icon: <Phone className="w-6 h-6 text-[#3b82f6]" />, 
                        title: "Call Us", 
                        value: "+91 9638470305", 
                        subtitle: "Mon - Sat (9am - 7pm)",
                        href: "tel:+919638470305" 
                    },
                    { 
                        icon: <MapPin className="w-6 h-6 text-[#3b82f6]" />, 
                        title: "Headquarters", 
                        value: "Surat, Gujarat, India", 
                        subtitle: "Visit our sound lab",
                        href: "https://maps.google.com/?q=Surat,Gujarat" 
                    },
                ].map((item, i) => (
                    <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[24px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-50/60 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-display font-bold text-[#0f1f3d] text-xl mb-1 tracking-wide">{item.title}</h3>
                            <p className="text-[#0f1f3d] font-semibold text-base mb-1">{item.value}</p>
                            <p className="text-[#6b7280] text-xs font-medium">{item.subtitle}</p>
                        </div>
                    </motion.a>
                ))}
            </section>

            {/* ================= FORM SECTION ================= */}
            <section className="py-16 max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="p-8 md:p-14 rounded-[32px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden"
                >
                    <div className="text-center mb-12">
                        <span className="text-xs font-extrabold tracking-[0.3em] text-[#3b82f6] uppercase mb-2 block font-display">
                            INQUIRY FORM
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-black text-[#0f1f3d] tracking-tight">
                            Start Your Sound Journey
                        </h2>
                        <p className="text-[#6b7280] mt-3 text-sm sm:text-base font-medium max-w-md mx-auto">
                            Outline your venue specs, active system requirements, or questions below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-[#0f1f3d] font-display">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    className="w-full mt-2 p-4 rounded-2xl bg-gray-50/70 border border-gray-200 focus:border-[#3b82f6] focus:bg-white focus:shadow-md outline-none transition duration-300 text-sm font-medium text-[#0f1f3d]"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-[#0f1f3d] font-display">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    className="w-full mt-2 p-4 rounded-2xl bg-gray-50/70 border border-gray-200 focus:border-[#3b82f6] focus:bg-white focus:shadow-md outline-none transition duration-300 text-sm font-medium text-[#0f1f3d]"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-[#0f1f3d] font-display">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({ ...form, phone: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-2xl bg-gray-50/70 border border-gray-200 focus:border-[#3b82f6] focus:bg-white focus:shadow-md outline-none transition duration-300 text-sm font-medium text-[#0f1f3d]"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-[#0f1f3d] font-display">Your Requirements</label>
                            <textarea
                                required
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-2xl bg-gray-50/70 border border-gray-200 focus:border-[#3b82f6] focus:bg-white focus:shadow-md outline-none transition duration-300 h-40 text-sm font-medium text-[#0f1f3d] resize-none"
                                placeholder="Describe your speaker, amp, or setup specifications..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={!loading ? { scale: 1.02 } : {}}
                            whileTap={!loading ? { scale: 0.98 } : {}}
                            className="w-full py-4 rounded-full font-bold tracking-wider uppercase bg-[#0f1f3d] hover:bg-[#3b82f6] text-white shadow-xl hover:shadow-[#3b82f6]/25 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>{loading ? "PROCESSING REQUEST..." : "SUBMIT SPECIFICATIONS"}</span>
                            <Send className="w-4 h-4" />
                        </motion.button>

                        <p className="text-[11px] text-[#6b7280] text-center font-medium">
                            Our sound engineers respond within 24 business hours.
                        </p>
                    </form>
                </motion.div>
            </section>

            {/* ================= MAP EMBED ================= */}
            <section className="px-6 pb-24 relative z-10 max-w-7xl mx-auto">
                <div className="relative rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.63166963!2d72.8413028!3d21.2067861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffa8c7ec113%3A0xe65a175058ca23dd!2sK.K%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1775193806036!5m2!1sen!2sin"
                        className="relative w-full h-[350px] md:h-[450px] border-none"
                        loading="lazy"
                        title="Google Maps Location"
                    />
                </div>
            </section>
        </div>
    );
}
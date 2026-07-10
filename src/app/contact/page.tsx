"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";

/* ================= WAVEFORM ================= */
const Waveform = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-25 z-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 400"
                preserveAspectRatio="none"
            >
                <path fill="none" stroke="url(#contactGradient)" strokeWidth="2.5">
                    <animate
                        attributeName="d"
                        dur="10s"
                        repeatCount="indefinite"
                        values="
                            M0,200 Q360,80 720,200 T1440,200;
                            M0,200 Q360,320 720,200 T1440,200;
                            M0,200 Q360,80 720,200 T1440,200
                        "
                    />
                </path>
                <defs>
                    <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const glowRef = useRef<HTMLDivElement>(null);

    /* ================= MOUSE GLOW ================= */
    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const handleMouse = (e: MouseEvent) => {
            glow.style.left = `${e.clientX - 225}px`;
            glow.style.top = `${e.clientY - 225}px`;
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

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
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to submit request ❌");
            }
        } catch {
            toast.error("Server connection error ⚠️");
        }

        setLoading(false);
    };

    return (
        <div className="relative bg-[#020617] text-white overflow-hidden min-h-screen">
            {/* WAVE BACKGROUND */}
            <Waveform />

            {/* MOUSE GLOW */}
            <div
                ref={glowRef}
                className="hidden md:block pointer-events-none fixed w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px] z-0"
                style={{ left: "-450px", top: "-450px" }}
            />

            {/* ================= HERO ================= */}
            <section className="relative py-24 md:py-36 text-center z-10 px-4">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-semibold tracking-[0.5em] text-cyan-400 uppercase mb-3 animate-pulse"
                >
                    GET IN TOUCH
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight"
                >
                    FEEL THE <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">SOUND</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-gray-400 mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-light"
                >
                    Let us craft your absolute sound experience. Get in touch with the SPAudio team.
                </motion.p>
            </section>

            {/* ================= CONTACT INFO CARDS ================= */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
                {[
                    { icon: <Mail size={24} />, title: "Email Address", value: "support@spaudio.com", href: "mailto:support@spaudio.com" },
                    { icon: <Phone size={24} />, title: "Direct Contact", value: "+91 9638470305", href: "tel:+919638470305" },
                    { icon: <MapPin size={24} />, title: "Headquarters", value: "Surat, Gujarat", href: "https://maps.google.com/?q=Surat,Gujarat" },
                ].map((item, i) => (
                    <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                        whileHover={{ y: -4 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 shadow-xl backdrop-blur-md transition-all duration-300 group block"
                    >
                        <div className="text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-105">{item.icon}</div>
                        <h3 className="text-lg font-bold mb-2 tracking-wide">{item.title}</h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{item.value}</p>
                    </motion.a>
                ))}
            </section>

            {/* ================= FORM ================= */}
            <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.08)]"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tight">
                            START YOUR SOUND JOURNEY 🎧
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm font-light">
                            Outline your requirements below — we will engineer your customized setup.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-500 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] outline-none transition duration-300 text-sm font-light text-white"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-500 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] outline-none transition duration-300 text-sm font-light text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Requirements</label>
                            <textarea
                                required
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-500 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] outline-none transition duration-300 h-36 text-sm font-light text-white resize-none"
                                placeholder="Describe your speaker, amp, or setup specifications..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={!loading ? { scale: 1.02 } : {}}
                            whileTap={!loading ? { scale: 0.98 } : {}}
                            className="w-full py-4 rounded-xl font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white
                                hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300
                                disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                        >
                            {loading ? "PROCESSING REQUEST..." : "SUBMIT SPECIFICATIONS 🚀"}
                        </motion.button>

                        <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                            Our sound engineers respond within 24 business hours ⚡
                        </p>
                    </form>
                </motion.div>
            </section>

            {/* ================= MAP EMBED ================= */}
            <section className="px-6 pb-24 relative z-10 max-w-7xl mx-auto">
                <div className="relative group rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition duration-500 shadow-2xl">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.63166963!2d72.8413028!3d21.2067861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffa8c7ec113%3A0xe65a175058ca23dd!2sK.K%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1775193806036!5m2!1sen!2sin"
                        className="relative w-full h-[300px] md:h-[450px] border-none grayscale invert contrast-125 opacity-75 group-hover:opacity-90 transition duration-500"
                        loading="lazy"
                        title="Google Maps Location"
                    />
                </div>
            </section>
        </div>
    );
}
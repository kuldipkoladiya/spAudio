"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";

/* ================= WAVEFORM ================= */
const Waveform = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 400"
                preserveAspectRatio="none"
            >
                <path fill="none" stroke="url(#gradient)" strokeWidth="2">
                    <animate
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
              M0,200 Q360,100 720,200 T1440,200;
              M0,200 Q360,300 720,200 T1440,200;
              M0,200 Q360,100 720,200 T1440,200
            "
                    />
                </path>

                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
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
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    /* ================= MOUSE GLOW ================= */
    useEffect(() => {
        const handleMouse = (e: any) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    /* ================= SUBMIT ================= */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Request received 🎧");
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Something went wrong ❌");
            }
        } catch {
            toast.error("Server error ⚠️");
        }

        setLoading(false);
    };

    return (
        <div className="relative bg-[#020617] text-white overflow-hidden">

            {/* WAVE BACKGROUND */}
            <Waveform />

            {/* MOUSE GLOW */}
            <div
                className="hidden md:block pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] z-0"
                style={{ left: mouse.x - 200, top: mouse.y - 200 }}
            />

            {/* ================= HERO ================= */}
            <section className="relative py-20 md:py-32 text-center z-10 px-4">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold"
                >
                    Feel The <span className="text-blue-500">Sound</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-base"
                >
                    Let’s craft your perfect audio experience with SP Audio.
                </motion.p>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">

                {[
                    { icon: <Mail />, title: "Email", value: "support@spaudio.com" },
                    { icon: <Phone />, title: "Phone", value: "+91 9638470305" },
                    { icon: <MapPin />, title: "Location", value: "Surat, Gujarat" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <div className="text-blue-500 mb-3">{item.icon}</div>
                        <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.value}</p>
                    </motion.div>
                ))}
            </section>

            {/* ================= FORM ================= */}
            <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                >

                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Start Your Sound Journey 🎧
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm">
                            Tell us your needs — we’ll build your perfect audio setup.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="text-sm text-gray-400">Full Name</label>
                            <input
                                required
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.3)] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400">Email Address</label>
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.3)] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400">Your Requirement</label>
                            <textarea
                                required
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="w-full mt-2 p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.3)] outline-none h-36"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            Let’s Connect 🚀
                        </motion.button>

                        <p className="text-xs text-gray-500 text-center">
                            We usually respond within a few hours ⚡
                        </p>

                    </form>
                </motion.div>
            </section>

            {/* ================= MAP ================= */}
            <section className="px-4 md:px-6 pb-16 md:pb-24 relative z-10">
                <div className="max-w-7xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.63166963!2d72.8413028!3d21.2067861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffa8c7ec113%3A0xe65a175058ca23dd!2sK.K%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1775193806036!5m2!1sen!2sin"
                        className="w-full h-[250px] md:h-[400px]"
                        loading="lazy"
                    />
                </div>
            </section>

        </div>
    );
}
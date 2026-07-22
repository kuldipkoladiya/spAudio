export interface ProductItem {
    id: number;
    name: string;
    category: "Loudspeakers" | "Subwoofers" | "Amplifiers" | "Accessories";
    img: string;
    desc: string;
    specs: string[];
}

export const allProducts: ProductItem[] = [
    {
        id: 1,
        name: "Passive 12 Touring Speaker",
        category: "Loudspeakers",
        img: "/images/product-5.jpeg",
        desc: "Professional 12-inch speaker enclosure delivering crystal-clear sound, powerful bass response, and reliable performance. Built with Baltic birch and neodymium compression drivers for stage monitors and live venues.",
        specs: ["12\" Woofer", "600W RMS", "99 dB Sensitivity", "Baltic Birch Enclosure"]
    },
    {
        id: 2,
        name: "Clarity Pro Studio Monitor",
        category: "Loudspeakers",
        img: "/images/product-6.jpeg",
        desc: "Clarity Pro offers ultra-linear audio reproduction with an optimized frequency response. Ideal for sound engineers and broadcast stations requiring pure sound accuracy and nearfield dispersion.",
        specs: ["Active Bi-Amped", "DSP Linear Phase", "Low THD (<0.03%)", "Bi-Radial Waveguide"]
    },
    {
        id: 3,
        name: "Concert Series 15 Line Monitor",
        category: "Loudspeakers",
        img: "/images/SpeakerShowcase.png",
        desc: "High-SPL 15-inch active cabinet engineered for large concerts and tour sound reinforcement. Delivers pristine vocal clarity with zero distortion under heavy SPL levels.",
        specs: ["15\" Neodymium Woofer", "1200W Peak Power", "Rotatable Horn", "Dual Fly Points"]
    },
    {
        id: 4,
        name: "Dual 18 Subwoofer Stack",
        category: "Subwoofers",
        img: "/images/stack_1.png",
        desc: "Extreme low-frequency sub-bass system housing twin 18-inch high-excursion transducers. Tuned porting channels deliver chest-thumping bass punch down to 28Hz.",
        specs: ["Dual 18\" Transducers", "2400W Continuous", "Frequency: 28Hz - 120Hz", "Heavy-Duty Handles"]
    },
    {
        id: 5,
        name: "Active Subwoofer 18-Pro",
        category: "Subwoofers",
        img: "/images/stack_4.png",
        desc: "Powered subwoofer with onboard 2000W Class-D amplifier module and digital crossover control. Ideal for touring rigs, nightclubs, and outdoor festival setups.",
        specs: ["2000W Class-D Amp", "Built-In Digital Crossover", "Cardioid Array Ready", "M20 Pole Mount"]
    },
    {
        id: 6,
        name: "AMP Ultra Quad-Channel",
        category: "Amplifiers",
        img: "/images/amp1.png",
        desc: "AMP Ultra supplies clean, low-distortion power. Engineered with a heavy toroidal transformer and quiet cooling to drive demanding speaker loads smoothly.",
        specs: ["4x 1500W @ 4 Ohms", "Toroidal Power Supply", "Thermal Protection Circuit", "2U Rack Chassis"]
    },
    {
        id: 7,
        name: "Class-D Pro DSP Amplifier",
        category: "Amplifiers",
        img: "/images/amp2.png",
        desc: "State-of-the-art power amplifier featuring onboard touchscreen DSP, FIR filtering, linear crossovers, and network remote management.",
        specs: ["Smart Touchscreen DSP", "FIR Linear Filters", "Ethernet Control", "Universal Voltage (90V-260V)"]
    },
    {
        id: 8,
        name: "Analog Linear Reference Amp",
        category: "Amplifiers",
        img: "/images/amp3.png",
        desc: "Audiophile-grade analog amplifier crafted with hand-matched transistors to deliver warm, transparent amplification for studio monitoring.",
        specs: ["Class-AB Architecture", "Zero Phase Shift", "Balanced XLR Inputs", "Gold Plated Binding Posts"]
    },
    {
        id: 9,
        name: "Touring Rigging & Flying Hardware",
        category: "Accessories",
        img: "/images/FeatureSection_1.png",
        desc: "Certified high-tensile steel rigging frames and shackle mounts engineered for quick, secure array suspension in arena touring rigs.",
        specs: ["Safety Factor 10:1", "High-Tensile Steel", "Quick-Lock Pins", "Laser Angle Guide"]
    }
];

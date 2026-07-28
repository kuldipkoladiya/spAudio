export interface ProductColor {
    name: string;
    hex: string;
}

export interface ProductTechnicalDetail {
    label: string;
    value: string;
}

export interface ProductItem {
    id: number;
    name: string;
    category: "Loudspeakers" | "Subwoofers" | "Amplifiers" | "Accessories";
    img: string;
    images?: string[];
    price: string;
    desc: string;
    fullDesc: string;
    colors: ProductColor[];
    specs: string[];
    technicalDetails: ProductTechnicalDetail[];
}

export const allProducts: ProductItem[] = [
    {
        id: 1,
        name: "Sonos One",
        category: "Loudspeakers",
        img: "/images/sp_audio_one_main.png",
        images: ["/images/sp_audio_one_main.png", "/images/sp_audio_one_dock.png"],
        price: "€ 349",
        desc: "The compact design fits just about any space. Put it on your kitchen countertop or tuck it away on your office bookshelf. It's humidity resistant so you can even put it in the bathroom.",
        fullDesc: "The compact design fits just about any space. Put it on your kitchen countertop or tuck it away on your office bookshelf. It's humidity resistant so you can even put it in the bathroom.",
        colors: [
            { name: "Obsidian Black", hex: "#18181b" },
            { name: "Warm Gold", hex: "#f59e0b" },
            { name: "Pure White", hex: "#ffffff" }
        ],
        specs: ["Active Smart Speaker", "Humidity Resistant", "Touch Controls", "Class-D Amplifiers"],
        technicalDetails: [
            { label: "Frequency Response", value: "45Hz - 20kHz (-3dB)" },
            { label: "Connectivity", value: "Wi-Fi, AirPlay 2, Bluetooth" },
            { label: "Microphone Array", value: "Far-Field Voice Control" },
            { label: "Water Resistance", value: "Humidity & Moisture Resistant" },
            { label: "Dimensions", value: "161.45 x 119.7 x 119.7 mm" },
            { label: "Weight", value: "1.85 kg / 4.08 lbs" }
        ]
    },
    {
        id: 2,
        name: "Clarity Pro Studio Monitor",
        category: "Loudspeakers",
        img: "/images/product-6.jpeg",
        images: ["/images/product-6.jpeg", "/images/product-5.jpeg", "/images/amp1.png"],
        price: "$899",
        desc: "Clarity Pro offers ultra-linear audio reproduction with an optimized frequency response. Ideal for sound engineers and broadcast stations requiring pure sound accuracy and nearfield dispersion.",
        fullDesc: "Designed for reference studio monitoring and critical mastering, the Clarity Pro delivers ruler-flat response and microscopic dynamic detail. Equipped with custom-designed bi-amped Class-D amplification and linear phase FIR crossovers.",
        colors: [
            { name: "Carbon Black", hex: "#121212" },
            { name: "Studio Amber", hex: "#eab308" },
            { name: "Minimal Silver", hex: "#f8fafc" }
        ],
        specs: ["Active Bi-Amped", "DSP Linear Phase", "Low THD (<0.03%)", "Bi-Radial Waveguide"],
        technicalDetails: [
            { label: "Amp Output Power", value: "300W RMS (200W LF + 100W HF)" },
            { label: "Total Harmonic Distortion", value: "< 0.03% @ 1kHz" },
            { label: "Crossover Frequency", value: "1.8 kHz Linear FIR" },
            { label: "Input Connectors", value: "Balanced XLR / 1/4\" TRS Combo" },
            { label: "Dynamic Range", value: "114 dB A-Weighted" },
            { label: "Net Weight", value: "12.2 kg / 26.8 lbs" }
        ]
    },
    {
        id: 3,
        name: "Concert Series 15 Line Monitor",
        category: "Loudspeakers",
        img: "/images/SpeakerShowcase.png",
        images: ["/images/SpeakerShowcase.png", "/images/product-5.jpeg", "/images/stack_1.png"],
        price: "$1,199",
        desc: "High-SPL 15-inch active cabinet engineered for large concerts and tour sound reinforcement. Delivers pristine vocal clarity with zero distortion under heavy SPL levels.",
        fullDesc: "Built specifically for high-energy concert touring and stadium fill, the Concert Series 15 features high-efficiency neodymium transducers and integrated flying hardware for rapid array deployment.",
        colors: [
            { name: "Stage Black", hex: "#0f0f0f" },
            { name: "Slate Grey", hex: "#334155" }
        ],
        specs: ["15\" Neodymium Woofer", "1200W Peak Power", "Rotatable Horn", "Dual Fly Points"],
        technicalDetails: [
            { label: "Transducer", value: "15\" Neodymium Woofer + 3\" Voice Coil HF" },
            { label: "Amplifier Class", value: "Class-D Dual Channel" },
            { label: "Maximum SPL", value: "136 dB Peak" },
            { label: "Rigging Hardware", value: "Dual Integrated M10 Fly Points" },
            { label: "Grille", value: "16-Gauge Powder-Coated Steel" },
            { label: "Net Weight", value: "24.0 kg / 52.9 lbs" }
        ]
    },
    {
        id: 4,
        name: "Dual 18 Subwoofer Stack",
        category: "Subwoofers",
        img: "/images/stack_1.png",
        images: ["/images/stack_1.png", "/images/stack_4.png", "/images/FeatureSection_1.png"],
        price: "$2,499",
        desc: "Extreme low-frequency sub-bass system housing twin 18-inch high-excursion transducers. Tuned porting channels deliver chest-thumping bass punch down to 28Hz.",
        fullDesc: "When unmatched sub-bass impact is mandatory, the Dual 18 Subwoofer Stack provides crushing low-end output. Engineered with progressive-spider transducers and optimized front-firing bass reflex ports.",
        colors: [
            { name: "Heavy Black", hex: "#0a0a0a" },
            { name: "Charcoal Slate", hex: "#1e293b" }
        ],
        specs: ["Dual 18\" Transducers", "2400W Continuous", "Frequency: 28Hz - 120Hz", "Heavy-Duty Handles"],
        technicalDetails: [
            { label: "Drivers", value: "2x 18\" Heavy-Excursion Transducers" },
            { label: "Continuous Power", value: "2400W RMS / 4800W Program" },
            { label: "Lower Frequency Limit", value: "28Hz (-10dB)" },
            { label: "Impedance", value: "4 Ohms Parallel" },
            { label: "Enclosure", value: "18mm Birch Plywood + Bracing" },
            { label: "Net Weight", value: "72.0 kg / 158.7 lbs" }
        ]
    },
    {
        id: 5,
        name: "Active Subwoofer 18-Pro",
        category: "Subwoofers",
        img: "/images/stack_4.png",
        images: ["/images/stack_4.png", "/images/stack_1.png", "/images/amp2.png"],
        price: "$1,799",
        desc: "Powered subwoofer with onboard 2000W Class-D amplifier module and digital crossover control. Ideal for touring rigs, nightclubs, and outdoor festival setups.",
        fullDesc: "The Active Subwoofer 18-Pro integrates a high-efficiency 2000W RMS Class-D amplifier module with onboard DSP presets for cardioid sub arrays and low-pass crossover tuning.",
        colors: [
            { name: "Touring Black", hex: "#18181b" },
            { name: "Pro Amber", hex: "#d97706" }
        ],
        specs: ["2000W Class-D Amp", "Built-In Digital Crossover", "Cardioid Array Ready", "M20 Pole Mount"],
        technicalDetails: [
            { label: "Amplifier Module", value: "2000W RMS Class-D with PFC" },
            { label: "DSP Processing", value: "24-Bit / 96kHz Digital Crossover" },
            { label: "Selectable Low Pass", value: "80Hz / 100Hz / 120Hz Presets" },
            { label: "Pole Mount", value: "Top-Mounted M20 Threaded Socket" },
            { label: "Cooling System", value: "Variable-Speed Quiet Fan" },
            { label: "Net Weight", value: "45.5 kg / 100.3 lbs" }
        ]
    },
    {
        id: 6,
        name: "AMP Ultra Quad-Channel",
        category: "Amplifiers",
        img: "/images/amp1.png",
        images: ["/images/amp1.png", "/images/amp2.png", "/images/amp3.png"],
        price: "$1,499",
        desc: "AMP Ultra supplies clean, low-distortion power. Engineered with a heavy toroidal transformer and quiet cooling to drive demanding speaker loads smoothly.",
        fullDesc: "Four channel high-density power amplifier engineered for permanent venue installations and high-demand touring racks. Features multi-stage thermal protection and ultra-low noise floor.",
        colors: [
            { name: "Anodized Black", hex: "#111827" },
            { name: "Brushed Aluminum", hex: "#94a3b8" }
        ],
        specs: ["4x 1500W @ 4 Ohms", "Toroidal Power Supply", "Thermal Protection Circuit", "2U Rack Chassis"],
        technicalDetails: [
            { label: "Output Power", value: "4 x 1500W RMS @ 4 Ohms" },
            { label: "Bridge Power", value: "2 x 3000W RMS @ 8 Ohms" },
            { label: "Frequency Response", value: "10Hz - 35kHz (±0.5dB)" },
            { label: "Damping Factor", value: "> 500 @ 8 Ohms" },
            { label: "Chassis Height", value: "Standard 2U Rack Mount" },
            { label: "Net Weight", value: "19.8 kg / 43.6 lbs" }
        ]
    },
    {
        id: 7,
        name: "Class-D Pro DSP Amplifier",
        category: "Amplifiers",
        img: "/images/amp2.png",
        images: ["/images/amp2.png", "/images/amp1.png", "/images/amp3.png"],
        price: "$1,899",
        desc: "State-of-the-art power amplifier featuring onboard touchscreen DSP, FIR filtering, linear crossovers, and network remote management.",
        fullDesc: "The pinnacle of digital audio amplification, combining high-efficiency Class-D power topology with a full-featured touchscreen DSP processor and Ethernet remote management software.",
        colors: [
            { name: "Obsidian Black", hex: "#030712" },
            { name: "Cobalt Blue Accent", hex: "#2563eb" }
        ],
        specs: ["Smart Touchscreen DSP", "FIR Linear Filters", "Ethernet Control", "Universal Voltage (90V-260V)"],
        technicalDetails: [
            { label: "DSP Display", value: "4.3\" Full-Color Touchscreen Interface" },
            { label: "Processing Engine", value: "32-Bit Floating Point DSP @ 96kHz" },
            { label: "Network Protocol", value: "Ethernet TCP/IP & Dante Ready" },
            { label: "Operating Voltage", value: "Universal SMPS (90V - 260V AC)" },
            { label: "Efficiency", value: "> 92% Power Conversion" },
            { label: "Net Weight", value: "11.4 kg / 25.1 lbs" }
        ]
    },
    {
        id: 8,
        name: "Analog Linear Reference Amp",
        category: "Amplifiers",
        img: "/images/amp3.png",
        images: ["/images/amp3.png", "/images/amp1.png", "/images/amp2.png"],
        price: "$1,299",
        desc: "Audiophile-grade analog amplifier crafted with hand-matched transistors to deliver warm, transparent amplification for studio monitoring.",
        fullDesc: "Handcrafted for sound engineers who demand absolute warmth and musicality, this Class-AB analog power amplifier uses custom toroidal transformers and gold-plated signal paths.",
        colors: [
            { name: "Vintage Graphite", hex: "#1c1917" },
            { name: "Champagne Silver", hex: "#cbd5e1" }
        ],
        specs: ["Class-AB Architecture", "Zero Phase Shift", "Balanced XLR Inputs", "Gold Plated Binding Posts"],
        technicalDetails: [
            { label: "Circuitry", value: "Pure Analog Class-AB Topology" },
            { label: "Signal to Noise Ratio", value: "> 115 dB (A-Weighted)" },
            { label: "Crosstalk Rejection", value: "> 85 dB @ 1kHz" },
            { label: "Inputs", value: "Gold-Plated XLR & Balanced TRS" },
            { label: "Outputs", value: "High-Current Binding Posts" },
            { label: "Net Weight", value: "16.1 kg / 35.5 lbs" }
        ]
    },
    {
        id: 9,
        name: "Touring Rigging & Flying Hardware",
        category: "Accessories",
        img: "/images/FeatureSection_1.png",
        images: ["/images/FeatureSection_1.png", "/images/product-5.jpeg", "/images/stack_1.png"],
        price: "$499",
        desc: "Certified high-tensile steel rigging frames and shackle mounts engineered for quick, secure array suspension in arena touring rigs.",
        fullDesc: "Engineered to strict international rigging standards, this modular flying frame allows precise splay angle adjustments and rapid coupling for touring loudspeaker arrays.",
        colors: [
            { name: "Industrial Steel", hex: "#334155" },
            { name: "Matte Black Powder", hex: "#0f172a" }
        ],
        specs: ["Safety Factor 10:1", "High-Tensile Steel", "Quick-Lock Pins", "Laser Angle Guide"],
        technicalDetails: [
            { label: "Working Load Limit", value: "1200 kg / 2645 lbs Certified" },
            { label: "Material Grade", value: "Structural High-Tensile Steel" },
            { label: "Pin Mechanism", value: "Stainless Steel Quick-Release Pins" },
            { label: "Splay Range", value: "0° to 10° in 1° Increments" },
            { label: "Certification", value: "TÜV Rheinland Safety Certified" },
            { label: "Net Weight", value: "8.6 kg / 18.9 lbs" }
        ]
    }
];


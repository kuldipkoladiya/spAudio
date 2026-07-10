"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050911] text-white select-none">
            <div className="flex flex-col items-center">
                {/* Logo with high letter-spacing */}
                <div className="mb-6 tracking-[0.4em] text-center">
                    <h1 className="font-display text-2xl font-black text-white leading-none">SP AUDIO</h1>
                </div>
                
                {/* Minimalist Ultra-thin Progress Line */}
                <div className="w-36 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 bottom-0 left-0 bg-white w-1/3 animate-loading-line rounded-full" />
                </div>
                
                {/* Micro Subtext */}
                <span className="mt-4 font-display text-[9px] font-semibold tracking-[0.3em] text-[#8e9bb3]/50 uppercase">
                    SYSTEM LOADING
                </span>
            </div>

            <style jsx>{`
                @keyframes loadingLine {
                    0% {
                        left: -35%;
                        width: 35%;
                    }
                    50% {
                        left: 30%;
                        width: 45%;
                    }
                    100% {
                        left: 100%;
                        width: 35%;
                    }
                }
                .animate-loading-line {
                    animation: loadingLine 1.6s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
                }
            `}</style>
        </div>
    );
}

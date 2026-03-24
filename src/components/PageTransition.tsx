"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageTransition({ children }: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1200); // loader duration

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading && <Loader />}

            <div
                className={`transition-all duration-700 ${
                    loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            >
                {children}
            </div>
        </>
    );
}
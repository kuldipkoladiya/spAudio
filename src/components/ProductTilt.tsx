"use client";

import { useRef } from "react";

export default function ProductTilt({children}:any){

    const ref = useRef<HTMLDivElement>(null);

    const move=(e:any)=>{

        const rect = ref.current!.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y/rect.height - 0.5)*10;
        const rotateY = (x/rect.width - 0.5)*-10;

        ref.current!.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    const reset=()=>{
        ref.current!.style.transform="rotateX(0) rotateY(0)";
    }

    return(

        <div
            ref={ref}
            onMouseMove={move}
            onMouseLeave={reset}
            className="transition-transform duration-200"
        >
            {children}
        </div>

    )

}
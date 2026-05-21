"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import Image from "next/image"
import Cursor from "@/components/Cursor"

gsap.registerPlugin(ScrollTrigger)

export default function Home(){

    const revealRefs = useRef<HTMLDivElement[]>([])
    const horizontal = useRef<HTMLDivElement>(null)

    useEffect(()=>{

        const lenis = new Lenis()

        function raf(time:number){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        revealRefs.current.forEach((el)=>{
            if(!el) return

            gsap.from(el,{
                scrollTrigger:{
                    trigger:el,
                    start:"top 85%"
                },
                y:80,
                opacity:0,
                duration:1
            })
        })

        const panels = gsap.utils.toArray(".panel")

        if(horizontal.current){

            gsap.to(panels,{
                xPercent:-100*(panels.length-1),
                ease:"none",
                scrollTrigger:{
                    trigger:horizontal.current,
                    pin:true,
                    scrub:1,
                    end:()=>"+="+(horizontal.current as any).offsetWidth
                }
            })

        }

    },[])

    return(

        <main className="bg-white text-black">

            <Cursor/>

            {/* HERO */}

            <section className="h-screen flex items-center justify-center text-center">

                <div>

                    <h1 className="text-[10vw] font-bold">
                        SP AUDIO
                    </h1>

                    <p className="mt-6 text-gray-500 text-xl">
                        Premium speakers crafted for immersive sound
                    </p>

                </div>

            </section>


            {/* SCROLLING TEXT */}

            <section className="py-10 border-y overflow-hidden">

                <div className="whitespace-nowrap text-5xl font-bold animate-marquee">

                    PREMIUM SOUND • PREMIUM SOUND • PREMIUM SOUND • PREMIUM SOUND •

                </div>

            </section>


            {/* PRODUCT REVEAL */}

            <section
                ref={(el:any)=>revealRefs.current[0]=el}
                className="py-40 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6">

                <div>

                    <h2 className="text-5xl font-bold">
                        Designed for Music
                    </h2>

                    <p className="mt-6 text-gray-500">
                        Experience deep bass and crystal clear sound.
                    </p>

                </div>

                <Image
                    src="/images/main.jpeg"
                    alt=""
                    width={700}
                    height={600}
                />

            </section>


            {/* HORIZONTAL SHOWCASE */}

            <section
                ref={horizontal}
                className="h-screen flex items-center">

                <div className="flex w-[300%]">

                    <div className="panel w-screen flex justify-center items-center">

                        <Image
                            src="/images/product1.png"
                            alt=""
                            width={400}
                            height={400}
                        />

                    </div>

                    <div className="panel w-screen flex justify-center items-center">

                        <Image
                            src="/images/product2.png"
                            alt=""
                            width={400}
                            height={400}
                        />

                    </div>

                    <div className="panel w-screen flex justify-center items-center">

                        <Image
                            src="/images/product3.png"
                            alt=""
                            width={400}
                            height={400}
                        />

                    </div>

                </div>

            </section>


            {/* CATEGORY */}

            <section
                ref={(el:any)=>revealRefs.current[1]=el}
                className="py-40 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

                <Image src="/images/speaker.jpg" alt="" width={500} height={500}/>
                <Image src="/images/headphone.jpg" alt="" width={500} height={500}/>
                <Image src="/images/homeaudio.jpg" alt="" width={500} height={500}/>

            </section>


            {/* BRAND STORY */}

            <section className="py-40 text-center bg-gray-100">

                <h2 className="text-6xl font-bold">
                    Feel The Sound
                </h2>

                <p className="mt-8 text-gray-500 max-w-xl mx-auto">
                    Discover premium sound experience crafted for music lovers.
                </p>

            </section>


            {/* CTA */}

            <section className="py-40 bg-black text-white text-center">

                <h2 className="text-6xl font-bold">
                    Start Your Sound Journey
                </h2>

                <button className="mt-10 px-10 py-4 bg-white text-black rounded-xl">
                    Shop Now
                </button>

            </section>

        </main>

    )

}
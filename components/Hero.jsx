"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useRef , useEffect} from "react"

const HeroSection = () => {

    const imageRef = useRef(null);

    useEffect(()=>{
        const imageElement = imageRef.current ;

        const handleScroll = ()=>{
             const scrollPoistion = window.scrollY;
             const scrollThreshold = 100;
             if(scrollPoistion>scrollThreshold){
                imageElement.classList.add("scrolled")
             }else{
                imageElement.classList.remove("scrolled")
             }
        };

        window.addEventListener("scroll", handleScroll);
        
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <section className="pb-20 px-4 ">
            <div className="mx-auto text-center container">
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                    Money clarity, <br />without the clutter
                </h1>
                <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
                    Spendly helps you track spending, plan budgets, and spot trends with effortless insights.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button className="px-8">
                            Start now
                        </Button>
                    </Link>
                    <Link href="/demolinkadd">
                        <Button variant={'outline'} size={'lg'} className="px-8">
                            See a preview
                        </Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div ref={imageRef} className="hero-image">
                        <Image
                            src="/banner.png"
                            width={1280}
                            height={720}
                            alt="Dashboard Preview"
                            className="rounded-lg shadow-2xl border mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
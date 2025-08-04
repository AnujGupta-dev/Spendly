"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="pb-20 px-4 ">
            <div>
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                    Manage your finances <br />with Intelligence
                </h1>
                <p>
                    An AI-powered finacial mangement platform that helps you track, analyze, and omptimize your spending with real-time insights .
                </p>

                <Link href="/dashboard">
                    <Button className="px-8">
                        Get started
                    </Button>
                </Link>
                <Link href="/demolinkadd">
                    <Button variant={'outline'} size={'lg'} className="px-8">
                        Watch Demo
                    </Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image
                        src="/banner.jpeg"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
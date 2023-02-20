import Link from "next/link";
import Image from 'next/image'
import React from 'react'
import HeroButton from "@/components/HeroButton";

export const Hero = () => {
  return (
    
    <div
        className={`w-full h-screen flex justify-center items-center overflow-hidden relative bg-black`}>
        <Image
            src={`/images/hero-1920.jpg`}
            alt="Hero Image"
            className="opacity-60 object-cover"
            fill
        />
        <div className="flex flex-col justify-center items-center px-3">
            <h1 className=" text-center text-3xl md:text-5xl text-green-500 sm:text-red-500 lg:text-blue-500 font-bold drop-shadow-lg">WELCOME TO <br />
                <span className="text-green-500 sm:text-xl lg:text-blue-500">GLOBE EXPLORER</span>
            </h1>

            <HeroButton href="/layout2" appendClass="animate-bounceLight">Layout 2</HeroButton>
            <HeroButton href="/layout3" appendClass="animate-bounceLight">Layout 3</HeroButton>

        </div>


    </div>
  )
}


export default Hero;
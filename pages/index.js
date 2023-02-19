import Link from "next/link";
import Image from 'next/image'
import HeroButton from "@/components/HeroButton";


export default function Home() {
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
            <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                <span className="text-primary-500">GLOBE EXPLORER</span>
            </h1>
            <p className="mt-5 text-center text-lg text-white opacity-90">Explore the world with us...</p>

            <HeroButton href="/continents" appendClass="animate-bounceLight">All Continents</HeroButton>
            <HeroButton href="/countries" appendClass="animate-bounceLight">All Countries</HeroButton>
            <HeroButton href="/layout2" appendClass="animate-bounceLight">Layout 2</HeroButton>

        </div>


    </div>



  )
}

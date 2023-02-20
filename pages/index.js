import Link from "next/link";
import Image from 'next/image'
import Hero from "@/components/Hero";

export default function Home() {
  return (

  <Hero/>



  )
}

Home.getLayout = function PageLayout(page){
  return(
    <>
    {page}
    </>
  )
}

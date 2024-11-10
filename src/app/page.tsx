'use client' ;

import Hero from "@/components/Hero";
import Projects from "@/components/project";
import Skill from "@/components/skill";
import image from "next/image";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    Aos.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,

    });
    Aos.refresh()
  } , [])
  return (
    <main>
      <Hero />
      <Projects/>
      <Skill/>
      <Contact/>
      <About/>
    </main >
 
  );
}

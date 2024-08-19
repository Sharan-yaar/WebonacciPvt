'use client';
import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from "next/image";
import {useScroll, useTransform ,motion} from "framer-motion";
import { useEffect, useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const{ scrollYProgress } = useScroll({
    target : containerRef,
    offset:['start end','end end']
  });

  useEffect(()=>{
    scrollYProgress.on("change",(value) => console.log("value",value));
  },[])

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section id="Contact">
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" 
    ref={containerRef}
    >
      <div className="container max-w-xl relative">
       <motion.div
        style={{ translateY }}
       >
       <Image 
        src={helixImage} 
        alt="" 
        className="hidden sm:inline absolute top-6 left-[calc(100%+36px)] " 
        />
        </motion.div>
        <motion.div style={{ translateY }}>
        <Image 
        src={emojiStarImage} 
        alt="" 
        className="absolute -top-[120px] right-[calc(100%+24px)]" 
        />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
        Stay in the Loop, Keep It Cool!
        </h2>
        <p className="text-xl text-white/70 mt-5">
        Don’t miss out on the magic—subscribe to our newsletter for the latest buzz, quirky updates, and exclusive sneak peeks. Get ready for insights delivered straight to your inbox. Hit that subscribe button and join our circle of awesomeness! 
        </p>
        <form className="mt-10 flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black hover:bg-purple-400 h-12 rounded-lg px-5">
            Subscribe
          </button>
        </form>
      </div>
      <a href="#"><p className=" justify-center mt-4 text-purple-400">Email : www.webonacci.co@gmail.com</p></a>
      <a href="https://wa.me/+919109036187"><p className=" justify-center mt-4 text-green-400">Whatsapp & Phone : +91 9109036187</p></a>
    </div>
    </section>
  )
}

export default CallToAction

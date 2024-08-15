'use client';
import appScreen from "../assets/images/Screenshot 2024-08-15 at 11.29.59 AM.png";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress} = useScroll({
    target : appImage,
    offset : ["start end","end end"]
    });
    useEffect(() => {
      scrollYProgress.on('change',(latestValue)=> 
        console.log('latestValue',latestValue))
    },[]);

    const rotateX = useTransform(scrollYProgress ,[0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress ,[0, 1],[0.5, 1]);
  return (
    <section id="Work">
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Our latest project
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-xl text-center text-white/70 mt-5">We are proud to present our latest e-commerce website, featuring a sleek and intuitive user interface designed to elevate the online shopping experience. With a clean, modern aesthetic and seamless navigation, our UI ensures effortless browsing and purchasing.
        </p>
        </div>
        <motion.div
         style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",
         }}
        >
          <a href="https://www.spoiltbrrat.com/">
        <Image 
          src={appScreen} 
          alt="The product screenshot" 
          className="mt-14"
          ref={appImage} 
        />
        </a>
        </motion.div>
      </div>
    </div>
    </section>
  )
};

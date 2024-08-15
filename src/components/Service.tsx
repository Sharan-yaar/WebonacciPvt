'use client';
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion" 
import Image from "next/image";
import reactLogo from '../assets/images/Vector.png'
import nextLogo from '../assets/images/skill-icons_nextjs-dark.png'
import jsLogo from '../assets/images/skill-icons_javascript.png'
import htmlLogo from '../assets/images/skill-icons_html.png';

const images = [
    { src: reactLogo, alt: "React Logo" },
    { src: nextLogo, alt: "Next Logo" },
    { src: jsLogo, alt: "Js Logo" },
    { src: htmlLogo, alt: "Html Logo" },
  ];
export const Service = ({
    title, 
    description,} :

    {title: string;
     description: string;
    }) => {
    
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border=useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);

        };
        window.addEventListener('mousemove',updateMousePosition)
        
        return () => {
            window.removeEventListener('mousemove',updateMousePosition);
        }
    })

    return (
        <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
              <motion.div 
              className="absolute inset-0 border-2 border-white rounded-xl" 
              style={{
                WebkitMaskImage:maskImage,
                maskImage:maskImage, 
              }}  
              ref={border}
              ></motion.div>
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
              <EcosystemIcon />
            
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
             </div>
    )
}
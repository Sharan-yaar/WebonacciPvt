'use client';
import reactLogo from '../assets/images/Vector.png'
import nextLogo from '../assets/images/skill-icons_nextjs-dark.png'
import jsLogo from '../assets/images/skill-icons_javascript.png'
import htmlLogo from '../assets/images/skill-icons_html.png'
import cssLogo from '../assets/images/skill-icons_css.png'
import shopifyLogo from '../assets/images/logos_shopify-2.png'
import figmaLogo from '../assets/images/logos_figma.png'
import Image from "next/image";
import {motion} from "framer-motion";

const images = [
  { src: reactLogo, alt: "React Logo" },
  { src: nextLogo, alt: "Next Logo" },
  { src: jsLogo, alt: "Js Logo" },
  { src: htmlLogo, alt: "Html Logo" },
  { src: cssLogo, alt: "Css Logo" },
  { src: shopifyLogo, alt: "Shopify Logo" },
  { src: figmaLogo, alt: "Figma Logo"},
];

export const LogoTicker = () => {
  return (
    <section id="Feature">
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Technologies we use</h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-10 after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] ">
          <motion.div 
           transition={{
             duration: 10,
             ease: "linear",
             repeat:Infinity,
           }}
           initial={{translateX: 0}}
           animate={{translateX: "-50%"}}
           className="flex gap-16 flex-none pr-16">
           {images.map(({src,alt})=> (
            <Image src={src} 
             alt={alt} 
             key={alt}
             className="flex-none h-15 w-auto" />
            ))}

            {images.map(({src,alt})=> (
            <Image src={src} 
             alt={alt} 
             key={alt}
             className="flex-none h-15 w-auto" />
            ))}
        </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};

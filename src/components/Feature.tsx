'use client';
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue /* , useSpring */ } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export const Feature = ({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      if (!border.current) return;
      const rect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - rect.x);
      offsetY.set(e.clientY - rect.y);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
        ref={border}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg mx-auto">
        <Image src={image} alt={alt} width={40} height={40} />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

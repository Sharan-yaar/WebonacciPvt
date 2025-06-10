'use client';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  primary: StaticImageData;
  hover: StaticImageData;
  alt: string;
  link: string;
}

const projects: Project[] = [
  {
    primary: require('../assets/images/Screenshot 2024-08-15 at 11.29.59 AM.png'),
    hover: require('../assets/images/hover.png'),
    alt: 'Spoilt Brrat screenshot',
    link: 'https://www.spoiltbrrat.com/',
  },
  {
    primary: require('../assets/images/apvaastu.png'),
    hover: require('../assets/images/hover.png'),
    alt: 'Project 2 screenshot',
    link: 'https://apvaastu.com/',
  },
  {
    primary: require('../assets/images/sowakabharat.png'),
    hover: require('../assets/images/hover.png'),
    alt: 'Project 3 screenshot',
    link: 'https://sowakabharat.shop/',
  },
];

const ProjectShowcaseItem = ({ project }: { project: Project }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end end']
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  
    return (
      <motion.div style={{ opacity, rotateX, transformPerspective: 800 }} className="mt-14">
        <div ref={containerRef} className="relative w-full max-w-xl h-[400px] mx-auto overflow-hidden">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 block"
            initial="rest"
            whileHover="hover"
          >
            {/* Primary image (default state) */}
            <motion.div
              variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.primary}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
  
            {/* Hover image on top */}
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.hover}
                alt={project.alt + " hover"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    );
  };
  

export const ProductShowcase = () => (
  <section id="Work">
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24 overflow-hidden">
      <div className="container text-center">
        <h2 className="text-5xl font-bold tracking-tighter">Our latest projects</h2>
        <p className="text-xl text-white/70 max-w-xl mx-auto mt-5">
        Explore our portfolio of polished web and e-commerce builds—each a blend of thoughtful design, modern frameworks, and performance‑focused execution. Discover the story behind the solution: the problem we solved, the tech we leveraged, and the impact delivered.”
        </p>
        {projects.map((proj, idx) => (
          <ProjectShowcaseItem key={idx} project={proj} />
        ))}
      </div>
    </div>
  </section>
);

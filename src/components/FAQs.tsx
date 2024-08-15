"use client";
import MinusIcon from "../assets/icons/minus.svg"
import PlusIcon from "../assets/icons/plus.svg"
import React from "react";
import clsx from "clsx";
import { AnimatePresence,motion } from "framer-motion";

const items = [
  {
    question: "What kind of support do you offer after the website is live",
    answer:
      "After the website is live, we offer ongoing support such as content updates, security monitoring, bug fixes, performance optimization, and SEO enhancements to ensure your site remains up-to-date and runs smoothly.",
  },
  {
    question: "Can you help with website maintenance and updates ?",
    answer:
      "Yes, We can help with website maintenance and updates, including tasks such as content updates, troubleshooting issues, optimizing for SEO, and more. Let us know what specific help you need, and we can get started!",
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer:
      "Yes, we offer comprehensive e-commerce solutions tailored to meet your business needs such as custom online stores, platform integration and responsive design.",
  },
  {
    question: "What is your process for starting a new web development project ?",
    answer:
      "Our process for starting a new web development project includes understanding your goals, defining the scope, creating a project plan, designing wireframes, developing the site, and finally, testing before launch. Collaboration and feedback are key at every stage.",
  },
];

const AccordianItem = ({question,answer}:{question: string; answer: string;}) => {
  const[isOpen, setIsOpen] = React.useState(false);
  return (
    
    <div className="py-7 border-b border-white/30" onClick={()=> setIsOpen(!isOpen)}>
    <div className="flex items-center "><span className="flex-1 text-lg font-bold">{question}</span>
    {isOpen ? <MinusIcon /> : <PlusIcon />}
    </div>
    <AnimatePresence>
    {isOpen && (
      <motion.div 
    initial={{
      opacity:0,
      height:0,
      marginTop:0,
    }}
    animate={{
      opacity:1,
      height:'auto',
      marginTop:'16px',
    }}
    exit={{
      opacity:0,
      height: 0,
      marginTop:0,
    }}
    >
      {answer}
      </motion.div>
    )}
    </AnimatePresence>
    
    </div>
  )
}

export const FAQs = () => {
  return (
    <section id="Faq">
    <div className="bg-black text-white py-[72px] sm:py-24"> 
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
            {items.map(({question,answer}) => (
              <AccordianItem question={question} answer={answer} key={question} />
            ))}
        </div>
      </div>
    </div>
    </section>
  );
};

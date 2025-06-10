'use client';
import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    scrollYProgress.on('change', (value) => console.log('scrollYProgress', value));
  }, [scrollYProgress]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.email as HTMLInputElement).value;
    setMsg(null);

    if (!email || !email.includes('@')) {
      setMsg('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('🎉 Thanks for subscribing!');
        form.reset();
      } else {
        setMsg(data.error || data.message || 'Subscription failed.');
      }
    } catch (err) {
      console.error(err);
      setMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="Contact">
      <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
        <div className="container max-w-xl relative">
          <motion.div style={{ translateY }}>
            <Image
              src={helixImage}
              alt=""
              className="hidden sm:inline absolute top-6 left-[calc(100%+36px)]"
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
            Don’t miss out—subscribe to our newsletter for the latest buzz, quirky updates, and
            exclusive sneak peeks!
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
              required
            />
            <button type="submit" className="bg-white text-black hover:bg-purple-400 h-12 rounded-lg px-5">
              Subscribe
            </button>
          </form>

          {msg && <p className="mt-4 text-center">{msg}</p>}

          <a href="#">
            <p className="justify-center mt-4 text-purple-400">Email: www.webonacci.co@gmail.com</p>
          </a>
          <a href="https://wa.me/+919109036187">
            <p className="justify-center mt-4 text-green-400">Whatsapp & Phone: +91 9109036187</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

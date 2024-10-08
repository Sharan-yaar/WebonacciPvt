import { Banner } from "@/components/Banner";
import {CallToAction} from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Services } from "@/components/Services";
export default function Home() {
  return (
    <>
    
    <Navbar />
    <Hero />
    <LogoTicker />
    <Features />
    <ProductShowcase />
    <Services />
    <FAQs />
    <CallToAction />
    <Footer />
    </>
  );
}

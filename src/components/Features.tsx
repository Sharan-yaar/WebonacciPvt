import { Feature } from "./Feature";
import pranavLogo from '../assets/images/pranav.png';
import amarjeetLogo from '../assets/images/amarjeet.png';
import sharanLogo from '../assets/images/sharan.png';
import maddyLogo from '../assets/images/maddy.png'; // !! to add co-founders photos to eliminate error !! //


const features = [
  {
    title: "Madhav Bihani",
    description:
      "Strategic marketer blending brand storytelling and digital finesse—crafting campaigns, driving conversions, and elevating web experiences with creative impact.",
    image: maddyLogo,
    alt: "Maddy logo",
  },
  {
    title: "Jagsharan Singh",
    description:
      "Front‑end developer blending sleek UI design, agile JavaScript frameworks, and pixel‑perfect responsiveness—crafting immersive, high‑performance experiences users love.",
    image: sharanLogo,
    alt: "Sharan logo",
  },
  {
    title: "Pranav Rasane",
    description:
      "Web developer fusing elegant code, modern frameworks, and performance-driven design—building seamless, responsive digital experiences that captivate users.",
    image: pranavLogo,
    alt: "Pranav logo",
  },
  {
    title: "Amarjeet Abdar",
    description:
      "Backend developer mastering APIs, databases, and server logic—ensuring secure, scalable architecture that powers seamless, high-performance web experiences.",
    image: amarjeetLogo,
    alt: "Amarjeet logo",
  },
];

export const Features = () => (
  <section id="Team">
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Meet the team
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Meet the creative minds powering Webonacci: a dynamic team blending web, design, marketing, and backend expertise to build high-impact, client-focused digital experiences.
          </p>
        </div>
        <div className="my-16 flex flex-col sm:flex-row gap-4">
          {features.map((feat) => (
            <Feature
              key={feat.title}
              title={feat.title}
              description={feat.description}
              image={feat.image}
              alt={feat.alt}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
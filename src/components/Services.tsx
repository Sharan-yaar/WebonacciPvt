import {Service} from "./Service"

const services = [
  {
    title: "Web Development",
    description:
      "At Webonacci we design and develop custom websites that reflect your brand’s identity and vision. Our team crafts visually stunning and user-centric websites that captivate visitors and drive engagement.",
  },
  {
    title: "UI development",
    description:
      "Our team of experienced UI designers and developers work closely with you to understand your brand, audience, and objectives. We translate these insights into bespoke designs that reflect your brand identity and resonate with your target audience.",
  },
  {
    title: "Rendering",
    description:
      "We create high-resolution, photorealistic renderings that bring your designs to life with meticulous detail. Whether you need visuals for architecture, product design, or other applications, our renderings capture the essence and intricacies of your project.",
  },
  {
    title: "Brand-book Development",
    description:
      "Our Brand Book Development service creates a comprehensive guide that defines your logo, colors, typography, and overall branding strategy to ensure a consistent and effective brand identity.",
  },
];

export const Services = () => {
  return (
    <section id="Services">
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Our Services
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">Explore our comprehensive suite of services tailored to meet your business web presence.
        </p>
        </div>
        <div className="my-16 flex flex-col sm:flex-row gap-4">
          {services.map(({title,description})=> (
            <Service title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
};

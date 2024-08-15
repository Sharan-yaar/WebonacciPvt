import { Feature } from "./Feature";

const features = [
  {
    title: "Madhav Bihani",
    description:
      "Marketing specialist with a knack for web development. Blending strategic insight with marketing skills to drive digital success and growth.",
  },
  {
    title: "Jagsharan Singh",
    description:
      "Front-end web developer crafting stunning, user-friendly websites with innovative design and cutting-edge technologies to enhance your online presence.",
  },
  {
    title: "Pranav Rasane",
    description:
      "A Web wizard in the making, Crafting innovative solutions for the digital age.",
  },
  {
    title: "Amarjeet Abdar",
    description:
      "Back-end developer specializing in robust, scalable solutions. Expertise in server-side logic, database management, and API integration to power your applications.",
  },
];

export const Features = () => {
  return (
    <section id="Team">
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Meet the team
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">Behind every successful project lies a dedicated team 
        of individuals driven by innovations and expertise. 
        Get to know the passionate minds powering social wave solution’s web dev and design endeavours
        </p>
        </div>
        <div className="my-16 flex flex-col sm:flex-row gap-4">
          {features.map(({title,description})=> (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
};

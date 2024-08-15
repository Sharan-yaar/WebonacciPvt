import ArrowWicon from '../assets/icons/arrow-w.svg';


export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
        <a href="https://webonacci.carrd.co/" 
          className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#FFFFFF,#B0AAFA,#FFFFFF)] text-transparent bg-clip-text [-webkit-background-clip:text]">Old Website</span>
          <span className="inline-flex items-center gap-1"> 
          <span>Go to link</span>
          <ArrowWicon />
          </span> 
        </a>
        </div>
        <div className="flex justify-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-center mt-8 inline-flex">We are developers <br /> who judge a book by its cover</h1>
        </div>
        <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
        Experience the water-like smooth flow of your website with our ingenious designs. We work and provide great results, like always
        </p>
        </div>
        <div className="flex justify-center mt-8">
        <a href="#Footer"><button className="bg-white text-black hover:bg-purple-400 py-3 px-5 rounded-lg font-medium">Contact us</button></a>
        </div>
      </div>
    </div>
  );
};

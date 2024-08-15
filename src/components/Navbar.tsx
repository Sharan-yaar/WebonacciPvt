import logoImage from '../assets/images/Frame 2-7.png'
import Image from 'next/image';
import MenuIcon from '../assets/icons/menu.svg'


export const Navbar = () => {
  return (
    <div className="bg-black">
     <div className="px-4">
      <div className="py-4 flex items-center justify-between">
       <div className="relative">
        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#B0AAFA,#5600AD,#FFFFFF,#B0AAFA,#5600AD)] blur-md"></div>
         <Image src={logoImage} 
         alt="Saas logo" 
         className="h-12 w-12 relative" 
         />
         </div>
          
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
        <MenuIcon className="text-white" />
      </div>

      <nav className="gap-4 items-center hidden sm:flex">
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</a>
        <a href="#Feature" className="text-opacity-60 text-white hover:text-opacity-100 transition">Technologies</a>
        <a href="#Team" className="text-opacity-60 text-white hover:text-opacity-100 transition">Team</a>
        <a href="#Work" className="text-opacity-60 text-white hover:text-opacity-100 transition">Work</a>
        <a href="#Faq" className="text-opacity-60 text-white hover:text-opacity-100 transition">FAQs</a>
        <a href="#Contact" className="text-opacity-60 text-white hover:text-opacity-100 transition">Enquiry</a>
        <a href="#Services" className="text-opacity-60 text-white hover:text-opacity-100 transition">Services</a>
        <a href="#Footer"><button className="bg-white hover:bg-purple-400 py-2 px-4 rounded-lg">Get Socials</button></a>
      </nav>
    </div>
  </div>
  </div>

  )
};

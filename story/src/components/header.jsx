import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-green-700 text-white shadow-2xl flex fixed z-20 top-0 w-full justify-between items-center p-8">
      {/* Logo Section */}
      <div>
        <img
          src="./Horizontal _Neo CFO_ Logo _ coloured@2x 1.png"
          alt="Logo"
          className="w-32"
        />
      </div>

      {/* Menu Section for large screens */}
      <div className="hidden md:flex justify-center gap-16">
        <span>Our Story</span>
        <span>Features</span>
        <span>Blogs</span>
      </div>

      {/* Schedule a Demo for large screens */}
      <div className="hidden md:flex justify-center items-center underline">
        <a href="#">Schedule a Demo </a>
        <GoArrowUpRight />
      </div>

      {/* Hamburger Menu Icon for small screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose onClick={()=>{

            }} size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {(
        <div className={`absolute top-16 h-[500px] left-0 w-full bg-green-700 flex  mt-10 flex-col justify-between shadow-xl md:hidden ${isMenuOpen ? "animate-rightlao":'animate-leftlao'}`}>
         <div className='ml-7'>
         <a href="#" className="p-4 items-center flex    w-full text-center">
            Our Story
          </a>
          <a href="#" className="p-4  flex w-full text-center">
            Features
          </a>
          <a href="#" className="p-4 flex  w-full text-center">
            Blogs
          </a>
         </div>

         <div className='flex flex-col gap-5 ml-5 mr-5 p-5 border-b border-gray-400'>
          <p className='w-[200px] rounded-lg  font-semibold'>Transform Your Financial Processes with Neo CFO</p>
         <button  className="py-3 rounded-lg text-white bg-black px-2 w-[180px] text-center underline flex justify-center items-center">
            Schedule a Demo
            <GoArrowUpRight />
          </button>
         </div>

         <div className='flex gap-8 ml-9 text-3xl mb-5 '>
         <IoLogoLinkedin className='cursor-pointer'/>
         <FaInstagram className='cursor-pointer'/>
         <FaSquareXTwitter className='cursor-pointer'/>
         </div>
         
        </div>
      )}
    </div>
  );
};

export default Navbar;

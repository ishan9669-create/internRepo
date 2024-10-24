import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = ({ bg, bgI }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        backgroundColor: bg || 'white',
        zIndex: '1',
        position: 'relative',
        background: `${isMenuOpen ? 'linear-gradient(rgba(100, 100, 100, 1),rgba(100, 100, 100, 1))' : ''}`
      }}
      className="shadow-2xl flex fixed z-20 top-0 w-full justify-between items-center p-1"
    >
      {/* Logo Section */}
      <div>
        <img
          src="./Horizontal _Neo CFO_ Logo _ coloured@2x 1.png"
          alt="Logo"
          className="w-32 cursor-pointer"
          onClick={() => {
            window.location.href = '/'
          }}
        />
      </div>

      {/* Menu Section for large screens */}
      <div className="hidden md:flex justify-center gap-16">
        <span className='cursor-pointer' onClick={() => {
          window.location.href = '/story'
        }}>Our Story</span>
        <span className='cursor-pointer' onClick={() => {
          window.location.href = '/feature'
        }}>Features</span>
        <span className='cursor-pointer' onClick={() => {
          window.location.href = '/blogpage'
        }}>Blogs</span>
      </div>

      {/* Schedule a Demo for large screens */}
      <div className="hidden md:flex justify-center items-center underline">
        <a
          className='cursor-pointer px-2 flex items-center bg-white py-1 text-xs rounded-lg text-green-700'
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/schedule'
          }}
        >Schedule a Demo  <GoArrowUpRight className='text-green-700' /></a>
      </div>

      {/* Hamburger Menu Icon for small screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose className='text-green-900' size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div
          style={{
            background: 'linear-gradient( rgba(100, 100, 100, 1),rgba(50, 50, 50, 1) ',
            backdropFilter: 'blur(55px)'
          }}
          className={`absolute top-10 left-0 w-full text-white bg-opacity-90 flex flex-col justify-between shadow-xl sm:hidden ${isMenuOpen ? 'animate-uparniche':'animate-nicheupar'}`}
        >
          <div className='ml-7 text-green-800'>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/story'
              }}
              className="p-4 items-center flex w-full text-center"
            >
              Our Story
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/feature'
              }}
              className="p-4 flex w-full text-center"
            >
              Features
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/blogpage'
              }}
              className="p-4 flex w-full text-center"
            >
              Blogs
            </a>
          </div>

          <div className='flex flex-col gap-5 ml-5 mr-5 p-5 border-b border-gray-400'>
            <p className='w-[200px] rounded-lg text-green-900 font-semibold'>
              Transform Your Financial Processes with Neo CFO
            </p>
            <button
              onClick={() => {
                window.location.href = '/schedule'
              }}
              className="py-3 rounded-md text-white bg-green-900 px-2 text-xs w-[180px] text-center underline flex justify-center items-center"
            >
              Schedule a Demo
              <GoArrowUpRight />
            </button>
          </div>

          <div className='flex gap-8 ml-5 mb-10 mr-10 mt-10'>
            <IoLogoLinkedin className='cursor-pointer text-2xl text-green-800' />
            <FaInstagram className='cursor-pointer text-2xl text-green-800' />
            <FaSquareXTwitter className='cursor-pointer text-2xl text-green-800' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

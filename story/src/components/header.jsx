import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-red-200 shadow-xl flex fixed z-20 top-0 w-full justify-between items-center p-5">
      {/* Logo Section */}
      <div>
        <img
          src="http://127.0.0.1:5500/future%20intern%20website/images/Horizontal%20_Neo%20CFO_%20Logo%20_%20coloured@2x%201.png"
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
            <AiOutlineClose size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-red-200 flex flex-col items-center shadow-xl md:hidden">
          <a href="#" className="p-4 border-b border-gray-300 w-full text-center">
            Our Story
          </a>
          <a href="#" className="p-4 border-b border-gray-300 w-full text-center">
            Features
          </a>
          <a href="#" className="p-4 border-b border-gray-300 w-full text-center">
            Blogs
          </a>
          <a href="#" className="p-4 w-full text-center underline flex justify-center items-center">
            Schedule a Demo
            <GoArrowUpRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

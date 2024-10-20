

import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/footer';




const ImageSlider = () => {
  const images = [
    {
      url:'./blur1.png'
    },
    {
      url:'./blur3.png'
    },
    {
     url:'./blur4.png'
    },
    {
      url:'./blur5.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bottom-[450px] w-full h-[400px] flex justify-center items-center overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            {/* <div className="backdrop-blur-sm bg-white/30 p-8 rounded-xl w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex flex-col justify-between text-center shadow-lg"> */}
            <img src={image.url} className='w-[300px]' alt="" />
              
            
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};





export default function Feature(){
    return (
        <div className='flex flex-col overflow-hidden'>
          <div id="first" className="flex flex-col mx-auto md:ml-20 gap-3 mt-32 sm:mt-20 md:mt-32 lg:mt-44 w-full sm:w-[90%] md:w-[450px] lg:w-[500px] px-4 ">
  {/* Heading Section */}
  <span className="text-lg sm:text-xl text-center md:text-left">Features</span>
  
  <h1 className="text-2xl sm:text-3xl font-semibold text-slate-700 text-center md:text-left">
    Discover Our <br />
    <i className="font-sans">Key Features</i>
  </h1>
  
  <p className="max-w-full sm:max-w-[90%] md:max-w-[450px] lg:max-w-[490px] text-slate-500 text-center md:text-left">
    Enhance efficiency, accuracy, and gain complete control over your financial management with our comprehensive solutions.
  </p>
</div>



    {/* image div */}

    <div className=" h-[500px] justify-center  items-center mt-32">
        <img src="./plant.png" alt="" className="w-full relative h-full"    />
        <ImageSlider/>
    </div>

    <div className="mt-20 sm:mt-30 md:mt-40 tracking-wider font-serif text-slate-700 flex justify-center text-center px-4 sm:px-8 lg:px-0">
  <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    <i className="font-normal">Experience</i> the Difference <br /> with Neo CFO
  </h1>
</div>

    
<div className="flex flex-col lg:flex-row gap-8 lg:gap-40 justify-center mt-10">
  {/* Text Section */}
  <div>
    {/* Title */}
    <div className="flex justify-center text-xl sm:text-2xl md:text-3xl mt-16 sm:mt-24 md:mt-32 text-slate-600">
      <p>Expert support: <br />Your partner in success</p>
    </div>

    {/* Description */}
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
      <p className="w-full sm:w-[400px] md:w-[500px] text-center sm:text-left font-semibold text-slate-600 text-lg sm:text-xl">
        Join the growing number of businesses that trust Neo CFO to optimize their financial operations and drive success.
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div
    style={{ backgroundColor: "#DAEEBD" }}
    className="mt-10 sm:mt-16 lg:mt-20 flex justify-center lg:justify-end w-full sm:w-[400px] md:w-[450px] max-w-lg rounded-lg"
  >
    <img src="./invoice.png" className="w-[90%] sm:w-[350px] md:w-[400px]" alt="Invoice" />
  </div>
</div>


    
    
    
   

   <div id="schedule-section">
            <h2>Transform Your Financial <br />Processes with Neo CFO</h2>
            <button id="schedule-btn" className="flex items-center">Schedule a Demo <GoArrowUpRight/></button>
  </div>
        
        <Footer/>
        </div>
    )
}
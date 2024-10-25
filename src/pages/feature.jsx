

import React, { useRef, useState } from 'react';
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

const storiesData = [
  { id: 1, image: './blur1.png', alt: 'Person 1' },
  { id: 2, image: './blur2.png', alt: 'Person 2' },
  { id: 3, image: './blur3.png', alt: 'Person 3' },
  { id: 4, image: './blur4.png', alt: 'Person 4' },
  { id: 4, image: './blur5.png', alt: 'Person 4' }
];

const StoryCarousel = () => {
  const [stories, setStories] = useState(storiesData);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  // Smooth transition duration
  const transitionDuration = 300; // in milliseconds

  // Scroll the carousel to the right
  const scrollRight = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    carouselRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    carouselRef.current.style.transform = `translateX(-500px)`; // Move one card width (300px)

    // After the transition ends, rearrange the order of stories
    setTimeout(() => {
      const firstStory = stories[0];
      const newStories = stories.slice(1).concat(firstStory);
      setStories(newStories);
      carouselRef.current.style.transition = 'none'; // Remove transition temporarily to reset position
      carouselRef.current.style.transform = 'translateX(0)'; // Reset position to 0
      setIsTransitioning(false);
    }, transitionDuration);
  };

  // Scroll the carousel to the left
  const scrollLeft = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    const lastStory = stories[stories.length - 1];
    const newStories = [lastStory].concat(stories.slice(0, -1));
    setStories(newStories);
    carouselRef.current.style.transition = 'none'; // Temporarily remove transition
    carouselRef.current.style.transform = `translateX(-500px)`; // Start from the left (to simulate last story appearing first)

    // After position is set, we apply the transition for smooth movement
    setTimeout(() => {
      carouselRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      carouselRef.current.style.transform = 'translateX(0)'; // Move smoothly to the 0 position
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }, 20); // Small delay to ensure transition applies
  };

  return (
    <div className="bottom-[580px] md:bottom-[500px] w-full h-[400px] flex justify-center items-center  relative   p-5 mt-8 rounded-lg">
        <div className="flex flex-col justify-center items-center mt-32 md:mt-5 text-center">
  <div className='flex md:mr-20 justify-end w-screen '>
  <div className="flex    gap-3 mt-2 md:mt-0">
    <button
        onClick={scrollLeft}
        className="  bg-[#FFFFFF33] text-[#FFFFFF] px-5 rounded-full hover:bg-gray-600 "
      >
        &lt;
      </button>

      <button
        onClick={scrollRight}
        className="    bg-[#FFFFFF33] text-[#FFFFFF] px-5 py-1 rounded-full hover:bg-gray-600 "
      >
        &gt;
      </button>
    </div>
  </div>
    
   
    <div
        className="flex gap-2 mb-72  h-[400px]"
        ref={carouselRef}
        style={{ transition: `transform ${transitionDuration}ms ease-in-out`, overflow: 'hidden' }}
      >
        {/* Story Cards */}
        {stories.map((story) => (
          <div
            key={story.id} 
            className="flex-shrink-0 w-72   rounded-lg  p-4 text-center"
          >
            <img src={story.image} alt={story.alt} className="w-full h-full  rounded-lg " />
          </div>
        ))}
      </div>
</div>
      {/* Left Arrow Button */}
      
      {/* Story Track Container */}
      

      {/* Right Arrow Button */}
     
    </div>
  );
};




export default function Feature(){
    return (
        <div className='w-full max-w- h-screen overflow-x-hidden'>
          <div id="first" className="flex flex-col mx-auto md:ml-20 gap-3 mt-32 sm:mt-20 md:mt-32 lg:mt-44 w-full sm:w-[90%] md:w-[450px] lg:w-[500px] px-4 ">
  {/* Heading Section */}
  <span className="text-lg sm:text-sm  md:text-left">Features</span>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700">
      Discover Our <i className="font-sans text-2xl sm:text-3xl md:text-4xl">Key Features</i>
    </h1>

  
  <p className="max-w-full sm:max-w-[90%] text-xs md:max-w-[450px] lg:max-w-[490px] text-slate-500 text-center md:text-left">
    Enhance efficiency, accuracy, and gain complete control over your financial management with our comprehensive solutions.
  </p>
</div>



    {/* image div */}

    <div className=" h-[800px] justify-center  items-center mt-32">
        <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnQlMjBtb25leXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full  relative h-full"    />
        <StoryCarousel/>
    </div>

    <div className="mt-20 sm:mt-30 md:mt-40 tracking-wider font-serif text-slate-700 flex justify-center text-center px-4 sm:px-8 lg:px-0">
  <h1 className=" font-semibold text-xl sm:text-2xl  ">
    <i className=" text-xl sm:text-2xl ">Experience</i> the Difference <br /> with Neo CFO
  </h1>
</div>

    
<div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-40 justify-center mt-10">
  {/* Text Section */}
  

  {/* Image Section */}
  <div
    style={{ backgroundColor: "#DAEEBD" }}
    className="mt-10 sm:mt-16 lg:mt-20 flex justify-center lg:justify-end w-[80%]  md:w-[400px] max-w-lg rounded-lg"
  >
    <img src="./invoice.png" className="w-[90%] md:w-[350px]" alt="Invoice" />
  </div>
  <div className='flex flex-col '>
    {/* Title */}
    <div className=" text-xl sm:text-2xl mx-9 sm:ml-0 sm:mx-0 md:text-3xl mt-16 sm:mt-24 md:mt-32 text-[#3B3B3B]">
      <div>Expert support:</div>
      <div>Your partner in success</div>
    </div>

    {/* Description */}
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
      <p className="w-full sm:w-[400px] ml-7 sm:ml-0 md:w-[500px] text-center sm:text-left  text-slate-600 text-xs ">
        Join the growing number of businesses that trust Neo CFO to optimize their financial operations and drive success.
      </p>
    </div>
  </div>
</div>


    
    
    
   
<div className='w-full  flex justify-center mt-40'>
       <div id="demo"  >
        <h1 className='text-xs md:text-2xl'>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button  className="flex items-center bg-white px-2 py-1" id="demobtn">Schedule a Demo <GoArrowUpRight/></button>

    </div>
       </div>
        <Footer/>
        </div>
    )
}

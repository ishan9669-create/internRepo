import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const storiesData = [
  { id: 1, image: './s1.png', alt: 'Person 1' },
  { id: 2, image: './s2.png', alt: 'Person 2' },
  { id: 3, image: './s3.png', alt: 'Person 3' },
  { id: 4, image: './image4.png', alt: 'Person 4' }
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
    carouselRef.current.style.transform = `translateX(-300px)`; // Move one card width (300px)

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
    carouselRef.current.style.transform = `translateX(-300px)`; // Start from the left (to simulate last story appearing first)

    // After position is set, we apply the transition for smooth movement
    setTimeout(() => {
      carouselRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      carouselRef.current.style.transform = 'translateX(0)'; // Move smoothly to the 0 position
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }, 20); // Small delay to ensure transition applies
  };

  return (
    <div className="relative w-full overflow-hidden p-5 mt-8 rounded-lg">
        <div className="flex flex-col justify-center items-center mt-32 md:mt-52 text-center">
  <h1 className="flex  flex-col md:flex-row  md:justify-around w-full items-center  text-lg md:text-2xl lg:text-4xl">
    <span className="text-xl md:text-2xl flex  "><i className='text-xl md:text-2xl'>Smart Finance</i>, Secure Data</span>
    
    <div className="flex gap-5 md:gap-6 mt-4 md:mt-0">
      <div className='bg-[#14494433] px-4 py-2 rounded-full cursor-pointer hover:bg-slate-500' onClick={scrollLeft}>
      <FaArrowLeft className='text-xs text-green-950 '/>
      </div>
   
      <div className='bg-[#14494433] px-4 py-2 rounded-full cursor-pointer hover:bg-slate-500' onClick={scrollRight}>
      <FaArrowRight className='text-xs text-green-950 '/>
      </div>
    </div>
  </h1>
</div>
      {/* Left Arrow Button */}
      
      {/* Story Track Container */}
      <div
        className="flex gap-1 mt-10 justify-center"
        ref={carouselRef}
        style={{ transition: `transform ${transitionDuration}ms ease-in-out`, overflow: 'hidden' }}
      >
        {/* Story Cards */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex-shrink-0 w-72   rounded-lg  p-4 text-center"
          >
            <img src={story.image} alt={story.alt} className="w-full h-[70%] object-cover rounded-lg mb-4" />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
     
    </div>
  );
};

export default StoryCarousel;

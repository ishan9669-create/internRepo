import React, { useRef } from 'react';

const Slider = () => {
  const containerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust based on how much to scroll
      behavior: 'smooth'
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 300, // Adjust based on how much to scroll
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative flex items-center w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-0 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-900 transition"
        onClick={scrollLeft}
      >
        &#10094;
      </button>

      {/* Container holding the divs */}
      <div
        className="flex overflow-x-auto scroll-smooth w-full space-x-4"
        ref={containerRef}
      >
        <div className="min-w-[300px] p-6 bg-gray-100 rounded-lg text-center">
          <img src="https://www.sinequa.com/wp-content/uploads/2023/08/6-Ways-a-Data-Driven-Approach-Helps-Your-Organization-Succeed-960.jpg" alt="Item 1" className="w-full h-40 object-cover mb-4" />
          <h3 className="font-semibold text-lg mb-2">Data-Driven Insights</h3>
          <p className="text-gray-600">Our platform seamlessly integrates with your financial systems, delivering comprehensive data insights.</p>
        </div>

        <div className="min-w-[300px] p-6 bg-gray-100 rounded-lg text-center">
          <img src="https://automationedge.com/es/wp-content/uploads/2020/08/AI-Powered-Automation-For-Managed-Service-Providers.jpg" alt="Item 2" className="w-full h-40 object-cover mb-4" />
          <h3 className="font-semibold text-lg mb-2">AI-Powered Automation</h3>
          <p className="text-gray-600">Intelligent algorithms automate repetitive tasks, improving efficiency and accuracy.</p>
        </div>

        <div className="min-w-[300px] p-6 bg-gray-100 rounded-lg text-center">
          <img src="https://codup.co/wp-content/uploads/2024/02/Benefits-of-Dynamic-Access-Control.png" alt="Item 3" className="w-full h-40 object-cover mb-4" />
          <h3 className="font-semibold text-lg mb-2">Rigid Access Control</h3>
          <p className="text-gray-600">Our platform strictly adheres to permissions set in the source application. Our results are updated in real time when it is fetched.</p>
        </div>

        {/* Add more divs as needed */}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-900 transition"
        onClick={scrollRight}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;

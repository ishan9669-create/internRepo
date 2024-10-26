import Footer from "../components/footer";
import '../css/read.css'
import { CiHeart } from "react-icons/ci";
import { LuCopy } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";


const storiesData = [
    { id: 1,button:'Finance', image: './dylan-calluy-JpflvzEl5cg-unsplash.jpg',text:'Top 5 Ways to Revolutionize Your Accounting Processes', alt: 'Person 1' },
    { id: 2, image: './austin-distel-744oGeqpxPQ-unsplash.jpg',text:'The Ultimate Guide toMaximizing Efficiency', alt: 'Person 2' ,button:'banking'},
    { id: 3,button:'Accounting', image: './exploreMore2.jpeg',text:'The Future of Financial Automation', alt: 'Person 3' },
    { id: 4, button:'Finance',image: './ExploreMore3.jpeg',text:'The Future of Financial Automation', alt: 'Person 4' }
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
       <div className="flex justify-between ">
            <h2 className="section-header text-[#144944]">Explore More</h2>
            <div className="view-more-btn">
                <button 
               onClick={scrollRight}
                className="bg-[#1449441A] py-1 px-2 text-[#144944] rounded-full text-xs">View More <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
        {/* Left Arrow Button */}
        
        {/* Story Track Container */}
        <div
          className="flex gap-10 rounded-lg sm:gap-5 w-full  flex-col md:flex-row mt-10"
          ref={carouselRef}
          style={{ transition: `transform ${transitionDuration}ms ease-in-out`, overflow: 'hidden' }}
        >
          {/* Story Cards */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="  w-[90%] relative h-[280px] sm:h-[250px] sm:ml-0  ml-3 bg-white bg-opacity-80 rounded-xl   text-center"
            >

              {/* the text */}
              <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="absolute   w-[90%] md:flex  md:justify-between top-2 left-2 text-white  ">
        <div className="px-2 py-1 rounded-full hidden md:block  text-xs sm:text-xs lg:text-xs bg-[#FFFFFF33] z-10">
        {story.button}
        </div>
        {/* <div className="justify-center flex   sm:hidden rounded-full w-6 h-6  bg-[#FFFFFF33] z-10 items-center">
            <GoArrowUpRight/>
        </div> */}
      </div>
      <div className="absolute bottom-2 left-4 right-4 z-10">
        <h2 style={{color:'#FFFFFF'}} className="text-md  text-left sm:text-lg font-semibold mb-2 ">
         {story.text}
        </h2>
        <p className=" text-xs sm:text-sm lg:text-md text-left mb-1" style={{color:'#FFFFFF99'}}>5 min read</p>
      </div>
              <img src={story.image} alt={story.alt} className="h-full w-full sm:h-[250px] rounded-xl   " />
            </div>
          ))}
        </div>
  
        {/* Right Arrow Button */}
       
      </div>
    );
  };
  import { CiSaveUp2 } from "react-icons/ci";
export default function Read(){
    return (
        <div className="overflow-x-hidden">
             <div className="flex w-[10rem] gap-4 justify-center sm:justify-start  flex-col sm:flex-row sm:w-full translate-y-20 items-start sm:items-center ml-4 sm:ml-0  sm:gap-64  ">
            
            
                <i className="fas fa-arrow-left  sm:translate-x-16 border p-2 text-[#829392] rounded-lg"></i> 
                <div className="blog-tag rounded-full text-[#144944] text-xs">Accounting</div>
            </div>
             <main className="blog-container mt-20">
            
        <article className="blog-content">
            
            
            <h1 className="text-3xl font-geist tracking-wider text-[#3B3B3B]">The Ultimate Guide to <br /> Maximizing Efficiency</h1>
            <p className="blog-intro mt-5 text-xs max-w-sm text-[#7A7A7A]">Every finance leader knows the challenges of dealing with economic uncertainty, making accurate forecasts, and cutting costs wisely. And that’s where automation steps in to lend a hand.</p>
            
            <hr/>
            <br />
            <div className="author-info text-xs text-[#7A7A7A] ml-2">Pratik Shah • 10 min read</div>
            <div className="image-container">
                <img alt="A hand holding a dollar bill with a blurred background of trees" className="rounded-2xl h-[24rem]" src="./ExploreMore3.jpeg" />
            </div>
            <div className="text-content">
                <h2 className="text-md font-semibold text-[#3B3B3B] ml-2">This process involves registering new vendors and getting them approved for business engagement. </h2>
                <p className="mt-5 text-[#7A7A7A]">
                Sticking to manual financial processes is like steering a sinking ship in a tech-driven world. Finance automation isn’t just a fleeting trend.

It’s the next big thing in finance. It promises to improve efficiency, reduce risk, increase accuracy, and support strategic decision-making.

Every finance leader knows the challenges of dealing with economic uncertainty, making accurate forecasts, and cutting costs wisely. And that’s where automation steps in to lend a hand.

For finance leaders, like CFOs, automation is a secret weapon. It helps ramp up performance efficiencies. It gives a big boost to cost efficiency. And helps get the maximum value from assets.

But don’t just take our word for it!

In a 2022 Gartner survey on Finance Technologies, 88% reported benefits from Robotic Process Automation (RPA). To name a few, improved efficiency, increased speed and agility, and a big boost to employee productivity.

Now, that’s worth considering, right?
                </p>
                <p className="text-[#7A7A7A]">
                The finance department has many workflows and processes. These involve different departments, people, systems, and data.

Performing these tasks manually not only reduces the efficiency of the entire system but also significantly impacts performance.

Finance automation is leveraging modern technologies like Artificial Intelligence (AI), Machine Learning (ML), and Robotic Process Automation (RPA) to streamline the process.

Automating finance processes makes the operation smoother. Reduces potential human errors. And saves valuable time for strategic planning.

Finance process automation is a key component in finance transformation. It provides real-time data intelligence and supports decision-making.
                </p>
               
            </div>
            <div className="text-content">
                <h3 className="text-md mt-5 font-semibold ml-2">Tapping AI to maintain the competitive edge A few working examples will help put this emphasis on automation into perspective. <br/>
                    Lorem ipsum dolor sit amet </h3>
                <p className="text-[#7A7A7A] mt-5">
                Automation provides clear benefits for finance leaders. It strengthens their capacity to drive strategic initiatives, cut costs, and produce precise financial reports.

Automating finance processes allows finance leaders to move their attention from regular, lengthy tasks to strategic tasks that add value.

This results in better productivity, cost-effectiveness, accuracy, and compliance. It also offers immediate financial insights, efficient risk management, and scalable solutions.

Here are some of the main benefits that finance automation can provide to leaders:
                </p>
                <div className="quote-content ">
                    "Automating finance processes allows finance leaders to move their attention from regular, lengthy tasks to strategic tasks that add value."
                </div>
                <p className="text-[#7A7A7A]">Check out our end of season subscription discounts with a Moneycontrol pro subscription absolutely free. Use code EOSO2021. Click here for details.</p>
                
            </div>
            <div className="text-content">
                <h3 className="mt-5 text-md font-semibold ml-2">Tapping AI to maintain the competitive edge A few working examples will help put this emphasis on automation into perspective. </h3>
                <p className="text-[#7A7A7A] mt-5">
                Take advantage of our AI-powered financial automation bundle. It saves you time in deployment and is cost-effective.

Find out more about our bundle here: Finance Automation Solutions- Buy Bundle; Save More (rpatech.ai)

If you’re unsure about how AI and RPA can benefit your business, schedule a free half-day discovery call with our experts. During this workshop, they’ll help you:

Identify the most suitable processes in your business for automation
Assess the feasibility and complexity of automation
Understand how to embark on your automation journey with confidence and ease

                </p>
            </div>
          
           
            <div className="blog-footer text-[#829392] flex gap-8 ml-2 items-center mt-7">
                <span className="flex  items-center">3<img src="./heart_833472.png" className="w-3 h-4"/></span>
                <LuCopy className="text-[#829392]"/>
                <CiSaveUp2 className="text-[#6d7575]"/>
            </div>
        </article>
    </main>

    <section className="card-container mt-20">
        
        
            <StoryCarousel/>
       

  
 




    </section>

    <div className='flex justify-center' >
  <div id="demo" style={{marginTop:"150px",height:'270px'}} >
        <h1 className='text-[#144944] font-geist'>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
            <div className='w-full bg-red-500 '>
            <button  className="flex items-center -translate-y-4 font-semibold font-geist bg-white text-[#144944]   px-4 py-2  rounded-sm " style={{fontSize:'12px'}}>SCHEDULE DEMO <GoArrowUpRight className="text-[#144944] text-xs"/></button>

            </div>

    </div>
  </div>

    <Footer/>
        </div>
    )
}

import Footer from "../components/footer";
import '../css/read.css'
import { CiHeart } from "react-icons/ci";
import { LuCopy } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";


const storiesData = [
    { id: 1, image: './photo1.png', alt: 'Person 1' },
    { id: 2, image: './image5.png', alt: 'Person 2' },
    { id: 3, image: './plant.png', alt: 'Person 3' },
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
       <div className="flex justify-between">
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
          className="flex gap-5 mt-10"
          ref={carouselRef}
          style={{ transition: `transform ${transitionDuration}ms ease-in-out`, overflow: 'hidden' }}
        >
          {/* Story Cards */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="w-[300px]   sm:w-[350px] sm:h-[280px] bg-white bg-opacity-80 rounded-lg shadow-lg  text-center"
            >
              <img src={story.image} alt={story.alt} className="h-full w-[350px] sm:h-[280px]  rounded-lg " />
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
            <p className="blog-intro mt-5 text-xs max-w-sm text-[#7A7A7A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. fugit perspiciatis quas voluptas ipsum id voluptatem itaque</p>
            
            <hr/>
            <br />
            <div className="author-info text-xs text-[#7A7A7A] ml-2">Pratik Shah • 10 min read</div>
            <div className="image-container">
                <img alt="A hand holding a dollar bill with a blurred background of trees" className="rounded-2xl h-[24rem]" src="./ExploreMore3.jpeg" />
            </div>
            <div className="text-content">
                <h2 className="text-md font-semibold text-[#3B3B3B] ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Nullam id cursus ante. Phasellus aliquet </h2>
                <p className="mt-5 text-[#7A7A7A]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                </p>
                <p className="text-[#7A7A7A]">
                    Nunc quis ultricies sem, ac efficitur libero. Ut ac massa ex. Morbi elementum sapien id purus
                    rhoncus, id dictum ex viverra. Curabitur nisi magna, malesuada lacinia nunc sed, semper sodales
                    neque. Nulla sem arcu, vulputate eget tristique nec, euismod vitae sem. Etiam nisi risus, accumsan
                    id lacus quis, congue sollicitudin erat. Ut malesuada lorem id erat semper, ac fringilla magna
                    sodales. Suspendisse potenti. Phasellus vulputate justo eget fringilla consectetur. Pellentesque nec
                    sem vitae mi sodales aliquet in eu nisi. Vestibulum vehicula metus ac finibus viverra. Proin
                    suscipit dolor sed odio fermentum, congue tincidunt sapien semper. Sed ornare dapibus ultricies.
                </p>
               
            </div>
            <div className="text-content">
                <h3 className="text-md mt-5 font-semibold ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Lorem ipsum dolor sit amet </h3>
                <p className="text-[#7A7A7A] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                </p>
                <div className="quote-content ">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa at dui rutrum placerat."
                </div>
                <p className="text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa at dui rutrum placerat.</p>
                
            </div>
            <div className="text-content">
                <h3 className="mt-5 text-md font-semibold ml-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Lorem ipsum dolor sit amet </h3>
                <p className="text-[#7A7A7A] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                    Pellentesque consectetur scelerisque lectus, eget tincidunt odio suscipit ut.
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

    <div className='w-full  flex justify-center mt-20'>
       <div id="demo"  >
        <h1 className='text-xs md:text-2xl'>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button  className="flex items-center bg-white px-2 py-1 rounded-md">Schedule a Demo <GoArrowUpRight/></button>

    </div>
       </div>

    <Footer/>
        </div>
    )
}

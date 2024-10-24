import { GoArrowUpRight } from 'react-icons/go'
import Footer from '../components/footer'
import '../css/blog.css'
export default function Blogpage(){
    return (
      
        <div className='w-full max-w-screen overflow-x-hidden'>
            <main class="blog-section mx-auto p-24">
    <div class="container  py-10 ">

    <div class="flex justify-between items-center w-full md:w-auto mx-auto"
    style={{fontFamily: 'Geist', font: '400', color: '#000000'}}>
    <h2 class="text-sm sm:text-md md:text-md leading-tight">Blogs</h2>
</div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-bold mb-6 md:mb-10 w-full lg:w-[939px] lg:h-auto "
    style={{fontFamily: 'Geist', fontWeight: '400', letterSpacing: '-0.04em', color: '#000000', transform: 'rotate(-0.08deg)', lineHeight: '1.2'}}>
    Insights & Innovations:
    <br/>Let's Explore the <i className='text-3xl sm:text-4xl md:text-5xl lg:text-3xl '>Future of Finance</i>
</h1>

<div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 space-y-4 sm:space-y-0 overflow-x-auto py-4">
  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">All</button>
  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" style={{ color: '#829392' }}>Finance</button>
  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" style={{ color: '#829392' }}>Banking</button>
  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" style={{ color: '#829392' }}>Accounting</button>
  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" style={{ color: '#829392' }}>Lorem</button>
</div>


      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-32">

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{backgroundImage: "url('./dylan-calluy-JpflvzEl5cg-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: "center", height: "300px"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-md z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
         style={{backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: "center", height: "300px"}}
         >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg z-10">Banking</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">The Ultimate Guide to
              Maximizing Efficiency</h2>
            <p className="text-gray-200 mb-2">10 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{backgroundImage: "url('./photo1.png')", backgroundSize: 'cover',backgroundPosition: 'center', height: '300px'}}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg z-10">Lorem</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">The Future of Financial Automation</h2>
            <p className="text-gray-200 mb-2">8 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{backgroundImage: "url('./photo1.png')", backgroundSize: 'cover',backgroundPosition: 'center', height: '300px'}}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute top-2 left-2 text-white text-lg font-bold z-10">Lorem</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">The Future of Financial Automation</h2>
            <p className="text-gray-200 mb-2">8 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{backgroundImage: "url('./dylan-calluy-JpflvzEl5cg-unsplash.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.jpg')",backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg font-bold z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
        style={{backgroundImage: "url('./dylan-calluy-JpflvzEl5cg-unsplash.jpg')",backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}}
          >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
        style={{backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.jpg')",backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}}
          >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg font-bold z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden"
         style={{backgroundImage: "url('./photo1.png')",backgroundSize: 'cover', backgroundPosition: 'center', height: '300px'}}
       >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-2 left-2 text-white text-lg font-bold z-10">Finance</div>
          <div className="absolute bottom-2 left-6 right-6 z-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Top 5 Ways to Revolutionize Your Accounting Processes
            </h2>
            <p className="text-gray-200 mb-2">5 min read</p>
          </div>
        </div>
      </div> */}
  <div className="flex flex-col items-center  w-full sm:grid   sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-32">
  {/* Card 1 */}
  <div
    className="relative   bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./dylan-calluy-JpflvzEl5cg-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Finance
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2 style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 ">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>5 min read</p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Banking
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2  style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        The Ultimate Guide to Maximizing Efficiency
      </h2>
      <p className="text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>10 min read</p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./photo1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Lorem
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2  style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        The Future of Financial Automation
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>8 min read</p>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./dylan-calluy-JpflvzEl5cg-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Finance
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2  style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>5 min read</p>
    </div>
  </div>

  {/* Card 5 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Finance
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2   style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>5 min read</p>
    </div>
  </div>

  {/* Card 6 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./photo1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Lorem
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2   style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        The Future of Financial Automation
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>8 min read</p>
    </div>
  </div>
{/* card 7 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./austin-distel-744oGeqpxPQ-unsplash.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Lorem
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2   style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        The Future of Financial Automation
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>8 min read</p>
    </div>
  </div>

  {/* card 8 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./photo1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Lorem
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2   style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
        The Future of Financial Automation
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>8 min read</p>
    </div>
  </div>

  {/* card 9 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-[90vw] sm:w-full"
    style={{
      backgroundImage: "url('./photo1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px'
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute top-2 left-2 text-white text-xs sm:text-sm lg:text-md z-10">
      Lorem
    </div>
    <div className="absolute bottom-2 left-4 right-4 z-10">
      <h2   style={{color:'#FFFFFF'}} className="text-lg sm:text-xl lg:text-xl font-semibold mb-2 text-white">
      The Ultimate Guide to
Maximizing Efficiency
      </h2>
      <p className=" text-xs sm:text-sm lg:text-md mb-1" style={{color:'#FFFFFF99'}}>8 min read</p>
    </div>
  </div>
</div>

    <div className='w-full sm:w-[70vw] '>
    <div id="pagination" className='flex gap-1 justify-between'>
        <span id="pagination-info">Page 1 of 10</span>
        <button id="pagination-button"><i style={{backgroundColor:'#14494433' ,padding:'5px',color:'#144944'}} class="fa-solid fa-angles-left"></i></button>
        <button id="pagination-button"><i style={{backgroundColor:'#14494433',padding:'5px',color:'#144944'}} class="fa-solid fa-angle-left"></i></button>
        <button id="pagination-button"><i style={{backgroundColor:'#14494433',padding:'5px',color:'#144944'}} class="fa-solid fa-angle-right"></i></button>
        <button id="pagination-button"><i style={{backgroundColor:'#14494433',padding:'5px',color:'#144944'}} class="fa-solid fa-angles-right"></i></button>
      </div>
    </div>
    

    </div>
  </main> 


  <div id="demo">
        <h1>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button  className="flex items-center bg-white px-2 py-1" id="demobtn">Schedule a Demo <GoArrowUpRight/></button>

    </div>
 

  <Footer/>
        </div>
    )
}

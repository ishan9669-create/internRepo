import Footer from '../components/footer'
import '../css/blog.css'
export default function Blogpage(){
    return (
        <div>
            <main class="blog-section mx-auto p-24">
    <div class="container mx-auto px-6 py-10 ">

    <div class="flex justify-between items-center w-full md:w-auto mx-auto"
    style={{fontFamily: 'Geist', font: '400', color: '#000000'}}>
    <h2 class="text-xl sm:text-2xl md:text-3xl leading-tight">Blogs</h2>
</div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 w-full lg:w-[939px] lg:h-auto mx-auto"
    style={{fontFamily: 'Geist', fontWeight: '400', letterSpacing: '-0.04em', color: '#000000', transform: 'rotate(-0.08deg)', lineHeight: '1.2'}}>
    Insights & Innovations:
    <br/>Let's Explore the <i>Future of Finance</i>
</h1>

      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 space-y-4 sm:space-y-0 overflow-x-auto py-4">
  <button className="px-4 py-2 bg-blue-600 text-white rounded">All</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Finance</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Banking</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Accounting</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Lorem</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Lorem</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Lorem</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Lorem</button>
  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Lorem</button>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-32">
  {/* Card 1 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">5 min read</p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        The Ultimate Guide to Maximizing Efficiency
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">10 min read</p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        The Future of Financial Automation
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">8 min read</p>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">5 min read</p>
    </div>
  </div>

  {/* Card 5 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        Top 5 Ways to Revolutionize Your Accounting Processes
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">5 min read</p>
    </div>
  </div>

  {/* Card 6 */}
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <div className="absolute bottom-2 left-6 right-6 z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-white">
        The Future of Financial Automation
      </h2>
      <p className="text-gray-200 text-xs sm:text-sm lg:text-md mb-2">8 min read</p>
    </div>
  </div>
</div>

      <div id="pagination">
        <span id="pagination-info">Page 1 of 10</span>
        <button id="pagination-button"><i class="fa-solid fa-angles-left"></i></button>
        <button id="pagination-button"><i class="fa-solid fa-angle-left"></i></button>
        <button id="pagination-button"><i class="fa-solid fa-angle-right"></i></button>
        <button id="pagination-button"><i class="fa-solid fa-angles-right"></i></button>
      </div>

    </div>
  </main> 

  <section className="relative bg-blue-500 text-white p-6 sm:p-10 h-auto sm:h-[300px] rounded-lg flex flex-col justify-center items-start mb-16 mx-4 sm:mx-24" 
    style={{ backgroundImage: "url('./BackGround2.png')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}>
    
    {/* Overlay for the dark background effect */}
    <div className="absolute inset-0 bg-gray-500 bg-opacity-50 rounded-lg"></div>
    
    {/* Content */}
    <div className="relative z-10">
        <h2 className="text-lg sm:text-2xl text-black font-semibold leading-snug">
            Transform Your Financial <br className="hidden sm:block"/> Processes with NEO CFO
        </h2>
        <a href="#" className="mt-4 bg-white text-blue-500 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center">
            SCHEDULE A DEMO
            <span className="ml-2 flex items-center">
                <img src="./top-right.png" alt="Arrow" style={{ height: '14px', width: '14px' }}/>
            </span>
        </a>
    </div>
</section>


  <Footer/>
        </div>
    )
}
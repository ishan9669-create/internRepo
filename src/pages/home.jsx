import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import Footer from '../components/footer';
import { GoArrowUpRight } from "react-icons/go";
import Navbar from '../components/header';
export default function Home(){
    const nav = useNavigate()

    function ImageHolder(e){
        const imgHolder = document.querySelector('#img_holder')
        imgHolder.addEventListener("wheel", (event) => {
          event.preventDefault();
          imgHolder.scrollLeft += event.deltaY; // Scroll horizontally when scrolling vertically
        });
    }
    return (
        <div className='overflow-x-hidden'>
            
            <div id="home"  className='w-[100%]' >
            <Navbar bg={'#FFFFFF33'}/>
        <div id="hero"  >
            <div id="heroText"  >
                <h1 style={{marginTop:'4.5rem'}}>Revolutionize Your <br/> Financial Processes </h1>
                <h2>With NEO CFO</h2>
                <p>Streamline Accounting, Finance and Taxation with our cutting edge automation platform with our best
                    in class Integrations</p>
            </div>
            <div id="heroImage" className='mt-10'>
                <img src="./87e2fdadeb7913c22c77c8da3e3b97a3.png" alt="image"/>
            </div>
        </div>
            </div>


            {/* community */}
            <div id="community" className='-translate-y-2'>
                <p>Join the growing community of enterprises thriving with Neo CFO</p>
            </div>

            {/* Our story */}
            <section id="ourStory">
        <p style={{fontSize:'20px'}}>Our Story</p>
        <h3 style={{color: '#3B3B3A;'
}}>Neo CFO was founded with a mission to <br/>
            <i style={{fontFamily: 'Playfair Display, serif'}}>simplify financial management</i> for modern businesses.
        </h3>
        <button href="" id="btn-know-now" className=' flex items-center text-xs'  onClick={()=>{
            window.location.href = '/story'
        }}>Know More <GoArrowUpRight/> </button>


        <div id="neocfo" className=''>
            <div className='flex flex-col overflow-y-scroll h-72 no-scrollbar'>
            <img src="./photo1.png" alt=""/>
            <img src="https://plus.unsplash.com/premium_photo-1661768403712-bbf979d9af30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwdXNpbmclMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

            </div>
           
            <div className='flex  flex-col overflow-y-scroll  h-72 no-scrollbar'>
            <p className='mt-40 text-slate-500'>
                <h1 className='text-black font-semibold text-lg w-full'>What is NEO CFO ?</h1> <br/>
                Neo CFO is an advanced financial automation platform designed to streamline and simplify finance
                management for businesses of all sizes. From automating accounting entries, GST taxation, and
                procure-to-pay processes, to integrating seamlessly with major accounting platforms and government
                portals.

            </p>


            <br />

            <p className='mt-32 text-slate-500'>
                <h1 className='w-full text-black font-semibold text-lg'>Our Mission</h1> <br/>
                Our mission is to shift the ratio from spending 80% of time on data preparation to allocating 80% of time to meaningful data insights and financial analytics

            </p>

            <br /><br />
            <p className='mt-32 text-slate-500 '>
                <h1 className=' w-full text-black text-lg font-semibold'>The Visionary Behind NEO CFO</h1> <br/>
                Founded by Pratik , who combines the technical acumen of a Chartered Accountant with the strategic Vision of an MBA from IIM Bangalore, NEO CFO is dedicated to transforming the way finance professionals work.

            </p>
            </div>
           
        </div>
    </section>

    <div className='flex flex-col items-center px-4 md:px-6 lg:px-8'>
  <h1 className='flex flex-col md:flex-row justify-center items-center gap-2 text-2xl md:text-3xl lg:text-2xl text-center'>
    Empower Your <i className='text-2xl md:text-3xl lg:text-2xl'>Finance Operations</i>
  </h1>

  <h1 className='flex justify-center text-2xl md:text-3xl lg:text-2xl text-center mt-2'>
    with NEO CEO
  </h1>

  <p className='flex justify-center max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] text-[14px] sm:text-[16px] lg:text-[16px] text-center text-slate-500 mt-4'>
    At Neo CFO, we bring advanced automation to your finance operations, enabling seamless and efficient management of complex financial processes. 
    Here are the top features that make Neo CFO the go-to platform for businesses.
  </p>

  <button onClick={()=> window.location.href = '/feature'} className='flex items-center mt-3 px-4 sm:px-3 py-2 bg-slate-200 text-green-700 rounded-full text-[14px] sm:text-[16px]'>
    Learn More <GoArrowUpRight/>
  </button>
</div>


    <div id="img-slider">
        <div id="img_holder" onWheel={ImageHolder}>
            <img src="./image1.png" alt="Image 1" />
            <img src="./image2.png" alt="Image 2" />
            <img src="./image3.png" alt="Image 3" />
            <img src="./image4.png" alt="Image 4" />
            <img src="./image5.png" alt="Image 5" />
        </div>
    </div>


{/* reviews section */}
<br/>
    <br/>
    <br/>
    <section id="Reviews">
        <h1>What Our Customers Are Saying: <br/>
            <i style={{fontFamily:" Playfair Display, serif "}}>Real Success Stories</i> with Neo CFO
        </h1>
        <br/>
{/* #FFFFFF80 */}
        <div id="main-div">
            <div id="testimonials-container">
                <div id="testimonials-track">
                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center '>
                        <img src="./ReviewImage3.jpeg" alt="Person 1"/>

                        <div className='flex flex-col text-[14px] justify-center   w-full'>
                        <h3 className='text-green-950'>Kevin S</h3>
                        <p className=' text-[14px] text-green-800'>Founder of a Startup</p>
                        </div>
                        
                        </div>
                        <p className='text-[14px]   text-green-950'>
 "Neo CFO has completely transformed how I manage finances, allowing me to focus more on growing my business!"
</p>
                    </div>
                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src=".//ReviewImage2.jpeg" alt="Person 2" />

                        <div className='flex flex-col text-[14px] justify-center w-full'>
                        <h3 className='text-green-950'>Rebecca T</h3>
                        <p className='text-[14px] text-green-800'>Head of Finance</p>
                        </div>
                        </div>
                        <p className='text-[14px] text-green-950'>"Automating repetitive tasks with Neo CFO has freed up my time for more strategic work—game-changing!"</p>
                    </div>
                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <div className='flex flex-col text-[14px] justify-center   w-full'>
                        <h3 className='text-green-950'>Rahul</h3>
                        <p className='text-[14px] text-green-800'>Small Business Owner

</p>
                        </div>
                        </div>
                        
                        <p className='text-[14px] text-green-950'>"The GST integration is seamless. I no longer worry about tax filing errors—it’s all handled for me!"

</p>
                    </div>

                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <div className='flex flex-col text-[14px] items-center   w-full'>
                        <h3 className='text-green-950'>Priyanka</h3>
                        <p className='text-[14px] text-green-800'>Founder

</p>
                        </div>
                        </div>
                        
                        <p className='text-[14px] text-green-950'>"Neo CFO has made financial reporting incredibly simple, saving hours every month on closing the books!"

</p>
                    </div>

                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <div className='flex flex-col text-[14px] justify-center   w-full'>
                        <h3 className='text-green-950'>Nithin</h3>
                        <p className='text-[14px] text-green-800'>Finance Manager

</p>
                        </div>
                        </div>
                        
                        <p className='text-[14px] text-green-950'>"The integration with our accounting software was flawless. Neo CFO truly makes multi-org management easy!"

</p>
                    </div>

                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <div className='flex flex-col text-[14px] justify-center w-full'>
                        <h3 className='text-green-950'>Kishor S</h3>
                        <p className='text-[14px] text-green-800'>SME Business Owner

</p>
                        </div>
                        </div>
                        
                        <p className='text-[14px] text-green-950'>"Neo CFO’s AI-driven categorization of expenses has eliminated the guesswork—what a relief!"

</p>
                    </div>

                   


                    
                </div>
            </div>
        </div>




     


    </section>
           

           {/* blogs */}
           <br/>
    <br/>
    <br/>
    <div  id="blog-container">
        <div id="blog-text">

            <p>Blogs</p>
            <div>
                
            </div>
            <div className='flex items-end justify-between'>
            <h2>Insights & Innovations: <br/>
                Let’s Explore the <i style={{fontFamily: "Playfair Display, serif "}}>Future of Finance</i></h2>
            <button className='flex mr-24    items-center  text-green-700' style={{backgroundColor:'#FFFFFF1A',
                borderRadius:"20px",fontSize:"14px"
            }} onClick={()=>{
                window.location.href = '/blogpage'
            }}>Read More <GoArrowUpRight/></button>
            </div>
            
        </div>
        <div id="Blogs">
            <div id="blog">
                <img src="./ExploreMore1.jpeg"   alt="" />
                <h4>Top 5 Ways to Revolutionize Your <br/>Accounting Processes</h4>
                <p>5 min read</p>
            </div>
            <div id="blog">
            <img src="./ExploreMore3.jpeg"   alt="" />
                <h4>The Ultimate Guide to <br/> Maximizing Efficiency</h4>
                <p>10 min read</p>
            </div>
            <div id="blog">
            <img src="./exploreMore2.jpeg"   alt="" />
                <h4>The Future of <br/>Financial Automation</h4>
                <p>5 min read</p>
            </div>
        </div>
        <br/><br/><br/>
    </div>
    <br/>
    <br/>
{/* demo */}
  <div className='flex justify-center'>
  <div id="demo" style={{marginTop:"150px"}}>
        <h1>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button  className="flex items-center bg-white px-2 py-1" id="demobtn">Schedule a Demo <GoArrowUpRight/></button>

    </div>
  </div>
    <br/>

    <br/>

    <Footer/>
        </div>
    )
}

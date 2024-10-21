import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import Footer from '../components/footer';
import { GoArrowUpRight } from "react-icons/go";
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
        <div>
            <div id="home" className='mt-10'>
        <div id="hero">
            <div id="heroText" className='mt-10'>
                <h1>Revolutionize Your <br/> Financial Processes </h1>
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
        <button href="" id="btn-know-now" className=' flex items-center text-xs' >Know More <GoArrowUpRight/> </button>

        <div id="neocfo">
            <img src="./photo1.png" alt=""/>
            <p>
                <strong>What is NEO CFO ?</strong> <br/>
                Neo CFO is an advanced financial automation platform designed to streamline and simplify finance
                management for businesses of all sizes. From automating accounting entries, GST taxation, and
                procure-to-pay processes, to integrating seamlessly with major accounting platforms and government
                portals.

            </p>
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

  <button className='flex items-center mt-3 px-4 sm:px-3 py-2 bg-slate-200 text-green-700 rounded-full text-[14px] sm:text-[16px]'>
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

                        <div className='flex flex-col text-[14px] justify-center'>
                        <h3 className='text-green-950'>Fathima Sheika</h3>
                        <p className='text-[14px] text-green-800'>Founder, Lorem Ipsum</p>
                        </div>
                        
                        </div>
                        <p className='text-[12px] text-green-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut urna dapibus, pulvinar sapien eu, facilisis risus. Curabitur lacinia, est non elementum commodo, augue mauris viverra dui, id pulvinar nunc dolor id orci. Nullam commodo, augue nec euismod tincidunt, leo tortor lacinia arcu, at consectetur magna arcu et felis.</p>
                    </div>
                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src=".//ReviewImage2.jpeg" alt="Person 2" />

                        <div className='flex flex-col text-[14px] justify-center'>
                        <h3 className='text-green-950'>Harry Williams</h3>
                        <p className='text-[14px] text-green-800'>Founder, Lorem Ipsum</p>
                        </div>
                        </div>
                        <p className='text-[12px] text-green-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut urna dapibus, pulvinar sapien eu, facilisis risus. Curabitur lacinia, est non elementum commodo, augue mauris viverra dui, id pulvinar nunc dolor id orci. Nullam commodo, augue nec euismod tincidunt, leo tortor lacinia arcu, at consectetur magna arcu et felis.</p>
                    </div>
                    <div id="testimonial" style={{backgroundColor:'#FFFFFF80'}}>
                        <div className='flex items-center'>
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <div className='flex flex-col text-[14px] justify-center'>
                        <h3 className='text-green-950'>Lary</h3>
                        <p className='text-[14px] text-green-800'>Founder, Lorem Ipsum</p>
                        </div>
                        </div>
                        
                        <p className='text-[12px] text-green-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut urna dapibus, pulvinar sapien eu, facilisis risus. Curabitur lacinia, est non elementum commodo, augue mauris viverra dui, id pulvinar nunc dolor id orci. Nullam commodo, augue nec euismod tincidunt, leo tortor lacinia arcu, at consectetur magna arcu et felis.</p>
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
            <h2>Insights & Innovations: <br/>
                Let’s Explore the <i style={{fontFamily: "Playfair Display, serif "}}>Future of Finance</i></h2>
            <button onClick={()=>{
                window.location.href = '/blogpage'
            }}>Read More <i
                    class="fa-solid fa-arrow-up-right-from-square"></i></button>
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
    <div id="demo">
        <h1>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button id="demobtn">Schedule a Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></button>

    </div>
    <br/>

    <br/>

    <Footer/>
        </div>
    )
}

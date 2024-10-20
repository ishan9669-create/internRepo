import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import Footer from '../components/footer';
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
            <div id="community">
                <p>Join the growing community of enterprises thriving with Neo CFO</p>
            </div>

            {/* Our story */}
            <section id="ourStory">
        <p>Our Story</p>
        <h3>Neo CFO was founded with a mission to <br/>
            <i style={{fontFamily: 'Playfair Display, serif'}}>simplify financial management</i> for modern businesses.
        </h3>
        <a href="" id="btn-know-now">Know Now <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>

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

        <div id="main-div">
            <div id="testimonials-container">
                <div id="testimonials-track">
                    <div id="testimonial">
                        <img src="./ReviewImage3.jpeg" alt="Person 1"/>
                        <h3>Fathima Sheika</h3>
                        <p>Founder, Lorem Ipsum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div id="testimonial">
                        <img src=".//ReviewImage2.jpeg" alt="Person 2"/>
                        <h3>Harry Williams</h3>
                        <p>Founder, Lorem Ipsum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div id="testimonial">
                        <img src="./ReviewImage.jpeg" alt="Person3"/>
                        <h3>Lary</h3>
                        <p>Founder, Lorem Ipsum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    
                </div>
            </div>
        </div>




     


    </section>
           

           {/* blogs */}
           <br/>
    <br/>
    <br/>
    <div class="blog-container" id="blog-container">
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
                <h4>Top 5 Ways to Revolutionize Your <br/>Accounting Processes</h4>
                <p>5 min read</p>
            </div>
            <div id="blog">
                <h4>The Ultimate Guide to <br/> Maximizing Efficiency</h4>
                <p>10 min read</p>
            </div>
            <div id="blog">
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
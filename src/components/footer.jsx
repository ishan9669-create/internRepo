import '../css/style.css'
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
    return (
        
        <footer id="footer" >
        <div id="footer-container">
            <div id="footer-up">
                <div id="footer-up-left">
                    <img src="./Horizontal _Neo CFO_ Logo _ White@2x 1 (1).png" alt="logo"/>
                    <p>Empowering India's Businesses,One Click at a Time.</p>
                    <img src="./Property 1=Default.png" alt="email"/>
                </div>
                <div id="footer-up-right" className='flex  text-white sm:flex-row flex-col w-[200px] justify-between items-start ml-3 '>
                    <div >
                        <li  style={{fontSize:'12px' ,color:'white'}}>Products</li>
                        <li  ><a href="#"  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/feature'
                        }}>Features</a></li>
                    </div>
                    <div>
                        <li  style={{fontSize:'12px',color:'white'}}>Company</li>
                        <li><a  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/story'
                        }} href="#">Our Story</a></li>
                        <li><a  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/blogpage'
                        }} href="#">Blogs</a></li>
                        <li><a style={{fontSize:'12px',color:'white',marginTop:'10px'}}  href="#">Contact</a></li>
                    </div>
                </div>
            </div>
            <div id="footer-social-media" className='text-2xl  text-white' style={{marginLeft:'10px'}}>
                <li id="footer-mobile-list">Social</li>
               <div className='flex gap-5'>
               <FaInstagram/>
               <FaSquareXTwitter/>
               <FaLinkedin/>
               </div>
              
            </div>
            
          <div style={{width:'100%',border:'0.5px solid gray'}}>

          </div>

            <div  id="footer-down" style={{marginLeft:'10px'}}>
                <div   id="footer-down-left">
                    <p style={{fontSize:'12px'}}>All Rights Reserved</p>
                </div>
                <div id="footer-down-right" >
                    <p className='cursor-pointer' style={{fontSize:'12px'}} onClick={()=>{
                        window.location.href = '/privacy'
                    }}>Privacy Policy</p>
                    <p className='cursor-pointer' style={{fontSize:'12px'}} onClick={()=>{
                        window.location.href = '/terms'
                    }}>Terms & Conditions</p>
                </div>
            </div>
        </div>
    </footer>

    
)
        
    
}

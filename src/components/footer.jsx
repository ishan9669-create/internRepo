import '../css/style.css'
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
    return (
        
        <footer id="footer">
        <div id="footer-container">
            <div id="footer-up">
                <div id="footer-up-left">
                    <img src="./Horizontal _Neo CFO_ Logo _ White@2x 1 (1).png" alt="logo"/>
                    <p>Empowering India's Businesses,One Click at a Time.</p>
                    <img src="./Property 1=Default.png" alt="email"/>
                </div>
                <div id="footer-up-right">
                    <ul>
                        <li>Products</li>
                        <li><a href="#">Features</a></li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer-social-media" className='text-2xl text-white'>
                <li id="footer-mobile-list">Social</li>
               <div className='flex gap-5'>
               <FaInstagram/>
               <FaSquareXTwitter/>
               <FaLinkedin/>
               </div>
              
            </div>
            
            <div id="footer-down">
                <div id="footer-down-left">
                    <p>All Rights Reserved</p>
                </div>
                <div id="footer-down-right">
                    <p className='cursor-pointer' onClick={()=>{
                        window.location.href = '/privacy'
                    }}>Privacy Policy</p>
                    <p className='cursor-pointer' onClick={()=>{
                        window.location.href = '/terms'
                    }}>Terms & Conditions</p>
                </div>
            </div>
        </div>
    </footer>

    
)
        
    
}

import { GoArrowUpRight } from "react-icons/go";
export default function Header()
{
    return <div className="bg-red-200 shadow-xl flex fixed z-20 top-0 w-full justify-between items-center p-4">
       <div >
          <img src="http://127.0.0.1:5500/future%20intern%20website/images/Horizontal%20_Neo%20CFO_%20Logo%20_%20coloured@2x%201.png"  />
       </div>

       <div className="flex justify-center gap-16">
        <span>Our Story</span>
        <span>Features</span>
        <span>Blogs</span>
       </div>
 
            <div className="flex justify-center items-center underline">
            <a href="#">Schedule a Demo </a>
            <GoArrowUpRight />
            </div>
      
    </div>
}
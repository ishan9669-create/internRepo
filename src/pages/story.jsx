import React,{ useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import '../css/style.css'
import Footer from "../components/footer";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import StoryCarousel from "../components/storycorousel";
export default function Story(){
    const [q1,setQ1] = useState(false);
        const [q2,setQ2] = useState(false);
        const [q3,setQ3] = useState(false);
        const [q4,setQ4] = useState(false);
        const [q5,setQ5] = useState(false);
        const [q6,setQ6] = useState(false);
        const [q7,setQ7] = useState(false);
   
  
    return (
          <div className="relative flex flex-col items-center justify-center sm:justify-center overflow-x-hidden">
             
             {/* <div id="first" className="flex flex-col gap-3  mt-44 w-[500px] ml-32">
                <span>Our Story</span>
                <h1 className="text-3xl font-semibold">Reimagine Financial Management</h1>
                <p className="max-w-[490px] text-slate-500">Discover how your finance teams can access up-to-date information and generate accurate reports and responses grounded in company knowledge.</p>

             </div> */}
             <div id="first" className="flex flex-col gap-3 mt-32 sm:mt-20 md:mt-32 lg:mt-44 w-full    ml-20">
        <span className="text-lg sm:text-sm">Our Story</span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-700"><i className="font-normal sm:text-3xl">Reimagine</i> Financial Management</h1>
        <p className="max-w-full text-sm sm:max-w-[400px] md:max-w-[450px] lg:max-w-[490px] text-slate-500">Discover how your finance teams can access up-to-date information and generate accurate reports and responses grounded in company knowledge.</p>
            </div>



             {/* dabbes */}


             {/* <div className="flex ml-32 mt-52 gap-10">
                <div className="h-[150px] w-[150px] text-xs rounded-lg bg-green-800 text-white flex flex-col items-center justify-center">
                    <span className="text-2xl">+15</span>
                    <p className="text-center">years of combined experience in finance and technology</p>
                </div>
                <div className="h-[150px] w-[150px] text-xs rounded-lg  text-white flex flex-col items-center justify-center" style={{backgroundColor:' #77C043'}}>
                    <span className="text-2xl">15x</span>
                    <p className="text-center">faster transaction processing with our AI algorithms</p>
                </div>
                <div className="h-[150px] w-[150px] text-xs rounded-lg bg-green-800 text-white flex flex-col items-center justify-center" style={{backgroundColor:' #829392'}}>
                    <span className="text-2xl">50%</span>
                    <p className="text-center">reduction in time spent on manual financial processes</p>
                </div>

                <div className="h-[320px] w-[450px] flex justify-center items-end rounded-lg  -translate-y-40"
               style={{backgroundColor:'#DAEEBD'}} 
                >
                    <img 
                    className="h-[280px] w-[360px]"
                    src="https://s3-alpha-sig.figma.com/img/353c/9f5a/3ca4e89ffa9d24070ae591726c8b1650?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otnXMeiLu04z8M2o4yb5xKLnHWiOelW6r0QSJENbcsW~Oh7T6HVaEZFAZmng9MjV2~CVfGlDUOwskjQxhWLBvqf6DNXmjahf3Oy~c8n7-w5Jj4FprGSag7JPRMpvrmtSudMj~yDaWuM2pPKNjE78ttvqjRZnLp-95bXs1V5VpBFSWZBeETdKDKNM0Jq5gCnosI2hgEjvWfk2nShevnRBY1cZNnj7h63UHC6fpqCnrYiCl3qeh26T2D9VryOydfuJJhQGzz7sY7G3ahTV5hIIUTA0DzaTroqYOzkxDWxCQo6W1LLcTNttNaie5wHCZhHDVINxNanR3ZjaLChgsXenOg__" alt="" />
                </div>
             </div> */}
             <div className="flex flex-col lg:flex-row lg:justify-center  items-center lg:items-center  mt-20 lg:mt-52 gap-10 sm:gap-8 lg:gap-10">
  {/* <!-- Experience Box --> */}
  <div className="h-[150px] w-[300px] lg:h-[180px] lg:w-[180px] text-xs rounded-lg bg-green-800 text-[#FFFFFF] flex flex-col items-center justify-center">
    <span className="text-xl lg:text-2xl w-full ml-5">+15</span>
    <p className="text-left text-[10px] lg:text-xs ml-2">
      years of combined experience in finance and technology
    </p>
  </div>

  {/* <!-- AI Processing Box --> */}
  <div className="h-[150px] w-[300px] lg:h-[180px] lg:w-[180px] text-xs rounded-lg text-[#FFFFFF] flex flex-col items-center justify-center" style={{ backgroundColor: '#77C043' }}>
    <span className="text-xl lg:text-2xl  w-full ml-5">15x</span>
    <p className="text-left text-[10px] lg:text-xs ml-2">
      faster transaction processing with our AI algorithms
    </p>
  </div>

  {/* <!-- Time Reduction Box --> */}
  <div className="h-[150px] w-[300px] lg:h-[180px] lg:w-[180px] text-xs rounded-lg text-[#FFFFFF] flex flex-col items-center justify-center" style={{ backgroundColor: '#829392' }}>
    <span className="text-xl lg:text-2xl  w-full ml-5">50%</span>
    <p className=" text-[10px] lg:text-xs text-left ml-2">
      reduction in time spent on manual financial processes
    </p>
  </div>

  {/* <!-- Image Box --> */}
  <div className="h-[250px] sm:h-[300px] lg:h-[320px] w-[400px] lg:w-[450px] mt-20 flex justify-center items-end rounded-lg -translate-y-16 sm:-translate-y-24 lg:-translate-y-28" style={{ backgroundColor: '#DAEEBD' }}>
    <img className="h-[200px] sm:h-[260px] lg:h-[280px] w-[280px] sm:w-[340px] lg:w-[360px]" src="https://s3-alpha-sig.figma.com/img/353c/9f5a/3ca4e89ffa9d24070ae591726c8b1650?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otnXMeiLu04z8M2o4yb5xKLnHWiOelW6r0QSJENbcsW~Oh7T6HVaEZFAZmng9MjV2~CVfGlDUOwskjQxhWLBvqf6DNXmjahf3Oy~c8n7-w5Jj4FprGSag7JPRMpvrmtSudMj~yDaWuM2pPKNjE78ttvqjRZnLp-95bXs1V5VpBFSWZBeETdKDKNM0Jq5gCnosI2hgEjvWfk2nShevnRBY1cZNnj7h63UHC6fpqCnrYiCl3qeh26T2D9VryOydfuJJhQGzz7sY7G3ahTV5hIIUTA0DzaTroqYOzkxDWxCQo6W1LLcTNttNaie5wHCZhHDVINxNanR3ZjaLChgsXenOg__" alt="Image" />
  </div>
</div>



{/* Catalyst */}

        <div className="flex justify-center text-2xl text-center">
             <h1 className="max-w-[600px]">A 
                <i className="text-2xl"> Catalyst</i> for transformation in the world of finance.</h1>
        </div>

{/* problems div 1. */}

        
        <div className="flex flex-col lg:flex-row justify-center  lg:h-[400px] gap-5 lg:gap-10 mt-10 lg:mt-32 px-4">
    {/* <!-- Image Section --> */}
    <div className="max-w-full lg:max-w-[600px] h-full ">
        <img className="w-full h-auto lg:h-full  rounded-lg" src="https://s3-alpha-sig.figma.com/img/2e63/6abc/c8fb6514e1f34f5fb6180ee3d0a4e7f9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUNDY8hbi8zi2eSiUMkmKREDfZsdPvsFf0Igs6Xnhe5saIYHviuW9ZgkUeQNLu~fAk~zo8WzG9z3aLkPrE1U7rhrj1gcyUBG3cNhF2ombA3txMuhcH19t0KW01SM9oo7CSKwNlXftLZb1nTFjycrxEc4ZVhjQP1u65twQvK3R9uzy4zXYagFuFOteyQ77xT2T0eA3FpM0UjLcR~vgf7~QP8h~Rv1v9Lpat1NhChtpTDt1dt~JhowbcmrPJVIpWo4rjHVpvb4a6Sh~k~PowYSh43ztUqYiHFR6XW6XtdUaPLlmjM8TIgW71NjrMbXGNbo8qGAsns7e2ZCQDrXe2t0AQ__" alt="Problem Image" />
    </div>

    {/* <!-- Text Section --> */}
    <div className="w-full lg:w-[500px] flex flex-col gap-6 lg:gap-3">
        {/* <!-- Problem Header --> */}
        <div className="border-b-2 h-[100px] lg:h-[200px] flex items-center gap-1 mt-4" id="borderwala">
            <span className="w-[30px] h-[30px] rounded-full flex border-black border-2 justify-center items-center text-sm lg:text-base">01</span>
            <span className="text-sm lg:text-lg">The Problem</span>
        </div>

        {/* <!-- Overburdened Teams --> */} 
        <div className="flex h-[200px] lg:h-[200px] rounded-md text-white justify-center items-center flex-col bg-green-900">
            <span className="text-sm  mt-1">Overburdened Teams</span>
            <p className="text-slate-300 text-center text-xs  px-2 p-1">The increasing volume of transactions, regulatory compliance, and stakeholder demands have left finance teams stretched thin.</p>
        </div>

        {/* <!-- Time-Consuming Tasks --> */}
        <div className="flex h-[200px] lg:h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-900">
            <span className="text-sm mt-1">Time-Consuming Tasks</span>
            <p className="text-slate-300 text-center text-xs  px-2 p-1">Manual processes, data retrieval, and report generation consume valuable time that could be better spent on strategic initiatives.</p>
        </div>

        {/* <!-- Knowledge Gaps --> */}
        <div className="flex h-[200px] lg:h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-900">
            <span className="text-sm ">Knowledge Gaps</span>
            <p className="text-slate-300 text-center text-xs  px-2 p-1">Staying up-to-date with financial regulations, industry trends, and company-specific information is a daunting task.</p>
        </div>
    </div>
</div>


{/* problems div 2. */}
<div className="flex flex-col lg:flex-row justify-center lg:h-[400px] gap-5 lg:gap-10 mt-10 lg:mt-40 px-4">
            
       <div className="w-full lg:w-[500px] flex flex-col gap-6 lg:gap-2">
                <div className="border-b-2 h-[100px] lg:h-[200px] flex items-center gap-4 mt-4" id="borderwala">
                    <span className="w-[30px] h-[30px] rounded-full flex border-black border-2 justify-center items-center text-sm lg:text-base">02</span>
                    <span className="text-sm lg:text-lg">The Problem</span>
                </div>
                
                <div className="flex h-[200px] lg:h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-900">
                    <span className="text-xs mt-2">Stremline Processes</span>
                    <p className="text-slate-300 text-center text-xs p-1">Automate routine tasks, such as report generation and data analysis, freeing up time for more strategic work.</p>
                </div>
                <div className="flex h-[200px] lg:h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-900">
                    <span className="text-sm ">Provide Instant Access</span>
                    <p className=" text-slate-300 text-center text-xs p-1">Offer real-time access to up-to-date information, empowering teams to make informed decisions quickly.</p>
                </div>
                <div className="flex h-[200px] lg:h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-900">
                    <span className="text-sm  mt-2">Ensure Compliance</span>
                    <p className="text-slate-300 text-center text-xs p-1">Automatically generate reports and responses that adhere to regulatory requirements, minimizing risk and ensuring compliance.</p>
                </div>
             </div>

             <div className="max-w-full lg:max-w-[600px] ">
                <img className="w-full h-auto lg:h-[400px] rounded-lg"  src="https://s3-alpha-sig.figma.com/img/e6ab/1596/c513460f07e66c632e79b045e660020e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ln0iKVZVouq2hpQuDynS2vDOE818xulY4u8r0hOfIgqXOQOuu4~6KorAAf3tNO9GlNqbS7zJ2zz0qSEbqHzkgGmN3fduAdJEckFzQrzmyXmF1OCjI~3eVgicJ5zOyLRFFA0ua67oixqsokBsdKfxAkgoBJYfCO3b5I90n4KNjjU1AaR5VANa0relOWK7WjtfYNWNvqYoHSzSn0wLKwd-zaHU0OzkQER3jjFAyXUsXwozs1CvMdFtf8fAixC~uz17pM3S6l4eosyIPmWCYESKgK0VcNiKADz61L6yo8yqXCv~tei6V0gJVKA1R7jbnS~CvsT--8Ah0cdTYJwbzGykbA__" alt="" />
             </div>
        </div>



      {/* sliding window */}
      {/* <div className="flex flex-col justify-center items-center mt-32 md:mt-52 text-center">
  <h1 className="flex flex-col md:flex-row items-center gap-5 md:gap-32 text-lg md:text-2xl lg:text-4xl">
    <span className="text-xl md:text-2xl"><i>Smart Finance</i>, Secure Data</span>
    
    <div className="flex gap-5 md:gap-10 mt-4 md:mt-0">
      <FaArrowLeft 
        style={{ backgroundColor: '#14494433' }} 
        className="text-green-800 cursor-pointer w-[40px] h-[25px] md:w-[50px] md:h-[30px] rounded-full" 
      />
      <FaArrowRight 
        style={{ backgroundColor: '#14494433' }} 
        className="text-green-800 cursor-pointer w-[40px] h-[25px] md:w-[50px] md:h-[30px] rounded-full" 
      />
    </div>
  </h1>
</div> */}


{/* <div className="flex gap-10 p-5 md:p-10 overflow-x-auto scroll-smooth mx-4 md:mx-24 flex-wrap justify-center">
  
  <div className="h-[350px] w-[250px] flex flex-col gap-5 bg-red-500">
    <img className="h-[150px] w-full object-cover rounded-md" src="https://www.sinequa.com/wp-content/uploads/2023/08/6-Ways-a-Data-Driven-Approach-Helps-Your-Organization-Succeed-960.jpg" alt="Data-Driven Insights" />
    <div className="flex flex-col gap-2">
      <h3 className="text-center">Data-Driven Insights</h3>
      <p className="text-center text-slate-400 text-sm md:text-base">Our platform seamlessly integrates with your financial systems, delivering comprehensive data insights.</p>
    </div>
  </div>
  
  <div className="h-[350px] w-[250px] flex flex-col gap-5">
    <img className="h-[150px] w-full object-cover rounded-md" src="https://automationedge.com/es/wp-content/uploads/2020/08/AI-Powered-Automation-For-Managed-Service-Providers.jpg" alt="AI-Powered Automation" />
    <div className="flex flex-col gap-2">
      <h3 className="text-center">AI-Powered Automation</h3>
      <p className="text-center text-slate-400 text-sm md:text-base">Intelligent algorithms automate repetitive tasks, improving efficiency and accuracy.</p>
    </div>
  </div>
  
  <div className="h-[350px] w-[250px] flex flex-col gap-5">
    <img className="h-[150px] w-full object-cover rounded-md" src="https://codup.co/wp-content/uploads/2024/02/Benefits-of-Dynamic-Access-Control.png" alt="Rigid Access Control" />
    <div className="flex flex-col gap-2">
      <h3 className="text-center">Rigid Access Control</h3>
      <p className="text-center text-slate-400 text-sm md:text-base">Our platform strictly adheres to permissions set in the source application. Our results are updated in real time when it is fetched.</p>
    </div>
  </div>
  
  <div className="h-[350px] w-[250px] flex flex-col gap-5">
    <img className="h-[150px] w-full object-cover rounded-md" src="https://www.sinequa.com/wp-content/uploads/2023/08/6-Ways-a-Data-Driven-Approach-Helps-Your-Organization-Succeed-960.jpg" alt="Data-Driven Insights" />
    <div className="flex flex-col gap-2">
      <h3 className="text-center">Data-Driven Insights</h3>
      <p className="text-center text-slate-400 text-sm md:text-base">Our platform seamlessly integrates with your financial systems, delivering comprehensive data insights.</p>
    </div>
  </div>

</div> */}

     <StoryCarousel/>
       {/* <StoryCarousel/>      */}


       <div className="flex justify-center  text-3xl mt-32">
        <h1>Your Questions , <i className="text-3xl">Answered</i></h1>
       </div>


      {/* <div className="flex flex-col  lg:flex-row gap-8 h-auto lg:h-[500px] mx-4 sm:mx-8 lg:mx-24 justify-center items-center mt-16 lg:mt-32" >
       <div className="  w-full lg:max-w-[500px]  flex flex-col gap-7 h-full lg:full "
           
          >
              <div
                onClick={()=>{
                  if(q1==false) setQ1(true);
                  else setQ1(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg bg-slate-100  cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q1 ? '#F1FFE6':''}`}}>
                  <span className="text-xs flex justify-between items-center">Why drone survey? {!q1 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-green-800 text-sm"/>}</span>
                  
                  <div style={{display:`${q1==true? "block":"none"}`}} className="mt-5 text-slate-500">
                  <div className="text-xs max-w-[500px]" >
                  Drone Surveys allow you to collect detailed and accurate information from areas that are inaccessible to you. High-resolution orthomosaics & detailed Three Dimensional (3D) representations are provided by drones. Drone Surveys add vital essential data to facilitate well-informed decision-making during the preliminary stages of construction site mapping, surveying, or inspection of infrastructure.

                  </div>
                  <br />
                 <div  className="text-xs max-w-[500px]" >
                 It ensures that users sustain control and avoid failure to secure maximum goodwill of their assets. Wind Turbine Blades, highways, and transmission lines are frequently inspected through drone technology. When compared to traditional ‘at-height’ working, it decreases the major risk for the workers during an inspection.
                 </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q2==false) setQ2(true);
                  else setQ2(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg bg-slate-100 cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q2 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">How accurate Drone Survey results are? {!q2 ? <GrAdd className="text-green-800 text-sm"/>:<FaMinus className="text-sm text-green-800"/>}</span>

                  <div style={{display:`${q2==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">Drone surveys are quicker, more accurate, and also less cost-expensive approach to the study. Drones include high-resolution cameras and sensors that provides interactive three Dimensional (3D) representations of the earth surface</div>
                      <br />
                      <div  className="text-xs">Drone Surveys provide vital information that empowers competent arrangements from building site mapping, surveying, and inspection to infrastructure design and maintenance. Drone surveys offer a consistent approach to transmission tower surveying and powerline surveying. They dramatically reduce risk and maximize safety results by eliminating regular 'at-height' function.</div>
                  </div>
              </div>
              <div
              onClick={()=>{
                  if(q3==false) setQ3(true);
                  else setQ3(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg bg-slate-100 cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q3 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">Which Drone technology do we use? {!q3 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-sm text-green-800"/>}</span>

                  <div style={{display:`${q3==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">
                      Since drones have distinct uses, they have become an integral part of numerous private and governmental organizations. We have made our position in a number of industries through fast, reliable and secure deliveries. Catering to Government projects and mapping agricultural land surveys, our technology can do it all. Using advanced survey drones, artificial intelligence, and a variety of advanced sensors such as thermal, RGB, Lidar, etc. we have broaden our drone technology to several.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q4==false) setQ4(true);
                  else setQ4(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg  bg-slate-100 cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q4 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">What does "Drone photography" mean? {!q4 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-sm text-green-800"/>}</span>

                  <div style={{display:`${q4==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">
                      Drone photography is a technique that involves photographing/mapping the surface of the Earth. They are photographed by cameras mounted on the Drone. Aerial photography is a widespread technique used by advertising agencies. Aerial photography use film variations, focal lengths, overlaps, and other features to create many types of images at different heights.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q5==false) setQ5(true);
                  else setQ5(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg bg-slate-100 cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q5 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">What weather is suitable for flying Drones? {!q5 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-sm text-green-800"/>}</span>

              <div style={{display:`${q5==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">
                      Drones can easily capture high-quality photographs and videos at varying heights and in different climates. Most flying drones can operate in winds of up to 22 MPH. Few drones can chart the drizzle, the fog, and even the snow. Weather may make or break the quality of the aerial photograph taken. The climate in India is rarely a hindrance to our ventures. Drones can fly even in the cold; however, flying time also decreases. The motors supplied to most drones will work in light rain as long as the flight controller does not come into contact with the rain.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q6==false) setQ6(true);
                  else setQ6(false)
              }}
              className="p-2 hover:bg-slate-400 rounded-lg bg-slate-100 cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q6 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">What type of data do we capture? {!q6 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-sm text-green-800"/>}</span>

                  <div style={{display:`${q6==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">
                      We provide quick, reliable and accurate drone data for various kinds of industry. Our company specializes in the capture of data from drone surveying/mapping, aerial inspection and analysis, creative atmospheric data and UAV data processing. Drone data collected through our materials can be reproduced in various forms such as orthomosaic maps, 3D Point Cloud, DEM, DTM, DSM, Contour maps etc.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q7==false) setQ7(true);
                  else setQ7(false)
              }}
              className="p-2 hover:bg-slate-400 bg-slate-100 rounded-lg cursor-pointer" style={{transitionDuration:'0.4s',backgroundColor:`${q7 ? '#F1FFE6':''}`}}>
                  <span  className="text-xs flex justify-between items-center">What is Aerial LiDAR {!q7 ? <GrAdd className="text-sm text-green-800"/>:<FaMinus className="text-sm text-green-800 "/>}</span>

                  <div style={{display:`${q7==true? "block":"none"}`}} className="mt-5 text-slate-500">
                      <div  className="text-xs">Aerial Lidar is an aerial mapping and Surveying technology that uses GPS-monitored aerial Drone/UAV equipped with on-board positional and sensors. After post-flight production processes, the acquired Lidar Map data is used to know the precise elevation and geospatial location of features on the earth’s surface.
                      </div>
                      <br />
                      <div  className="text-xs">
                      Lidar data is an accurate and efficient tool for producing three-dimensional topographic aerial maps and highly accurate aerial surveys of both land and man-made components. We have developed a custom aerial Lidar Mapping and surveying production workflow which adheres to the specifications outlined in Base Specification Guidelines.</div>
                  </div>
              </div>
       </div> 
       <div className="w-full lg:w-[500px] h-full ">
    <img
      className="w-full h-auto lg:h-[500px] rounded-2xl"
      src="https://s3-alpha-sig.figma.com/img/9060/f43f/92b9621b74e4254e67eb32c80a722c6e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBXZxAX-bTb9hLkZFAV98HFhCwQdEscRw8J-HS4aALILCw-wlhoGXylOHxTIimBFY-bdnmda6VCVs4U2~LdTp5UlAa5lbn2c-p51ZC31v53cSQVVtdCpdzLDZDe8rF4TPfR70YuYljjpNVqWETh6rAfgSaPs9m1EtxPVJln0LONuAyKZhUWfk9Ao0TKPL-sE8nAslNwIqvdMOp5KulhwLErsYX6wnhzu8qiv1nJLhL5-CiVyfVsKiMBu~JL1XV7jnuEAKGjpqIy-cckZyjn8YfLAsjl6yYcckU~j~AiUvRhCot1cXMXtGm4afg4uLW0DhDeleEVz0XD9yMXiZxBNYw__"
      alt="Drone"
    />
  </div>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[500px] mx-4 sm:mx-8 lg:mx-24 justify-center items-center mt-16 lg:mt-32">
      <div className="w-full lg:max-w-[500px] flex flex-col gap-4 h-full" style={{ height: '100%' }}>
        {/* Question 1 */}
        <div
          onClick={() => setQ1(!q1)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q1 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex w-[480px] justify-between items-center">
          What is NEO CFO? {!q1 ? <GrAdd className="text-sm text-green-800" /> : <FaMinus className="text-green-800 text-sm" />}
          </span>
          <div style={{ display: `${q1 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px] ">
            NEO CFO is a comprehensive finance automation platform designed to streamline and automate your financial processes. From managing automation of accounting entries and GST taxation to handling procure-to-pay processes, NEO CFO helps you optimize and simplify your day-to-day financial tasks helping you free up to 80% of your time. 
            </div>
            
           
          </div>
        </div>

        {/* Question 2 */}
        <div
          onClick={() => setQ2(!q2)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q2 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex w-[480px] justify-between items-center">
          Is my financial information secure? {!q2 ? <GrAdd className="text-green-800 text-sm" /> : <FaMinus className="text-sm text-green-800" />}
          </span>
          <div style={{ display: `${q2 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px]">
            Yes, at NEO CFO, we prioritize your data security. We use advanced encryption methods and security protocols to ensure your financial data is protected and confidential and comply with industry-standard security practices to ensure your financial information is protected. Regular security audits and updates are conducted to maintain the highest level of security.rs that provide interactive three-dimensional (3D) representations of the earth's surface.

            </div>
           
          </div>
        </div>

        {/* Question 3 */}
        <div
          onClick={() => setQ3(!q3)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q3 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex w-[480px] justify-between items-center">
          What services does NEO CFO offer?
            {!q3 ? <GrAdd className="text-sm text-green-800" /> : <FaMinus className="text-sm text-green-800" />}
          </span>
          <div style={{ display: `${q3 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px]">
            NEO CFO offers a wide range of services, including, but not limited to: Automated accounting entries GST taxation management Procure-to-pay process automation Financial data integration Predictive analytics for P&L and cash flow outcomes Expense categorization and management Reconciliation of GST input with accounting records.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div
          onClick={() => setQ4(!q4)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q4 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex w-[480px] justify-between items-center">
          Can I integrate other financial tools with the platform? {!q4 ? <GrAdd className="text-sm text-green-800" /> : <FaMinus className="text-sm text-green-800" />}
          </span>
          <div style={{ display: `${q4 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px]">
            Yes, NEO CFO supports integration with various financial tools and platforms. You can easily connect your accounting software (i.e. Tally or Zoho Books), GST portal, and other financial services/ bank accounts to streamline your workflows and ensure all your data is centralized in one place.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div
          onClick={() => setQ5(!q5)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q5 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex w-[480px] justify-between items-center">
          How does NEO CFO handle GST compliance? {!q5 ? <GrAdd className="text-sm text-green-800" /> : <FaMinus className="text-sm text-green-800" />}
          </span>
          <div style={{ display: `${q5 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px]">
            NEO CFO automates GST compliance by integrating with the GST portal and providing tools for managing GST returns, reconciling GST input with accounting records, and ensuring accurate GST calculations. This helps you stay compliant with the latest GST regulations effortlessly.


            </div>
          </div>
        </div>

        {/* Question 6 */}
        <div
          onClick={() => setQ6(!q6)}
          className="p-2 hover:bg-slate-400 rounded-lg w-[500px] bg-slate-100 cursor-pointer"
          style={{
            transitionDuration: '0.4s',
            backgroundColor: `${q6 ? '#F1FFE6' : ''}`,
          }}
        >
          <span className="text-xs flex justify-between w-[480px] items-center">
            
Can multiple users access the same NEO CFO account?
 {!q6 ? <GrAdd className="text-sm text-green-800" /> : <FaMinus className="text-sm text-green-800" />}
          </span>
          <div style={{ display: `${q6 ? 'block' : 'none'}` }} className="mt-1 text-slate-500">
            <div className="text-[10px]">
            Yes, NEO CFO allows multiple users to access the same account. You can add team members and assign different roles and permissions based on their responsibilities. This facilitates collaboration and ensures that everyone on your team can contribute effectively.

            </div>
          </div>
        </div>

        {/* Question 7 */}
       
      </div>

      <div className="  lg:block lg:w-[400px] w-[500px] lg:h-full">
        <img className="rounded-lg h-full object-cover w-full" src="https://s3-alpha-sig.figma.com/img/9060/f43f/92b9621b74e4254e67eb32c80a722c6e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBXZxAX-bTb9hLkZFAV98HFhCwQdEscRw8J-HS4aALILCw-wlhoGXylOHxTIimBFY-bdnmda6VCVs4U2~LdTp5UlAa5lbn2c-p51ZC31v53cSQVVtdCpdzLDZDe8rF4TPfR70YuYljjpNVqWETh6rAfgSaPs9m1EtxPVJln0LONuAyKZhUWfk9Ao0TKPL-sE8nAslNwIqvdMOp5KulhwLErsYX6wnhzu8qiv1nJLhL5-CiVyfVsKiMBu~JL1XV7jnuEAKGjpqIy-cckZyjn8YfLAsjl6yYcckU~j~AiUvRhCot1cXMXtGm4afg4uLW0DhDeleEVz0XD9yMXiZxBNYw__ " alt="drone" />
      </div>
    </div>
      {/* https://s3-alpha-sig.figma.com/img/9060/f43f/92b9621b74e4254e67eb32c80a722c6e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBXZxAX-bTb9hLkZFAV98HFhCwQdEscRw8J-HS4aALILCw-wlhoGXylOHxTIimBFY-bdnmda6VCVs4U2~LdTp5UlAa5lbn2c-p51ZC31v53cSQVVtdCpdzLDZDe8rF4TPfR70YuYljjpNVqWETh6rAfgSaPs9m1EtxPVJln0LONuAyKZhUWfk9Ao0TKPL-sE8nAslNwIqvdMOp5KulhwLErsYX6wnhzu8qiv1nJLhL5-CiVyfVsKiMBu~JL1XV7jnuEAKGjpqIy-cckZyjn8YfLAsjl6yYcckU~j~AiUvRhCot1cXMXtGm4afg4uLW0DhDeleEVz0XD9yMXiZxBNYw__ */}

{/* above footer */}
{/* <div className="mx-4 sm:mx-8 lg:mx-24 xl:mx-48 h-[200px] sm:h-[300px] lg:h-[400px] mt-16 sm:mt-20 lg:mt-32 relative">
  <img 
    className="h-full w-full rounded-lg object-cover"
    src="https://s3-alpha-sig.figma.com/img/6368/a7c2/7c714d533a66059ce71ed7f63cde0d90?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0Emo9bWoutyx8TfxrXbopDaaI~YibtTXGbnRCO62sSGtJMEHavikoFm80jO8igvrsWH5uKPNOX-4rtrdoFSPqHP0-bz7nWBv1jc7WnGGXDOpkNTpcO-YonwaW8dyTI501R49xv0z57PNuK9zbO3aozlSOs5B0bhDPyEIFz955Ha1p1eRuS6E8t3ihLDcCluaQpRN-lXDm~2T4xkcJM8QOqHKW0lnmtCyQWwC81GWDL~2MxUZ5IPSq4QHGngqcfPKJlgCR-12AvXTyPXY4fPSJulD4wvrX7z-o-oMDcWKkBNs5zXpKKqPAYn3wNz5fflODEKxIkcqDNNYjc1DC5-Tg__" 
    alt="Financial Transformation"
  />

  <p className="absolute bottom-[50px] left-[20px] sm:left-[40px] sm:bottom-[60px] lg:bottom-[80px] lg:left-[60px] w-[200px] sm:w-[250px] lg:w-[300px] text-sm sm:text-lg lg:text-xl font-semibold text-white">
    Transform Your Financial Processes with Neo CFO
  </p>

  <button className="flex justify-center items-center py-2 px-3 bg-white text-sm sm:text-md lg:text-lg font-semibold absolute bottom-[10px] left-[20px] sm:left-[40px] sm:bottom-[20px] lg:bottom-[40px] lg:left-[60px] rounded-full">
    SCHEDULE A DEMO <GoArrowUpRight className="ml-2"/>
  </button>
</div> */}
 <div id="demo" style={{marginTop:'300px'}}>
        <h1>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button  className="flex items-center bg-white px-2 py-1" id="demobtn">Schedule a Demo <GoArrowUpRight/></button>

    </div>

      <Footer/>
       
        
          </div>
    ) 

        
    
}

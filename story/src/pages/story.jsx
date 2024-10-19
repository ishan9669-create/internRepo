import React,{ useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Footer from "../components/footer";
export default function Story(){
    const [q1,setQ1] = useState(false);
        const [q2,setQ2] = useState(false);
        const [q3,setQ3] = useState(false);
        const [q4,setQ4] = useState(false);
        const [q5,setQ5] = useState(false);
        const [q6,setQ6] = useState(false);
        const [q7,setQ7] = useState(false);
   
  
    return (
          <div className="relative">
             
             <div id="first" className="flex flex-col gap-3  mt-32 w-[500px] ml-32">
                <span>Our Story</span>
                <h1 className="text-3xl font-semibold">Reimagine Financial Management</h1>
                <p className="max-w-[490px] text-slate-500">Discover how your finance teams can access up-to-date information and generate accurate reports and responses grounded in company knowledge.</p>

             </div>


             {/* dabbes */}


             <div className="flex ml-32 mt-40 gap-10">
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
             </div>
{/* Catalyst */}

        <div className="flex justify-center text-4xl text-center">
             <h1 className="max-w-[600px]">A 
                <i> Catalyst</i> for transformation in the world of finance.</h1>
        </div>

{/* problems div 1. */}

        <div className="flex justify-center  h-[400px] gap-10  mt-32">
             <div className="max-w-[600px] ">
                <img className="h-[400px] rounded-lg"  src="https://s3-alpha-sig.figma.com/img/2e63/6abc/c8fb6514e1f34f5fb6180ee3d0a4e7f9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUNDY8hbi8zi2eSiUMkmKREDfZsdPvsFf0Igs6Xnhe5saIYHviuW9ZgkUeQNLu~fAk~zo8WzG9z3aLkPrE1U7rhrj1gcyUBG3cNhF2ombA3txMuhcH19t0KW01SM9oo7CSKwNlXftLZb1nTFjycrxEc4ZVhjQP1u65twQvK3R9uzy4zXYagFuFOteyQ77xT2T0eA3FpM0UjLcR~vgf7~QP8h~Rv1v9Lpat1NhChtpTDt1dt~JhowbcmrPJVIpWo4rjHVpvb4a6Sh~k~PowYSh43ztUqYiHFR6XW6XtdUaPLlmjM8TIgW71NjrMbXGNbo8qGAsns7e2ZCQDrXe2t0AQ__" alt="" />
             </div>


             <div className="w-[500px] flex flex-col gap-10">
                <div className="border-b-2 h-[200px] flex  items-center gap-4 mt-4" id="borderwala">
                    <span className="w-[30px] h-[30px] rounded-full flex border-black border-2 justify-center items-center">01</span>
                    <span>The Problem</span>
                </div>
                
                <div className="flex h-[300px]  rounded-md text-white justify-center items-center  flex-col bg-green-800">
                    <span>Overburdened Teams</span>
                    <p className="text-slate-300 text-center text-sm">The increasing volume of transactions, regulatory compliance, and stakeholder demands have left finance teams stretched thin.</p>
                </div>
                <div className="flex h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-800">
                    <span>Time-Consuming Tasks</span>
                    <p className="text-slate-300 text-center text-sm">Manual processes, data retrieval, and report generation consume valuable time that could be better spent on strategic initiatives.</p>
                </div>
                <div className="flex h-[300px] rounded-md  text-white justify-center items-center flex-col     bg-green-800">
                    <span>Knowledge Gaps</span>
                    <p className="text-slate-300 text-center text-sm">Staying up-to-date with financial regulations, industry trends, and company-specific information is a daunting task.</p>
                </div>
             </div>
        </div>

{/* problems div 2. */}
<div className="flex justify-center  h-[400px] gap-10  mt-48">
            
       <div className="w-[500px] flex flex-col gap-10">
                <div className="border-b-2 h-[200px] flex  items-center gap-4 mt-4" id="borderwala">
                    <span className="w-[30px] h-[30px] rounded-full flex border-black border-2 justify-center items-center">02</span>
                    <span>The Problem</span>
                </div>
                
                <div className="flex h-[300px]  rounded-md text-white justify-center items-center  flex-col bg-green-800">
                    <span>Stremline Processes</span>
                    <p className="text-slate-300 text-center text-sm">Automate routine tasks, such as report generation and data analysis, freeing up time for more strategic work.</p>
                </div>
                <div className="flex h-[300px] rounded-md text-white justify-center items-center flex-col bg-green-800">
                    <span>Provide Instant Access</span>
                    <p className="text-slate-300 text-center text-sm">Offer real-time access to up-to-date information, empowering teams to make informed decisions quickly.</p>
                </div>
                <div className="flex h-[300px] rounded-md  text-white justify-center items-center flex-col     bg-green-800">
                    <span>Ensure Compliance</span>
                    <p className="text-slate-300 text-center text-sm">Automatically generate reports and responses that adhere to regulatory requirements, minimizing risk and ensuring compliance.</p>
                </div>
             </div>

             <div className="max-w-[600px] ">
                <img className="h-[400px] w-[400px] rounded-lg"  src="https://s3-alpha-sig.figma.com/img/e6ab/1596/c513460f07e66c632e79b045e660020e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ln0iKVZVouq2hpQuDynS2vDOE818xulY4u8r0hOfIgqXOQOuu4~6KorAAf3tNO9GlNqbS7zJ2zz0qSEbqHzkgGmN3fduAdJEckFzQrzmyXmF1OCjI~3eVgicJ5zOyLRFFA0ua67oixqsokBsdKfxAkgoBJYfCO3b5I90n4KNjjU1AaR5VANa0relOWK7WjtfYNWNvqYoHSzSn0wLKwd-zaHU0OzkQER3jjFAyXUsXwozs1CvMdFtf8fAixC~uz17pM3S6l4eosyIPmWCYESKgK0VcNiKADz61L6yo8yqXCv~tei6V0gJVKA1R7jbnS~CvsT--8Ah0cdTYJwbzGykbA__" alt="" />
             </div>
        </div>



      {/* sliding window */}

      <div className="flex justify-center mt-52 text-4xl">
        <h1> <i className="text-slate-600">Smart Finance</i>,Secure Data</h1>
      </div>

       <div className="flex gap-10 mx-24 p-10 overflow-x-auto scroll-smooth" >
         
     

           <div className="h-[300px] w-[300px] flex flex-col gap-5" > 
               <img className="h-[150px]" src="https://www.sinequa.com/wp-content/uploads/2023/08/6-Ways-a-Data-Driven-Approach-Helps-Your-Organization-Succeed-960.jpg
               " alt="" />

               <div className="flex flex-col gap-2">
                <h3 className="flex justify-center">Data-Driven Insights</h3>
                <p className="text-center text-slate-400">Our platform seamlessly integrates with your financial systems, delivering comprehensive data insights.</p>
               </div>
           </div>
           <div className="h-[300px] w-[300px] flex flex-col gap-5" > 
               <img className="h-[150px]" src="https://automationedge.com/es/wp-content/uploads/2020/08/AI-Powered-Automation-For-Managed-Service-Providers.jpg
               " alt="" />

               <div className="flex flex-col gap-4">
                <h3 className="flex justify-center">AI-Powered Automation</h3>
                <p className="text-center text-slate-400">Intelligent algorithms automate repetitive tasks, improving efficiency and accuracy.</p>
               </div>
           </div>
           <div className="h-[300px] w-[300px] flex flex-col gap-5" > 
               <img className="h-[150px]" src="https://codup.co/wp-content/uploads/2024/02/Benefits-of-Dynamic-Access-Control.png
               " alt="" />

               <div className="flex flex-col gap-4">
                <h3 className="flex justify-center">Rigid Access Control</h3>
                <p className="text-center text-slate-400">Our platform strictly adheres to permissions set in the source application. Our results are updated in real time when it is fetched.</p>
               </div>
           </div>
           <div className="h-[300px] w-[300px] flex flex-col gap-5" > 
               <img className="h-[150px]" src="https://www.sinequa.com/wp-content/uploads/2023/08/6-Ways-a-Data-Driven-Approach-Helps-Your-Organization-Succeed-960.jpg
               " alt="" />

               <div className="flex flex-col gap-4">
                <h3 className="flex justify-center">Data-Driven Insights</h3>
                <p className="text-center text-slate-400">Our platform seamlessly integrates with your financial systems, delivering comprehensive data insights.</p>
               </div>
           </div>
           {/* Right Arrow */}
      
       </div> 

       <div className="flex justify-center text-4xl mt-32">
        <h1>Your Questions , <i>Answered</i></h1>
       </div>


      <div className="flex gap-8 h-[500px] mx-48 justify-center items-center mt-20" >
       <div className=" mt-5 max-w-[500px] h-[400px] "
          
          >
              <div
                onClick={()=>{
                  if(q1==false) setQ1(true);
                  else setQ1(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10  cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>Why drone survey?</span>
                  
                  <div style={{display:`${q1==true? "block":"none"}`}} className="mt-5 text-gray-700">
                  <div>
                  Drone Surveys allow you to collect detailed and accurate information from areas that are inaccessible to you. High-resolution orthomosaics & detailed Three Dimensional (3D) representations are provided by drones. Drone Surveys add vital essential data to facilitate well-informed decision-making during the preliminary stages of construction site mapping, surveying, or inspection of infrastructure.

                  </div>
                  <br />
                 <div>
                 It ensures that users sustain control and avoid failure to secure maximum goodwill of their assets. Wind Turbine Blades, highways, and transmission lines are frequently inspected through drone technology. When compared to traditional ‘at-height’ working, it decreases the major risk for the workers during an inspection.
                 </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q2==false) setQ2(true);
                  else setQ2(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>How accurate Drone Survey results are?</span>

                  <div style={{display:`${q2==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>Drone surveys are quicker, more accurate, and also less cost-expensive approach to the study. Drones include high-resolution cameras and sensors that provides interactive three Dimensional (3D) representations of the earth surface</div>
                      <br />
                      <div>Drone Surveys provide vital information that empowers competent arrangements from building site mapping, surveying, and inspection to infrastructure design and maintenance. Drone surveys offer a consistent approach to transmission tower surveying and powerline surveying. They dramatically reduce risk and maximize safety results by eliminating regular 'at-height' function.</div>
                  </div>
              </div>
              <div
              onClick={()=>{
                  if(q3==false) setQ3(true);
                  else setQ3(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>Which Drone technology do we use?</span>

                  <div style={{display:`${q3==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>
                      Since drones have distinct uses, they have become an integral part of numerous private and governmental organizations. We have made our position in a number of industries through fast, reliable and secure deliveries. Catering to Government projects and mapping agricultural land surveys, our technology can do it all. Using advanced survey drones, artificial intelligence, and a variety of advanced sensors such as thermal, RGB, Lidar, etc. we have broaden our drone technology to several.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q4==false) setQ4(true);
                  else setQ4(false)
              }}
              className="p-4 hover:bg-slate-400  hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>What does "Drone photography" mean?</span>

                  <div style={{display:`${q4==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>
                      Drone photography is a technique that involves photographing/mapping the surface of the Earth. They are photographed by cameras mounted on the Drone. Aerial photography is a widespread technique used by advertising agencies. Aerial photography use film variations, focal lengths, overlaps, and other features to create many types of images at different heights.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q5==false) setQ5(true);
                  else setQ5(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>What weather is suitable for flying Drones?</span>

              <div style={{display:`${q5==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>
                      Drones can easily capture high-quality photographs and videos at varying heights and in different climates. Most flying drones can operate in winds of up to 22 MPH. Few drones can chart the drizzle, the fog, and even the snow. Weather may make or break the quality of the aerial photograph taken. The climate in India is rarely a hindrance to our ventures. Drones can fly even in the cold; however, flying time also decreases. The motors supplied to most drones will work in light rain as long as the flight controller does not come into contact with the rain.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q6==false) setQ6(true);
                  else setQ6(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>What type of data do we capture?</span>

                  <div style={{display:`${q6==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>
                      We provide quick, reliable and accurate drone data for various kinds of industry. Our company specializes in the capture of data from drone surveying/mapping, aerial inspection and analysis, creative atmospheric data and UAV data processing. Drone data collected through our materials can be reproduced in various forms such as orthomosaic maps, 3D Point Cloud, DEM, DTM, DSM, Contour maps etc.
                      </div>
                  </div>
              </div>
              <div 
              onClick={()=>{
                  if(q7==false) setQ7(true);
                  else setQ7(false)
              }}
              className="p-4 hover:bg-slate-400 hover:px-10 cursor-pointer" style={{transitionDuration:'0.4s'}}>
                  <span>What is Aerial LiDAR</span>

                  <div style={{display:`${q7==true? "block":"none"}`}} className="mt-5 text-gray-700">
                      <div>Aerial Lidar is an aerial mapping and Surveying technology that uses GPS-monitored aerial Drone/UAV equipped with on-board positional and sensors. After post-flight production processes, the acquired Lidar Map data is used to know the precise elevation and geospatial location of features on the earth’s surface.
                      </div>
                      <br />
                      <div>
                      Lidar data is an accurate and efficient tool for producing three-dimensional topographic aerial maps and highly accurate aerial surveys of both land and man-made components. We have developed a custom aerial Lidar Mapping and surveying production workflow which adheres to the specifications outlined in Base Specification Guidelines.</div>
                  </div>
              </div>
       </div> 
       <div className="h-[500px]">
        <img className="h-[500px] rounded-2xl" src="https://s3-alpha-sig.figma.com/img/9060/f43f/92b9621b74e4254e67eb32c80a722c6e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBXZxAX-bTb9hLkZFAV98HFhCwQdEscRw8J-HS4aALILCw-wlhoGXylOHxTIimBFY-bdnmda6VCVs4U2~LdTp5UlAa5lbn2c-p51ZC31v53cSQVVtdCpdzLDZDe8rF4TPfR70YuYljjpNVqWETh6rAfgSaPs9m1EtxPVJln0LONuAyKZhUWfk9Ao0TKPL-sE8nAslNwIqvdMOp5KulhwLErsYX6wnhzu8qiv1nJLhL5-CiVyfVsKiMBu~JL1XV7jnuEAKGjpqIy-cckZyjn8YfLAsjl6yYcckU~j~AiUvRhCot1cXMXtGm4afg4uLW0DhDeleEVz0XD9yMXiZxBNYw__" />
       </div>
      </div>

{/* above footer */}
      <div className="mx-48 h-[200px] mt-32 ">
        <img 
        className="h-full w-full relative rounded-lg"
        src="https://s3-alpha-sig.figma.com/img/6368/a7c2/7c714d533a66059ce71ed7f63cde0d90?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0Emo9bWoutyx8TfxrXbopDaaI~YibtTXGbnRCO62sSGtJMEHavikoFm80jO8igvrsWH5uKPNOX-4rtrdoFSPqHP0-bz7nWBv1jc7WnGGXDOpkNTpcO-YonwaW8dyTI501R49xv0z57PNuK9zbO3aozlSOs5B0bhDPyEIFz955Ha1p1eRuS6E8t3ihLDcCluaQpRN-lXDm~2T4xkcJM8QOqHKW0lnmtCyQWwC81GWDL~2MxUZ5IPSq4QHGngqcfPKJlgCR-12AvXTyPXY4fPSJulD4wvrX7z-o-oMDcWKkBNs5zXpKKqPAYn3wNz5fflODEKxIkcqDNNYjc1DC5-Tg__" />

        <p className="absolute bottom-[630px] left-[300px] w-[200px]">Transform Your Financial
        Processes with Neo CFO</p>
        <button className="flex justify-center items-center py-2 px-3 bg-white absolute 
        bottom-[570px] left-[300px] rounded-full
        ">SCHEDULE A DEMO <GoArrowUpRight /></button>
             
      </div>

      <Footer/>
       
        
          </div>
    ) 

        
    
}
import { useEffect, useState } from 'react';
import '../css/schedule1.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import basic calendar styling
import Footer from '../components/footer';
import Navbar from '../components/header';

import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, parse } from 'date-fns';

const CalendarPro = ({setVisible,visible}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center my-2 " >
        <button onClick={prevMonth} className="sm:text-lg font-bold text-[#144944]">&lt;</button>
        <h2 className=" text-sm  text-[#144944]">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className="sm:text-lg font-bold text-[#144944]">&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEEE"; // Short day names (e.g., M, T, W)

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs text-center font-bold text-[#144944]">
          {format(addDays(startDate, i), dateFormat)[0]}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        days.push(
          <div 
            className={`w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] p-[8px] sm:p-[17px]   flex justify-center items-center rounded-full text-green-950 bg-[#14494433]  cursor-pointer   ` }
            key={day}
            onClick={() => onDateClick(parse(cloneDay))}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7  p-1  gap-x-4" key={day}>{days}</div>);
      days = [];
    }

    return <div className="mt-4">{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="max-w-[90%] sm:w-[470px] transition-all duration-500 h-[610px]  rounded-lg shadow-lg p-2" style={{backgroundColor:'#FFFFFF33'}}>
      <div className="calendar  h-[500px]">
      <h2 className='text-lg text-[#144944]'  >Schedule a Demo</h2>
        <p className='mt-2 text-[#2C766F] ' style={{fontSize:'12px'}}>We know your time is valuable. Select a date and time that works best for you.</p>
        <p className='mt-2 text-[#2C766F]' style={{fontSize:'12px'}}>🕒 30 min</p>
        <p className='mt-2 text-[#2C766F]' style={{fontSize:'12px'}}>🖥️ Web conferencing details provided upon confirmation</p>
         
         <div style={{border:'0.5px solid',marginTop:'10px',color:'#82939280'}}></div>
        <h3 style={{fontSize:'15px',fontWeight:'800' ,marginLeft:"55px"}} className='sm:mt-10 text-[#144944]'>Select Date & Time</h3>
        
        <div className='sm:mx-14  sm:my-2 '>
        {renderHeader()}
        {renderDays()}
        <div className=' sm:my-2'>
        {renderCells()}
        </div>
        
        </div>
       
        
      </div>
      <div className='flex justify-end
        '>
      <button
        onClick={()=>{
          if(visible) setVisible(false)
            else setVisible(true)
        }}
        className=' bg-[#FFFFFF] px-7 rounded-sm mt-12 sm:mt-9 mr-4 text-xs hover:bg-red-400 text-[#144944] py-1'>NEXT</button>
      </div>
    </div>
  );
};




  // demo 2
  import { FaCheck } from "react-icons/fa6";
function Demo2({setVisible,visible}){

  const[v1,set1] = useState(false);
  const[v2,set2] = useState(false);
  const[v3,set3] = useState(false);
  const[v4,set4] = useState(false);
  const[v5,set5] = useState(false);
  return (
    <div id="schedule"  className='transition-all duration-300 '>
    <h3  className=' text-[#144944] text-2xl w-full flex justify-start '>Schedule a Demo</h3>
    <p  style={{color:'#2C766F'}}>We know your time is valuable. Select a date and time that works <br/>
         best for you, and our team will tailor the demo to your specific needs.</p>
    <p  style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"><i class="fa-regular fa-clock"></i>    30 min</p>
    <p style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"> <i class="fa-solid fa-video"></i>Web Conferencing details provided upon confirmation</p>
    <p style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"><i class="fa-regular fa-calendar"></i> 9:00 AM - 9:30 AM, Thursday, August 30, 2024</p>

    <div className="registrationForm "  style={{color:'#2C766F'}}>
        <h4 className='ml-2 text-green-950'>Enter Details</h4>
        <form action="" className="regform overflow-y-scroll no-scrollbar  h-60">
            <label htmlFor="name" className='text-green-950'>Name *</label><br/>
            <input type="text" className='sm:mb-3 sm:w-[400px]' style={{backgroundColor:"inherit",border:'1px solid green'}} name="name"  placeholder="Enter Your Name"/><br/>
            <label htmlFor="Email" className='text-green-950'>Email *</label><br/>
            <input type="email" name="email" style={{backgroundColor:"inherit",border:'1px solid green'}}  className='sm:mb-3 sm:w-[480px]' placeholder="Enter Your Email"/><br/>
            <label htmlFor="Guest" className='text-green-950'>Add Guests</label><br/>
            <textarea style={{height:'27%',backgroundColor:"inherit",border:'1px solid green'}}  name="Guest" id="Guest" placeholder="Enter the Guest's Email ID" className='sm:w-[400px]' ></textarea><br/>

            <div className='mt-5'>
            <label htmlFor="Guest" className='text-green-950 '>What are you most interested  in learning about?</label><br/>
            </div>
            <div className='flex justify-start flex-col gap-2 mt-4'>

            <div className={`flex gap-5   items-center h-6 `}>
             <div onClick={()=>{
              if(v1) set1(false)
                else set1(true)
             }} className={`w-5 h-5 rounded-md transition-all duration-250 flex justify-center items-center ${v1 ? 'bg-green-900':''}`} style={{border:'1px solid #144944'}}>
               {v1 ? <FaCheck className= ' text-white'/>:''}
             </div>
             <label htmlFor="" className='text-green-900'>Accounting</label>
             </div>


             <div className={`flex gap-5   items-center h-6 `}>
             <div  onClick={()=>{
              if(v2) set2(false)
                else set2(true)
             }}  className={`w-5 h-5 rounded-md flex transition-all duration-250  justify-center items-center ${v2 ? 'bg-green-900':''}`} style={{border:'1px solid #144944'}}>
{v2 ? <FaCheck className='text-white font-xs'/>:''}
             </div>
             <label htmlFor="" className='text-green-900'>Inventory Management</label>
             </div>


             <div className={`flex gap-5   items-center h-6 `}>
             <div  onClick={()=>{
              if(v3) set3(false)
                else set3(true)
             }}  className={`w-5 h-5 rounded-md flex transition-all duration-250  justify-center items-center ${v3 ? 'bg-green-900':''}`} style={{border:'1px solid #144944'}}>
{v3 ? <FaCheck className='text-white font-xs'/>:''}
             </div>
             <label htmlFor="" className='text-green-900'>Financing</label>
             </div>
             <div className={`flex gap-5   items-center h-6 `}>
             <div onClick={()=>{
              if(v4) set4(false)
                else set4(true)
             }} className={`w-5 h-5 rounded-md flex transition-all duration-250  justify-center items-center ${v4 ? 'bg-green-900':''}`} style={{border:'1px solid #144944'}}>
{v4 ? <FaCheck className='text-white font-xs'   />:''}
             </div>
             <label htmlFor="" className='text-green-900'>Invoicing</label>
             </div>
             <div className={`flex gap-5   items-center h-6 `}>
             <div  onClick={()=>{
              if(v5) set5(false)
                else set5(true)
             }}  className={`w-2 h-2 sm:w-5 sm:h-5 rounded-md flex transition-all duration-250  justify-center items-center ${v5 ? 'bg-green-900':''}`} style={{border:'1px solid #144944'}}>
{v5 ? <FaCheck className='text-white font-xs'/>:''}
             </div>
             <label htmlFor="" className='text-xs text-green-900'>Dashboard/Analytics</label>
             </div>
            </div>


            <div className='mt-5 flex flex-col'>
            <label htmlFor="" className='text-green-950  '>How do you hear about Neo CFO</label>   
            <select name="" id="" placeholder="Other" className='sm:mt-3 bg-inherit p-2 rounded-md' style={{border:'1px solid green'}}>

              <option value="">Other</option>
            </select>
              </div>  
           
           
        </form>
        <div className='flex justify-end -translate-y-4  mt-4 sm:-translate-y-0  w-full '>
        <div className="gap-2 flex">
            <button   onClick={()=>{
              if(visible) setVisible(false)
                else setVisible(true)
            }} className='sm:px-6  hover:bg-slate-300 rounded-sm text-white bg-inherit ' style={{border:'1px solid white'}}>Back</button>
            <button className='sm:px-3 bg-white rounded-sm  hover:bg-yellow-400 '>Schedule</button>
        </div>
        </div>
       
       
    </div>
</div>
  )
}

export default function Schedule(){

   const [visible,setVisible] = useState(false)
   
    return (    
        <div className='flex flex-col font-geist  sm:items-center justify-center overflow-x-hidden'>
            <div id="home"  >
                 
                 <Navbar bg={'#FFFFFF33'} />


                <div id="main-section" >
            <div id="main-text" >
                <div style={{color:'#144944'}}>
                <h1  >Discover How Neo CFO Can <br/>
                    <i style={{fontFamily: 'Playfair Display, serif'}}>Revolutionize </i> Your Business</h1>
                <p style={{color:"#2C766F",marginLeft:"100px"}}>Schedule a personalized demo today, and see how we can tailor <br/>our solutions to meet your unique business needs.</p>
                </div>

                <div id="infoScheduleForms" >
                    <div id="infoForm">
                        <h3 className='text-white'>Get in Touch</h3>
                        <p>Simply fill out the form below for your demo. <br/>
                            Our team will be in touch shortly to confirm the details.</p>
                        <form action="">
                            <label htmlFor="Name">Name *</label> <br/>
                            <input type="text" name="Name" id="Name" placeholder="Enter Your name"/> <br/>
                            <label htmlFor="Email">Email *</label> <br/>
                            <input type="email" name="Email" id="Email" placeholder="Enter your Email"/><br/>
                            <label htmlFor="Company">Company *</label> <br/>
                            <input type="text" name="Company" id="Company" placeholder="Enter your Company Name"/><br/>
                            <label>Accounting Software rely on <br/>
                                <input list="browsers" name="myBrowser"  /></label>
                                <datalist id="browsers">
                                  <option value="Chrome"/>
                                  <option value="Firefox"/>
                                  <option value="Internet Explorer"/>
                                  <option value="Opera"/>
                                  <option value="Safari"/>
                                  <option value="Microsoft Edge"/>
                                </datalist> <br/>
                            <label htmlFor="Message">Message</label> <br/>
                            <textarea name="Message" id="Message"></textarea><br/>
                            <div className='flex justify-end mt-6'>
                            <button className='bg-white text-green-700 px-5 py-1 rounded-sm text-xs'>SUBMIT</button>
                            </div>
                        </form>
                    </div>


                   {visible == false ?  <CalendarPro setVisible={setVisible} visible={visible}/>:<Demo2 setVisible={setVisible} visible={visible}/>}
            </div>

           
            
        </div>
        
            </div>

            <br/>
    <br/>
    <br/>
   
       
        </div>
        <div className="benefits-section">
            <h1>What You'll Gain from <br/>
                <i style={{fontFamily: 'Playfair Display, serif'}}> Your Personalized Demo</i></h1>
            <div class="benefits">
                <div className="benefit">
                    <img src="./benefit1.1.png" alt="" id="img1"/><br/> 
                    <img src="./benefit1.2.png" alt="" id="img2"/>
                    <br/>
                    <div className="benefit-text ">
                        <h1>Explore Powerful Features</h1>
                        <p>Get a first-hand look at how NEO CFO can streamline your financial processes with its advanced automation tools.</p>
                    </div>
                </div>
                <div className="benefit2">
                    <img src="./benefit2.1.png" alt="" id="img21"/>
                    <h1>Expert Insights</h1>
                    <p>Our team will answer all your questions and show you how NEO CFO can be tailored to your business needs.</p>
                </div>
                <div className="benefit3">
                    <img src="./benefit2.1.png" alt="" id="benefit31"/>
                    <h1>Optimize Your Operations</h1>
                    <p>Understand how NEO CFO can enhance efficiency, accuracy, and compliance, transforming the way you manage finances.</p>
                </div>
            </div>
        </div>

        <Footer/>
        </div>
    )
}

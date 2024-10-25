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
      <div className="flex justify-between items-center my-2 " style={{backgroundColor:'#FFFFFF33'}}>
        <button onClick={prevMonth} className="text-lg font-bold text-gray-700">&lt;</button>
        <h2 className="text-sm font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className="text-lg font-bold text-gray-700">&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEEE"; // Short day names (e.g., M, T, W)

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs text-center font-bold text-gray-700">
          {format(addDays(startDate, i), dateFormat)}
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
            className={`p-[8px] text-center bg-[#14494433] cursor-pointer  ${!isSameMonth(day, monthStart)
              ? " rounded-full" 
              : isSameDay(day, selectedDate)
              ? "bg-white  rounded-full"
              : "text-gray-700 hover:bg-gray-200 rounded-full"
            }`}
            key={day}
            onClick={() => onDateClick(parse(cloneDay))}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7 gap-2" key={day}>{days}</div>);
      days = [];
    }

    return <div className="mt-2">{rows}</div>;
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
    <div className="max-w-[90%] sm:w-[430px] h-[610px]  rounded-lg shadow-lg p-4" style={{backgroundColor:'#FFFFFF33'}}>
      <div className="calendar  h-[500px]">
      <h2 className='' style={{color:'#144944'}} >Schedule a Demo</h2>
        <p className='mt-2 text-[#2C766F]'>We know your time is valuable. Select a date and time that works best for you.</p>
        <p className='mt-2 text-[#2C766F]'>🕒 30 min</p>
        <p className='mt-2 text-[#2C766F]'>🖥️ Web conferencing details provided upon confirmation</p>
        
        <h3 style={{color:'#2C766F'}}>Select Date & Time</h3>
        
        {renderHeader()}
        {renderDays()}
        {renderCells()}
        
      </div>
      <div className='flex justify-end'>
      <button
        onClick={()=>{
          if(visible) setVisible(false)
            else setVisible(true)
        }}
        className=' bg-[#FFFFFF] px-7 rounded-sm mt-9 hover:bg-red-400 text-[#144944] py-1'>Next</button>
      </div>
    </div>
  );
};




  // demo 2
function Demo2({setVisible,visible}){
  return (
    <div id="schedule"  >
    <h3 style={{color:'#144944',marginBottom:'5px'}}>Schedule a Demo</h3>
    <p  style={{color:'#2C766F'}}>We know your time is valuable. Select a date and time that works <br/>
         best for you, and our team will tailor the demo to your specific needs.</p>
    <p  style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"><i class="fa-regular fa-clock"></i>    30 min</p>
    <p style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"> <i class="fa-solid fa-video"></i>Web Conferencing details provided upon confirmation</p>
    <p style={{color:'#2C766F',marginTop:'10px'}} id="scheP2"><i class="fa-regular fa-calendar"></i> 9:00 AM - 9:30 AM, Thursday, August 30, 2024</p>

    <div className="registrationForm "  style={{color:'#2C766F'}}>
        <h4>Enter Details</h4>
        <form action="" className="regform">
            <label htmlFor="name">Name *</label><br/>
            <input type="text" className='mb-3' style={{backgroundColor:"inherit",border:'1px solid green'}} name="name"  placeholder="Enter Your Name"/><br/>
            <label htmlFor="Email" >Email *</label><br/>
            <input type="email" name="email" style={{backgroundColor:"inherit",border:'1px solid green'}}  className='mb-3' placeholder="Enter Your Email"/><br/>
            <label htmlFor="Guest">Add Guests</label><br/>
            <textarea style={{height:'90%',backgroundColor:"inherit",border:'1px solid green'}}  name="Guest" id="Guest" placeholder="Enter the Guest's Email ID" ></textarea><br/>
        </form>
        <div className="regBtns">
            <button id="regbtn1" onClick={()=>{
              if(visible) setVisible(false)
                else setVisible(true)
            }} className='px-3 py-1  '>Back</button>
            <button className='px-3 py-1 bg-white hover:bg-yellow-400 '>Schedule</button>
        </div>
       
    </div>
</div>
  )
}

export default function Schedule(){

   const [visible,setVisible] = useState(false)
   
    return (    
        <div className='flex flex-col sm:items-center justify-center overflow-x-hidden'>
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
                            <div className='flex justify-end mt-3'>
                            <button className='bg-white text-green-700 px-4 py-2 rounded-sm text-xs'>Submit</button>
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

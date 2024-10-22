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
      <div className="flex justify-between items-center my-4" style={{backgroundColor:'#FFFFFF33'}}>
        <button onClick={prevMonth} className="text-lg font-bold text-gray-700">&lt;</button>
        <h2 className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
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
            className={`p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart)
              ? "text-gray-400"
              : isSameDay(day, selectedDate)
              ? "bg-green-500 text-white rounded-full"
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
    <div className="max-w-sm sm:w-[500px] rounded-lg shadow-lg p-4" style={{backgroundColor:'#FFFFFF33'}}>
      <div className="calendar">
      <h2 className='' style={{color:'#144944'}} >Schedule a Demo</h2>
        <p className='mt-2'>We know your time is valuable. Select a date and time that works best for you.</p>
        <p className='mt-5'>🕒 30 min</p>
        <p className='mt-2'>🖥️ Web conferencing details provided upon confirmation</p>
        
        <h3 style={{color:'#2C766F'}}>Select Date & Time</h3>
        
        {renderHeader()}
        {renderDays()}
        {renderCells()}
        <button
        onClick={()=>{
          if(visible) setVisible(false)
            else setVisible(true)
        }}
        className='mt-2 bg-white px-5 rounded-lg hover:bg-red-400 hover:text-white py-1'>Next</button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 font-bold">Selected Date: {format(selectedDate, "MMMM d, yyyy")}</p>
      </div>
    </div>
  );
};
const ScheduleDemo = ({visible,setVisible}) => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className="schedule-demo "  style={{color:'#2C766F'}}>
        <h2 className='' style={{color:'#144944'}} >Schedule a Demo</h2>
        <p className='mt-2'>We know your time is valuable. Select a date and time that works best for you.</p>
        <p className='mt-5'>🕒 30 min</p>
        <p className='mt-2'>🖥️ Web conferencing details provided upon confirmation</p>
        
        <h3 style={{color:'#2C766F'}}>Select Date & Time</h3>
        
        <div className="calendar-container ">
          <button className="prev-btn">❮</button>
  
          <Calendar
            onChange={onChange}
            value={date}
            nextLabel="❯"
            prevLabel="❮"
            className="custom-calendar" 
            minDetail="month" // Shows only month view
            showNeighboringMonth={false} // Don't show neighboring month days
          />
  
          <button className="next-btn">❯</button>
        </div>
  
        <style jsx>{`
          /* General Styles */
          .schedule-demo {
            
             background-color: #FFFFFF4D;
            backdrop-filter:blur(35px);
            padding: 20px;
            border-radius: 12px;
            max-width: 500px;
            
            box-sizing: border-box;
          }
  
          h2, h3 {
            color: #333;
          }
  .custom-calendar{
      background-color: inherit;
  }
          .calendar-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            width: 100%;
            
            
          }
  
          .custom-calendar {
             /* Background color for the calendar */
            border-radius: 12px;
            padding: 20px;
            width: 100%;
            max-width: 500px;
            border: none;
           
            
          }
  
          .custom-calendar .react-calendar__tile {
            /* Default background for dates */
            border-radius: 50%;
            width:20px;
            height:50px;
            margin: 5px;
            
            
            background-color:#14494433
            
          }
  
          .custom-calendar .react-calendar__tile:enabled:hover {
            /* Highlight color on hover */
            border-radius:50%;
            
          }
  
          .custom-calendar .react-calendar__tile--active {
            background-color: white; /* Active date background */
            color: #144944;
          }
  
          .prev-btn, .next-btn {
            font-size: 24px;
            
            border: none;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 50%;
          }
  
          /* Media Queries for Responsiveness */
          @media (max-width: 768px) {
            .calendar-container {
              flex-direction: column;
              
            }
              .schedule-demo{
              width:90%
              }
  
            .prev-btn, .next-btn {
              margin-bottom: 10px;
              padding: 8px 16px;
              font-size: 18px;
            }
  
            .custom-calendar {
              width: 100%;
              max-width: 100%;
            }
          }
  
          @media (max-width: 480px) {
            h2, h3 {
              font-size: 1.5rem;
            }
            .schedule-demo{
              width:95%
              }
            .prev-btn, .next-btn {
              font-size: 16px;
              padding: 6px 12px;
            }
  
            .custom-calendar .react-calendar__tile {
              padding: 8px;
              margin: 3px;
            }
          }
  
          @media (min-width: 1200px) {
            .schedule-demo {
              max-width: 500px;
            }
  
            .calendar-container {
              max-width: 900px;
            }
  
            .custom-calendar {
              max-width: 500px;
            }
          }
        `}</style>
        <button
        onClick={()=>{
          if(visible) setVisible(false)
            else setVisible(true)
        }}
        className='mt-2 bg-white px-5 rounded-lg hover:bg-red-400 hover:text-white py-1'>Next</button>
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
        <div className='flex flex-col sm:items-center justify-center'>
            <div id="home"  >
                 
                 <Navbar bg={'#FFFFFF33'} />


                <div id="main-section" >
            <div id="main-text" >
                <div style={{color:'#144944'}}>
                <h1  >Discover How Neo CFO Can <br/>
                    <i style={{fontFamily: 'Playfair Display, serif'}}>Revolutionize </i> Your Business</h1>
                <p style={{color:"#2C766F"}}>Schedule a personalized demo today, and see how we can tailor <br/>our solutions to meet your unique business needs.</p>
                </div>

                <div id="infoScheduleForms" className=''>
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
                            <div className='flex justify-end mt-10'>
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

import { useEffect, useState } from 'react';
import '../css/schedule1.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import basic calendar styling
import Footer from '../components/footer';

const ScheduleDemo = ({visible,setVisible}) => {
    const [date, setDate] = useState(new Date());
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className="schedule-demo">
        <h2>Schedule a Demo</h2>
        <p>We know your time is valuable. Select a date and time that works best for you.</p>
        <p>🕒 30 min</p>
        <p>🖥️ Web conferencing details provided upon confirmation</p>
        
        <h3>Select Date & Time</h3>
        
        <div className="calendar-container">
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
            text-align: center;
            background: rgba(255, 255, 255, 0.3);
            padding: 20px;
            border-radius: 12px;
            max-width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
          }
  
          h2, h3 {
            color: #333;
          }
  
          .calendar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            width: 100%;
          }
  
          .custom-calendar {
            background-color: rgba(255, 255, 255, 0.3); /* Background color for the calendar */
            border-radius: 12px;
            padding: 20px;
            width: 100%;
            max-width: 500px;
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
  
          .custom-calendar .react-calendar__tile {
            background-color: #fff; /* Default background for dates */
            border-radius: 6px;
            margin: 5px;
            padding: 10px;
          }
  
          .custom-calendar .react-calendar__tile:enabled:hover {
            background-color: #f0e68c; /* Highlight color on hover */
          }
  
          .custom-calendar .react-calendar__tile--active {
            background-color: #98fb98; /* Active date background */
            color: #fff;
          }
  
          .prev-btn, .next-btn {
            font-size: 24px;
            background-color: white;
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
              max-width: 1200px;
            }
  
            .calendar-container {
              max-width: 900px;
            }
  
            .custom-calendar {
              max-width: 600px;
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
    <div className="schedule">
    <h3>Schedule a Demo</h3>
    <p>We know your time is valuable. Select a date and time that works <br/>
         best for you, and our team will tailor the demo to your specific needs.</p>
    <p id="scheP2"><i class="fa-regular fa-clock"></i>    30 min</p>
    <p id="scheP2"> <i class="fa-solid fa-video"></i>Web Conferencing details provided upon confirmation</p>
    <p id="scheP2"><i class="fa-regular fa-calendar"></i> 9:00 AM - 9:30 AM, Thursday, August 30, 2024</p>

    <div className="registrationForm">
        <h4>Enter Details</h4>
        <form action="" className="regform">
            <label htmlFor="name">Name *</label><br/>
            <input type="text" name="name"  placeholder="Enter Your Name"/><br/>
            <label htmlFor="Email">Email *</label><br/>
            <input type="email" name="email" placeholder="Enter Your Email"/><br/>
            <label htmlFor="Guest">Add Guests</label><br/>
            <textarea style={{height:'90%'}} name="Guest" id="Guest" placeholder="Enter the Guest's Email ID" ></textarea><br/>
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
        <div>
            <div id="home" className='mb-3'>



                <div id="main-section" >
            <div id="main-text" >
                <div>
                <h1  >Discover How Neo CFO Can <br/>
                    <i style={{fontFamily: 'Playfair Display, serif'}}>Revolutionize </i> Your Business</h1>
                <p>Schedule a personalized demo today, and see how we can tailor <br/>our solutions to meet your unique business needs.</p>
                </div>

                <div id="infoScheduleForms">
                    <div id="infoForm">
                        <h3>Get in Touch</h3>
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
                            <button>Submit</button>
                        </form>
                    </div>


                   {visible == false ?  <ScheduleDemo setVisible={setVisible} visible={visible}/>:<Demo2 setVisible={setVisible} visible={visible}/>}
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
                    <div className="benefit-text">
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

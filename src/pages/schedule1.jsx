import { useEffect, useRef, useState } from 'react';
import '../css/schedule1.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import basic calendar styling
import Footer from '../components/footer';
import Navbar from '../components/header';

import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, parse } from 'date-fns';

const CalendarPro = ({ setVisible, visible }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center my-2 sm:my-4">
        <button onClick={prevMonth} className="text-sm sm:text-lg font-bold text-[#144944]">
          &lt;
        </button>
        <h2 className="font-geist text-[#144944]" style={{ fontSize: '20px' }}>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button onClick={nextMonth} className="text-sm sm:text-lg font-bold text-[#144944]">
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = 'EEEEEE'; // Short day names (e.g., M, T, W)

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs sm:text-sm text-center font-bold text-[#144944]">
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
    let flag = true

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        // Only render dates within the current month
         isSameMonth(day, currentMonth);

       days.push(
        <div
          className={`w-[24px]  h-[24px] sm:w-[35px] sm:h-[35px] p-1 sm:p-[10px] flex justify-center items-center rounded-full cursor-pointer ${
            isSameMonth ? 'text-green-950 bg-[#14494433] hover:bg-green-500' : 'text-gray-400'
          }`}
          key={day}
          onClick={() => isSameMonth && onDateClick(parse(cloneDay))}
        >
          <span className="text-xs sm:text-base">{formattedDate}</span>
        </div>
      )
        day = addDays(day, 1);
      }

      rows.push(
        <div className="grid grid-cols-7 gap-x-2 sm:gap-x-5 p-[3px]" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="">{rows}</div>;
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
    <div className="max-w-[95%] sm:max-w-[500px]  transition-all duration-500 h-auto sm:h-[650px] rounded-lg shadow-lg p-4 sm:p-3 bg-[#FFFFFF33]">
      <div className="calendar h-auto sm:h-[500px]">
        <h2 className="text-lg sm:text-xl text-[#144944] font-geist">Schedule a Demo</h2>
        <p className=" text-xs  font-geist text-[#2C766F] mt-5">
        We know your time is valuable. Select a date and time that works best for you, and our team will tailor the demo to your specific needs.
        </p>
        <p className="  text-[#2C766F] font-geist  flex items-center gap-2 mt-4" style={{fontSize:'13px'}}><i className="fa-regular fa-clock" style={{fontSize:'1rem'}} ></i> 30 min</p>
        <p className=" text-[#2C766F] flex mt-3 font-geist items-center gap-2" style={{fontSize:'13px'}}><i style={{fontSize:'1rem'}} className="fa-solid fa-video  ml"></i> Web conferencing details provided upon confirmation</p>

        <div className="border-t mb-4 sm:mb-0 mt-3 border-[#82939280]"></div>

        <h3 className="text-xs  mt-4 ml-5 font-semibold text-[#144944] font-geist ">Select Date & Time</h3>

        <div className="mx-auto sm:mx-14 font-geist flex flex-col">
          {renderHeader()}
          {renderDays()}
          <div className="w-full">{renderCells()}</div>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-5 sm:mt-16">
        <button
          onClick={() => (visible ? setVisible(false) : setVisible(true))}
          className="bg-[#FFFFFF] px-5 py-1 sm:px-7  font-geist rounded-sm text-xs sm:text-xs text-[#144944] hover:bg-red-400"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};






  // demo 2
  import { FaCheck } from "react-icons/fa6";
  import { IoIosArrowUp } from "react-icons/io";
  import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
  function Demo2({ setVisible, visible }) {
    const [v1, set1] = useState(false);
    const [v2, set2] = useState(false);
    const [v3, set3] = useState(false);
    const [v4, set4] = useState(false);
    const [v5, set5] = useState(false);
  
    return (
      <div  className="w-full max-w-lg sm:max-w-[450px]  h-auto sm:h-[630px] bg-white/30 mt-4 rounded-lg p-2 flex flex-col justify-center  transition-all duration-300">
        <h3 className="text-[#144944] sm:text-lg -translate-y-0 sm:-translate-y-3 ">Schedule a Demo</h3>
        <p className=" text-[#2C766F]  font-geist mb-3" style={{fontSize:'13px'}}>We know your time is valuable. Select a date and time that works best for you, and our team will tailor the demo to your specific needs.</p>
        <p className="  text-[#2C766F]  font-geist flex items-center gap-2" style={{fontSize:'13px'}}><i className="fa-regular fa-clock" style={{fontSize:'1rem'}} ></i> 30 min</p>
        <p className=" text-[#2C766F] font-geist flex items-center gap-2" style={{fontSize:'13px'}}><i style={{fontSize:'1rem'}} className="fa-solid fa-video  ml"></i> Web conferencing details provided upon confirmation</p>
        <p className="text-sm  text-[#2C766F]  font-geist flex items-center gap-2" style={{fontSize:'13px'}}><i className="fa-regular fa-calendar" style={{fontSize:'1rem',marginLeft:'1px'}}></i> 9:00 AM - 9:30 AM, Thursday, August 30, 2024</p>
  
        <div className="mt-3 text-[#2C766F]">
          <h4 className="text-green-950  sm:text-sm mb-2">Enter Details</h4>
          <form className="flex flex-col gap-1 h-[240px] sm:h-[260px] overflow-y-auto scrollbar-thin no-scrollbar  ">
            <label htmlFor="name" className="text-green-950 text-xs" >Name *</label>
            <input type="text" className="border border-green-600 bg-inherit p-1 rounded-md" placeholder="Enter Your Name" />
  
            <label htmlFor="email" className="text-green-950 text-xs">Email *</label>
            <input type="email" className="border border-green-600 bg-inherit p-1 rounded-md" placeholder="Enter Your Email" />
  
            <label htmlFor="Guest" className="text-green-950 text-xs resize-none">Add Guests</label>
            <textarea className="border no-scrollbar text-xs overflow-y-hidden border-green-600 bg-inherit py-7 rounded-md" ></textarea> 
  
            <label htmlFor="interest" className="text-green-950 mt-5 text-xs">What are you most interested in learning about?</label>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accounting", state: v1, setState: set1 },
                { label: "Inventory Management", state: v2, setState: set2 },
                { label: "Financing", state: v3, setState: set3 },
                { label: "Invoicing", state: v4, setState: set4 },
                { label: "Dashboard/Analytics", state: v5, setState: set5 },
              ].map(({ label, state, setState }, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    onClick={() => setState(!state)}
                    className={`w-5 h-5 rounded-md flex justify-center items-center transition-all ${state ? 'bg-green-900' : ''} border border-[#144944]`}
                  >
                    {state && <FaCheck className="text-white" />}
                  </div>
                  <label className="text-green-900 text-xs">{label}</label>
                </div>
              ))}
            </div>
  
            <label htmlFor="source" className="text-green-950 mt-4 text-xs">How did you hear about Neo CFO?</label>
            <select className="border border-green-600 bg-inherit text-xs p-2 rounded-md mt-2">
              <option value="other" className='text-xs'>Other</option>
            </select>
          </form>
  
          <div className="flex justify-end gap-4 mt-16">
            <button onClick={() => setVisible(!visible)} className="bg-transparent py-1 border text-xs border-white text-white px-4 rounded-sm hover:bg-gray-300">Back</button>
            <button className="bg-white text-green-950 px-4  rounded-sm hover:bg-yellow-400 py-1 text-xs">Schedule</button>
          </div>
        </div>
      </div>
    );
  }
  const Dropdown = () => {
    // State to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState('Zoho Books');
    // State to toggle the dropdown
    const [isOpen, setIsOpen] = useState(false);
    // Reference for dropdown menu for handling outside clicks
    const dropdownRef = useRef(null);
  
    // Function to handle clicking outside of dropdown to close it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    // Options array
    const options = ['Zoho Books', 'Tally', 'Vyapaar', 'Busy', 'Others'];
  
    // Function to handle selecting an option
    const handleSelect = (option) => {
      setSelectedOption(option); // Update selected option
      setIsOpen(false); // Close dropdown
    };
  
    return (
      <div className="w-full font-geist max-w-xs transition-all duration-500 mx-auto" ref={dropdownRef}>
        {/* Input Label */}
        
  
        {/* Input Box with Dropdown Icon */}
        <div className="relative">
          {/* Input field showing the selected option */}
          <input
            type="text"
            value={selectedOption}
            className="w-full bg-transparent text-[13px] border border-gray-500 text-white h-10 rounded-md focus:outline-none focus:ring-2"
            readOnly
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
          />
  
          {/* Dropdown Icon */}
          <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center px-2 pointer-events-none ">
             <IoIosArrowUp className='text-[14px] cursor-pointer'/> 
             <MdKeyboardArrowDown className='text-sm cursor-pointer' /> 
              {/* Chevron Icon */}
          </div>
  
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-1 w-full transition-all duration-500 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <ul className="text-gray-900 text-xs">
                {options.map((option, index) => (
                  <li 
                    key={index}
                    className="px-4 py-2 mt-2 text-xs cursor-pointer transition-all  duration-500 hover:bg-gray-100 flex justify-between"
                    onClick={() => handleSelect(option)} // Set selected option on click
                  >
                    <span className='text-xs'>{option}</span>
                    {selectedOption === option && <i className="fas fa-check text-green-600 " style={{fontSize:"19px"}}></i>} {/* Check Icon */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default function Schedule(){

   const [visible,setVisible] = useState(false)
   
    return (    
        <div className='flex flex-col font-geist  sm:items-center justify-center overflow-x-hidden'>
            <div id="home"  >
                 
                 <Navbar bg={'#FFFFFF33'} />


                <div id="main-section" >
            <div id="main-text" >
                <div style={{color:'#144944'}} className='flex flex-col '>
                <h1  className='-translate-x-10 text-xl  sm:-translate-x-0' >Discover How Neo CFO Can <br/>
                    <i style={{fontFamily: 'Playfair Display, serif'}}>Revolutionize </i> Your Business</h1>
                <p style={{color:"#2C766F",marginLeft:"100px"}} className='-translate-x-10 sm:-translate-x-0 '>Schedule a personalized demo today, and see how we can tailor <br/>our solutions to meet your unique business needs.</p>
                </div>

                <div id="infoScheduleForms" >
                    <div id="infoForm" className=' font-geist'>
                        <h3 className='text-white font-geis'>Get in Touch</h3>
                        <p className=' font-geist ' style={{fontSize:'15px'}}>Simply fill out the form below for your demo. <br/>
                            Our team will be in touch shortly to confirm the details.</p>
                        <form action="">
                            <label htmlFor="Name">Name *</label> <br/>
                            <input type="text" name="Name" id="Name" placeholder="Enter Your name"/> <br/>
                            <label htmlFor="Email">Email *</label> <br/>
                            <input type="email" name="Email" id="Email" placeholder="Enter your Email"/><br/>
                            <label htmlFor="Company">Company *</label> <br/>
                            <input type="text" name="Company" id="Company" placeholder="Enter your Company Name"/><br/>
                            
                            
<label class="block text-white text-sm ">Accounting software you rely on</label>


{/* <div class="relative">
  <input type="text" value="Zoho Books" class="w-full bg-transparent border border-gray-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" readonly />

  
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <i class="fas fa-chevron-down text-gray-500"></i>
  </div>

  
  <div class="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
    <ul class="text-gray-900 text-sm">
      <li class="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between">
        <span>Zoho Books</span>
        <i class="fas fa-check text-green-500"></i> 
      </li>
      <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">Tally</li>
      <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">Vyapaar</li>
      <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">Busy</li>
      <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">Others</li>
    </ul>
  </div>
</div> */}
<Dropdown/>

                               
                            <label htmlFor="Message">Message</label> <br/>
                            <textarea name="Message" id="Message"></textarea><br/>
                            <div className='flex justify-end mt-6'>
                            <button className='bg-white text-green-700 px-5 mt-4 py-1 rounded-sm text-xs'>SUBMIT</button>
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

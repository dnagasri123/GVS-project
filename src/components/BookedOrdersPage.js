// BookedOrdersPage.js
import React from 'react';
import './bookedorderspage.css';
import {  useNavigate } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import SupportIcon from './SupportIcon';
const BookedOrdersPage = () => {
    



    const navigate=useNavigate()


    const handleCancelBooking=()=>{
      navigate('/CancelledBookingPage')
    };
 
 
  const handleAcceptBooking = () => {
    navigate('/AcceptBookingPage')
  };

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const goToHome = () => {
  //   // Navigate to EventHubInsightsPage
  //   navigate('/Home');
  // };
  

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar"  >
          {/* onClick={toggleDropdown} */}
          <FaAlignJustify className="align-justify-icon" />
          {/* {showDropdown && (
            <div className="dropdown">
                             
                              <p onClick={goToHome}>Home</p>

              
              
              
            </div>
            
          )} */}

          
        </div>
        <img src={process.env.PUBLIC_URL + '/globalimages/logo.png'}  alt="Company Logo" className="logo" />
          <h1 className="company-name">GVS Private Limited</h1>
        </div>
        
      </header>

      <main className="main-container">
      <h1 className='bookedorders-heading'>Booked Orders Page</h1>
      <div className="booked-orders-page">
      

      <label>
        Select Customer Booked Hall
       
      </label>

      <br />

      <div className="action-button-container">
        <button onClick={handleAcceptBooking} className='accept-booking' >
          Accept Booking
        </button>
        <button className='cancel-booking' onClick={handleCancelBooking}> Cancel Booking</button>
      </div>

      
       
    
    </div>

      
      </main>
      <div className='bookordersicon-container'>
    <SupportIcon />

    </div>

      <footer className="footer">
        <div className="contact-icons">
          {/* Add your email, WhatsApp, and contact icons/images */}
          {/* <img src="/email-icon.png" alt="Email" className="icon" />
          <img src="/whatsapp-icon.png" alt="WhatsApp" className="icon" />
          <img src="/contact-icon.png" alt="Contact" className="icon" /> */}
        </div>
      </footer>
    </div>
    


































    
  );
};

export default BookedOrdersPage;

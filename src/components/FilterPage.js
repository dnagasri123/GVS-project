// FilterPage.js

import React from 'react';
import './filterpage.css';
import { FaAlignJustify } from 'react-icons/fa';
import SupportIcon from './SupportIcon';
import {  useLocation, useNavigate } from 'react-router-dom';

function FilterPage() {
    const navigate=useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');

  const handlePendingPayment = () => {
    // Add logic to fetch and display pending payments based on selected date range
    console.log('Fetching pending payments from', fromDate, 'to', toDate);
  };

  const handleCancelOrders = () => {
    // Add logic to fetch and display canceled orders based on selected date range
    console.log('Fetching canceled orders from', fromDate, 'to', toDate);
  };

  const handlePaymentReceived = () => {
    // Add logic to fetch and display payments received based on selected date range
    console.log('Fetching payment received from', fromDate, 'to', toDate);
  };
  const filterhandlecancel=()=>{
    navigate('/Home')
    
  }

  return (





    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar">
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
      <div className='filterbutton-container'>
      <button className='pendingpaymentsbutton' onClick={handlePendingPayment}>Pending Payments</button>
      <button  className="cancelordersbutton" onClick={handleCancelOrders}>Cancel Orders</button>
      <button className='paymentsreceivedbutton' onClick={handlePaymentReceived}>Payment Received</button>
      <button className='filtercancel-button' onClick={filterhandlecancel}>cancel</button>
    </div>
      



    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>
      <div className='filtericon-container'>
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
}

export default FilterPage;

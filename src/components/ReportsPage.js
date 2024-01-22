// ReportPage.js

import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
import './reportspage.css'
function ReportPage() {
  const navigate=useNavigate()
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSearch = () => {
    // Add any logic for searching based on fromDate and toDate
    // Redirect to filter page with selected date range
    navigate(`/FilterPage?fromDate=${fromDate}&toDate=${toDate}`);
  };



  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToHome = () => {
    // Navigate to EventHubInsightsPage
    navigate('/Home');
  };

  return (



    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar" onClick={toggleDropdown}>
          <FaAlignJustify className="align-justify-icon" />

          {showDropdown && (
            <div className="dropdown">
                              {/* <Link to="/EventHubInsights" className="dropdown-item">EventHub Insights</Link> */}
                              <p onClick={goToHome}>Home</p>

              
              
              
            </div>
            
          )}




          
        </div>
        <img src={process.env.PUBLIC_URL + '/globalimages/logo.png'}  alt="Company Logo" className="logo" />
          <h1 className="company-name">GVS Private Limited</h1>
        </div>
        
      </header>
      
      <main className="main-container">
        <h1 className='reportsheading'>Reports</h1>
      <div className='reports-container'>


 <div className='reportsinput-container'>
      <label>From Date</label>
      <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
      
     <label>To Date</label>      <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
           <button onClick={handleSearch}>Search</button>
   </div>
     </div>
      
     


    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>
      <div className='reporticon-container'>
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


















    
//    
    
  );
}

export default ReportPage;

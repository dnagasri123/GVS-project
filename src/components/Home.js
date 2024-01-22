
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import SupportIcon from './SupportIcon';

import './home.css'; // Import the CSS file for styling
// import EventHubInsightsPage from './EventHubInsightsPage';

function Home() {
  const navigate=useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const goToEventHubInsights = () => {
    // Navigate to EventHubInsightsPage
    navigate('/EventHubInsights');
  };
  const goToOwnerDetails = () => {
    // Navigate to EventHubInsightsPage
    navigate('/OwnerDetailsForm');
  };
  const goToAmenities = () => {
    // Navigate to EventHubInsightsPage
    navigate('/AmenitiesPage');
  };
  // const goToCancelledBookings = () => {
  //   // Navigate to EventHubInsightsPage
  //   navigate('/CancelledBookingPage');
  // };
  const goToConfirmedBooking=()=>{
    navigate('/ConfirmedBookingPage')
  }
  const goToBookedOrders=()=>{
    navigate('/BookedOrdersPage')
  }
  
  const goToTypesOfFunctions=()=>{
    navigate('/TypesOfFunctionsPage')
  }

  const goToReport=()=>{
    navigate('/ReportsPage')
  }
  const goToModifyOwnerAndHalldetails=()=>{
    navigate('/ModifyownerandHalldetails')
  }

  

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar" onClick={toggleDropdown}>
          <FaAlignJustify className="align-justify-icon" />
          {showDropdown && (
            <div className="dropdown">
                              {/* <Link to="/EventHubInsights" className="dropdown-item">EventHub Insights</Link> */}
                              <p onClick={goToEventHubInsights}>Hall details</p>

              
              {/* <p onClick={goToCancelledBookings}>Cancelled Bookings</p> */}
              <p onClick={goToBookedOrders}>Booked Orders</p>
              <p onClick={goToConfirmedBooking}>Confirmed Bookings</p>
              <p onClick={goToTypesOfFunctions}>Types of Functions</p>
              <p onClick={goToOwnerDetails}>Owner Details</p>
              <p onClick={goToAmenities}>Amenities</p>
              <p onClick={goToReport}>View Report</p>
              <p onClick={goToModifyOwnerAndHalldetails}>Modify owner & Halldetails</p>
              {/* <p onClick={() => console.log("Modify Owner & Hall Details")}>Modify Owner & Hall Details</p> */}
              
            </div>
            
          )}
        </div>
        <img src={process.env.PUBLIC_URL + '/globalimages/logo.png'}  alt="Company Logo" className="logo" />
          <h1 className="company-name">GVS Private Limited</h1>
        </div>
        
      </header>

      <main className="main-container">
        {/* Your main content goes here */}
        <h2>Welcome to our website gvs!</h2>
        {/* <div>
          <EventHubInsightsPage/>
        </div> */}
        {/* Add other content as needed */}
      </main>

      <div className='homeicon-container'>
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

export default Home;


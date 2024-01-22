// BookedOrdersPage.js
import React, { useState } from 'react';
import './acceptbookingpage.css';
import { FaAlignJustify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
const AcceptBookingPage = () => {
  const navigate=useNavigate()
    // const [showDropdown, setShowDropdown] = useState(false);
  const [advanceReceived, setAdvanceReceived] = useState('');
  const [amountGivenBy, setAmountGivenBy] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [village, setVillage] = useState('');
  const [date, setDate] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!advanceReceived || !amountGivenBy || !contactNumber || !village || !date) {
      setFormError('All fields are required.');
    } else {
      // Handle form submission logic here
      setFormError('submitted successfully');
      // console.log('Form submitted:', { advanceReceived, amountGivenBy, contactNumber, village, date });
    }
  };
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const goToHome = () => {
    // Navigate to EventHubInsightsPage
    navigate('/Home');
  };
  

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
      <img src={process.env.PUBLIC_URL + '/globalimages/logo.png'} alt="Company Logo" className="logo" />
        <h1 className="company-name">GVS Private Limited</h1>
      </div>
      
    </header>

    <main className="main-container">



    <div className="accept-orders-page">
      <h1 className='acceptbooking-heading'>Accept Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="booked-details">

          <div className='bookingsinput-container'>
          <label>
            
            <input type="text" value={advanceReceived} placeholder ="Advance Received" onChange={(e) => setAdvanceReceived(e.target.value)} />
          </label>
          <br />

          <label>
            
            <input type="text" value={amountGivenBy} placeholder ="Amount Given By" onChange={(e) => setAmountGivenBy(e.target.value)} />
          </label>
          <br />

          <label>
          
            <input type="text" value={contactNumber} placeholder ="Contact Number" onChange={(e) => setContactNumber(e.target.value)} />
          </label>
          <br />

          <label>
            
            <input type="text" value={village} placeholder ="Village" onChange={(e) => setVillage(e.target.value)} />
          </label>
          <br />

          <label>
      
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />





          </div>
          

          <button type="submit" className='submitbutton' onClick={goToHome}>OK</button>
          {formError && <p className="error-message">{formError}</p>}
        </div>
      </form>
    </div>
    

  






     
    </main>
    <div className='acceptordersicon-container'>
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

export default AcceptBookingPage;

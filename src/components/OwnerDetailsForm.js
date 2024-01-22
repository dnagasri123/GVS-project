// OwnerDetailsForm.js

import React, { useState } from 'react';
import './OwnerDetailsForm.css';
import { FaAlignJustify } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
const OwnerDetailsForm = ({ onCancel, onSave }) => {
    const navigate=useNavigate()
  const [ownerName, setOwnerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [alternateContactNumber, setAlternateContactNumber] = useState('');


  // const [showDropdown, setShowDropdown] = useState(false);

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const goToHome = () => {
    // Navigate to EventHubInsightsPage
    navigate('/Home');
  };
  
  const handleSave = () => {

    if (!ownerName || !contactNumber || !emailId || !alternateContactNumber) {
      alert('All fields are required');
      return;
    }
    // You can perform additional validation or data processing here
   else{
    alert('Saved successfully');

   }

    
  };

  return ( 


    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar">
            {/*  onClick={toggleDropdown} */}
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
      <div className="form-container">
        <div>
        <h1 className='ownerheading'>Owner Details</h1>
        <form>

            <div className="owner-details-form">
  
<label htmlFor="ownerName"></label>
<input
  type="text"
  id="ownerName"
  placeholder='Hall Owner Name'
  value={ownerName}
  onChange={(e) => setOwnerName(e.target.value)}
/>

<label htmlFor="contactNumber"></label>
<input
  type="text"
  id="contactNumber"
  placeholder='Contact Number'
  value={contactNumber}
  onChange={(e) => setContactNumber(e.target.value)}
/>

<label htmlFor="emailId"></label>
<input
  type="email"
  id="emailId"
  placeholder='Email ID'
  value={emailId}
  onChange={(e) => setEmailId(e.target.value)}
/>

<label htmlFor="alternateContactNumber"></label>
<input
  type="text"
  id="alternateContactNumber"
  placeholder='alternateContactNumber'
  value={alternateContactNumber}
  onChange={(e) => setAlternateContactNumber(e.target.value)}
/>

<div className="ownerbutton-container">
  <button className="ownercancel-button" onClick={goToHome}>
    Cancel
  </button>
  <button className="ownersave-button" onClick={handleSave}>
    Save
  </button>
</div>
</div>
        
        
        {/* Add more input fields for other details */}

         

          
       
      </form>
        </div>
      
      
    </div> 



    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>
      <div className='ownericon-container'>
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

export default OwnerDetailsForm;

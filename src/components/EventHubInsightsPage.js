import React, { useState } from 'react';
import './eventhubinsights.css'; // Import the CSS file for styling
import { FaAlignJustify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import SupportIcon from './SupportIcon';
function EventHubInsightsPage() {
  const navigate=useNavigate()
  // const [showDropdown, setShowDropdown] = useState(false);
  const [hallDetails, setHallDetails] = useState({
    hallName: '',
    village: '',
    mandal: '',
    dist: '',
    pincode: '',
    hallLandmark: '',
    hallCapacity: '',
    googleLocation: '',
    hallPhotos: '',
    hallType: 'small', // Default to small, you can change this based on your requirements
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHallDetails({ ...hallDetails, [name]: value });
  };

  const hallhandleSave = () => {
    if ( hallDetails) {
      alert('All fields are required');
      return;
    }
    // You can perform additional validation or data processing here
   else{
    alert('Saved successfully');

   }
    // Add logic to save hall details
   
  };


  

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const goToHome = () => {
  //   // Navigate to EventHubInsightsPage
  //   navigate('/Home');
  // };

  const handleCancel = () => {
    navigate('/Home')
    // Add logic to cancel and reset form
    // setHallDetails({
    //   hallName: '',
    //   village: '',
    //   mandal: '',
    //   dist: '',
    //   pincode: '',
    //   hallLandmark: '',
    //   hallCapacity: '',
    //   googleLocation: '',
    //   hallPhotos: '',
    //   hallType: 'small',
    // });
  };
  

  return (  

    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar"  > 
          {/* onClick={toggleDropdown} */}
          <FaAlignJustify className="align-justify-icon" />
          {/* {showDropdown && (
            <div className="dropdown"> */}
                             
                              {/* <p onClick={goToHome}>Home</p> */}

              
              
              
            {/* </div>
            
          )} */}

          
        </div>
        <img src={process.env.PUBLIC_URL + '/globalimages/logo.png'} alt="Company Logo" className="logo" />
          <h1 className="company-name">GVS Private Limited</h1>
        </div>
        
      </header>

      <main className="main-container">
      <h1 className='halldetailsheading'>Hall Details</h1>
      <div className="hall-details-form-container">
        <div  className="haallinput-container">
        
        <form>
          <div className='inputfields-container'>
          <div  className="input-container">
          <label htmlFor="hallName"></label>
          <input
            type="text"
            id="hallName"
            name="hallName"
            placeholder='Hallname'
            value={hallDetails.hallName}
            onChange={handleInputChange}
          />
        </div>
            
        <div className="input-container">
          <label htmlFor="mandal&village"></label>
          <input
            type="text"
            id="mandal&village"
            name="mandal&village"
            placeholder='Mandal & Village'
            value={hallDetails.village && hallDetails.mandal}
            onChange={handleInputChange}
          />
        </div> 

        
        <div className="input-container">
          <label htmlFor="district&pincode"></label>
          <input
            type="text"
            id="district&pincode"
            name="district&pincode"
            placeholder='District & Pincode'
            value={hallDetails.district&&hallDetails.pincode}
            onChange={handleInputChange}
          />
        </div> 

        

        <div className="input-container">
          <label htmlFor="hallLandmark"></label>
          <input
            type="text"
            id="hallLandmark"
            name="hallLandmark"
            placeholder='Hall landmark'
            value={hallDetails.hallLandmark}
            onChange={handleInputChange}
          />
        </div> 

        <div className="input-container">
          <label htmlFor="hallCapacity"></label>
          <input
            type="text"
            id="hallCapacity"
            name="hallCapacity"
            placeholder='Hall Capacity'
            value={hallDetails.hallCapacity}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="googleLocation"></label>
          <input
            type="text"
            id="googleLocation"
            name="googleLocation"
            placeholder='Google location'
            value={hallDetails.googleLocation}
            onChange={handleInputChange}
          />
        </div> 
        <div className="input-container">
          <label htmlFor="  hallPhotos"></label>
          <input
            type="text"
            id="  hallPhotos"
            name="  hallPhotos"
            placeholder='  hallPhotos'
            value={hallDetails.hallPhotos}
            onChange={handleInputChange}
          />
        </div> 




        <div className="input-container">
          <label htmlFor="hallType"></label>
          <input
            type="text"
            id="hallType"
            name="hallType"
            placeholder='Hall type'
            value={hallDetails.hallType}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Add more input fields for other details */}

        <div className="buttons-container">
          <button type="button" className="cancelhall-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="savehall-button" onClick={hallhandleSave}>
            Save
          </button> 

          
        </div>



          </div>
        

      </form>
        </div>
      
      
    </div> 



    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>

      <div className='hallicon-container'>
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

export default EventHubInsightsPage;

// OwnerDetailsForm.js

import React, { useState } from 'react';
import "./modifyownerandhalldetails.css"
import { FaAlignJustify } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
const ModifyownerandHalldetails = ({ onCancel, onSave }) => {
    const navigate=useNavigate()
const [editHallDetails, setEditHallDetails] = useState({
        editHallName: '',
        editVillage: '',
        editMandal: '',
        editDist: '',
        editPincode: '',
        editHallLandmark: '',
        editHallCapacity: '',
        editGoogleLocation: '',
        editHallPhotos: '',
        editHallType: 'small', // Default to small, you can change this based on your requirements
      });
  const [editOwnerName, setEditOwnerName] = useState('');
  const [editContactNumber, setEditContactNumber] = useState('');
  const [editEmailId, setEditEmailId] = useState('');
  const [editAlternateContactNumber, setEditAlternateContactNumber] = useState('');


//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

  const goToHome = () => {
    // Navigate to EventHubInsightsPage
    navigate('/Home');
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditHallDetails({ ...editHallDetails, [name]: value });
  };
  
  const handleSave = () => {

    if (!editOwnerName || !editContactNumber || !editEmailId || !editAlternateContactNumber) {
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
      <div className="form-container">
        <div>
        <h1 className='editheading' > Edit Hall & Owner Details</h1>
        <form>

            <div className="owner-details-form">
                <div>
                <label htmlFor="editOwnerName"></label>
<input
  type="text"
  id="editOwnerName"
  placeholder=' Edit HallOwner Name'
  value={editOwnerName}
  onChange={(e) => setEditOwnerName(e.target.value)}
/>

<label htmlFor="editContactNumber"></label>
<input
  type="text"
  id="editContactNumber"
  placeholder=' Edit Contact Number'
  value={editContactNumber}
  onChange={(e) =>setEditContactNumber(e.target.value)}
/>

<label htmlFor="editEmailId"></label>
<input
  type="email"
  id="editEmailId"
  placeholder='Edit Email ID'
  value={editEmailId}
  onChange={(e) =>setEditEmailId (e.target.value)}
/>

<label htmlFor="editAlternateContactNumber"></label>
<input
  type="text"
  id="editAlternateContactNumber"
  placeholder='Edit Alternate ContactNumber'
  value={editAlternateContactNumber}
  onChange={(e) =>setEditAlternateContactNumber(e.target.value)}
/>






                </div>
  


<div>


<div  className="input-container">
          <label htmlFor="hallName"></label>
          <input
            type="text"
            id="HallName"
            name="hallName"
            placeholder='Edit Hallname'
            value={editHallDetails.editHallName}
            onChange={handleInputChange}
          />
        </div>
            
        <div className="input-container">
          <label htmlFor="mandal&village"></label>
          <input
            type="text"
            id="mandal&village"
            name="mandal&village"
            placeholder='Edit Mandal & Village'
            value={editHallDetails.editVillage&& editHallDetails.editMandal}
            onChange={handleInputChange}
          />
        </div> 

        
        <div className="input-container">
          <label htmlFor="district&pincode"></label>
          <input
            type="text"
            id="district&pincode"
            name="district&pincode"
            placeholder='Edit District & Pincode'
            value={editHallDetails.editDist&&editHallDetails.editPincode}
            onChange={handleInputChange}
          />
        </div> 




<div className="input-container">
          <label htmlFor="hallLandmark"></label>
          <input
            type="text"
            id="hallLandmark"
            name="hallLandmark"
            placeholder='Edit Hall landmark'
            value={editHallDetails.editHallLandmark}
            onChange={handleInputChange}
          />
        </div> 

        <div className="input-container">
          <label htmlFor="hallCapacity"></label>
          <input
            type="text"
            id="hallCapacity"
            name="hallCapacity"
            placeholder='Edit Hall Capacity'
            value={editHallDetails.editHallCapacity}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="googleLocation"></label>
          <input
            type="text"
            id="googleLocation"
            name="googleLocation"
            placeholder='Edit Google location'
            value={editHallDetails.editGoogleLocation}
            onChange={handleInputChange}
          />
        </div> 
        <div className="input-container">
          <label htmlFor="  hallPhotos"></label>
          <input
            type="text"
            id="  hallPhotos"
            name="  hallPhotos"
            placeholder=' Edit hallPhotos'
            value={editHallDetails.editHallPhotos}
            onChange={handleInputChange}
          />
        </div> 




        <div className="input-container">
          <label htmlFor="hallType"></label>
          <input
            type="text"
            id="hallType"
            name="hallType"
            placeholder='Edit Hall type'
            value={editHallDetails.editHallType}
            onChange={handleInputChange}
          />
        </div>





</div>

        



















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
      <div className='modifyicon-container'>
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

export default ModifyownerandHalldetails;

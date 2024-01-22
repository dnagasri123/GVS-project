import React, { useState } from 'react';
import './typesoffunctionspage.css'
import { FaAlignJustify } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
const TypesOfFunctionsPage = () => {
    const navigate=useNavigate()
  const [selectedType, setSelectedType] = useState('');
  const [price, setPrice] = useState('');
  const [powerBill, setPowerBill] = useState('');
  const [housekeeping, setHousekeeping] = useState('');
  const [decoration, setDecoration] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    // Reset the price when the type is changed
    setPrice('');
  };

  const handleSave = () => {
    // Add logic to save data
    if(!selectedType||!powerBill||!housekeeping||!decoration){
alert('All fields required')
return;

    }
    else{
        alert("saved successfully")
    }
  };





  // const handleCancel = () => {
  //   // Add logic to cancel and reset the form
    
  // };

  const getPriceBasedOnType = () => {
    switch (selectedType) {
      case 'Small':
        return 10000; // Replace with your logic for type 1
      case 'Large':
        return 20000; // Replace with your logic for type 2
      case 'other':
        return 30000; // Replace with your logic for other
      default:
        return '';
    }
  };



  // const [showDropdown, setShowDropdown] = useState(false);

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const goToHome = () => {
    // setSelectedType('');
    // setPrice('');
    // Navigate to EventHubInsightsPage
    navigate('/Home');
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar" >
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
      <div className="types-of-functions-page">
      <h1 className='functions-heading'>Types of Functions</h1>
      
      <form>
        <div className='functions-container'>

        <label htmlFor="type">Select Type</label>
        <select id="type" name="type" value={selectedType} onChange={handleTypeChange}>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Large">Large</option>
          <option value="other">other</option>
        </select>

        {selectedType && (
          <>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={price || getPriceBasedOnType()}
              readOnly
            />
          </>
        )}
        <div className='functionsinput-container'>
        <label htmlFor="powerBill"></label>
      <input
        type="text"
        id="powerBill"
        name="powerBill"
        placeholder='Power Bill'
        value={powerBill}
        onChange={(e) => setPowerBill(e.target.value)}
      />

      <label htmlFor="housekeeping"></label>
      <input
        type="text"
        id="housekeeping"
        name="housekeeping"
        placeholder='Housekeeping'
        value={housekeeping}
        onChange={(e) => setHousekeeping(e.target.value)}
      />

      <label htmlFor="decoration"></label>
      <input
        type="text"
        id="decoration"
        name="decoration"
        placeholder='Decoration'
        value={decoration}
        onChange={(e) => setDecoration(e.target.value)}
      />
<div className="functionsbuttons-container">
          <button type="button" className="functioncancel-button" onClick={goToHome}>
            Cancel
          </button>
          <button type="button" className="functionsave-button" onClick={handleSave}>
            Save
          </button>
        </div>




        </div>






        </div>
        
        
      </form>
    </div>
     


    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>
      <div className='functionsicon-container'>
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

export default TypesOfFunctionsPage;
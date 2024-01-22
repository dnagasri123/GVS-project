// AmenitiesPage.js

import React, { useState } from 'react';
import './AmenitiesPage.css';
import { FaAlignJustify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SupportIcon from './SupportIcon';
const AmenitiesPage = () => {
    const navigate=useNavigate()
    // const [showDropdown, setShowDropdown] = useState(false);
  const [amenities, setAmenities] = useState({
    stage: false,
    chairs: false,
    tables: false,
    water: false,
    cookingItems: false,
    music: false,
  });

  const handleCheckboxChange = (amenity) => {
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenity]: !prevAmenities[amenity],
    }));
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
      <h1 className='amenitiesheading'>Amenities </h1>
      <div className="amenities-page">
      
      <div className='amenities-container'>
    

      <div className="amenities-list">
      <div className='amenities-listone'>
      <div className='check-box'>
            <div>

            <input
            type="checkbox"
            name="stage"
            id="stage"
            checked={amenities.stage}
            onChange={() => handleCheckboxChange('stage')}
          />
            </div>
        <div>
        <label htmlFor="stage" >Stage</label>
        </div>
          



        </div>
          
        

        <div className='check-box'>
            <div> <input
            type="checkbox"
            name="chairs"
            id="chairs"
            checked={amenities.chairs}
            onChange={() => handleCheckboxChange('chairs')}
          /></div>
          <div><label htmlFor="chairs">Chairs</label></div>
        </div>
         
          <div className='check-box'>
            <div>
            <input
            type="checkbox"
            name="tables"
            id="tables"
            checked={amenities.tables}
            onChange={() => handleCheckboxChange('tables')}
          />
            </div>
            <div>
            <label htmlFor="tables">Tables</label>
            </div>
          </div>
      </div>
      <div>
      <div className='check-box'>
            <div>
            <input
            type="checkbox"
            name="water"
            checked={amenities.water}
            onChange={() => handleCheckboxChange('water')}
          />
            </div>
            <div>
            <label htmlFor='water'>
                Water
         
          
         </label>
            </div>
        </div>

       
          <div className='check-box'>
            <div>
            <input
            type="checkbox"
            id="cookingitems"
            name="cookingItems"
            checked={amenities.cookingItems}
            onChange={() => handleCheckboxChange('cookingItems')}
          />
            </div>
            <div>
            <label htmlFor="cookingitems">
          
          Cooking Items
        </label>
            </div>
          </div>
          
        <div className='check-box'>
            <div>
            <input
            type="checkbox"
            name="music"
            id="music"
            checked={amenities.music}
            onChange={() => handleCheckboxChange('music')}
          />
            </div>
            <div>
            <label  htmlFor="music">
          
          Music
        </label>
            </div>
        </div>
      </div>
        
          
        

        

        

       
      </div>

      <div className="selected-amenities">
        <h2>Selected Amenities:</h2>
        <ul>
          {Object.entries(amenities).map(([amenity, selected]) => (
            selected && <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="amenitiesbutton-container">
          <button type="button" className="amenitiescancel-button" onClick={goToHome}>
            Cancel
          </button>
          <button type="button" className="amenitiessave-button"  >
            Save
          </button> 

          
        </div>




      </div>
      
     
    </div>


    






       
      </main>
      <div className='amenitiesicon-container'>
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

export default AmenitiesPage;

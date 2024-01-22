// ConfirmedBookingPage.js
import React, { useState } from 'react';
import './confirmedbookingpage.css';
import { useNavigate } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import SupportIcon from './SupportIcon';
const ConfirmedBookingPage = () => {
    const navigate=useNavigate()
  const [remainingBalance, setRemainingBalance] = useState('');
  const [discount, setDiscount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [village, setVillage] = useState('');
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [showDropdown, setShowDropdown] = useState(false);
  

  const handleConfirm = () => {

    // Validate input fields
    if (
      !remainingBalance ||
      !discount ||
      !totalAmount ||
      !paidBy ||
      !contactNumber ||
      !village
    ) {
      setErrorMessage('All fields are required');
      return;
    }

    // Perform any necessary calculations or validations here
    // For simplicity, we'll just toggle the paymentReceived state
    setPaymentReceived(true);
    setErrorMessage('');
  };
  const goToHome = () => {
   
    navigate('/Home');
  };

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
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
      <h1 className='confirmbooking-heading'>Confirmed Booking Page</h1>

      <div className="confirmed-booking-page">
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form>

        <div className='confirminput-container'>
        <label>
          
          <input
            type="text"
            placeholder='Remaining Balance'
            value={remainingBalance}
            onChange={(e) => setRemainingBalance(e.target.value)}
          />
        </label>

        <label>
          
          <input
            type="text"
            placeholder='Discount'

            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </label>

        <label>
        
          <input
            type="text"
            placeholder='Total Amount'
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </label>

        <label>
       
          <input
            type="text"
            placeholder='Paid By'
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
          />
        </label>

        <label>
          
          <input
            type="text"
            placeholder='Contact Number'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </label>

        <label>
          
          <input
            type="text"
            placeholder='Village'
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
        </label>

        <label htmlFor="paymentMethod">Finish the Payment</label>
        <select id="paymentMethod">
          <option value="accept">Accept Payment</option>
          <option value="cancel">Cancel Payment</option>
        </select>









        </div>
        <button type="button" onClick={goToHome} className='confirmcancelbutton'>
          Cancel
        </button>
     

        <button type="button" onClick={handleConfirm} className='confirmbutton'>
          Confirm
        </button>
      </form>

      {paymentReceived && (
        <div className="success-message">Successfully received payment!</div>
      )}
    </div>
      



    
        {/* Your main content goes here */}
        {/* <h2>Welcome to our website gvs!</h2> */}
        {/* Add other content as needed */}
      </main>
      <div className='confirmordersicon-container'>
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

export default ConfirmedBookingPage;

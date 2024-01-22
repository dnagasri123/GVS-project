import React, { useState } from 'react';
import './cancelledbookingpage.css'; // Import the CSS file for styling
import { useNavigate} from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import SupportIcon from './SupportIcon';
function CancelledBooking() {
  const navigate=useNavigate()
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  // const [showDropdown,setShowDropdown]=useState(false)

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };
  const goToHome=(event)=>{
    navigate('/Home')
  }
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (reason.trim() === '') {
      setMessage('Field required. Please provide a reason.');
    } else {
      // Add logic to handle the submission, e.g., send the reason to the server
      setMessage('Booking cancelled successfully ');
      // You can reset the reason if needed
      setReason('');
    }
  };

  return (


    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          
          <div className="icon-bar" 
           >
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
      <div className="cancelled-booking-container">
      <h1 className='cancelledbooking-heading'>Cancelled Booking</h1>
      <form className="cancelled-booking-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="reason"></label>
          <textarea
            id="reason"
            rows="15"
            
            value={reason}
            onChange={handleReasonChange}
            placeholder="Enter the reason for cancellation..."
          />
        </div>

        {message && <p className="error-message">{message}</p>}
<div className='cancelbutton-container'>
  <div className='cancelbutton-container'>
  <button type="button" className="cancelledbooking-button" onClick={goToHome}>
          cancel
        </button>

<button type="submit" className="submit-button">
          Submit
        </button>
  </div>


</div>
        
      </form>
    </div>
      

    






       
      </main>
      <div className='cancelicon-container'>
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

export default CancelledBooking;

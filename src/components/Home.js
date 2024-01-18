// Home.js

import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import './home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Company Logo" className="logo" />
          <h1 className="company-name">GVS Private Limited</h1>
        </div>
        <div className="icon-bar">
        <FaAlignJustify className="align-justify-icon" />
          
          
        </div>
        
      </header>

      <main className="main-container">
        {/* Your main content goes here */}
        <h2>Welcome to our website!</h2>
        {/* Add other content as needed */}
      </main>

      <footer className="footer">
        <div className="contact-icons">
          {/* Add your email, WhatsApp, and contact icons/images */}
          <img src="/email-icon.png" alt="Email" className="icon" />
          <img src="/whatsapp-icon.png" alt="WhatsApp" className="icon" />
          <img src="/contact-icon.png" alt="Contact" className="icon" />
        </div>
      </footer>
    </div>
  );
}

export default Home;

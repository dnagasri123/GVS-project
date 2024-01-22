// ForgotPassword.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Import your CSS file for styling
import SupportIcon from './SupportIcon';
// import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setMessage('Please fill in all fields');
    } else if (newPassword !== confirmPassword) {
      setMessage('Password and Confirm Password do not match');
    } else {
      // Add your password reset logic here (backend API call, etc.)
      setMessage('Password reset successful!');
    }
  };

  return (
    <div className='passwordreset-container'>
      
      <div>
        <h1 className='forgotpassword-heading'>FORGOT PASSWORD</h1>


      <div className="forgot-password-container">
      
      <p>Enter your new password below.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="newPassword"></label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        <button type="submit">Reset Password</button>
      </form>

      {message && <p className={message.includes('successful') ? 'success-message' : 'error-message'}>{message}</p>}

      <p className="login-text">
        < Link to="/LoginPage">Back to Login</Link>
      </p>
    </div>
      </div>
        
    <div className='forgotpasswordicon-container'>
    <SupportIcon />

    </div>
      





    </div>
   
  );
}

export default ForgotPassword;

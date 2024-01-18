import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './register.css';

function Register() {
    const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are provided
    if (firstName.trim() !== '' && lastName.trim() !== "" && username.trim() !== "" && password.trim() !== "") {
      // Add your registration logic here (if needed)
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Show success message
      navigate('/LoginPage')
    } else {
      // Display error message for missing fields
      setMessage('Please fill in all the fields');
    }
  };

  return (
    <div className="registration-container">
      <h1 className="form-heading">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Display success or error message if there is one */}
        {message && <p className={message.includes('successful') ? 'success-message' : 'error-message'}>{message}</p>}

        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>

        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>

        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <p>
          Already have an account? <Link to="/LoginPage">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

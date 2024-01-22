import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import './login.css'; // Import the CSS file for styling
import SupportIcon from './SupportIcon';

function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const goToRegsiter=()=>{
    navigate('/RegistrationPage')

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if ( username.trim() !== "" && password.trim() !== "") {
        // Add your registration logic here (if needed)
        const storedEmail = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
        // Show success message
        if (username.trim()=== storedEmail && password.trim() === storedPassword) {
            // Navigate to the home page
            navigate('/Home'); // Replace '/home' with the actual route for your home page
          } else {
            // Display error message for mismatched email or password
            document.getElementById("error").innerText="email or password doesnt match"
            
          }
        
      } else {
        // Display error message for missing fields
        setMessage('Please fill in all the fields');
      }
    // Add your login logic here
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div>
      <h1 className='heading'> GVS PARTNER</h1>
      
      <form className="login-form" onSubmit={handleSubmit}>
      {message && <p className={message.includes('successful') ? 'success-message' : 'error-message'}>{message}</p>}
        <div className="input-container">
          <label htmlFor="username"></label>
          <input type="text" placeholder="Username" id="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div className="input-container">
          <label htmlFor="password"></label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div className="forgot-password">
          {/* <a href="#">Forgot Password?</a> */}
          <Link to="/ForgotPassword" className='forgotpassword'>Forgot password</Link>
        </div>
        <div id="error" className='err-msg'></div>

        <button type="submit" className="login-button">
          <span role="img" aria-label="Login">
            ➡️
          </span>{' '}
          Login
        </button> 

        

        <div className="register-container">
          <p className='register-text'>Not a member yet?</p>
          <button type="button" className='regbutton-container' onClick={goToRegsiter}>
            Register here
          </button>
          
        </div>
      </form>







      </div>
      

      
    <div className='icon-container'>
    <SupportIcon />

    </div>
      
      
    </div>
   
  );
}

export default Login;

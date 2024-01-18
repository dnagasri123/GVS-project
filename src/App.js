// import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/LoginPage';
import Register from './components/RegistrationPage';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="LoginPage" element={<Login />} />
          <Route path="/" element={<Register />} />
<Route path="/Home" element={<Home />} /> 

          
        

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

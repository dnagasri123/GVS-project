// import logo from './logo.svg'; 
import React from 'react';
import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/LoginPage';
import Register from './components/RegistrationPage';
import EventHubInsightsPage from './components/EventHubInsightsPage';
import OwnerDetailsForm from './components/OwnerDetailsForm';
import AmenitiesPage from './components/AmenitiesPage';
import ForgotPassword from './components/ForgotPassword';
import CancelledBooking from './components/CancelledBookingPage';
import ConfirmedBookingPage from './components/ConfirmedBookingsPage';
import BookedOrdersPage from './components/BookedOrdersPage';
import AcceptBookingPage from './components/AcceptBookingPage';
import TypesOfFunctionsPage from './components/TypesOfFunctionsPage';
import ReportPage from './components/ReportsPage';
import ModifyownerandHalldetails from './components/ModifyownerandHalldetails';
import FilterPage from './components/FilterPage';

// import FilterPage from 'src/FiltersPage';
// import CombinedForm from './components/ModifyownerandHalldetails';
// import Register from './components/RegistrationPage';
function App() {
  return (
    <div className="App">
      <Router>


      <Routes>
          {/* Set the default route to LoginPage */}
          <Route path="/" element={<Navigate to="LoginPage" />} />

          <Route path="LoginPage" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EventHubInsights" element={<EventHubInsightsPage />} />
          <Route path="/OwnerDetailsForm" element={<OwnerDetailsForm />} />
          <Route path="/AmenitiesPage" element={<AmenitiesPage />} />
          <Route path="/RegistrationPage" element={<Register />} />
          <Route path="/ForgotPassword" element={< ForgotPassword/>} />
          <Route path="/CancelledBookingPage" element={< CancelledBooking/>} />
          <Route path="/ConfirmedBookingPage" element={< ConfirmedBookingPage/>} />
          <Route path="/BookedOrdersPage" element={< BookedOrdersPage/>} />
          <Route path="/AcceptBookingPage" element={< AcceptBookingPage/>} />
          <Route path="/TypesOfFunctionsPage" element={< TypesOfFunctionsPage/>} />
          <Route path="/ModifyownerandHalldetails" element={< ModifyownerandHalldetails />} />
          {/* <Route path="/" exact component={ReportPage} /> */}
          <Route path="/ReportsPage" element={< ReportPage/>} />
          <Route path="/FilterPage" element={< FilterPage/>} /> 
          
        </Routes>






      {/* <div>
        <Routes>
          <Route path="LoginPage" element={<Login />} />
          <Route path="/" element={<Register />} />
<Route path="/Home" element={<Home />} /> 
<Route path="/" element={<Home />} />
        <Route path="/EventHubInsights" element={<EventHubInsightsPage />} />

        <Route path="/OwnerDetailsForm" element={<OwnerDetailsForm />} />
        <Route path="/AmenitiesPage" element={<AmenitiesPage />} />
        <Route path="/RegistrationPage" element={<Register />} />

        </Routes>
      </div> */}
    </Router>
    </div>
  );
}

export default App;

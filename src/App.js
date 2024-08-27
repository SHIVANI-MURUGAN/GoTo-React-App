import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import BookingContainer from './containers/BookingContainer';
import DestinationsContainer from './containers/DestinationsContainer';
import ContactContainer from './containers/ContactContainer';
import AboutContainer from './containers/AboutContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/bookings">Bookings</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/bookings" element={<BookingContainer />} />
            <Route path="/destinations" element={<DestinationsContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="/about" element={<AboutContainer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

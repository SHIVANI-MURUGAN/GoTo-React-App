import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Header title="GoTo:Travel Booking Application" />
        <main>
          <h2>Welcome to the Best Travel Booking Experience</h2>
          <p>Book your next adventure with us!</p>
          <img
            src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg" 
            alt="Beautiful Travel Destination"
            className="home-image"
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;

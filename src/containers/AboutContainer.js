import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AboutContainer extends React.Component {
  render() {
    return (
      <div className="about-container">
        <Header title="About GoTo" />
        <main>
          <h2>GoTo: Travel Booking Inc.</h2>
          <p>
            GoTo has been providing top-notch travel experiences for over a decade. We are dedicated to making your dream vacations a reality. Whether you're planning a family holiday, a romantic getaway, or an adventurous trip, we're here to help you every step of the way.
          </p>
          <p>
            Our team of travel experts works tirelessly to find the best deals and the most amazing destinations, ensuring that every journey is unforgettable.
          </p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AboutContainer;

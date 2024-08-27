import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationList from '../components/DestinationList';

class DestinationsContainer extends React.Component {
  render() {
    return (
      <div className="destinations-container">
        <Header title="Top Travel Destinations" />
        <main>
          <DestinationList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default DestinationsContainer;

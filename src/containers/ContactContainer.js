import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <Header title="Contact Us" />
        <main>
          <ContactForm />
        </main>
        <Footer />
      </div>
    );
  }
}

export default ContactContainer;

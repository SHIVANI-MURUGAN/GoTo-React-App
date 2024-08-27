import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    );
  }
}

export default ContactForm;

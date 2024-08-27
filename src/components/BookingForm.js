import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookerName: '',
      destination: '',
      date: '',
      travelers: 1,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBooking(this.state);
    this.setState({ bookerName: '', destination: '', date: '', travelers: 1 });
  };

  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <label>
          Booker Name:
          <input
            type="text"
            name="bookerName"
            value={this.state.bookerName}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Travelers:
          <input
            type="number"
            name="travelers"
            value={this.state.travelers}
            onChange={this.handleChange}
            min="1"
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    );
  }
}

export default BookingForm;

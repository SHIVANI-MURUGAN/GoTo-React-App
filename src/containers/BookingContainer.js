import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

function BookingContainer() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="booking-container">
      <h2>Your Bookings</h2>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default BookingContainer;

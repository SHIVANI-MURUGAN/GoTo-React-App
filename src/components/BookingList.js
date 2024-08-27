import React from 'react';

function BookingList({ bookings }) {
  return (
    <div className="booking-list">
      {bookings.length === 0 ? (
        <p>No bookings yet. Start planning your trip!</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p><strong>Booker Name:</strong> {booking.bookerName}</p>
              <p><strong>Destination:</strong> {booking.destination}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Travelers:</strong> {booking.travelers}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;

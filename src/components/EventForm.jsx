import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate) {
      addEvent({ name: eventName, date: eventDate });
      setEventName('');
      setEventDate('');
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;

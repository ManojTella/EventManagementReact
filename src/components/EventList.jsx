import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Event List</h2>
      <ul>
        {events.length === 0 ? (
          <li>No events created</li>
        ) : (
          events.map((event, index) => (
            <li key={index}>
              {event.name} - {event.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default EventList;

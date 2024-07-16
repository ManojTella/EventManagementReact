import React, { useState } from 'react';
import CalendarComponent from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="app">
      <h1>Event Management Application</h1>
      <EventForm addEvent={addEvent} />
      <div className="main-content">
        <CalendarComponent events={events} />
        <EventList events={events} />
      </div>
    </div>
  );
};

export default App;

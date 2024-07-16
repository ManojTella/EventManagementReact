import React from 'react';

const CalendarComponent = ({ events }) => {
  const generateCalendar = () => {
    const daysInMonth = new Date(2024, 7, 0).getDate();
    const firstDay = new Date(2024, 6, 1).getDay();
    const calendar = [];
    let week = [];

    // Adjust firstDay to align with Monday as the start of the week
    const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

    for (let i = 0; i < adjustedFirstDay; i++) {
      week.push(<td className="empty" key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2024-07-${day.toString().padStart(2, '0')}`;
      const isEvent = events.find(event => event.date === date);
      const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6;

      week.push(
        <td
          key={day}
          className={`${isEvent ? 'event' : ''} ${isWeekend ? 'weekend' : ''}`}
        >
          {day}
        </td>
      );

      if ((week.length + adjustedFirstDay) % 7 === 0 || day === daysInMonth) {
        calendar.push(<tr key={`week-${calendar.length}`}>{week}</tr>);
        week = [];
      }
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
};

export default CalendarComponent;

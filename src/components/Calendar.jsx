import React, { useState } from 'react';
import { DateTime, Settings } from 'luxon';

import CalendarTable from './CalendarTable.jsx';
import '../styles/Calendar.css';

function Calendar() {
  Settings.defaultLocale = 'en-US';
  const [dateObj, setDateObj] = useState(DateTime.now());
  const [showMonths, setShowMonths] = useState(false);

  const renderMonths = () => {
    const NUMBER_OF_MONTHS = 12;
    const startDate = dateObj.startOf('year');
    const dates = [startDate];
    for (let i = 1; i < NUMBER_OF_MONTHS; i++) {
      dates.push(startDate.plus({ month: i }));
    }

    return (
      <div className='calendar-months'>
        {dates.map((el) => (
          <button
            className='calendar-months__button'
            type='button'
            key={el.monthLong}
            onClick={() => {
              setDateObj(el);
              setShowMonths(false);
            }}
          >
            {el.monthLong}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <input
          type='button'
          value='Previous'
          onClick={() => setDateObj(dateObj.minus({ month: 1 }))}
        />
        <div>
          <button type='button' onClick={() => setShowMonths(!showMonths)}>
            {dateObj.monthLong}
          </button>
          <span>{dateObj.year}</span>
        </div>
        <input
          type='button'
          value='Next'
          onClick={() => setDateObj(dateObj.plus({ month: 1 }))}
        />
      </div>
      {showMonths ? renderMonths() : <CalendarTable dateObj={dateObj} />}
    </div>
  );
}

export default Calendar;

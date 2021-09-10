import React, { useState } from 'react';
import { DateTime, Settings } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        <button
          type='button'
          onClick={() => {
            setDateObj(dateObj.minus(!showMonths ? { month: 1 } : { year: 1 }));
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size='2x' />
        </button>
        <div>
          <button type='button' onClick={() => setShowMonths(!showMonths)}>
            {!showMonths && dateObj.monthLong} {dateObj.year}
          </button>
        </div>
        <button
          type='button'
          onClick={() => {
            setDateObj(dateObj.plus(!showMonths ? { month: 1 } : { year: 1 }));
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size='2x' />
        </button>
      </div>
      {showMonths ? renderMonths() : <CalendarTable dateObj={dateObj} />}
    </div>
  );
}

export default Calendar;

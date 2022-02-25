import React, { useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import Calendar from '../main/Calendar';
import './Example2.css';

function Example2() {
  const inputRef = [useRef(), useRef(), useRef()];
  const [showCalendar, setShowCalendar] = useState(-1);

  const { month: nextMonth } = DateTime.now().plus({ month: 1 });
  const { year: currentYear } = DateTime.now();

  const renderButtonGroup = (i, label) => (
    <div className='example-2__button-group'>
      <label htmlFor='first-input'>{label}</label>
      <div>
        <input
          type='text'
          className='example-2__input'
          id='first-input'
          ref={inputRef[i]}
          disabled
        />
        <button
          type='button'
          className='example-2__button'
          aria-label='Calendar button'
          onClick={() => setShowCalendar(i)}
        >
          <FontAwesomeIcon icon={faCalendarDay} />
        </button>
      </div>
    </div>
  );

  return (
    <div className='example-2'>
      {renderButtonGroup(0, 'Next month:')}
      {showCalendar === 0 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[0].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            fixed={{ month: nextMonth }}
          />
        </div>
      )}
      {renderButtonGroup(1, 'This year:')}
      {showCalendar === 1 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[1].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            fixed={{ year: currentYear }}
            start={{ month: 1, year: currentYear }}
          />
        </div>
      )}
      {renderButtonGroup(2, 'Custom range:')}
      {showCalendar === 2 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[2].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            min={{ day: 12, month: 12, year: 2050 }}
            max={{ day: 20, month: 2, year: 2051 }}
          />
        </div>
      )}
    </div>
  );
}

export default Example2;

import React, { useRef, useState } from 'react';
import { DateTime } from 'luxon';

import Calendar from '../main/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Example2.css';

function Example2() {
  const inputRef = [useRef(), useRef(), useRef()];
  const [showCalendar, setShowCalendar] = useState(-1);

  const { year } = DateTime.now().plus({ year: 1 });

  return (
    <div className='example-2'>
      <div className='example-2__button-group'>
        <label htmlFor='first-input'>This month:</label>
        <div>
          <input
            type='text'
            className='example-2__input'
            name=''
            id='first-input'
            ref={inputRef[0]}
            disabled
          />
          <button
            type='button'
            className='example-2__button'
            onClick={() => setShowCalendar(0)}
          >
            <FontAwesomeIcon icon={faCalendarDay} />
          </button>
        </div>
      </div>
      <div className='example-2__button-group'>
        <label htmlFor='second-input'>Next year:</label>
        <div>
          <input
            type='text'
            className='example-2__input'
            name=''
            id='second-input'
            ref={inputRef[1]}
            disabled
          />
          <button
            type='button'
            className='example-2__button'
            onClick={() => setShowCalendar(1)}
          >
            <FontAwesomeIcon icon={faCalendarDay} />
          </button>
        </div>
      </div>
      <div className='example-2__button-group'>
        <label htmlFor='third-input'>Custom range:</label>
        <div>
          <input
            type='text'
            className='example-2__input'
            name=''
            id='third-input'
            ref={inputRef[2]}
            disabled
          />
          <button
            type='button'
            className='example-2__button'
            onClick={() => setShowCalendar(2)}
          >
            <FontAwesomeIcon icon={faCalendarDay} />
          </button>
        </div>
      </div>
      {showCalendar === 0 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[0].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            fixed='month'
          />
        </div>
      )}
      {showCalendar === 1 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[1].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            fixed={{ year }}
          />
        </div>
      )}
      {showCalendar === 2 && (
        <div className='example-2__calendar-container'>
          <Calendar
            customDateClick={(dt) => {
              inputRef[2].current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              setShowCalendar(-1);
            }}
            max={{ day: 18, month: 2, year: 2022 }}
            min={{ day: 22, month: 12, year: 2021 }}
          />
        </div>
      )}
    </div>
  );
}

export default Example2;

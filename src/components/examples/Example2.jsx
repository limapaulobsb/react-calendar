import React, { useRef, useState } from 'react';
import { DateTime } from 'luxon';

import Calendar from '../main/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Example2.css';

function Example2() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [showCalendar3, setShowCalendar3] = useState(false);

  return (
    <div className='example-2'>
      <div className='example-2__button-container'>
        <input type='text' className='example-2__input' name='' id='' ref={inputRef1} disabled />
        <button type='button' className='example-2__button'  onClick={() => setShowCalendar1(true)}>
          <FontAwesomeIcon icon={faCalendarDay} />
        </button>
        {showCalendar1 && (
          <div className='example-2__calendar-container'>
            <Calendar
              customDateClick={(dt) => {
                inputRef1.current.value = dt.toLocaleString(DateTime.DATE_SHORT);
                setShowCalendar1(false);
              }}
            />
          </div>
        )}
      </div>
      <div className='example-2__button-container'>
        <input type='text' className='example-2__input' name='' id='' ref={inputRef2} disabled />
        <button type='button' className='example-2__button' onClick={() => setShowCalendar2(true)}>
          <FontAwesomeIcon icon={faCalendarDay} />
        </button>
        {showCalendar2 && (
          <div className='example-2__calendar-container'>
            <Calendar
              customDateClick={(dt) => {
                inputRef2.current.value = dt.toLocaleString(DateTime.DATE_SHORT);
                setShowCalendar2(false);
              }}
            />
          </div>
        )}
      </div>
      <div className='example-2__button-container'>
        <input type='text' className='example-2__input' name='' id='' ref={inputRef3} disabled />
        <button type='button' className='example-2__button' onClick={() => setShowCalendar3(true)}>
          <FontAwesomeIcon icon={faCalendarDay} />
        </button>
        {showCalendar3 && (
          <div className='example-2__calendar-container'>
            <Calendar
              customDateClick={(dt) => {
                inputRef3.current.value = dt.toLocaleString(DateTime.DATE_SHORT);
                setShowCalendar3(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Example2;

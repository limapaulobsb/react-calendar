import React, { useState } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import Calendar from '../main/Calendar';
import './Example1.css';

function Example1() {
  const [date, setDate] = useState(DateTime.now());
  const [showCalendar, setShowCalendar] = useState(false);

  const { day, monthLong, monthShort, year } = date;

  return (
    <div className='example-1'>
      <abbr title={monthLong}>{monthShort}</abbr>
      <span>{day}</span>
      <span>{year}</span>
      <button
        type='button'
        className='example-1__button'
        onClick={() => setShowCalendar(true)}
      >
        Show calendar
      </button>
      <div
        className={cx('example-1__calendar-container', {
          'example-1__calendar-container--visible': showCalendar,
        })}
      >
        <Calendar
          customDateClick={(dt) => {
            setDate(dt);
            setShowCalendar(false);
          }}
        />
      </div>
    </div>
  );
}

export default Example1;

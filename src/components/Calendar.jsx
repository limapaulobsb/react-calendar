import React, { useState } from 'react';

import { DateTime } from 'luxon';
import '../styles/Calendar.css';

function Calendar() {
  const [dateObj, setDateObj] = useState(DateTime.now());

  const changeMonth = {
    next: () => {
      setDateObj(dateObj.plus({ month: 1 }));
    },
    previous: () => {
      setDateObj(dateObj.minus({ month: 1 }));
    },
  };

  return (
    <div className='calendar'>
      <div className='calendar__header'>
        <input type='button' value='Previous' onClick={changeMonth.previous} />
        <span>
          {dateObj.monthLong} {dateObj.year}
        </span>
        <input type='button' value='Next' onClick={changeMonth.next} />
      </div>
    </div>
  );
}

export default Calendar;

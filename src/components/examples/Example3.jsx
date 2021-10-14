import React, { useState } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import Calendar from '../main/Calendar';
import '../../styles/Example3.css';

function Example3() {
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { day, month, year } = DateTime.now().plus({ day: 1 });

  return (
    <div className='example-3'>
      <button
        type='button'
        className='example-3__button'
        onClick={() => setShowModal(true)}
      >
        Choose a date
      </button>
      <div className={cx('modal', { 'modal--visible': showModal })}>
        <Calendar
          customDateClick={(dt) => {
            setDate(dt.toLocaleString(DateTime.DATE_HUGE));
            setShowModal(false);
          }}
          min={{ day, month, year }}
        />
      </div>
      <div
        className={cx('backdrop', { 'backdrop--visible': showModal })}
        onClick={() => setShowModal(false)}
      />
      {date && <h3>{`Cool! Scheduled for ${date}`}</h3>}
    </div>
  );
}

export default Example3;

import React, { useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import Calendar from '../main/Calendar';
import './Example3.css';

function Example3() {
  const intervalRef = useRef();
  const [date, setDate] = useState('');
  const [countDown, setCountDown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { day: minDay } = DateTime.now().plus({ day: 1 });
  const { day, month, year } = DateTime.now().plus({ year: 1 });

  useEffect(() => {
    if (date) {
      const interval = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);
      intervalRef.current = interval;
    }
    return () => clearInterval(intervalRef.current);
  }, [date, countDown]);

  const renderButton = () => (
    <div>
      <h1>Let&apos;s go on an adventure?</h1>
      <button
        type='button'
        className='example-3__button'
        onClick={() => setShowModal(true)}
      >
        Choose a date
      </button>
    </div>
  );

  const renderCountDown = () => (
    <div>
      <h2
        role='button'
        aria-label='Open calendar'
        tabIndex='0'
        onClick={() => setShowModal(true)}
        onKeyUp={(event) => {
          if (event.key === 'Enter') setShowModal(true);
        }}
      >{`Cool! Scheduled for ${date}`}</h2>
      <p>I will literally be counting the seconds until then!</p>
      <p>
        In the meantime, take a look at the full code and some other projects on my{' '}
        <a href='https://github.com/limapaulobsb' target='_blank' rel='noreferrer'>
          GitHub profile!
        </a>
      </p>
      <span>{countDown.toLocaleString()}</span>
    </div>
  );

  return (
    <div className='example-3'>
      {date ? renderCountDown() : renderButton()}
      <div className={cx('modal', { 'modal--visible': showModal })}>
        <Calendar
          customDateClick={(dt) => {
            setDate(dt.toLocaleString(DateTime.DATE_HUGE));
            setCountDown(Math.trunc((dt - DateTime.now()) / 1000));
            setShowModal(false);
          }}
          max={{ day, month, year }}
          min={{ day: minDay }}
        />
      </div>
      <div
        className={cx('backdrop', { 'backdrop--visible': showModal })}
        onClick={() => setShowModal(false)}
      />
    </div>
  );
}

export default Example3;

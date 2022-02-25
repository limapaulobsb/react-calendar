import React, { useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import Calendar from '../main/Calendar';
import './Example3.css';

function Example3() {
  const intervalRef = useRef();
  const [date, setDate] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { day: minDay } = DateTime.now().plus({ day: 1 });
  const {
    day: maxDay,
    month: maxMonth,
    year: maxYear,
  } = DateTime.now().plus({ year: 1 });

  useEffect(() => {
    const intervalCallback = () => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(intervalRef.current);
          return 0;
        } else return prevCountdown - 1;
      });
    };

    if (date) intervalRef.current = setInterval(intervalCallback, 1000);
    return () => clearInterval(intervalRef.current);
  }, [date]);

  const renderButton = () => (
    <div>
      <h1>Let&apos;s go on an adventure?</h1>
      <button
        type='button'
        className='example-3-button'
        onClick={() => setShowModal(true)}
      >
        Choose a date
      </button>
    </div>
  );

  const renderCountDown = () => (
    <div className='example-3-countdown-container'>
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
        In the meantime, take a look at the full code and some other projects on my&ensp;
        <a href='https://github.com/limapaulobsb' target='_blank' rel='noreferrer'>
          GitHub profile!
        </a>
      </p>
      <span>{countdown.toLocaleString()}</span>
    </div>
  );

  return (
    <div className='example-3'>
      {date ? renderCountDown() : renderButton()}
      <div
        className={cx('backdrop', { 'visible': showModal })}
        onClick={() => setShowModal(false)}
      />
      <div className={cx('modal', { 'visible': showModal })}>
        <Calendar
          customDateClick={(dt) => {
            setDate(dt.toLocaleString(DateTime.DATE_HUGE));
            setCountdown(Math.trunc((dt - DateTime.now()) / 1000));
            setShowModal(false);
          }}
          max={{ day: maxDay, month: maxMonth, year: maxYear }}
          min={{ day: minDay }}
        />
      </div>
    </div>
  );
}

export default Example3;

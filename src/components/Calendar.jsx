import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime, Settings } from 'luxon';
import cx from 'classnames';

import CalendarTable from './CalendarTable.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Calendar.css';

function Calendar({
  absolute,
  ariaNextBtn = 'Next',
  ariaPrevBtn = 'Previous',
  customDateClick = () => {},
  lang = 'en-US',
  max = { month: 12, year: 2100 },
  min = { month: 1, year: 1900 },
  start,
}) {
  Settings.defaultLocale = lang;

  const maxDt = DateTime.fromObject(max);
  const minDt = DateTime.fromObject(min);
  const nowDt = DateTime.now().startOf('month');

  let startDt;
  if (start) {
    startDt = DateTime.fromObject(start);
  } else if (nowDt >= minDt && nowDt <= maxDt) {
    startDt = DateTime.now().startOf('month');
  } else {
    startDt = DateTime.fromObject(min);
  }

  const [selectedDt, setSelectedDt] = useState(startDt);
  const [showMonths, setShowMonths] = useState(false);

  const renderMonths = () => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      months.push(selectedDt.startOf('year').plus({ month: i }));
    }

    return (
      <div className='calendar__month-buttons-container'>
        {months.map((el) => (
          <button
            type='button'
            key={el.monthLong}
            className={cx('calendar__month-button', {
              'bg--alt': el.toMillis() === nowDt.toMillis(),
            })}
            onClick={() => {
              setSelectedDt(el);
              setShowMonths(false);
            }}
            disabled={el < minDt || el > maxDt}
          >
            {el.monthLong}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={cx('calendar', { 'calendar--absolute': absolute })}>
      <div className='calendar__header'>
        <div>
          <button
            type='button'
            className='calendar__header__arrow-button'
            aria-label={ariaPrevBtn}
            onClick={() => {
              setSelectedDt(selectedDt.minus(!showMonths ? { month: 1 } : { year: 1 }));
            }}
            disabled={
              (selectedDt.hasSame(minDt, 'month') && selectedDt.hasSame(minDt, 'year')) ||
              (showMonths && selectedDt.hasSame(minDt, 'year'))
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} size='2x' />
          </button>
        </div>
        <div className='calendar__header__main-button-container'>
          <button
            type='button'
            className='calendar__header__main-button'
            onClick={() => setShowMonths(!showMonths)}
            disabled={
              showMonths ||
              (minDt.hasSame(maxDt, 'month') && minDt.hasSame(maxDt, 'year'))
            }
          >
            {!showMonths && selectedDt.monthLong} {selectedDt.year}
          </button>
        </div>
        <div>
          <button
            type='button'
            className='calendar__header__arrow-button'
            aria-label={ariaNextBtn}
            onClick={() => {
              setSelectedDt(selectedDt.plus(!showMonths ? { month: 1 } : { year: 1 }));
            }}
            disabled={
              (selectedDt.hasSame(maxDt, 'month') && selectedDt.hasSame(maxDt, 'year')) ||
              (showMonths && selectedDt.hasSame(maxDt, 'year'))
            }
          >
            <FontAwesomeIcon icon={faChevronRight} size='2x' />
          </button>
        </div>
      </div>
      {showMonths ? (
        renderMonths()
      ) : (
        <CalendarTable selectedDt={selectedDt} customDateClick={customDateClick} />
      )}
    </div>
  );
}

Calendar.propTypes = {
  absolute: PropTypes.bool,
  ariaPrevBtn: PropTypes.string,
  ariaNextBtn: PropTypes.string,
  customDateClick: PropTypes.func,
  lang: PropTypes.string,
  min: PropTypes.object,
  max: PropTypes.object,
  start: PropTypes.object,
};

export default Calendar;

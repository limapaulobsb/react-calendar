import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import cx from 'classnames';

function CalendarTable({ selectedDt }) {
  const dates = [];
  for (let i = 0; i < 42; i++) {
    dates.push(
      selectedDt.startOf('month').startOf('week').minus({ day: 1 }).plus({ day: i })
    );
  }

  const handleClick = (obj) => {
    console.log(obj.toLocaleString(DateTime.DATE_HUGE));
  };

  const renderWeekdays = () => {
    return dates
      .filter((_el, i) => i < 7)
      .map((el) => (
        <div key={el.weekdayLong}>
          <abbr title={el.weekdayLong}>{el.weekdayShort}</abbr>
        </div>
      ));
  };

  const renderDates = () => {
    return dates.map((el) => (
      <button
        type='button'
        key={el.ordinal}
        className={cx('calendar__date-button', {
          'bg--alt': el.ts === DateTime.now().startOf('day').ts,
        })}
        aria-label={el.toLocaleString(DateTime.DATE_HUGE)}
        onClick={() => handleClick(el)}
        disabled={!el.hasSame(selectedDt, 'month')}
      >
        {el.day}
      </button>
    ));
  };

  return (
    <div className='calendar__date-buttons-container'>
      {renderWeekdays()}
      {renderDates()}
    </div>
  );
}

CalendarTable.propTypes = {
  selectedDt: PropTypes.object.isRequired,
};

export default CalendarTable;

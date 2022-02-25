import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import cx from 'classnames';

function CalendarTable({ customDateClick, maxDt, minDt, selectedDt }) {
  // Creates an array with the appropriate 42 Date Objects that will be used in the 7x6 grid.

  const dates = [];
  for (let i = 0; i < 42; i++) {
    dates.push(selectedDt.startOf('month').startOf('week').minus({ day: 1 }).plus({ day: i }));
  }

  // Function declarations.

  const renderWeekdays = () => {
    return dates
      .filter((_el, i) => i < 7)
      .map((el) => (
        <div className='calendar__weekday-container' key={el.weekdayLong}>
          <abbr className='calendar__weekday-abbr' title={el.weekdayLong}>
            {el.weekdayShort}
          </abbr>
        </div>
      ));
  };

  const renderDates = () => {
    return dates.map((el) => (
      <button
        type='button'
        className={cx('calendar__date-button', {
          'calendar__date-button--alt-bg':
            el.toMillis() === DateTime.now().startOf('day').toMillis() &&
            el >= minDt &&
            el <= maxDt,
        })}
        aria-label={el.toLocaleString(DateTime.DATE_HUGE)}
        key={el.ordinal}
        onClick={() => customDateClick(el)}
        disabled={!el.hasSame(selectedDt, 'month') || el < minDt || el > maxDt}
      >
        {el.day}
      </button>
    ));
  };

  // Main element render.

  return (
    <div className='calendar__date-buttons-container'>
      {renderWeekdays()}
      {renderDates()}
    </div>
  );
}

CalendarTable.propTypes = {
  customDateClick: PropTypes.func.isRequired,
  maxDt: PropTypes.object.isRequired,
  minDt: PropTypes.object.isRequired,
  selectedDt: PropTypes.object.isRequired,
};

export default CalendarTable;

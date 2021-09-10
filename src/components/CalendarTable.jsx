import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function CalendarTable({ dateObj }) {
  const NUMBER_OF_DATES = 42;
  const NUMBER_OF_WEEKDAYS = 7;
  const startDate = dateObj.startOf('month').startOf('week').minus({ day: 1 });
  const dates = [startDate];
  for (let i = 1; i < NUMBER_OF_DATES; i++) {
    dates.push(startDate.plus({ day: i }));
  }

  const handleClick = (obj) => {
    console.log(obj);
  };

  const renderWeekdays = () => {
    return dates
      .filter((_el, i) => i < NUMBER_OF_WEEKDAYS)
      .map((el) => (
        <div key={el.weekdayShort}>
          {el.weekdayShort}
        </div>
      ));
  };

  const renderDates = () => {
    return dates.map((el) => (
      <div
        className={cx('calendar-table__date', {
          'text-light': el.month !== dateObj.month,
        })}
        key={el.ordinal}
        onClick={() => handleClick(el)}
      >
        {el.day}
      </div>
    ));
  };

  return (
    <div className='calendar-table'>
      {renderWeekdays()}
      {renderDates()}
    </div>
  );
}

CalendarTable.propTypes = {
  dateObj: PropTypes.object.isRequired,
};

export default CalendarTable;

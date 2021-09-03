import React from 'react';
import PropTypes from 'prop-types';

function CalendarTable({ dateObj }) {
  const startDate = dateObj.startOf('month').startOf('week').minus({ day: 1 });
  const dates = [startDate];
  for (let i = 1; i < 42; i++) {
    dates.push(startDate.plus({ day: i }));
  }

  const renderWeekdays = () => {
    const weekdays = dates.filter((_el, i) => i < 7).map((el) => el.weekdayShort);
    return weekdays.map((el) => (
      <div className='calendar-table__cell' key={el}>
        {el}
      </div>
    ));
  };

  const renderDates = (row) => {
    const arr = dates.filter((_el, i) => i >= row * 7 && i <= row * 7 + 6);
    return arr.map((el, i) => (
      <div className='calendar-table__cell' key={i}>
        {el.day}
      </div>
    ));
  };

  return (
    <div className='calendar-table'>
      <div className='calendar-table__header'>
        <div className='calendar-table__row'>{renderWeekdays()}</div>
      </div>
      <div className='calendar-table__body'>
        <div className='calendar-table__row'>{renderDates(0)}</div>
        <div className='calendar-table__row'>{renderDates(1)}</div>
        <div className='calendar-table__row'>{renderDates(2)}</div>
        <div className='calendar-table__row'>{renderDates(3)}</div>
        <div className='calendar-table__row'>{renderDates(4)}</div>
        <div className='calendar-table__row'>{renderDates(5)}</div>
      </div>
    </div>
  );
}

CalendarTable.propTypes = {
  dateObj: PropTypes.object.isRequired,
};

export default CalendarTable;

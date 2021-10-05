import React, { useRef, useState } from 'react';
import { DateTime } from 'luxon';

import Header from './components/Header';
import Calendar from './components/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

function App() {
  const inputRef = useRef();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <main>
      <Header />
      <section>
        <h1>A simple, straightforward, highly customizable calendar in React.</h1>
        <div>
          <Calendar />
        </div>
      </section>
      <section>
        <div className='relative'>
          <input type='text' name='' id='' ref={inputRef} disabled />
          <button type='button' onClick={() => setShowCalendar(true)}>
            <FontAwesomeIcon icon={faCalendarDay} size='2x' />
          </button>
          {showCalendar && (
            <Calendar
              absolute={true}
              customDateClick={(dt) => {
                setShowCalendar(false);
                inputRef.current.value = dt.toLocaleString(DateTime.DATE_SHORT);
              }}
            />
          )}
        </div>
      </section>
      <section>
        <Calendar ariaNextBtn='Próxima data' ariaPrevBtn='Data anterior' lang='pt-BR' />
        <Calendar ariaNextBtn='Proxima fecha' ariaPrevBtn='Fecha anterior' lang='es' />
        <Calendar ariaNextBtn='Следующая дата' ariaPrevBtn='Предыдущая дата' lang='ru' />
      </section>
    </main>
  );
}

export default App;

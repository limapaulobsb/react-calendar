import React from 'react';

import Calendar from './components/main/Calendar';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';

function App() {
  return (
    <main>
      <header>
        <h2>React Calendar</h2>
      </header>
      <section className='hero'>
        <h2>
          A simple, well commented, highly customizable calendar component for React.
        </h2>
        <div className='hero__calendar-container'>
          <Calendar height='500px' width='500px' />
        </div>
      </section>
      <section className='features'>
        <h1>Use your creativity!</h1>
        <div>
          <Example1 />
          <h3>
            The <code>customDateClick</code> prop allows you to easily control the outcome
            when a date is clicked.
          </h3>
        </div>
        <div>
          <h3>
            Other props like <code>max</code>, <code>min</code> and <code>start</code>{' '}
            allow you to manage avaible date ranges.
          </h3>
          <Example2 />
        </div>
        <div>
          <h3>Try it in different languages!</h3>
          <h4>*Don&apos;t forget to set proper ARIA labels for better accessibility.</h4>
          <div className='languages-container'>
            <Calendar
              ariaNextBtn='Próxima data'
              ariaPrevBtn='Data anterior'
              lang='pt-BR'
            />
            <Calendar
              ariaNextBtn='Proxima fecha'
              ariaPrevBtn='Fecha anterior'
              lang='es'
            />
            <Calendar
              ariaNextBtn='Следующая дата'
              ariaPrevBtn='Предыдущая дата'
              lang='ru'
            />
          </div>
        </div>
      </section>
      <section className='adventure'>
        <div className='parallax' />
        <h1>Let&apos;s go on an adventure?</h1>
        <Example3 />
      </section>
    </main>
  );
}

export default App;

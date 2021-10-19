import React from 'react';

import Calendar from './components/main/Calendar';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';

function App() {
  return (
    <main>
      <header>
        <h2>Relux Calendar</h2>
      </header>
      <section className='hero'>
        <h2>
          A simple, highly customizable calendar component built with{' '}
          <a href='https://reactjs.org/'>React</a> and{' '}
          <a href='https://moment.github.io/luxon'>Luxon</a>.
        </h2>
        <div className='hero__calendar-container'>
          <Calendar height='500px' width='500px' fontSize='18px' />
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
            Props like <code>fixed</code>, <code>max</code> and <code>min</code> allow you
            to manage avaible date ranges.
          </h3>
          <Example2 />
        </div>
        <div>
          <h3>Try it in different languages!</h3>
          <h4>*Don&apos;t forget to set proper ARIA labels for better accessibility.</h4>
          <div className='languages'>
            <Calendar
              lang='es'
              ariaNextBtn='Próxima'
              ariaPrevBtn='Previa'
              width='280px'
              height='300px'
            />
            <Calendar lang='de' ariaNextBtn='Nächste' ariaPrevBtn='Vorherige' />
            <Calendar
              lang='pt-BR'
              ariaNextBtn='Próxima'
              ariaPrevBtn='Anterior'
              width='280px'
              height='300px'
            />
          </div>
        </div>
      </section>
      <section className='adventure'>
        <div className='parallax' />
        <Example3 />
      </section>
    </main>
  );
}

export default App;

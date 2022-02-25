import React from 'react';

import Calendar from './components/main/Calendar';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';

function App() {
  const altStyle = {
    '--main-bg-color': 'rgb(165 165 210)',
    '--header-bg-color': 'rgb(210 135 120)',
    '--alt-bg-color': 'rgb(90 90 150)',
    '--hover-bg-color': 'rgb(180 150 150)',
    '--main-text-color': 'white',
    '--disabled-date-color': 'rgb(120 120 120)',
    height: '300px',
  };

  return (
    <main>
      <header>
        <h2>Relux Calendar</h2>
      </header>
      <section className='hero'>
        <h2>
          A powerful, highly customizable calendar component built with&ensp;
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </a>
          &ensp;and&ensp;
          <a href='https://moment.github.io/luxon' target='_blank' rel='noreferrer'>
            Luxon.
          </a>
        </h2>
        <div>
          <Calendar style={{ fontSize: '18px', height: '500px', width: '500px' }} />
        </div>
      </section>
      <section className='features'>
        <h1>Use your creativity!</h1>
        <div className='example-1-container'>
          <Example1 />
          <h3>
            The <code>customDateClick</code> prop allows you to easily control the outcome
            when a date is clicked.
          </h3>
        </div>
        <div className='example-2-container'>
          <h3>
            Props like <code>fixed</code>, <code>max</code> and <code>min</code> allow you
            to manage avaible date ranges.
          </h3>
          <Example2 />
        </div>
        <div className='languages-and-styles-container'>
          <h3>Try it in different languages and styles!</h3>
          <h4>*Don&apos;t forget to set proper ARIA labels for better accessibility.</h4>
          <div>
            <Calendar
              lang='es'
              ariaNextBtn='Próxima'
              ariaPrevBtn='Previa'
              style={altStyle}
            />
            <Calendar
              lang='de'
              ariaNextBtn='Nächste'
              ariaPrevBtn='Vorherige'
              style={{ fontFamily: 'Architects Daughter', fontSize: '18px' }}
            />
            <Calendar
              lang='pt-BR'
              ariaNextBtn='Próxima'
              ariaPrevBtn='Anterior'
              style={altStyle}
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

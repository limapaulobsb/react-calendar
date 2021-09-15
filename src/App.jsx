import React from 'react';

import Calendar from './components/Calendar';

function App() {
  return (
    <main>
      <section>
        <Calendar />
      </section>
      <section>
        <Calendar
          min={{ month: 7, year: 2020 }}
          max={{ month: 6, year: 2022 }}
          lang='pt-BR'
          ariaNextBtn='Próximo'
          ariaPrevBtn='Anterior'
        />
      </section>
      <section>
        <Calendar
          min={{ month: 1, year: 2021 }}
          max={{ month: 12, year: 2021 }}
          start={{ month: 3, year: 2021 }}
          lang='it'
          ariaNextBtn='Prossimo'
          ariaPrevBtn='Precedente'
        />
      </section>
      <section>
        <Calendar
          min={{ month: 10, year: 2021 }}
          max={{ month: 10, year: 2021 }}
          lang='fr'
          ariaNextBtn='Suivant'
          ariaPrevBtn='Précédent'
        />
      </section>
    </main>
  );
}

export default App;

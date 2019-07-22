import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import * as helpers from './lib/helpers';
import LameForm from './components/LameForm';

function App() {
  return (
    <main>
      <h1>Socrata TypeScript Demo</h1>
      <LameForm />
      { `${helpers.titleCase('hello')} world` }
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

import React from 'react';
import ReactDOM from 'react-dom';
import * as helpers from './lib/helpers';

function App() {
  
  return (
    <div>{ `${helpers.titleCase('hello')} world` }</div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

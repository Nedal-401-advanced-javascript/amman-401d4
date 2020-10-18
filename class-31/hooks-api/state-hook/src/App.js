import React from 'react';
import './App.css';

import Age from './Age.js';
import HooksCounter from './HooksCounter';

function App() {
  return (
    <>
      <Age age="15" />
      <Age age="25" />
      <Age age="26" />
      <HooksCounter/>
    </>
  );
}

export default App;

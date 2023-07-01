import React from 'react';
import * as C from './App.styles';
import {getWeekDay} from './functions/getWeekDay';

function App() {
  return (
    <C.Container>
      <h1>{getWeekDay()}</h1>
    </C.Container>
  );
}

export default App;

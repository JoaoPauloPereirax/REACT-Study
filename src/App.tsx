import React from 'react';
import * as C from './App.styles';
import {getWeekDay} from './functions/getWeekDay';
import {Person} from './components/Person';
import { Card } from './components/Card';
import { Cardtwo } from './components/Cardtwo';

function App() {
  return (
    <C.Container>
      <h2>USANDO FUNÇÕES</h2>
      <h1>{getWeekDay()}</h1>

      <h2>PASSANDO PROPS PARA UM COMPONENTE</h2>
      <C.ContainerSection>
        <Person
        name="João Paulo"
        avatar="https://images.chesscomfiles.com/uploads/v1/user/71670288.06b328a7.160x160o.04dd5a18dfeb.jpeg"
        role={["Professor"]}
        />

        <Person
        name='Magnus Carlsen'
        avatar='https://images.chesscomfiles.com/uploads/v1/user/3889224.121e2094.160x160o.7e81e6058f8d.jpg'
        role={['Enxadrista']}
        />
      </C.ContainerSection>
      
        <h1>Children do componente</h1>
        <Card>Frase de Efeito!</Card>
        <Cardtwo>
          <>
            <h3>Frase de efeito</h3>
            <p>Testando</p>
          </>
        </Cardtwo>

        
      


    </C.Container>
  );
}

export default App;

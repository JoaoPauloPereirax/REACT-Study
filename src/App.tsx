import React from 'react';
import * as C from './App.styles';
import {getWeekDay} from './functions/getWeekDay';
import {Person} from './components/Person';
import { Card } from './components/Card';
import { Cardtwo } from './components/Cardtwo';
import {PersonN} from './components/PersonN';
import { PersonC } from './components/PersonC';
import { RenderList } from './components/RenderList';
import { FilterList } from './components/FilterList';

function App() {
  return (
    <C.Container>
      <ol>
        <li>
          <h2>USANDO FUNÇÕES</h2>
          <h3>{getWeekDay()}</h3>
        </li>
        <li>
              <h2>PASSANDO PROPS PARA UM COMPONENTE</h2>
            {/*AS PROPS DEVEM SER PASSADAS POR PARÂMETROS OS QUAIS SERÃO ACESSADOS DENTRO DO COMPONENTE
            ATRAVÉS DE UM TYPE */}
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
              {/*CHILDREN NÃO OBRIGATÓRIA*/}
              {/*AQUI DERIA PASSADO DO VALOR DA VARIÁVEL avatar*/}
              <PersonN
              name='Teste'
              role={['Enxadrista']}
              />

            </C.ContainerSection>
          </li>
          <li>
                <h2>Children do componente</h2>
              
              <Card>Frase de Efeito!</Card>
              <Cardtwo>
                <>
                  <h3>Frase de efeito</h3>
                  <p>Testando</p>
                </>
              </Cardtwo>
          </li>
          <li>
            <h2>Renderização Condicional</h2>
            <C.ContainerSection>
              <PersonC
                name="João Paulo"
                avatar="https://images.chesscomfiles.com/uploads/v1/user/71670288.06b328a7.160x160o.04dd5a18dfeb.jpeg"
                role={["Professor"]}
              />
              <PersonC
              name='Teste'
              />
              <PersonC/>
            </C.ContainerSection>
          </li>
          <li>
            <h2>Renderizando Listas</h2>
            <RenderList/>
          </li>
          <li>
            <h2>Filtrando Listas</h2>
            <FilterList/>
          </li>


      </ol>
    </C.Container>
  );
}

export default App;

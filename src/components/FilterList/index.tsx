import * as C from './style';
import { peopleList } from '../../data/peopleList';

const filtering = peopleList.filter(InventNameOne => InventNameOne.profession === "Professor");


export const FilterList = () => {
     return (
          <C.Container>
               {filtering.length > 0 && 
                    <div>
                         <h3>Lista de Professores - Lista Acima</h3>
                         <ul>
                              {filtering.map(InventNameTwo => 
                                   <li>{InventNameTwo.name} - {InventNameTwo.profession}</li>
                              )}
                         </ul>
                    </div>
                   
               }
          </C.Container>
     );
}
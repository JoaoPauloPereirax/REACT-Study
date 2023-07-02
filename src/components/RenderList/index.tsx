import * as C from './style';
import { peopleList } from '../../data/peopleList'

const list = peopleList.map(InventName => <li key={InventName.id}>
     <h4>{InventName.name}</h4>
     <h5>{InventName.profession}</h5>

</li>)

export const RenderList = () => {
     return (
          <C.Container>
               {peopleList.length > 0 && 
                    <ul>
                         {list}
                    </ul>
               }
          </C.Container>
     );
}
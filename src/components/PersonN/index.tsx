import * as C from './style';


type Props = {
     name: string;
     avatar?: string;
     role: string[];
}
export const PersonN = ({name, avatar="https://www.chess.com/bundles/web/images/user-image.007dad08.svg", role}: Props) => {
     return (
          <C.Container>
               <p>Nome: {name}</p>
               <img 
               src={avatar} 
               alt={name} 
               className="w-40"
               />

               <p>Profissão:{role[0]}</p>
          </C.Container>
     );
}
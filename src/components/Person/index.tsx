import * as C from './style';
type Props = {
     name: string;
     avatar: string;
     role: string[];
}
export const Person = (props: Props) => {
     return (
          <C.Container>
               <p>Nome: {props.name}</p>
               <img 
               src={props.avatar} 
               alt={props.name} 
               className="w-40"
               />

               <p>Profissão:{props.role[0]}</p>
          </C.Container>
     );
}
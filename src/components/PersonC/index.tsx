import * as C from './style';


type Props = {
     name?: string;
     avatar?: string;
     role?: string[];
}
export const PersonC = ({name, avatar, role}: Props) => {
     
          return (
               <C.Container>
                    <p>Nome: {name ?? "Desconhecido"}</p>
                    <img 
                    src={avatar ? avatar : "https://www.chess.com/bundles/web/images/user-image.007dad08.svg"} 
                    alt={name ? name : "Jogador Desconhecido"}
                    className="w-40"
                    />
                    {name && <p>Profissão:{ role ? role[0] : "Desconhecido"}</p>}
               </C.Container>
          );
          
}
type Props = {
     children: string; 
} 
export const Card = ({children}: Props) =>{
     return (
          <div>
               {children}
          </div>
     );
}
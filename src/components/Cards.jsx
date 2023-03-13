import Card from './Card';
import styled from 'styled-components'
import './main.css'

const DivCards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`;
const SmallDiv = styled.div`
margin-left: 10%;
margin-right: 10%;

`;


export default function Cards({characters, onClose}) {

   
   return(
      
      <DivCards>
      {characters.map(({id, name, species, gender, image}) => {
        
         return <SmallDiv><Card id={id}  name={name} species={species}
         gender={gender} image={image} onClose={onClose}/>
     </SmallDiv> })}
   </DivCards>
   )
}
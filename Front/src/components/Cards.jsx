import Card from './Card';
import styled from 'styled-components'
import './main.css'

const DivCards = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
height: auto;
width: 90%;

`;
const SmallDiv = styled.div`
width: 100%;
display:flex;

`;


export default function Cards({characters, onClose}) {

   
   return(
      
      <DivCards>
      {characters.map(({id, name, species, gender, image}) => {
        
         return <Card id={id}  name={name} species={species}
         gender={gender} image={image} onClose={onClose}/>
      })}
   </DivCards>
   )
}
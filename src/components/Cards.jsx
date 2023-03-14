import Card from './Card';
import styled from 'styled-components'
import './main.css'

const DivCards = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
-webkit-box-align: center;
align-items: center;
height: 90%;
width: 272%;
border: 1px solid rgb(221, 221, 221);
background: rgb(241, 241, 241);
overflow-y: scroll;
margin-left: -312px;

`;
const SmallDiv = styled.div`
margin-left: 5%;

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
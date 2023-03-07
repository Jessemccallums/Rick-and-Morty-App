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


export default function Cards(props) {
   const { characters } = props;
  
   return(
      
     <DivCards>
      {characters.map((el) => {
         return <SmallDiv><Card  name={el.name} species={el.species}
         gender={el.gender} image={el.image} onClose={() => window.alert('Emulamos que se cierra la card')}/>
     </SmallDiv> })}
   </DivCards>
   )
}
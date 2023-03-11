import styled from 'styled-components'
import styles from './Card.module.css'

const DivCards = styled.div`
 border: 5px;
 background-color: #E8E8E8;
 border-radius: 50px;
 padding: 10px;
`;
const TextCenter = styled.div`
text-align: center;
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');
font-family: 'Uncial Antiqua', cursive;
padding-top: 10px;
`;



const Equis = styled.div`
text-align: center;
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap');
font-family: 'Uncial Antiqua', cursive;
padding-top: 10px;
background-color: #A9D3E9;
font-family: "Montserrat Alternates", sans-serif;
background-color: #F15A78;
width: 8%;
padding: 10px;
text-align: center;
margin: auto;
justify-items: center;
`;






export default function Card(props) {
   return (
      <DivCards>
         <Equis onClick={props.onClose}>X</Equis>
         <TextCenter>{props.name}</TextCenter>
         <TextCenter>{props.species}</TextCenter>
         <TextCenter>{props.gender}</TextCenter>
         <div>
         <img className={styles.imagen}  src={props.image} alt="" width="150px"/>
         </div>
      </DivCards>
   );
}

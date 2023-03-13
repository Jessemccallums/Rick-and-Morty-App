import { useState } from 'react';
import styled from 'styled-components'
import styles from './Card.module.css'

const Gran = styled.div`
 display: flex;
 justify-content: space-around;

`;

export default function SearchBar(props) {

   const [id, setId] = useState("")
   const handleChange = (event) => {
         setId(event.target.value)
   }

   return (
      <Gran>
      <input className={styles.boton} type='search' onChange={handleChange}/>
      <button className={styles.add} onClick={() => props.onSearch(id)}>Agregar</button>
      </Gran>
   );
}

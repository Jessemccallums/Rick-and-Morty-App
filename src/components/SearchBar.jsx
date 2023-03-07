import styled from 'styled-components'
import styles from './Card.module.css'

const Gran = styled.div`
 display: flex;
 justify-content: space-around;

`;

export default function SearchBar(props) {
   return (
      <Gran>
      <input className={styles.boton} type='search' />
      <button className={styles.add} onClick={props.onSearch}>Agregar</button>
      </Gran>
   );
}

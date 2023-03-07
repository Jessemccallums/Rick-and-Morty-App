import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styled from 'styled-components'

const BigDiv = styled.div`
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
width: 25.3%;
padding: 50px;
`;

const SecondDiv = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
width: 25.3%;
`;




function App () {
  return (
    <BigDiv >
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div >
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </BigDiv>
  )
}

export default App

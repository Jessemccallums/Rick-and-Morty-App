import React from 'react'
import '../App.css'
import Card from '../components/Card.jsx'
import Cards from '../components/Cards.jsx'
import SearchBar from '../components/SearchBar.jsx'
import characters from '../data.js'
import styled from 'styled-components'


const BigDiv = styled.div`

margin: auto;
display: flex;
-webkit-box-pack: center;
justify-content: center;
flex-direction: column;
width: 26.3%;
padding: 44px;
`;

const SecondDiv = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
width: 25.3%;
`;

export default function AppCards() {
  return (
    <BigDiv >
      
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
        <hr />
      <div >
        <Cards
          characters={characters}
        />
      </div>
    </BigDiv>
  )
}

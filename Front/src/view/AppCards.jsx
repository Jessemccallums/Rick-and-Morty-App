import React from 'react'
import '../App.css'
import Card from '../components/Card.jsx'
import Cards from '../components/Cards.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'


const BigDiv = styled.div`


margin: auto;
display: flex;
-webkit-box-pack: center;
justify-content: center;
flex-direction: column;
width: 26.3%;
margin-top: -500px;
`;

const SecondDiv = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
width: 25.3%;
`;

export default function AppCards() {
  const onSearch = (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "0b40e782ebfe.49a271440e3a47d5b434"

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    const URL = "http://localhost:3001"

    fetch(`${URL}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters([...characters, data]);
          console.log(setCharacters([...characters, data]))
        } else {
          alert("Algo salió mal");
        }
      });

  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }

  const [characters, setCharacters] = useState([])

  return (
    <BigDiv >
      
      <div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>  
        <hr />
      <div >
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    
    </BigDiv>
  )
}

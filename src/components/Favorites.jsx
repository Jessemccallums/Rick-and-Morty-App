import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allFavorites, filterCards, orderCards } from '../redux/actions'
import Card from './Card'

export default function Favorites() {
  const favorites = useSelector(state => state.myFavorites);
  const personajes = useSelector(state => state.allCharacters);

  const [orderCard, setOrderCard] = useState();
  const [orderCardGender, setOrderCardGender] = useState();

  const dispatch = useDispatch();
  
  const handleChangeOrder = (event) => {
    const valor = event.target.value
   
    if(valor === "Ascendente"){
      let result = personajes.sort((a,b) => {return a.id - b.id})
      setOrderCard("Ascendente");
      return result
    } else{
      let result = personajes.sort((a,b) => {return b.id - a.id})
      setOrderCard("Descendente");
      return result
    }
      
    
  }
  
  
  const handleChangerGender = (event) => {
    const valor = event.target.value
    if(valor !== 'All'){
    if(valor === 'Male'){
     
      setOrderCardGender('Male')
      
    }
    if(valor === 'Female'){
      
      setOrderCardGender('Female')
    
    }
    if(valor === 'Genderless'){
     
      setOrderCardGender('Genderless')
    
    }
    if(valor === 'Unknown'){
     
    
      setOrderCardGender('Unknown')
     
    }
    }
    
  }
  useEffect(() => {
    dispatch(allFavorites())
    dispatch(orderCards(orderCard))
  }, [orderCard])

  useEffect(() => {
    dispatch(filterCards(orderCardGender))
  }, [orderCardGender])
 
 

  const personajesFiltrados = personajes.filter((char) => char.gender === orderCardGender) 



  return (
    <div>

      <select name="" id="" onChange={handleChangeOrder}>
        <option value="All">All</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>

      </select>
      <select name="name" id="name" onChange={handleChangerGender}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>

      </select>
      {
        personajesFiltrados.map(({ id, name, species, gender, image }) => {
          return <Card key={id} id={id} name={name} species={species}
            gender={gender} image={image} />
        })
      }

    </div>
  )
}

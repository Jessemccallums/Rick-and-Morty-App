import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allFavorites, filterCards, orderCards } from '../redux/actions'
import Card from './Card'

export default function Favorites() {
  const favorites = useSelector(state => state.myFavorites);

  const [orderCard, setOrderCard] = useState();

  const dispatch = useDispatch();
  
  const handleChangeOrder = (event) => {
    const valor = event.target.value
    if(valor === "Ascendente"){
      
      setOrderCard("Descendente");
    } else {
      
      setOrderCard("Ascendente");
    }
  }

  useEffect(() => {
    dispatch(allFavorites())
    dispatch(orderCards(orderCard))
  }, [orderCard])
 





  return (
    <div>

      <select name="" id="" onChange={handleChangeOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>

      </select>
      <select name="name" id="name" >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>

      </select>
      {
        favorites.map(({ id, name, species, gender, image }) => {
          return <Card key={id} id={id} name={name} species={species}
            gender={gender} image={image} />
        })
      }

    </div>
  )
}

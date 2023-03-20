import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Favorites() {
    const favorites = useSelector(state => state.myFavorites)
  return (
    <div>
        {
            favorites.map(({id, name, species, gender, image}) => {
                return <Card id={id}  name={name} species={species}
                gender={gender} image={image} />
            })
        }
      
    </div>
  )
}

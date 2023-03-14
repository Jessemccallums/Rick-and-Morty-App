import { Switch, Route, Link, Routes } from 'react-router-dom'
import React from 'react'
import '../App.css'


export default function Prueba() {
  return (
    
    <div className='headerimg'>
      <h2 className='header'>Rick and<br/> Morty</h2>
      <p className='p'>Rick and Morty is an American adult animated science-fiction sitcom 
        created by Justin Roiland and Dan Harmon 
        for Cartoon Network's nighttime programming block Adult Swim.
      </p>
    <Link to="/about">
      <button className='boton1'>About</button>
    </Link>
    </div>
  )
}

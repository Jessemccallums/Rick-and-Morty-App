import '../App.css'
import { Switch, Route, Link, Routes } from 'react-router-dom'
import { Fragment } from 'react'




function ShowApp() {
  return (
    
   <div className='prueba'>
    <nav className='nav'>
    <ul className='ul'>
      <li className='firstLi'>
        <Link to="/home" className='litext'>Home</Link>
      </li>
      <li className='li'>
        <Link to="/about" className='litext'>About</Link>
      </li>
      <li className='li'>
        <Link to="/app" className='litext'>App</Link>
      </li>
      
    </ul>
    </nav>
     
   </div>

  )
}

export default ShowApp

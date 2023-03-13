import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styled from 'styled-components'
import { Switch, Route, Link, Routes } from 'react-router-dom'
import { Fragment } from 'react'
import AppCards from './view/AppCards'
import Prueba from './view/prueba'
import About from './view/About'
import Detail from './view/Detail'




function App() {
  return (
    
   <div className='prueba'>
    <nav className='nav'>
    <ul className='ul'>
      <li className='firstLi'>
        <Link to="/" className='litext'>Home</Link>
      </li>
      <li className='li'>
        <Link to="/about" className='litext'>About</Link>
      </li>
      <li className='li'>
        <Link to="/app" className='litext'>App</Link>
      </li>
      <li className='li'>
        <Link to="/login" className='litext'>Login</Link>
      </li>
    </ul>
    </nav>
    
      <section>
        <Routes>
        <Route path='/' element={<Prueba />} className="headerimg"/>

     
        
        

        <Route path='/about' element={<About />} />
        <Route path='/app' element={<AppCards />} />
        <Route path="/detail/:id" element={<Detail />} />

        
        </Routes>
        </section>
  
   </div>

  )
}

export default App

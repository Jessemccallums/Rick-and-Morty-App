import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ShowApp from './view/showApp'
import Form from './components/Form'
import { useNavigate } from 'react-router-dom'
import AppCards from './view/AppCards'
import Prueba from './view/prueba'
import About from './view/About'
import Detail from './view/Detail'
import Aplication from './components/Aplication'




function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'jesse@gmail.com';
  const password = 'jesse123';


  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  const { pathname } = useLocation()


  return (

    <div className='prueba'>

      
    {
      pathname !== '/' && <Aplication />
    }
     
      

      <section>
        <Routes>
          <Route path='/' element={<Form login={login} />} />
          <Route path='/home' element={<Prueba />} className="headerimg" />
          <Route path='/about' element={<About />} />
          <Route path='/app' element={<AppCards />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </section>

    </div>

  )
}

export default App

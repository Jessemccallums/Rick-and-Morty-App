import React, { useState } from 'react'
import { validation, validationPassword } from './validation'
import '../App.css'

export default function Form({login}) {
   const [userData, setUserData] = useState({
      username: '',
      password: '',
   })
   const [errors, setErrors] = useState({
      username: '',
      password: '',
   })
   

   const handleInputChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setUserData({
         ...userData, [property]: value
      })
      validation({ ...userData, [property]: value }, setErrors, errors)
      validationPassword({ ...userData, [property]: value }, setErrors, errors)
   }

   console.log(errors)

   return (
      <div className='cajalogin'>
         
      <form className='formulario'>
         <h2 className='logintitle'>Login</h2>
         <label htmlFor='username' className='label'>Username:</label>
         <input type="text" name="username" id="username" value={userData.username} onChange={handleInputChange} />
         <span className='spanerror'>{errors.username}</span>
         <label htmlFor='password' className='label'>Password:</label>
         <input type="text" name="password" id="password" value={userData.password} onChange={handleInputChange} />
         <span className='spanerror'>{errors.password}</span>
         <button onClick={() => login(userData)}  className="botonlogin"> Login </button>
      </form>
      </div>
   )
}

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

export default function Detail() {

  const {id} = useParams()


  const [detail, setId] = useState([])

  useEffect(() => {
    info()
  })

  const info = async () => {
  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const KEY = "0b40e782ebfe.49a271440e3a47d5b434";
  const {data} = await axios(`http://localhost:3001/rickandmorty/detail/${id}`)
      setId(data)
  }
  console.log(detail)
  return (
    <div className='detailcss'>
      <div>
        <h1>{detail.name}</h1>
        <h2>{detail.status}</h2>
        <h2>{detail.species}</h2>
        <h2>{detail.origin?.name}</h2>
      </div> 
      <div>
        <img src={detail.image} alt="" />
      </div>

    </div>
  )
}

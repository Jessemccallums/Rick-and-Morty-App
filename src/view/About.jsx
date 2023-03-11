import React from 'react'
import '../App.css'
import jesse from '../assets/jesse.png'
import rectangulo from '../assets/rectangulo.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'


export default function About() {
  return (
    <div className='imagenjesse'>
      <img src={jesse} alt="" className='jesseimg' />
      <img src={rectangulo} alt="" className='rectangulo' />
      <p className='ParrafoAbout'>I’m Jesse McCallums,
        A full Stack Developer on the making</p>
      <div className='aboutinfo'>
        <div>
          <h2 className='idioma'>
            Learning languages
            as a lifestyle
          </h2>
          <p className='idiomap'>
            I decided to learn languages as a lifestyle for many reasons.
            The first is that I love communication and I want to be able to
            communicate with as many people as possible. The second is that I love
            learning new things and languages are a never-ending source of new things
            to learn. The third is that I believe that learning languages is a great way
            to connect with people and cultures around the world.
          </p>
        </div>
        <div>
          <h2 className='tech'>
            Tech life
          </h2>
          <p className='techp'>
          Tech life, as I know it, consists of a lot of trial and error. 
          A passion for tech, however, can make it all worth while. 
          I'm currently a student at a coding bootcamp, and I've had to learn a lot of 
          new things in a very short amount of time. It's been tough, but my passion for 
          all things tech has made it worth while.
          </p>
        </div>
      </div>
             <div className='iconos'>
              <div><a href="https://www.linkedin.com/in/jesse-mccallums-7225a4237" target="_blank"><img src={linkedin} alt="" /></a></div>
              <div><a href="https://github.com/Jessemccallums" target="_blank"><img src={github} alt="" /></a></div>
              <div><a href="https://www.instagram.com/mccallumsworldwide/" target="_blank"><img src={instagram} alt="" /></a></div>
              <div><a href="https://twitter.com/mccallumshope" target="_blank"><img src={twitter} alt="" className='twitteri'/></a></div>
             </div>
    </div>
  )
}

import React from 'react'
import "./Solutions.css"
import { Link } from 'react-router-dom'
import man from "../img/man.png"

const Solutions = () => {
  return (
    <div>
      <div id='body-container'>
        <div id='box1'>
          <h1>Venha conhecer<br /> a imensidão do espaço!</h1>
          <p>StellarNames envia seu nome ao espaço, tornando-o<br /> parte do universo. Seguro, único e inesquecível.<br /> Junte-se a essa jornada hoje!</p>
          <Link to="/formulario"><button className='btn'> Mande aqui de graça </button></Link>
        </div>
        <div id='box2'>
          <img src={man} alt="imagem de satélite" />
        </div>
      </div>
    </div>
  )
}

export default Solutions
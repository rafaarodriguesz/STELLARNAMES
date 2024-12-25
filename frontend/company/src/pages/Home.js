import React from 'react'

//IMG
import floatImage from "../img/imagem.png"

//CSS
import "./Home.css"

//NAVIGATE
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <div id='body-container'>
                <div id='box1'>
                    <h1>Nós mandamos<br /> seu nome pro espaço!</h1>
                    <p>StellarNames envia seu nome ao espaço, tornando-o<br /> parte do universo. Seguro, único e inesquecível.<br /> Junte-se a essa jornada hoje!</p>
                    <Link to="/formulario"><button className='btn'> Mande aqui de graça </button></Link>
                </div>
                <div id='box2'>
                    <img src={floatImage} alt="imagem de satélite" />
                </div>
            </div>
        </div>

    )
}

export default Home
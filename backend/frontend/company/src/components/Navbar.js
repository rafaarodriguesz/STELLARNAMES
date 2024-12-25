import React from 'react'

//CSS
import "./Navbar.css"

//Router
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='left'>
                <Link to="/">
                    <li>
                        StellarNames
                    </li>
                </Link>
            </div>

            <div className='center'>

                <Link to={"/"}>
                    <li>
                        Home
                    </li>
                </Link>

                <Link to={"/students"}>
                    <li>
                        Names
                    </li>
                </Link >


                <Link to={'/solutions'}>
                    <li>
                        Solutions
                    </li>
                </Link>

            </div>
            <div className='right'>
                <li className='noStyle'>
                    <Link to={"/formulario"} className='cw-w'>
                        Log in
                    </Link>
                </li>
                <div className='singUpDiv'>
                    <li>
                        <Link to={"/formulario"} className='cw-b'>
                            Sing up
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
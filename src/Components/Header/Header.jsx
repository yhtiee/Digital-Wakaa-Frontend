import React from 'react'
import CE from '../../assets/header.jpeg'
// import LP from "../../assets/DigitalWakaa Landing page.jpg"
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
       <div className='container header__container'>
            <div className="header__left">
               <div>
                    <h1> We're Thrilled You Found Us! </h1>
                    <p>
                       Now that you are here, let's turn your online goals into achievements. 
                    </p>
                    <Link to="/signup" className='btn btn-primary btn-lg' id='button'> Get Started </Link>
               </div>
            </div>  
       </div>
   </header>
  )
}

export default Header
import React from 'react'
import CE from '../../assets/header.jpeg'
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
                    <Link to="/services" className='btn btn-primary btn-lg' id='button'> Get Started </Link>
               </div>
            </div>  
            <div className="header__right">
                <div className="header__image">
                    <img src={CE} alt="profile" />
                </div>
                <div className="header__right-bg">
                </div>
            </div> 
       </div>
   </header>
  )
}

export default Header
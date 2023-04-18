import React from 'react'
import CE from '../../Assets/header.jpeg'
import "./header.css"

const Header = () => {
  return (
    <header id='header'>
       <div className='container header__container'>
            <div className="header__left">
               <div>
                    <h3> Welcome! to </h3>
                    <div> <h1 className='logo1'>Digital</h1> <h1 className='logo2'>Wakaa</h1> </div>
                    <p>
                        A digital agency platform with the sole aim of scalling up your business. The success of your business is our priority. Lets Work together!
                    </p>
                    <a href="login/" className='btn btn-primary btn-lg' id='button'> Get Started </a>
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
import React from 'react'
import CE from '../../Assets/header.jpeg'
import "./header.css"

const Header = () => {
  return (
    <header id='header'>
       <div className='container header__container'>
            <div className="header__left">
               <div>
                    <h1> We're thrilled you found us! </h1>
                    {/* <div> <h1 className='logo1'>Digital</h1> <h1 className='logo2'>Wakaa</h1> </div> */}
                    <p>
                       Now that you are here, let's turn your online goals into achievements. 
                    </p>
                    <a href="/services" className='btn btn-primary btn-lg' id='button'> Get Started </a>
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
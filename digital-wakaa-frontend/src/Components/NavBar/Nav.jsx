import React from 'react'
import {
    Link,
  } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import "./nav.css"
import { useState } from 'react'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("home/")
  const [user, setActiveUser] = useState(null)

  const openToogle = ()=>{
    setNavbarOpen(prev => !prev)
  }

  const handleFunctionServices = () => {
    setNavbarOpen(false)
    setActiveNav("/services")
  }

  const handleFunctionAbout = () => {
    setNavbarOpen(false)
    setActiveNav("/about")
  }

  const handleFunctionContact = () => {
    setNavbarOpen(false)
    setActiveNav("contact/")
  }

  const handleFunctionAcademy = () => {
    setNavbarOpen(false)
    setActiveNav("academy/")
  }

  const handleFunctionSignup = () => {
    setNavbarOpen(false)
    setActiveNav("/signup")
  }

  const handleFunctionLogin = () => {
    setNavbarOpen(false)
    setActiveNav("login/")
  }

  const handleFunctionLogout = () => {
    setNavbarOpen(false)
  }

  const handleFunctionHome = () => {
    setActiveNav("/")
  }

  const handleFunction = () => {
    setNavbarOpen(false)
  }

  return (
    <nav>
      <div className="container nav__container">

        <Link to='/' className='nav__logo' onClick={handleFunctionHome} >
            <h3 className='logo1'>DIGITAL</h3>
            <h3 className='logo2'>WAKAA</h3>
        </Link>
        
        <ul className={`nav__menu ${navbarOpen ? " show__menu" : ""}`}>
            <li className='nav__links'><a href="/services" onClick={handleFunctionServices} className={activeNav === "/services" ? "active": " "}>SERVICES</a></li>
            <li className='nav__links'><a href="/about"  onClick={handleFunctionAbout} className={activeNav === "/about" ? "active": " "}>ABOUT</a></li>
            <li className='nav__links'><a href="contact/"  onClick={handleFunctionContact} className={activeNav === "contact/" ? "active": " "}>CONTACT</a></li>
            <li className='nav__links'><a href="academy/"  onClick={handleFunctionAcademy} className={activeNav ==="academy/" ? "active": " "}>ACADEMY</a></li>

            {user? (<><li className='nav__links'><a href="logout/"  onClick={handleFunctionLogout} className={activeNav ==="logout/" ? "active": " "}>LOGOUT</a></li>
            <li><a href="#" download className="btn btn-primary" onClick={handleFunction}>DASHBORAD</a></li></>) : (<><li className='nav__links' id={activeNav ==="/signup" ? "active" : ""}><Link to="/signup"  onClick={handleFunctionSignup}
            >SIGNUP</Link></li>
            <li className='nav__links'><a href="/login"  onClick={handleFunctionLogin} className={activeNav ==="/login" ? "active": " "}>LOGIN</a></li></>)}
            
            
        </ul>

        <button onClick={openToogle}> {navbarOpen? <AiOutlineClose id='close-menu-btn'/> : <GiHamburgerMenu id='open-menu-btn' /> }</button>
        
      </div>
    </nav>
  )
}

export default Nav